"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, MessageCircle, Phone, Check, Loader2 } from "lucide-react";
import { Reveal } from "./Reveal";

const EASE: [number, number, number, number] = [0.21, 0.61, 0.35, 1];

export function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sending) return;
    if (!firstName || !lastName || !email) return;
    setSending(true);
    setErrorMsg(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, message }),
      });
      const data: { ok?: boolean; error?: string } = await res
        .json()
        .catch(() => ({}));
      if (!res.ok || !data.ok) {
        setErrorMsg(
          data.error ??
            "Something went wrong sending your note. You can also reach Tasha by text at 303-526-6312.",
        );
        return;
      }
      setSubmitted(true);
    } catch {
      setErrorMsg(
        "Couldn't reach the server. You can also reach Tasha by text at 303-526-6312.",
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="relative violet-bg overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-24 -left-20 w-[420px] h-[420px] rounded-full bg-mist/40 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute -bottom-24 -right-20 w-[480px] h-[480px] rounded-full bg-bloom/25 blur-3xl pointer-events-none"
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8 pt-28 md:pt-36 pb-20 md:pb-28">
        <div className="text-center max-w-3xl mx-auto">
          <Reveal>
            <p className="text-[12px] md:text-[13px] uppercase tracking-[0.24em] text-cypress font-medium mb-5 inline-flex items-center gap-3">
              <span className="h-px w-10 bg-cypress/45" />
              Begin Here
              <span className="h-px w-10 bg-cypress/45" />
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-display text-[40px] md:text-[64px] lg:text-[72px] leading-[1.05] tracking-[-0.02em] text-midnight">
              Let's begin with a{" "}
              <span className="italic text-cypress">conversation</span>.
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 mx-auto max-w-2xl text-[17px] md:text-[19px] text-midnight/80 leading-[1.7]">
              Send a note about what you're carrying. I read every message
              personally. There's no pitch, no pressure — just a real
              conversation about whether this work is the right fit.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 md:mt-20 grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, rotate: -1.5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.0, ease: EASE }}
            className="lg:col-span-5 lg:sticky lg:top-32"
          >
            <div className="relative mx-auto max-w-[460px] group/portrait">
              <div
                aria-hidden
                className="absolute -top-8 -left-8 w-36 h-36 rounded-full bg-mist/70 blur-3xl group-hover/portrait:scale-110 transition-transform duration-700 ease-out"
              />
              <div
                aria-hidden
                className="absolute -bottom-10 -right-8 w-44 h-44 rounded-full bg-bloom/40 blur-3xl group-hover/portrait:scale-110 transition-transform duration-700 ease-out"
              />

              <div className="relative aspect-[4/5] rounded-[28px] overflow-hidden ring-2 ring-mist/90 shadow-[0_45px_90px_-30px_rgba(3,45,61,0.45)] transition-[transform,box-shadow] duration-700 ease-out group-hover/portrait:-translate-y-1.5 group-hover/portrait:shadow-[0_55px_100px_-30px_rgba(3,45,61,0.55)]">
                <Image
                  src="/brand/tasha-golden.jpg"
                  alt="Tasha Darwent in golden hour light"
                  fill
                  priority
                  sizes="(min-width: 1024px) 460px, 80vw"
                  className="object-cover transition-transform duration-1000 ease-out group-hover/portrait:scale-[1.04]"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-midnight/35 via-transparent to-transparent"
                />
              </div>

              <div className="mt-10 hidden lg:block">
                <p className="font-display italic text-[20px] md:text-[22px] leading-[1.45] text-midnight/85">
                  &ldquo;Healing isn't a method. It's a way of meeting you.&rdquo;
                </p>
                <span className="mt-3 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-cypress font-medium">
                  <span className="h-1 w-1 rounded-full bg-bloom" />
                  Tasha Darwent
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
            className="lg:col-span-7"
          >
            <div className="relative bg-mist/90 backdrop-blur-sm rounded-[28px] border border-midnight/8 shadow-[0_40px_90px_-30px_rgba(3,45,61,0.30)] p-7 md:p-10">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-6"
                    noValidate
                  >
                    <header className="flex items-baseline justify-between gap-3 pb-2">
                      <h2 className="font-display text-[26px] md:text-[30px] leading-tight text-midnight">
                        Send a note
                      </h2>
                      <span className="text-[11px] uppercase tracking-[0.22em] text-cypress/70 font-medium">
                        Step One
                      </span>
                    </header>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="firstName" className="contact-field-label">
                          First Name <span className="text-amethyst">*</span>
                        </label>
                        <input
                          id="firstName"
                          name="firstName"
                          type="text"
                          required
                          autoComplete="given-name"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          className="contact-field"
                          placeholder="Tasha"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="contact-field-label">
                          Last Name <span className="text-amethyst">*</span>
                        </label>
                        <input
                          id="lastName"
                          name="lastName"
                          type="text"
                          required
                          autoComplete="family-name"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          className="contact-field"
                          placeholder="Darwent"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="contact-field-label">
                        Email Address <span className="text-amethyst">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="contact-field"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="contact-field-label">
                        Tell me how I can support you
                        <span className="contact-field-hint">(optional)</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="contact-field resize-none"
                        placeholder="A few sentences about what you're carrying, or anything you'd like me to know before we talk."
                      />
                    </div>

                    {errorMsg && (
                      <p
                        role="alert"
                        className="text-[13px] leading-[1.55] text-amethyst bg-amethyst/10 border border-amethyst/30 rounded-xl px-4 py-3"
                      >
                        {errorMsg}
                      </p>
                    )}

                    <div className="flex items-center justify-between pt-2 gap-4 flex-wrap">
                      <p className="text-[12px] text-midnight/55 font-display italic">
                        I'll reply within two business days.
                      </p>
                      <button
                        type="submit"
                        className="btn-cypress disabled:opacity-70 disabled:cursor-not-allowed"
                        disabled={sending}
                      >
                        {sending ? (
                          <>
                            <Loader2 size={16} className="animate-spin" />
                            Sending…
                          </>
                        ) : (
                          <>
                            <Send size={16} />
                            Send your note
                          </>
                        )}
                      </button>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="thanks"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: EASE }}
                    className="text-center py-10 md:py-14"
                  >
                    <div className="mx-auto w-14 h-14 rounded-full bg-cypress/12 flex items-center justify-center text-cypress mb-6">
                      <Check size={26} strokeWidth={1.8} />
                    </div>
                    <h2 className="font-display text-[28px] md:text-[36px] leading-tight text-midnight">
                      Note received,{" "}
                      <span className="italic text-cypress">
                        {firstName || "friend"}
                      </span>
                      .
                    </h2>
                    <p className="mt-4 max-w-md mx-auto text-[16px] md:text-[17px] text-midnight/75 leading-[1.7]">
                      Thank you for reaching out. I'll read your message and
                      respond personally — usually within two business days.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
              className="mt-8 md:mt-10 relative bg-midnight text-mist rounded-[24px] p-7 md:p-9 overflow-hidden grain"
            >
              <div
                aria-hidden
                className="absolute -top-12 -right-10 w-48 h-48 rounded-full bg-amethyst/40 blur-3xl pointer-events-none"
              />
              <div className="relative grid sm:grid-cols-12 gap-6 items-center">
                <div className="sm:col-span-7">
                  <p className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-bloom font-medium">
                    <MessageCircle size={14} />
                    Prefer to text?
                  </p>
                  <p className="mt-3 font-display text-mist text-[22px] md:text-[24px] leading-[1.35]">
                    New clients and inquiries are welcome to reach out by text.
                  </p>
                </div>
                <div className="sm:col-span-5 flex sm:justify-end">
                  <a
                    href="tel:+13035266312"
                    className="group inline-flex items-center gap-3 rounded-full bg-mist/10 hover:bg-mist/20 border border-mist/30 px-5 py-3 transition"
                  >
                    <span className="w-9 h-9 rounded-full bg-bloom flex items-center justify-center text-midnight">
                      <Phone size={16} strokeWidth={2} />
                    </span>
                    <span>
                      <span className="block text-[10px] uppercase tracking-[0.22em] text-mist/70">
                        Call or text
                      </span>
                      <span className="font-display text-mist text-[20px] tracking-tight">
                        303-526-6312
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
