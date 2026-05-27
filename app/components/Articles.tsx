"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal, StaggerGroup, staggerItem } from "./Reveal";

const articles = [
  {
    title: "A Guided Practice for Befriending Resistance",
    excerpt:
      "Resistance can be a powerful teacher — if we learn how to work with it rather than against it. Practical steps and exercises for transformation.",
    href: "/blog/befriending-resistance",
    image:
      "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?auto=format&fit=crop&w=1200&q=70",
    tag: "Mindfulness",
  },
  {
    title: "Heal the Brain, Heal the Spirit: Maslow & the Spiritual Path",
    excerpt:
      "Mental clarity is the foundation upon which all other aspects of spiritual and personal growth are built. A reflection on the body-spirit connection.",
    href: "/blog/heal-brain-heal-spirit",
    image:
      "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=70",
    tag: "Healing",
  },
  {
    title: "Sangha: Why Healing Happens in Community",
    excerpt:
      "Illness breeds in isolation, darkness, and shame. The Buddhist concept of community as medicine — and why we don't heal alone.",
    href: "/blog/sangha-community",
    image:
      "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1200&q=70",
    tag: "Community",
  },
];

export function Articles() {
  return (
    <section className="relative py-20 md:py-28 bg-mist overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-10 md:mb-12">
          <div className="max-w-2xl">
            <Reveal>
              <p className="text-[12px] md:text-[13px] uppercase tracking-[0.22em] text-cypress font-medium mb-5">
                Healing Articles
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display text-[34px] md:text-[52px] leading-[1.06] tracking-[-0.015em] text-midnight">
                Words for the
                <br />
                <span className="italic text-cypress">walking through</span>.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Link href="/blog" className="btn-ghost self-start md:self-end">
              Read all articles <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>

        <StaggerGroup className="grid md:grid-cols-3 gap-6 md:gap-8">
          {articles.map((a) => (
            <motion.article
              key={a.title}
              variants={staggerItem}
              whileHover="hover"
              className="group"
            >
              <Link href={a.href} className="block">
                <motion.div
                  variants={{
                    hover: { y: -8 },
                  }}
                  transition={{ duration: 0.5, ease: [0.21, 0.61, 0.35, 1] }}
                  className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-amethyst/15 mb-5"
                >
                  <Image
                    src={a.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 via-midnight/0 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                  <span className="absolute top-4 left-4 inline-flex bg-mist/95 backdrop-blur text-midnight text-[11px] uppercase tracking-[0.2em] px-3 py-1.5 rounded-full font-medium">
                    {a.tag}
                  </span>
                  <span className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-bloom flex items-center justify-center text-midnight opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all duration-500">
                    <ArrowUpRight size={18} />
                  </span>
                </motion.div>
                <h3 className="font-display text-[24px] md:text-[26px] leading-[1.2] text-midnight tracking-[-0.005em] group-hover:text-cypress transition-colors">
                  {a.title}
                </h3>
                <p className="mt-3 text-[15px] md:text-[16px] text-midnight/70 leading-[1.7]">
                  {a.excerpt}
                </p>
              </Link>
            </motion.article>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
