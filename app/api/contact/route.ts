import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const TO = process.env.CONTACT_TO_EMAIL ?? "tasha@resilient-grace.com";
const FROM =
  process.env.CONTACT_FROM_EMAIL ?? "Resilient Grace <onboarding@resend.dev>";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    console.error("contact: RESEND_API_KEY is not set");
    return NextResponse.json(
      { ok: false, error: "Email is not configured." },
      { status: 500 },
    );
  }

  let payload: {
    firstName?: string;
    lastName?: string;
    email?: string;
    message?: string;
  };

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  const firstName = payload.firstName?.trim();
  const lastName = payload.lastName?.trim();
  const email = payload.email?.trim();
  const message = payload.message?.trim() ?? "";

  if (!firstName || !lastName || !email) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields." },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Please use a valid email address." },
      { status: 400 },
    );
  }

  const fullName = `${firstName} ${lastName}`;
  const subject = `New contact form — ${fullName}`;

  const messageBlock = message
    ? `<p style="margin:0 0 8px;color:#032D3D;font-size:13px;text-transform:uppercase;letter-spacing:0.16em;">Their note</p>
       <div style="margin:0;padding:16px 18px;background:#F5F5F5;border-radius:12px;border:1px solid #032D3D14;color:#032D3D;font-size:15px;line-height:1.65;white-space:pre-wrap;">${escapeHtml(message)}</div>`
    : `<p style="margin:0;color:#24585E;font-style:italic;font-size:14px;">They didn't add a note — feel free to reach out and ask what brought them here.</p>`;

  const html = `<!doctype html>
<html><body style="margin:0;padding:24px;background:#F5F5F5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#032D3D;">
  <table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #032D3D14;">
    <tr><td style="padding:28px 30px 12px;">
      <p style="margin:0;color:#24585E;font-size:12px;letter-spacing:0.22em;text-transform:uppercase;font-weight:600;">Resilient Grace · Contact</p>
      <h1 style="margin:8px 0 0;font-family:Georgia,serif;font-weight:500;font-size:28px;line-height:1.15;color:#032D3D;">New note from ${escapeHtml(fullName)}</h1>
    </td></tr>
    <tr><td style="padding:8px 30px 24px;">
      <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
        <tr>
          <td style="padding:6px 0;color:#24585E;font-size:12px;letter-spacing:0.16em;text-transform:uppercase;width:90px;">Name</td>
          <td style="padding:6px 0;color:#032D3D;font-size:15px;">${escapeHtml(fullName)}</td>
        </tr>
        <tr>
          <td style="padding:6px 0;color:#24585E;font-size:12px;letter-spacing:0.16em;text-transform:uppercase;">Email</td>
          <td style="padding:6px 0;color:#032D3D;font-size:15px;"><a href="mailto:${escapeHtml(email)}" style="color:#24585E;text-decoration:none;border-bottom:1px solid #24585E40;">${escapeHtml(email)}</a></td>
        </tr>
      </table>
      <hr style="border:none;border-top:1px solid #032D3D14;margin:18px 0;" />
      ${messageBlock}
      <p style="margin:22px 0 0;color:#032D3D80;font-size:12px;font-style:italic;">Reply directly to this email to write back — your reply will go straight to ${escapeHtml(email)}.</p>
    </td></tr>
  </table>
</body></html>`;

  const text = [
    `New note from ${fullName}`,
    "",
    `Name:  ${fullName}`,
    `Email: ${email}`,
    "",
    message ? "Their note:" : "(They didn't add a note.)",
    message ? "" : null,
    message,
    "",
    `— Reply directly to this email to write back to ${email}.`,
  ]
    .filter((line) => line !== null)
    .join("\n");

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const result = await resend.emails.send({
      from: FROM,
      to: [TO],
      replyTo: email,
      subject,
      html,
      text,
    });

    if (result.error) {
      console.error("contact: resend error", result.error);
      return NextResponse.json(
        { ok: false, error: "Email could not be sent." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, id: result.data?.id });
  } catch (err) {
    console.error("contact: unexpected error", err);
    return NextResponse.json(
      { ok: false, error: "Something went wrong sending your note." },
      { status: 500 },
    );
  }
}
