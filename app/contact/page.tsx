import type { Metadata } from "next";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { ContactForm } from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact · Begin a conversation",
  description:
    "Send a note to begin. Tasha reads every message personally and replies within two business days. New clients and inquiries can also reach out by text at 303-526-6312.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main>
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
