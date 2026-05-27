"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { Reveal } from "./Reveal";

type Specialty = {
  n: string;
  title: string;
  lead: string;
  body: string;
  bg: string;
  text: string;
  accent: string;
  rule: string;
};

const specialties: Specialty[] = [
  {
    n: "01",
    title: "Addiction Recovery",
    lead: "It was never really about the substance.",
    body: "Substances, food, work, relationships, exercise, screens. Whatever the surface form, addiction is a survival strategy that can be unlearned.",
    bg: "#032D3D",
    text: "#F5F5F5",
    accent: "#FEB0A0",
    rule: "rgba(245, 245, 245, 0.35)",
  },
  {
    n: "02",
    title: "Eating Disorders",
    lead: "Your body has been trying to keep you safe.",
    body: "Anorexia, bulimia, binge cycles, orthorexia, body-image obsession — the disorder is a language. We learn to listen to it together, and to slowly trust the body again.",
    bg: "#FEB0A0",
    text: "#032D3D",
    accent: "#24585E",
    rule: "rgba(36, 88, 94, 0.45)",
  },
  {
    n: "03",
    title: "Family Trauma & Scapegoating",
    lead: "You weren't the problem. You were the truth-teller.",
    body: "If you were the 'difficult one,' the 'sick one,' or the truth-teller in a system built on denial — there is a way home to yourself.",
    bg: "#867BA3",
    text: "#F5F5F5",
    accent: "#FEB0A0",
    rule: "rgba(245, 245, 245, 0.4)",
  },
  {
    n: "04",
    title: "Chronic Illness",
    lead: "Your body has been telling the truth all along.",
    body: "Autoimmune, fatigue, gut, brain fog, neurological. Root-cause work that integrates physical, emotional, and spiritual healing.",
    bg: "#24585E",
    text: "#F5F5F5",
    accent: "#FEB0A0",
    rule: "rgba(245, 245, 245, 0.4)",
  },
  {
    n: "05",
    title: "Young Adults in Transition",
    lead: "A guide for the threshold years.",
    body: "Identity, autonomy, vocation, relationships. Mentorship for the threshold years, before patterns harden into a life.",
    bg: "#F5F5F5",
    text: "#032D3D",
    accent: "#FEB0A0",
    rule: "rgba(3, 45, 61, 0.25)",
  },
];

function SpecialtyCard({
  i,
  total,
  item,
  progress,
}: {
  i: number;
  total: number;
  item: Specialty;
  progress: MotionValue<number>;
}) {
  const range: [number, number] = [i * 0.18, 1];
  const targetScale = 1 - (total - i) * 0.04;
  const scale = useTransform(progress, range, [1, targetScale]);

  const cardVars = {
    "--card-bg": item.bg,
    "--card-text": item.text,
    "--card-accent": item.accent,
    "--card-rule": item.rule,
    scale,
    top: `${i * 32}px`,
  } as React.CSSProperties;

  return (
    <div className="h-screen sticky top-32 flex items-start justify-center px-4 md:px-8">
      <motion.div
        style={cardVars}
        className="relative h-[560px] md:h-[580px] w-full max-w-5xl rounded-[28px] overflow-hidden origin-top shadow-[0_40px_80px_-30px_rgba(3,45,61,0.45)] specialty-card-surface"
      >
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none opacity-[0.05] mix-blend-multiply step-card-grain"
        />

        <span
          aria-hidden
          className="absolute select-none pointer-events-none font-display italic leading-none specialty-card-numeral"
        >
          {item.n}
        </span>

        <div className="relative h-full p-9 md:p-14 grid md:grid-cols-12 gap-8 md:gap-14">
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <span className="font-display italic text-[12px] md:text-[13px] uppercase tracking-[0.32em] font-medium inline-flex items-center gap-2 opacity-85">
                <span className="h-px w-6 specialty-card-rule" />
                Specialty {item.n}
              </span>

              <h3 className="mt-6 md:mt-9 font-display text-[32px] md:text-[44px] leading-[1.05] tracking-[-0.015em]">
                {item.title}
              </h3>

              <p className="mt-5 md:mt-7 text-[15px] md:text-[16px] leading-[1.75] opacity-90 max-w-[44ch]">
                {item.body}
              </p>
            </div>

            <div className="mt-6 flex items-center gap-3 pt-4">
              <span className="h-1.5 w-1.5 rounded-full specialty-card-accent" />
              <span className="h-px flex-1 specialty-card-rule" />
              <span className="h-1.5 w-1.5 rounded-full specialty-card-accent" />
            </div>
          </div>

          <div className="md:col-span-7 flex items-center">
            <p className="font-display italic text-[32px] md:text-[48px] lg:text-[60px] leading-[1.08] tracking-[-0.015em]">
              <span aria-hidden className="specialty-card-quote-mark">
                &ldquo;
              </span>
              {item.lead}
              <span aria-hidden className="specialty-card-quote-mark">
                &rdquo;
              </span>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function Pillars() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section id="specialties" className="relative bg-mist scroll-mt-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8 pt-20 md:pt-28 pb-8 text-center">
        <Reveal>
          <p className="text-[12px] md:text-[13px] uppercase tracking-[0.24em] text-cypress font-medium mb-5 inline-flex items-center gap-3">
            <span className="h-px w-10 bg-cypress/45" />
            Specialties
            <span className="h-px w-10 bg-cypress/45" />
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-[36px] md:text-[58px] leading-[1.06] tracking-[-0.015em] text-midnight max-w-3xl mx-auto">
            Five areas of focus.
            <br />
            <span className="italic text-cypress">One way of meeting you.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-6 mx-auto max-w-2xl text-[17px] md:text-[18px] text-midnight/75 leading-[1.7]">
            I work most deeply in the places I've lived myself. Most clients
            arrive with more than one of these in play at once.
          </p>
        </Reveal>
      </div>

      <div ref={containerRef} className="relative">
        {specialties.map((item, i) => (
          <SpecialtyCard
            key={item.title}
            i={i}
            total={specialties.length}
            item={item}
            progress={scrollYProgress}
          />
        ))}
      </div>

      <div className="h-24 md:h-32" aria-hidden />
    </section>
  );
}
