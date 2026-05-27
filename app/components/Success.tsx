"use client";

import Link from "next/link";
import { Reveal } from "./Reveal";
import { ArrowRight } from "lucide-react";

const lines = [
  "It's eating breakfast without negotiating with yourself.",
  "It's walking past the wine aisle without bracing.",
  "It's hearing your mother's voice and remembering you're the adult now.",
  "It's a body that supports you instead of betrays you.",
  "It's friends who know the real you.",
  "It's mornings that don't feel like a hangover from your own life.",
];

export function Success() {
  return (
    <section className="relative py-20 md:py-28 violet-deep-bg overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.06] mix-blend-soft-light"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />
      <div className="relative mx-auto max-w-3xl px-5 md:px-8 text-center">
        <Reveal>
          <p className="text-[12px] md:text-[13px] uppercase tracking-[0.22em] text-bloom font-medium mb-5">
            What healing actually looks like
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-mist text-[34px] md:text-[52px] leading-[1.08] tracking-[-0.015em]">
            Healing isn't the absence of struggle. It's the return of{" "}
            <span className="italic text-bloom">self-trust</span>.
          </h2>
        </Reveal>

        <Reveal delay={0.18}>
          <ul className="mt-10 space-y-3 text-mist/85 max-w-xl mx-auto text-left">
            {lines.map((line) => (
              <li
                key={line}
                className="flex items-start gap-4 font-display italic text-[19px] md:text-[21px] leading-[1.5]"
              >
                <span className="mt-3 h-1.5 w-1.5 rounded-full bg-bloom flex-shrink-0" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="mt-10 font-display text-[26px] md:text-[32px] italic text-bloom">
            It's coming home.
          </p>
        </Reveal>

        <Reveal delay={0.4}>
          <Link href="/contact" className="mt-10 btn-primary">
            Book your free consultation <ArrowRight size={16} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
