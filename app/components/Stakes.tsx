"use client";

import Image from "next/image";
import { Reveal } from "./Reveal";
import { motion } from "framer-motion";

export function Stakes() {
  return (
    <section className="relative py-20 md:py-28 violet-bg overflow-hidden">
      <div className="relative mx-auto max-w-5xl px-5 md:px-8 grid md:grid-cols-12 gap-10 md:gap-14 items-center">
        <div className="md:col-span-7">
          <Reveal>
            <p className="text-[12px] md:text-[13px] uppercase tracking-[0.22em] text-cypress font-medium mb-5">
              The cost of waiting
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-[32px] md:text-[48px] leading-[1.08] tracking-[-0.015em] text-midnight">
              Another year doesn't have to look like the{" "}
              <span className="italic text-cypress">last one</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-7 space-y-4 text-[17px] md:text-[18px] text-midnight/80 leading-[1.75]">
              <p>
                Most people I work with come to me after a long stretch of{" "}
                <em>trying harder.</em> Another season fighting their body.
                Another holiday dreading the family. Another night promising
                tomorrow will be different.
              </p>
              <p className="font-display italic text-[20px] md:text-[22px] text-cypress">
                You already know what staying stuck costs.
              </p>
              <p>
                The question is what becomes possible when you stop trying to
                do this alone.
              </p>
            </div>
          </Reveal>
        </div>

        <motion.div
          className="md:col-span-5"
          initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.0, ease: [0.21, 0.61, 0.35, 1] }}
        >
          <div className="relative mx-auto max-w-[420px] group/portrait">
            <div
              aria-hidden
              className="absolute -inset-8 -z-10 rounded-full bg-mist/55 blur-3xl scale-95 group-hover/portrait:scale-110 transition-transform duration-700 ease-out"
            />
            <div
              aria-hidden
              className="absolute -bottom-10 -right-6 -z-10 w-32 h-32 rounded-full bg-bloom/45 blur-3xl"
            />
            <div
              aria-hidden
              className="absolute -top-8 -left-4 -z-10 w-28 h-28 rounded-full bg-amethyst/40 blur-3xl"
            />

            <div className="relative aspect-[4/5] rounded-[28px] overflow-hidden ring-1 ring-midnight/10 shadow-[0_30px_70px_-25px_rgba(3,45,61,0.45)] transition-[transform,box-shadow] duration-700 ease-out group-hover/portrait:-translate-y-2 group-hover/portrait:shadow-[0_45px_90px_-30px_rgba(3,45,61,0.60)]">
              <Image
                src="/brand/tasha-stakes.jpg"
                alt="Tasha Darwent at the river, mountains beyond"
                fill
                sizes="(min-width: 768px) 420px, 85vw"
                className="object-cover object-[40%_30%] transition-transform duration-1000 ease-out group-hover/portrait:scale-[1.06]"
                priority={false}
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-midnight/45 via-midnight/5 to-transparent"
              />
              <div
                aria-hidden
                className="absolute inset-0 mix-blend-multiply opacity-0 group-hover/portrait:opacity-100 transition-opacity duration-700 ease-out stakes-portrait-warmth"
              />

              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 text-mist">
                <p className="font-display italic text-[18px] md:text-[20px] leading-[1.3]">
                  &ldquo;Healing moves at the pace of your nervous system.&rdquo;
                </p>
                <span className="mt-2 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-bloom font-medium">
                  <span className="h-1 w-1 rounded-full bg-bloom" />
                  Tasha
                </span>
              </div>
            </div>

            <div
              aria-hidden
              className="absolute -bottom-3 -right-3 w-24 h-24 rounded-full border border-cypress/20 hidden md:block group-hover/portrait:rotate-12 transition-transform duration-700 ease-out"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
