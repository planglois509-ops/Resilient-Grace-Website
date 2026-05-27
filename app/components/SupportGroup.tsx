"use client";

import Link from "next/link";
import { Calendar, Users, ArrowRight, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";
import { GlowCard } from "./ui/spotlight-card";

export function SupportGroup() {
  return (
    <section
      id="support-group"
      className="relative py-20 md:py-28 violet-bg overflow-hidden"
    >
      {/* Soft floating orbs to deepen the violet atmosphere */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-[-10%] w-[28rem] h-[28rem] rounded-full bg-amethyst/35 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 left-[-8%] w-[26rem] h-[26rem] rounded-full bg-bloom/25 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 grain opacity-[0.06]"
      />

      <div className="relative mx-auto max-w-5xl px-5 md:px-8">
        <Reveal>
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/55 backdrop-blur-sm border border-white/65 text-[11px] uppercase tracking-[0.24em] text-midnight/75 font-medium">
              <Sparkles size={12} className="text-bloom" strokeWidth={2} />
              Free monthly group
            </span>
          </div>
        </Reveal>

        <GlowCard
          glowColor="amethyst"
          customSize
          className="w-full p-8 md:p-14 lg:p-16"
        >
          {/* Decorative corner mark */}
          <div
            aria-hidden
            className="absolute top-6 left-6 md:top-8 md:left-8 w-8 h-8 border-l border-t border-amethyst/40 rounded-tl-[18px] pointer-events-none"
          />
          <div
            aria-hidden
            className="absolute bottom-6 right-6 md:bottom-8 md:right-8 w-8 h-8 border-r border-b border-amethyst/40 rounded-br-[18px] pointer-events-none"
          />

          <div className="relative z-10 grid md:grid-cols-12 gap-10 md:gap-12 items-center">
            <div className="md:col-span-7">
              <Reveal delay={0.05}>
                <h2 className="font-display text-midnight text-[34px] md:text-[46px] leading-[1.05] tracking-[-0.02em]">
                  Not ready for 1:1?{" "}
                  <span className="italic text-cypress">Start here.</span>
                </h2>
              </Reveal>

              <Reveal delay={0.12}>
                {/* Hairline ornament */}
                <div className="mt-6 flex items-center gap-3">
                  <span className="block h-px w-12 bg-gradient-to-r from-amethyst/0 via-amethyst/70 to-amethyst/0" />
                  <span className="block w-1.5 h-1.5 rounded-full bg-bloom" />
                  <span className="block h-px w-20 bg-gradient-to-r from-amethyst/0 via-amethyst/70 to-amethyst/0" />
                </div>
              </Reveal>

              <Reveal delay={0.18}>
                <p className="mt-6 text-[16px] md:text-[17.5px] text-midnight/75 leading-[1.75] max-w-xl">
                  The first Tuesday of every month, I host a free Health
                  Challenge Support Group on Zoom. Guided meditation, an
                  honest healing talk, and a chance to be in a room with
                  others walking the same path.
                </p>
              </Reveal>

              <Reveal delay={0.24}>
                <p className="mt-4 font-display italic text-[18px] md:text-[20px] text-cypress/85 leading-[1.5]">
                  No commitment. No fee. No pressure.
                </p>
              </Reveal>

              <Reveal delay={0.32}>
                <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3">
                  <span className="flex items-center gap-2 text-[14px] text-midnight/80">
                    <span className="grid place-items-center w-8 h-8 rounded-full bg-bloom/25 border border-bloom/40">
                      <Calendar size={14} className="text-cypress" strokeWidth={2} />
                    </span>
                    First Tuesday · 6–7pm MST
                  </span>
                  <span className="flex items-center gap-2 text-[14px] text-midnight/80">
                    <span className="grid place-items-center w-8 h-8 rounded-full bg-bloom/25 border border-bloom/40">
                      <Users size={14} className="text-cypress" strokeWidth={2} />
                    </span>
                    Live on Zoom
                  </span>
                </div>
              </Reveal>
            </div>

            <div className="md:col-span-5 flex md:justify-end">
              <div className="w-full md:w-auto flex flex-col items-stretch md:items-end gap-4">
                <Reveal delay={0.2}>
                  <Link
                    href="/contact"
                    className="btn-violet w-full md:w-auto justify-center"
                  >
                    RSVP for this month <ArrowRight size={16} />
                  </Link>
                </Reveal>
                <Reveal delay={0.28}>
                  <p className="text-[12px] text-midnight/55 text-center md:text-right max-w-[18rem]">
                    A small, sacred circle. Drop in once, or come back monthly.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </GlowCard>
      </div>
    </section>
  );
}
