"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <footer className="relative bg-midnight text-mist pt-24 pb-12 overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-amethyst/15 blur-3xl pointer-events-none"
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        {/* Newsletter */}
        <div className="grid md:grid-cols-12 gap-10 pb-16 border-b border-mist/15">
          <div className="md:col-span-6">
            <h2 className="font-display text-[32px] md:text-[44px] leading-[1.1] tracking-[-0.015em]">
              Subscribe to{" "}
              <span className="italic text-bloom">Grace Notes</span>.
            </h2>
            <p className="mt-4 text-mist/70 max-w-md leading-[1.7]">
              Monthly essays on healing, resilience, and the work of coming
              home to yourself. No spam. Unsubscribe anytime.
            </p>
          </div>
          <div className="md:col-span-6 flex md:justify-end items-end">
            {!done ? (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (email) setDone(true);
                }}
                className="flex flex-col sm:flex-row gap-3 w-full max-w-md"
              >
                <label className="sr-only" htmlFor="nl-email">
                  Email address
                </label>
                <div className="relative flex-1">
                  <Mail
                    size={16}
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-mist/50"
                  />
                  <input
                    id="nl-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full pl-12 pr-5 py-3.5 rounded-full bg-mist/10 border border-mist/20 text-mist placeholder:text-mist/50 focus:outline-none focus:ring-2 focus:ring-bloom/50 transition"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-bloom text-midnight font-medium hover:bg-mist transition-all duration-300 hover:-translate-y-0.5"
                >
                  Subscribe <ArrowRight size={14} />
                </button>
              </form>
            ) : (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-bloom font-display italic text-[20px]"
              >
                Thank you. Welcome to the path.
              </motion.p>
            )}
          </div>
        </div>

        {/* Sitemap */}
        <div className="grid md:grid-cols-12 gap-10 py-14">
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-3" aria-label="Home">
              <Image
                src="/brand/logo-graphic-transparent.png"
                alt=""
                width={64}
                height={64}
                className="w-14 h-14 invert"
                style={{ filter: "brightness(0) invert(1)" }}
              />
              <span className="font-display text-[28px] tracking-tight">
                resilient grace
              </span>
            </Link>
            <p className="mt-5 font-display italic text-bloom/80 text-[20px]">
              Live a healthy, vibrant life.
            </p>
            <p className="mt-6 text-mist/65 text-[14px] leading-[1.7] max-w-sm">
              Integrative recovery for addiction, family-of-origin trauma,
              chronic illness, and life transitions. Boulder, CO · Worldwide.
            </p>
          </div>

          <div className="md:col-span-2">
            <p className="text-[12px] uppercase tracking-[0.22em] text-bloom font-medium mb-4">
              Practice
            </p>
            <ul className="space-y-2 text-[15px]">
              <li><Link href="/about" className="hover:text-bloom transition">About</Link></li>
              <li><Link href="/approach" className="hover:text-bloom transition">Approach</Link></li>
              <li><Link href="/specialties" className="hover:text-bloom transition">Specialties</Link></li>
              <li><Link href="/contact" className="hover:text-bloom transition">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-[12px] uppercase tracking-[0.22em] text-bloom font-medium mb-4">
              Resources
            </p>
            <ul className="space-y-2 text-[15px]">
              <li><Link href="/blog" className="hover:text-bloom transition">Articles</Link></li>
              <li><Link href="#support-group" className="hover:text-bloom transition">Support Group</Link></li>
              <li><Link href="#" className="hover:text-bloom transition">Free Guide</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="text-[12px] uppercase tracking-[0.22em] text-bloom font-medium mb-4">
              In crisis?
            </p>
            <p className="text-[14px] text-mist/65 leading-[1.7]">
              If you are in danger or in mental-health crisis, please call{" "}
              <strong className="text-mist">911</strong> or the Suicide &
              Crisis Lifeline at <strong className="text-mist">988</strong>.
              Text HOME to 741741 for the Crisis Text Line.
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-mist/15 pt-10 text-[13px] text-mist/55 leading-[1.7] space-y-3 max-w-4xl">
          <p>
            <strong className="text-mist/80">Important.</strong> Resilient
            Grace LLC and Tasha Darwent provide therapeutic mentoring and
            integrative health coaching services that are educational and
            supportive in nature. They are not a substitute for medical care,
            psychotherapy, or psychiatric treatment, and they do not diagnose
            or treat any mental or physical health condition. If your needs
            require licensed clinical care, you will be referred to an
            appropriate provider.
          </p>
        </div>

        {/* Legal */}
        <div className="mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[13px] text-mist/55">
          <p>© {new Date().getFullYear()} Resilient Grace LLC · Boulder, Colorado</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li><Link href="/privacy" className="hover:text-bloom transition">Privacy</Link></li>
            <li><Link href="/terms" className="hover:text-bloom transition">Terms</Link></li>
            <li><Link href="/disclaimer" className="hover:text-bloom transition">Disclaimer</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
