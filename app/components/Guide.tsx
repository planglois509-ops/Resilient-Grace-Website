"use client";

import Image from "next/image";
import { Reveal, StaggerGroup, staggerItem } from "./Reveal";
import { motion } from "framer-motion";
import { Award, Heart, Sparkles, Clock } from "lucide-react";

const cards = [
  { icon: Award, label: "Certified Integrative Health Coach" },
  { icon: Sparkles, label: "Certified Mindfulness Mentor" },
  { icon: Heart, label: "Certified Addiction Recovery Coach" },
  { icon: Clock, label: "13+ Years in Practice" },
];

export function Guide() {
  return (
    <section id="about" className="relative py-20 md:py-28 coral-bg grain overflow-hidden scroll-mt-24">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.05] mix-blend-soft-light"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <Reveal>
              <p className="text-[12px] md:text-[13px] uppercase tracking-[0.24em] text-midnight/70 font-medium mb-5 flex items-center gap-3">
                <span className="inline-block h-px w-10 bg-midnight/40" />
                About Tasha
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display text-[36px] md:text-[56px] leading-[1.06] tracking-[-0.015em] text-midnight">
                I've walked the
                <br />
                <span className="italic text-midnight/85">path, too.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-7 space-y-5 text-[17px] md:text-[18px] text-midnight/85 leading-[1.75]">
                <p>
                  I'm Tasha Darwent — Integrative Health Coach and Therapeutic
                  Mentor at Resilient Grace. For thirty years I lived inside
                  the conditions I now help others heal from. For sixteen
                  more, I've walked alongside hundreds of people on that same
                  terrain.
                </p>
                <p>
                  What I offer isn't a method — it's a way of meeting you,
                  drawn from trauma-informed psychology, somatic practice,
                  holistic nutrition, family-systems work, and Buddhist
                  contemplative practice. Woven together. Never one without
                  the others.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, rotate: 1.5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.0, ease: [0.21, 0.61, 0.35, 1] }}
              className="relative mx-auto max-w-[460px] group/portrait"
            >
              <div
                aria-hidden
                className="absolute -top-6 -left-6 w-32 h-32 rounded-full bg-mist/60 blur-2xl group-hover/portrait:scale-110 transition-transform duration-700 ease-out"
              />
              <div
                aria-hidden
                className="absolute -bottom-8 -right-8 w-44 h-44 rounded-full bg-mist/70 blur-3xl group-hover/portrait:scale-110 transition-transform duration-700 ease-out"
              />

              <div className="relative aspect-[4/5] rounded-[28px] overflow-hidden ring-2 ring-mist/90 shadow-[0_40px_80px_-30px_rgba(3,45,61,0.45)] transition-[transform,box-shadow] duration-700 ease-out group-hover/portrait:-translate-y-2 group-hover/portrait:shadow-[0_55px_100px_-30px_rgba(3,45,61,0.55)]">
                <Image
                  src="/brand/tasha-smoothie.png"
                  alt="Tasha Darwent holding a fresh smoothie"
                  fill
                  sizes="(min-width: 1024px) 460px, 85vw"
                  className="object-cover transition-transform duration-1000 ease-out group-hover/portrait:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/25 via-transparent to-transparent" />
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-0 group-hover/portrait:opacity-100 transition-opacity duration-700 ease-out bg-gradient-to-tr from-transparent via-mist/15 to-mist/30 mix-blend-overlay"
                />
              </div>
            </motion.div>
          </div>
        </div>

        <StaggerGroup className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {cards.map(({ icon: Icon, label }) => (
            <motion.div
              key={label}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 220, damping: 22 }}
              className="group relative bg-mist/90 backdrop-blur-sm rounded-2xl p-6 md:p-7 border border-midnight/10 shadow-[0_18px_40px_-22px_rgba(3,45,61,0.30)] hover:bg-cypress hover:border-cypress hover:shadow-[0_28px_60px_-22px_rgba(36,88,94,0.65)] transition-[background-color,border-color,box-shadow] duration-500"
            >
              <div className="flex flex-col items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-cypress/12 flex items-center justify-center text-cypress group-hover:bg-mist/20 group-hover:text-mist transition-colors duration-500">
                  <Icon size={30} strokeWidth={1.6} />
                </div>
                <p className="font-display text-[18px] md:text-[20px] leading-[1.25] text-midnight group-hover:text-mist transition-colors duration-500">
                  {label}
                </p>
              </div>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
