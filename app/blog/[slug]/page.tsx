import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Nav } from "../../components/Nav";
import { Footer } from "../../components/Footer";
import { Reveal } from "../../components/Reveal";
import {
  formatPublishedDate,
  getAllPosts,
  getPostBySlug,
} from "../posts";

type Params = { slug: string };

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Essay not found" };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image, width: 1200, height: 800, alt: post.imageAlt }],
      publishedTime: post.publishedAt,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const all = getAllPosts();
  const idx = all.findIndex((p) => p.slug === slug);
  const more = all.filter((_, i) => i !== idx).slice(0, 2);

  return (
    <>
      <Nav />
      <main className="midnight-bg relative overflow-hidden">
        {/* Decorative botanical drift — top right */}
        <div
          aria-hidden
          className="absolute top-0 -right-32 md:-right-20 w-[320px] md:w-[480px] opacity-[0.08] pointer-events-none floral-frame-anim"
        >
          <Image
            src="/brand/floral-side-right.png"
            alt=""
            width={520}
            height={780}
            className="w-full h-auto"
          />
        </div>

        <article className="relative">
          {/* Back link */}
          <div className="relative mx-auto max-w-3xl px-5 md:px-8 pt-36 md:pt-44">
            <Reveal>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.22em] text-mist/65 hover:text-bloom transition-colors group"
              >
                <ArrowLeft
                  size={14}
                  className="transition-transform duration-300 group-hover:-translate-x-1"
                />
                All Field Notes
              </Link>
            </Reveal>
          </div>

          {/* Title + preview header */}
          <header className="relative mx-auto max-w-3xl px-5 md:px-8 pt-10 md:pt-14 pb-12 md:pb-16">
            {/* Meta */}
            <Reveal delay={0.05}>
              <div className="flex flex-wrap items-center gap-3 mb-7 text-[12px] uppercase tracking-[0.24em]">
                <span className="text-bloom font-medium">{post.tag}</span>
                <span className="w-1 h-1 rounded-full bg-mist/35" />
                <span className="text-mist/65">
                  {formatPublishedDate(post.publishedAt)}
                </span>
                <span className="w-1 h-1 rounded-full bg-mist/35" />
                <span className="text-mist/65">{post.readMinutes} min read</span>
              </div>
            </Reveal>

            {/* Title */}
            <Reveal delay={0.1}>
              <h1 className="font-display text-[40px] sm:text-[52px] md:text-[64px] leading-[1.05] tracking-[-0.02em] text-mist">
                {post.title}
              </h1>
            </Reveal>

            {/* Preview (excerpt) */}
            <Reveal delay={0.18}>
              <p className="mt-7 font-display italic text-[22px] md:text-[26px] leading-[1.4] text-bloom/90 max-w-2xl">
                {post.excerpt}
              </p>
            </Reveal>

            {/* Byline + dot rule */}
            <Reveal delay={0.25}>
              <div className="mt-10 flex items-center gap-4">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border border-mist/20 bg-amethyst/20 flex-shrink-0">
                  <Image
                    src="/brand/tasha-headshot3.png"
                    alt="Tasha Darwent"
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
                <div className="text-[14px] leading-tight">
                  <p className="text-mist font-medium">Tasha Darwent</p>
                  <p className="text-mist/55 font-display italic text-[15px]">
                    Integrative Health Coach
                  </p>
                </div>
                <span className="hidden md:flex ml-auto items-center gap-2 text-mist/35">
                  <span className="w-1.5 h-1.5 rounded-full bg-bloom" />
                  <span className="h-px w-20 bg-mist/15" />
                  <span className="w-1.5 h-1.5 rounded-full bg-bloom" />
                </span>
              </div>
            </Reveal>
          </header>

          {/* Hero image */}
          <div className="relative mx-auto max-w-5xl px-5 md:px-8">
            <Reveal delay={0.1}>
              <figure className="relative">
                <div className="relative aspect-[16/10] md:aspect-[16/9] overflow-hidden rounded-2xl bg-amethyst/15 shadow-[0_40px_80px_-30px_rgba(3,45,61,0.7)]">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 1024px, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-amethyst/10 mix-blend-multiply pointer-events-none" />
                </div>
                <figcaption className="mt-3 text-[13px] text-mist/45 font-display italic">
                  {post.imageAlt}
                </figcaption>
              </figure>
            </Reveal>
          </div>

          {/* Body */}
          <div className="relative mx-auto max-w-2xl px-5 md:px-8 pt-16 md:pt-24 pb-20">
            <Reveal delay={0.1}>
              <div
                className="essay-body"
                dangerouslySetInnerHTML={{ __html: post.body }}
              />
            </Reveal>

            {/* End-of-article ornament */}
            <div className="mt-20 flex flex-col items-center gap-5">
              <div className="flex items-center gap-3 text-mist/30">
                <span className="h-px w-16 bg-mist/20" />
                <span className="w-1.5 h-1.5 rounded-full bg-bloom" />
                <span className="h-px w-16 bg-mist/20" />
              </div>
              <Image
                src="/brand/logo-graphic-transparent.png"
                alt=""
                width={56}
                height={56}
                className="w-11 h-11 opacity-50"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </div>
          </div>
        </article>

        {/* More essays */}
        {more.length > 0 && (
          <section className="relative pb-28 md:pb-36 border-t border-mist/12 pt-20 md:pt-28">
            <div className="relative mx-auto max-w-5xl px-5 md:px-8">
              <div className="flex items-end justify-between mb-12 md:mb-16">
                <div>
                  <p className="text-[12px] uppercase tracking-[0.28em] text-bloom font-medium mb-3">
                    Keep Reading
                  </p>
                  <h2 className="font-display text-[28px] md:text-[36px] leading-[1.1] tracking-[-0.015em] text-mist">
                    More Field Notes.
                  </h2>
                </div>
                <Link
                  href="/blog"
                  className="hidden sm:inline-flex items-center gap-2 text-[14px] text-mist/70 hover:text-bloom transition-colors group"
                >
                  Browse all
                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>

              <div className="grid md:grid-cols-2 gap-8 md:gap-10">
                {more.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="group block"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-amethyst/15 mb-5">
                      <Image
                        src={p.image}
                        alt={p.imageAlt}
                        fill
                        sizes="(min-width: 1024px) 480px, 100vw"
                        className="object-cover transition-transform duration-[1100ms] ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-amethyst/10 mix-blend-multiply pointer-events-none" />
                      <div className="absolute inset-0 bg-gradient-to-t from-midnight/55 via-transparent to-transparent pointer-events-none" />
                      <span className="absolute top-4 left-4 inline-flex bg-mist/95 backdrop-blur text-midnight text-[11px] uppercase tracking-[0.22em] px-3 py-1.5 rounded-full font-medium">
                        {p.tag}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 mb-2 text-[11px] uppercase tracking-[0.22em] text-mist/55">
                      <span>{formatPublishedDate(p.publishedAt)}</span>
                      <span className="w-1 h-1 rounded-full bg-mist/30" />
                      <span>{p.readMinutes} min</span>
                    </div>
                    <h3 className="font-display text-[24px] md:text-[26px] leading-[1.18] tracking-[-0.005em] text-mist group-hover:text-bloom transition-colors duration-500">
                      {p.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
