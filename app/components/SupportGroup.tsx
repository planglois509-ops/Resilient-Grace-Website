"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Users, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function SupportGroup() {
  return (
    <section id="support-group" className="relative py-16 md:py-24 bg-mist">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.5 }}
          className="relative bg-midnight rounded-[28px] md:rounded-[40px] overflow-hidden p-10 md:p-16 grain"
        >
          <div
            aria-hidden
            className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-amethyst/30 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-cypress/40 blur-3xl"
          />

          <div className="relative grid md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7">
              <Reveal>
                <p className="text-[12px] uppercase tracking-[0.22em] text-bloom font-medium mb-5">
                  Free monthly group
                </p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="font-display text-mist text-[32px] md:text-[44px] leading-[1.08] tracking-[-0.015em]">
                  Not ready for 1:1?{" "}
                  <span className="italic text-bloom">Start here.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-6 text-[17px] text-mist/75 leading-[1.7] max-w-2xl">
                  The first Tuesday of every month, I host a free Health
                  Challenge Support Group on Zoom. Guided meditation, an
                  honest healing talk, and a chance to be in a room with
                  others walking the same path. No commitment. No fee. No
                  pressure.
                </p>
              </Reveal>

              <Reveal delay={0.25}>
                <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3 text-mist/80">
                  <span className="flex items-center gap-2 text-[14px]">
                    <Calendar size={16} className="text-bloom" /> First Tuesday · 6–7pm MST
                  </span>
                  <span className="flex items-center gap-2 text-[14px]">
                    <Users size={16} className="text-bloom" /> Live on Zoom
                  </span>
                </div>
              </Reveal>
            </div>

            <div className="md:col-span-5 flex md:justify-end">
              <Reveal delay={0.2}>
                <Link href="/contact" className="btn-primary">
                  RSVP for this month <ArrowRight size={16} />
                </Link>
              </Reveal>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
