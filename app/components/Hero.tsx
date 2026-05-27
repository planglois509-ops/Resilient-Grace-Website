"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { WildflowerMark } from "./WildflowerMark";

const EASE: [number, number, number, number] = [0.21, 0.61, 0.35, 1];

export function Hero() {
  return (
    <section className="relative pt-28 md:pt-32 pb-16 md:pb-20 overflow-hidden bloom-bg grain">
      <div className="aurora-violet" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <div className="lg:col-span-6 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.2, ease: EASE }}
            className="font-display text-midnight text-[42px] md:text-[64px] lg:text-[76px] leading-[1.05] tracking-[-0.02em]"
          >
            You don't have to
            <br />
            carry this <span className="italic text-cypress">alone</span>{" "}
            anymore.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease: EASE }}
            className="mt-6 md:mt-8 max-w-[560px] text-[18px] md:text-[19px] text-midnight/80 leading-[1.7]"
          >
            Integrative recovery for people who've tried everything —
            addiction, family-of-origin trauma, chronic illness, and the
            patterns that keep you stuck. Healing is possible. So is joy.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.65, ease: EASE }}
            className="mt-9 flex flex-col sm:flex-row gap-3 sm:items-center"
          >
            <Link href="/contact" className="btn-cypress">
              <Calendar size={18} /> Book a free consultation
            </Link>
            <Link href="#support-group" className="btn-ghost">
              Join the free monthly group <ArrowRight size={16} />
            </Link>
          </motion.div>

        </div>

        <div className="lg:col-span-6 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: EASE }}
            className="relative mx-auto max-w-[500px]"
          >
            <div className="absolute -top-10 -right-8 text-amethyst opacity-70 hidden md:block">
              <WildflowerMark scale={0.7} delay={0.6} />
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-6 top-12 w-6 h-6 rounded-full bg-bloom/80 hidden md:block"
            />

            <div className="relative z-10 aspect-[4/5] rounded-[28px] overflow-hidden bg-amethyst/15 ring-1 ring-midnight/5 shadow-[0_30px_80px_-30px_rgba(3,45,61,0.35)]">
              <Image
                src="/brand/tasha-headshot3.png"
                alt="Portrait of Tasha Darwent"
                fill
                priority
                sizes="(min-width: 1024px) 500px, 85vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/30 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
