"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { Download, Check } from "lucide-react";
import { useState } from "react";

const benefits = [
  "How to recognize the scapegoat role you were assigned",
  "The hidden ways family-system trauma shows up in your body and behavior",
  "Practical first steps for setting boundaries and finding your voice",
  "Reflection prompts to begin reclaiming your true worth",
];

export function LeadMagnet() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <section className="relative py-20 md:py-28 violet-deep-bg overflow-hidden">
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="bg-mist border border-midnight/10 rounded-[28px] md:rounded-[36px] overflow-hidden shadow-[0_40px_100px_-40px_rgba(3,45,61,0.35)]">
          <div className="grid md:grid-cols-12 gap-0 items-stretch">
            <div className="md:col-span-5 relative bg-gradient-to-br from-amethyst/30 via-bloom/15 to-mist p-10 md:p-12 flex items-center justify-center">
              <motion.div
                whileHover={{ rotate: -2, y: -6 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
                className="relative w-full max-w-[280px] aspect-[3/4] rounded-2xl bg-midnight shadow-[0_30px_70px_-20px_rgba(3,45,61,0.6)] overflow-hidden"
              >
                <div className="absolute inset-0 grain opacity-50" />
                <div className="relative h-full flex flex-col justify-between p-7 text-mist">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.25em] text-bloom font-medium mb-3">
                      Free Guide
                    </p>
                    <h3 className="font-display text-[28px] md:text-[32px] leading-[1.1] italic">
                      You weren't the problem.
                    </h3>
                  </div>
                  <div>
                    <p className="font-display text-[15px] text-mist/70 leading-[1.5] mb-2">
                      A 24-page guide to leaving the scapegoat role and finding your voice.
                    </p>
                    <div className="mt-4 h-px w-12 bg-bloom" />
                    <p className="mt-3 font-display italic text-[14px] text-mist/80">
                      by Tasha Darwent
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="md:col-span-7 p-8 md:p-12 lg:p-16">
              <Reveal>
                <p className="text-[12px] uppercase tracking-[0.22em] text-cypress font-medium mb-4">
                  Free Guide · 24 pages
                </p>
              </Reveal>
              <Reveal delay={0.05}>
                <h3 className="font-display text-[28px] md:text-[40px] leading-[1.1] tracking-[-0.015em] text-midnight">
                  You weren't the problem.{" "}
                  <span className="italic text-cypress">You were the truth-teller.</span>
                </h3>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-5 text-[16px] md:text-[17px] text-midnight/75 leading-[1.7] max-w-xl">
                  A free guide for the adult children who carried what no one else would
                  name — and the path home to themselves.
                </p>
              </Reveal>

              <Reveal delay={0.18}>
                <ul className="mt-7 space-y-3">
                  {benefits.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 text-[15px] md:text-[16px] text-midnight/80"
                    >
                      <span className="mt-1 w-5 h-5 rounded-full bg-bloom/30 flex items-center justify-center flex-shrink-0">
                        <Check size={12} strokeWidth={2.5} className="text-cypress" />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={0.25}>
                {!submitted ? (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (email) setSubmitted(true);
                    }}
                    className="mt-8 flex flex-col sm:flex-row gap-3 max-w-lg"
                  >
                    <label className="sr-only" htmlFor="lm-email">
                      Email address
                    </label>
                    <input
                      id="lm-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="flex-1 px-5 py-3.5 rounded-full bg-mist border border-midnight/15 text-[16px] text-midnight placeholder:text-midnight/45 focus:outline-none focus:ring-2 focus:ring-cypress/40 focus:border-cypress transition"
                    />
                    <button
                      type="submit"
                      className="btn-primary justify-center"
                    >
                      <Download size={16} /> Send me the guide
                    </button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-8 p-5 rounded-2xl bg-cypress/10 border border-cypress/20 text-cypress font-medium flex items-center gap-3"
                  >
                    <Check size={18} /> Check your inbox — the guide is on its way.
                  </motion.div>
                )}
              </Reveal>
              <p className="mt-3 text-[12px] text-midnight/55">
                One email only. Unsubscribe anytime. Your privacy is honored.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
