"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function Problem() {
  return (
    <section className="relative py-20 md:py-28 bg-mist overflow-hidden">
      <div className="relative mx-auto max-w-5xl">
        <Image
          src="/brand/floral-side-left.png"
          alt=""
          aria-hidden
          width={600}
          height={1400}
          priority={false}
          className="hidden lg:block pointer-events-none select-none absolute top-1/2 -translate-y-1/2 lg:-left-2 lg:w-[160px] xl:-left-3 xl:w-[180px] 2xl:left-0 2xl:w-[200px] h-auto opacity-95 z-0"
        />
        <Image
          src="/brand/floral-side-right.png"
          alt=""
          aria-hidden
          width={600}
          height={1400}
          priority={false}
          className="hidden lg:block pointer-events-none select-none absolute top-1/2 -translate-y-1/2 lg:-right-2 lg:w-[160px] xl:-right-3 xl:w-[180px] 2xl:right-0 2xl:w-[200px] h-auto opacity-95 z-0"
        />

        <div className="relative z-10 mx-auto max-w-2xl px-6 md:px-10 text-center">
        <Reveal>
          <h2 className="font-display text-[30px] md:text-[44px] lg:text-[50px] leading-[1.1] tracking-[-0.015em] text-midnight">
            You're still struggling. That doesn't mean something is{" "}
            <span className="italic text-amethyst">wrong</span> with you.
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mt-8 md:mt-10 text-[17px] md:text-[18px] text-midnight/80 leading-[1.75] max-w-[58ch] mx-auto">
            You've read the books. Tried the protocols. Sat with therapists,
            taken the medications, lit the candles, drunk the green juice. Some
            of it helped. None of it lasted.
          </p>
        </Reveal>

        <Reveal delay={0.28}>
          <div className="mt-10 md:mt-12 flex justify-center">
            <Link href="/contact" className="btn-violet">
              Get the Support you Deserve <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
        </div>
      </div>
    </section>
  );
}
