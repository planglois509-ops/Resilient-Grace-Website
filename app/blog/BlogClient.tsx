"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal, staggerItem } from "../components/Reveal";
import { formatPublishedDate, type BlogPost } from "./posts";

/* ------------------------------------------------------------------ */
/* Featured post (top of blog index)                                  */
/* ------------------------------------------------------------------ */
export function BlogFeatured({ post }: { post: BlogPost }) {
  return (
    <Reveal>
      <Link
        href={`/blog/${post.slug}`}
        className="group relative grid md:grid-cols-12 gap-8 md:gap-12 items-center"
      >
        {/* Image — left, large */}
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.6, ease: [0.21, 0.61, 0.35, 1] }}
          className="md:col-span-7 relative aspect-[4/3] md:aspect-[5/4] overflow-hidden rounded-2xl bg-amethyst/15"
        >
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            priority
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
          />
          {/* Color treatment + gradient overlays */}
          <div className="absolute inset-0 bg-amethyst/15 mix-blend-multiply pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-tr from-midnight/55 via-midnight/10 to-transparent pointer-events-none" />

          {/* Featured ribbon */}
          <span className="absolute top-5 left-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-midnight/55 backdrop-blur text-mist text-[11px] uppercase tracking-[0.24em] font-medium border border-mist/20">
            <span className="w-1.5 h-1.5 rounded-full bg-bloom" />
            Latest
          </span>

          {/* Hover arrow */}
          <span className="absolute bottom-5 right-5 w-12 h-12 rounded-full bg-bloom text-midnight flex items-center justify-center opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
            <ArrowUpRight size={20} />
          </span>
        </motion.div>

        {/* Text — right */}
        <div className="md:col-span-5">
          <div className="flex items-center gap-3 mb-5 text-[12px] uppercase tracking-[0.24em]">
            <span className="text-bloom font-medium">{post.tag}</span>
            <span className="w-1 h-1 rounded-full bg-mist/35" />
            <span className="text-mist/60">
              {formatPublishedDate(post.publishedAt)}
            </span>
            <span className="w-1 h-1 rounded-full bg-mist/35" />
            <span className="text-mist/60">{post.readMinutes} min read</span>
          </div>
          <h3 className="font-display text-[32px] md:text-[44px] leading-[1.08] tracking-[-0.015em] text-mist group-hover:text-bloom transition-colors duration-500">
            {post.title}
          </h3>
          <p className="mt-5 text-[16px] md:text-[17px] text-mist/75 leading-[1.75] max-w-xl">
            {post.excerpt}
          </p>
          <span className="mt-7 inline-flex items-center gap-2 text-bloom text-[14px] font-medium tracking-wide group-hover:gap-3 transition-all">
            Read essay
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */
/* Archive card                                                       */
/* ------------------------------------------------------------------ */
export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <motion.article variants={staggerItem} className="group">
      <Link href={`/blog/${post.slug}`} className="block">
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ duration: 0.55, ease: [0.21, 0.61, 0.35, 1] }}
          className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-amethyst/15 mb-6"
        >
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-amethyst/15 mix-blend-multiply pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight/70 via-midnight/10 to-transparent pointer-events-none" />

          {/* Tag */}
          <span className="absolute top-4 left-4 inline-flex bg-mist/95 backdrop-blur text-midnight text-[11px] uppercase tracking-[0.22em] px-3 py-1.5 rounded-full font-medium">
            {post.tag}
          </span>

          {/* Hover arrow */}
          <span className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-bloom text-midnight flex items-center justify-center opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
            <ArrowUpRight size={18} />
          </span>
        </motion.div>

        <div className="flex items-center gap-3 mb-3 text-[11px] uppercase tracking-[0.22em] text-mist/55">
          <span>{formatPublishedDate(post.publishedAt)}</span>
          <span className="w-1 h-1 rounded-full bg-mist/30" />
          <span>{post.readMinutes} min</span>
        </div>
        <h3 className="font-display text-[26px] md:text-[28px] leading-[1.18] tracking-[-0.005em] text-mist group-hover:text-bloom transition-colors duration-500">
          {post.title}
        </h3>
        <p className="mt-3 text-[15px] md:text-[16px] text-mist/70 leading-[1.7]">
          {post.excerpt}
        </p>
      </Link>
    </motion.article>
  );
}
