"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Reveal, StaggerGroup, staggerItem } from "./Reveal";
import Link from "next/link";
import {
  ArrowRight,
  MessageCircle,
  Map,
  Footprints,
  type LucideIcon,
} from "lucide-react";
import { FlippingCard } from "./FlippingCard";

type Step = {
  n: string;
  ordinal: string;
  icon: LucideIcon;
  title: string;
  body: string;
};

const steps: Step[] = [
  {
    n: "01",
    ordinal: "One",
    icon: MessageCircle,
    title: "Begin with a free conversation.",
    body: "We meet for a 30-minute call. You tell me what you're carrying. I listen. There's no pitch and no pressure — just a real conversation about whether this work is the right fit.",
  },
  {
    n: "02",
    ordinal: "Two",
    icon: Map,
    title: "Receive a healing plan made for your story.",
    body: "No template. No protocol. I build a path that honors your body, your history, your constraints, and your goals — drawing on whichever tools (somatic, nutritional, psychological, spiritual) actually serve you.",
  },
  {
    n: "03",
    ordinal: "Three",
    icon: Footprints,
    title: "We walk it together.",
    body: "We meet weekly, biweekly, or as your life allows. Between sessions, you have steady support. The work moves at the pace of your nervous system, not someone else's timeline.",
  },
];

function StepFront({ n, ordinal, Icon, title }: { n: string; ordinal: string; Icon: LucideIcon; title: string }) {
  return (
    <div className="relative h-full w-full rounded-[28px] overflow-hidden bg-mist border border-mist/50 shadow-[0_30px_60px_-25px_rgba(3,45,61,0.55),inset_0_1px_0_rgba(255,255,255,0.8)]">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none step-card-front-mesh"
      />

      <span
        aria-hidden
        className="absolute font-display italic text-amethyst/15 leading-none select-none pointer-events-none step-card-numeral"
      >
        {n}
      </span>

      <div className="relative h-full w-full p-7 flex flex-col">
        <div className="flex items-start justify-between">
          <span className="font-display italic text-cypress text-[13px] tracking-[0.32em] uppercase font-medium inline-flex items-center gap-2">
            <span className="h-px w-6 bg-cypress/55" />
            Step {ordinal}
          </span>
          <span className="w-[88px] h-[88px] rounded-full border border-cypress/35 flex items-center justify-center text-cypress bg-mist/60 backdrop-blur-[1px]">
            <Icon size={36} strokeWidth={1.5} />
          </span>
        </div>

        <div className="mt-auto">
          <h3 className="font-display text-midnight text-[24px] md:text-[26px] leading-[1.12] tracking-[-0.01em]">
            {title}
          </h3>

          <div className="mt-6 flex items-center gap-3 text-cypress/70">
            <span className="h-1.5 w-1.5 rounded-full bg-bloom" />
            <span className="h-px flex-1 bg-cypress/30" />
            <span className="h-1.5 w-1.5 rounded-full bg-bloom" />
          </div>
        </div>
      </div>
    </div>
  );
}

function StepBack({ n, body }: { n: string; body: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const spotVars = {
    "--spot-x": `${pos.x}%`,
    "--spot-y": `${pos.y}%`,
  } as React.CSSProperties;

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      style={spotVars}
      className="relative h-full w-full rounded-[28px] overflow-hidden border border-bloom/60 shadow-[0_30px_60px_-25px_rgba(3,45,61,0.55)] step-card-back-surface"
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.06] mix-blend-multiply step-card-grain"
      />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none flip-back-spotlight opacity-0 group-hover/flipping-card:opacity-100 transition-opacity duration-500 delay-200 ease-out"
      />

      <div className="relative h-full w-full p-7 flex flex-col">
        <span className="font-display italic text-cypress text-[13px] tracking-[0.32em] uppercase font-medium inline-flex items-center gap-2">
          <span className="h-px w-6 bg-cypress/55" />
          Step {n}
        </span>

        <p className="mt-5 font-display italic text-midnight text-[17px] md:text-[18px] leading-[1.55] tracking-[-0.005em]">
          <span aria-hidden className="font-display text-cypress/40 text-[28px] leading-none mr-0.5">&ldquo;</span>
          {body}
          <span aria-hidden className="font-display text-cypress/40 text-[28px] leading-none ml-0.5">&rdquo;</span>
        </p>

        <div className="mt-auto pt-4 flex items-center gap-3 text-cypress">
          <span className="h-1.5 w-1.5 rounded-full bg-cypress/70" />
          <span className="h-px flex-1 bg-cypress/40" />
          <span className="h-1.5 w-1.5 rounded-full bg-cypress/70" />
        </div>
      </div>
    </div>
  );
}

export function Plan() {
  return (
    <section id="plan" className="relative py-20 md:py-28 violet-deep-bg overflow-hidden">
      <motion.div
        aria-hidden
        animate={{ y: [0, -16, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-16 -left-12 w-80 h-80 rounded-full bg-amethyst/40 blur-3xl"
      />
      <motion.div
        aria-hidden
        animate={{ y: [0, 14, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-20 -right-16 w-96 h-96 rounded-full bg-amethyst/30 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="text-[12px] md:text-[13px] uppercase tracking-[0.22em] text-bloom font-medium mb-5 text-center">
            How it works
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-mist text-[36px] md:text-[56px] leading-[1.06] tracking-[-0.015em] text-center max-w-3xl mx-auto">
            A clear path forward — at <span className="italic text-bloom">your pace</span>.
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-5 text-mist/65 italic font-display text-[15px] md:text-[16px] text-center">
            hover each card to read more
          </p>
        </Reveal>

        <StaggerGroup
          stagger={0.15}
          className="mt-12 md:mt-14 flex flex-wrap justify-center gap-7 md:gap-8"
        >
          {steps.map(({ n, ordinal, icon: Icon, title, body }, i) => (
            <motion.div key={n} variants={staggerItem}>
              <div
                className={
                  i === 0
                    ? "-rotate-[1.2deg]"
                    : i === 2
                    ? "rotate-[1.2deg]"
                    : ""
                }
              >
                <FlippingCard
                  width={320}
                  height={400}
                  frontContent={<StepFront n={n} ordinal={ordinal} Icon={Icon} title={title} />}
                  backContent={<StepBack n={n} body={body} />}
                />
              </div>
            </motion.div>
          ))}
        </StaggerGroup>

        <Reveal delay={0.3}>
          <div className="mt-12 md:mt-14 flex justify-center">
            <Link href="/contact" className="btn-primary">
              Schedule your free consultation <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
