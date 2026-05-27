"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

type Testimonial = {
  quote: string;
  name: string;
  meta: string;
  src: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Tasha supported me with empathy and compassion through three years of healing. She provided a safe space for me to grow, and I'll always be grateful for her guidance.",
    name: "Hannah",
    meta: "27 · Anxiety & self-worth · Boulder, CO",
    src: "/brand/testimonials/hannah.jpg",
  },
  {
    quote:
      "Coming home from college I felt completely lost. Tasha didn't tell me what to think — she just kept asking the right questions until the answers started to feel like mine.",
    name: "Omar",
    meta: "20 · Young adult transition · Boulder, CO",
    src: "/brand/testimonials/omar.jpg",
  },
  {
    quote:
      "After years of doctors handing me diagnoses that didn't help, Tasha was the first person to look at all of me — body, history, family, the whole map. The work was hard. It also worked.",
    name: "Charlotte",
    meta: "34 · Chronic illness & family patterns · Longmont, CO",
    src: "/brand/testimonials/charlotte.jpg",
  },
  {
    quote:
      "I've done the rooms, rehab, the methods. None of it stuck the way this has. Tasha doesn't treat my drinking like the problem — she treats it like a clue. That changed everything.",
    name: "Daniel",
    meta: "41 · Addiction recovery · Lafayette, CO",
    src: "/brand/testimonials/daniel.jpg",
  },
  {
    quote:
      "I spent thirty years being the difficult one in my family. Tasha was the first person who didn't try to fix me — she helped me see I was never the broken one. I weep just typing that.",
    name: "Mira",
    meta: "29 · Family scapegoating · Louisville, CO",
    src: "/brand/testimonials/mira.jpg",
  },
  {
    quote:
      "I've struggled with anxiety and depression for years, but Tasha gave me the tools and encouragement I needed to get out of the slump. She's relatable, supportive, and an incredible coach.",
    name: "Jesse",
    meta: "33 · Burnout & anxiety · Erie, CO",
    src: "https://placehold.co/600x600/867BA3/F5F5F5?font=lora&text=J",
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, []);

  const handlePrev = useCallback(() => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(handleNext, 6500);
    return () => clearInterval(interval);
  }, [handleNext]);

  const isActive = (index: number) => index === active;

  // Deterministic rotation per index — avoids SSR/CSR hydration mismatch
  const rotations = [-6, 5, -3, 7, -4, 4];

  const t = testimonials[active];

  return (
    <section className="relative py-20 md:py-28 bg-mist overflow-hidden">
      <div className="relative mx-auto max-w-5xl px-5 md:px-8">
        <Reveal>
          <p className="text-[12px] md:text-[13px] uppercase tracking-[0.24em] text-cypress font-medium mb-5 text-center">
            From those I've walked with
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-[34px] md:text-[48px] leading-[1.08] tracking-[-0.015em] text-midnight text-center">
            What healing has{" "}
            <span className="italic text-cypress">felt like</span>.
          </h2>
        </Reveal>

        <div className="mt-14 md:mt-16 grid grid-cols-1 gap-y-12 md:grid-cols-12 md:gap-x-14 items-center">
          <div className="md:col-span-5 flex justify-center md:justify-start">
            <div className="relative h-[360px] md:h-[420px] w-full max-w-[360px]">
              <AnimatePresence>
                {testimonials.map((tt, index) => (
                  <motion.div
                    key={tt.src}
                    initial={{
                      opacity: 0,
                      scale: 0.92,
                      y: 40,
                      rotate: `${rotations[index]}deg`,
                    }}
                    animate={{
                      opacity: isActive(index) ? 1 : 0.45,
                      scale: isActive(index) ? 1 : 0.94,
                      y: isActive(index) ? 0 : 18,
                      zIndex: isActive(index)
                        ? testimonials.length
                        : testimonials.length - Math.abs(index - active),
                      rotate: isActive(index)
                        ? "0deg"
                        : `${rotations[index]}deg`,
                    }}
                    exit={{ opacity: 0, scale: 0.92, y: -40 }}
                    transition={{ duration: 0.6, ease: [0.21, 0.61, 0.35, 1] }}
                    className="absolute inset-0 origin-bottom"
                  >
                    <div className="relative h-full w-full rounded-[28px] overflow-hidden ring-1 ring-midnight/10 shadow-[0_30px_60px_-25px_rgba(3,45,61,0.45)] bg-amethyst/15">
                      <Image
                        src={tt.src}
                        alt={`Portrait of ${tt.name}`}
                        fill
                        sizes="(min-width: 768px) 360px, 80vw"
                        className="object-cover"
                        unoptimized={tt.src.startsWith("http")}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-midnight/30 via-transparent to-transparent" />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          <div className="md:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 18, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -18, filter: "blur(4px)" }}
                transition={{ duration: 0.5, ease: [0.21, 0.61, 0.35, 1] }}
              >
                <span
                  aria-hidden
                  className="block font-display italic text-amethyst/40 text-[80px] leading-none mb-2 select-none"
                >
                  &ldquo;
                </span>
                <blockquote className="font-display italic text-[22px] md:text-[28px] leading-[1.45] text-midnight">
                  {t.quote}
                </blockquote>
                <footer className="mt-7 flex items-center gap-4">
                  <span className="h-px w-10 bg-cypress/45" />
                  <div>
                    <p className="font-display text-[22px] leading-tight text-midnight">
                      {t.name}
                    </p>
                    <p className="mt-1 text-[13px] uppercase tracking-[0.18em] text-cypress font-medium">
                      {t.meta}
                    </p>
                  </div>
                </footer>
              </motion.div>
            </AnimatePresence>

            <div className="mt-10 flex items-center gap-4">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-midnight/15 bg-mist text-midnight transition-all duration-300 hover:bg-midnight hover:text-mist hover:border-midnight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cypress/40"
              >
                <ArrowLeft
                  size={18}
                  className="transition-transform duration-300 group-hover:-translate-x-0.5"
                />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next testimonial"
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-midnight/15 bg-mist text-midnight transition-all duration-300 hover:bg-midnight hover:text-mist hover:border-midnight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cypress/40"
              >
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </button>

              <div className="ml-3 flex items-center gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    type="button"
                    key={idx}
                    onClick={() => setActive(idx)}
                    aria-label={`Show testimonial ${idx + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === active
                        ? "w-7 bg-cypress"
                        : "w-1.5 bg-midnight/20 hover:bg-midnight/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
