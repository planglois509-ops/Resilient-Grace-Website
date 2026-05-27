import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { Reveal, StaggerGroup } from "../components/Reveal";
import { getAllPosts } from "./posts";
import { BlogCard, BlogFeatured } from "./BlogClient";

export const metadata: Metadata = {
  title: "Field Notes · Essays on healing & resilience",
  description:
    "Essays from Tasha Darwent on recovery, family-of-origin trauma, chronic illness, and the slow work of coming home to yourself.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  const all = getAllPosts();
  const [featured, ...rest] = all;

  return (
    <>
      <Nav />
      <main className="midnight-bg relative overflow-hidden">
        {/* Decorative botanical flourish — drifts off the right edge */}
        <div
          aria-hidden
          className="absolute -top-10 -right-24 md:-right-16 w-[340px] md:w-[520px] opacity-[0.10] pointer-events-none floral-frame-anim"
        >
          <Image
            src="/brand/floral-side-right.png"
            alt=""
            width={520}
            height={780}
            className="w-full h-auto"
            priority={false}
          />
        </div>

        {/* Eyebrow + masthead */}
        <section className="relative pt-36 md:pt-44 pb-10 md:pb-16">
          <div className="relative mx-auto max-w-7xl px-5 md:px-8">
            <Reveal>
              <div className="flex items-center gap-3 text-bloom mb-7">
                <span className="h-px w-10 bg-bloom/60" />
                <p className="text-[12px] md:text-[13px] uppercase tracking-[0.28em] font-medium">
                  Field Notes
                </p>
                <span className="h-px w-10 bg-bloom/60" />
              </div>
            </Reveal>

            <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-end">
              <div className="md:col-span-8">
                <Reveal delay={0.05}>
                  <h1 className="font-display text-[44px] sm:text-[56px] md:text-[78px] leading-[1.02] tracking-[-0.02em] text-mist">
                    Words for the
                    <br />
                    <span className="italic text-bloom">walking through</span>.
                  </h1>
                </Reveal>
              </div>
              <div className="md:col-span-4">
                <Reveal delay={0.12}>
                  <p className="text-[16px] md:text-[17px] leading-[1.75] text-mist/75 max-w-md md:ml-auto md:text-right">
                    Essays from the practice — on resistance, grief, sleep, family,
                    and the slow art of becoming whole. Written for those mid-way
                    through.
                  </p>
                </Reveal>
              </div>
            </div>

            {/* Dot-and-rule motif (echoes the logo) */}
            <Reveal delay={0.2}>
              <div className="mt-12 md:mt-16 flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-bloom" />
                <span className="h-px flex-1 bg-mist/15" />
                <span className="w-1.5 h-1.5 rounded-full bg-bloom" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Featured (most recent) */}
        {featured && (
          <section className="relative pb-16 md:pb-24">
            <div className="relative mx-auto max-w-7xl px-5 md:px-8">
              <BlogFeatured post={featured} />
            </div>
          </section>
        )}

        {/* Section header — Archive */}
        <section className="relative pb-10 md:pb-14">
          <div className="relative mx-auto max-w-7xl px-5 md:px-8">
            <Reveal>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-t border-mist/12 pt-12 md:pt-16">
                <div>
                  <p className="text-[12px] uppercase tracking-[0.28em] text-bloom font-medium mb-4">
                    The Archive
                  </p>
                  <h2 className="font-display text-[32px] md:text-[44px] leading-[1.1] tracking-[-0.015em] text-mist">
                    Earlier essays.
                  </h2>
                </div>
                <p className="text-mist/65 text-[15px] max-w-sm">
                  Published monthly. Subscribe to{" "}
                  <Link
                    href="/#subscribe"
                    className="text-bloom underline underline-offset-4 decoration-bloom/40 hover:decoration-bloom transition"
                  >
                    Grace Notes
                  </Link>{" "}
                  to receive each new piece.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Archive grid */}
        <section className="relative pb-28 md:pb-36">
          <div className="relative mx-auto max-w-7xl px-5 md:px-8">
            <StaggerGroup className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-8 gap-y-14 md:gap-y-20">
              {rest.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </StaggerGroup>

            {/* End-of-archive ornament */}
            <div
              aria-hidden
              className="mt-24 md:mt-32 flex flex-col items-center gap-4 text-mist/40"
            >
              <Image
                src="/brand/logo-graphic-transparent.png"
                alt=""
                width={64}
                height={64}
                className="w-12 h-12 opacity-60"
                style={{ filter: "brightness(0) invert(1)" }}
              />
              <span className="font-display italic text-[18px] text-mist/55">
                Bend, do not break.
              </span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
