/**
 * Blog post repository.
 *
 * Reads/writes posts from Neon Postgres if configured. Falls back to the
 * static seed in `app/blog/posts.ts` when no DB is connected so the public
 * blog continues to work in any environment.
 *
 * Schema (run once via /api/admin/init-db once env vars are set):
 *
 *   CREATE TABLE posts (
 *     id            SERIAL PRIMARY KEY,
 *     slug          VARCHAR(200) NOT NULL UNIQUE,
 *     title         TEXT NOT NULL,
 *     excerpt       TEXT NOT NULL,
 *     body          TEXT NOT NULL,
 *     image_url     TEXT,
 *     image_alt     TEXT,
 *     tag           VARCHAR(80),
 *     read_minutes  INTEGER DEFAULT 5,
 *     published_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
 *     created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
 *     updated_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
 *   );
 */

import { sql, dbConfigured } from "./db";
import { posts as seedPosts, type BlogPost } from "../app/blog/posts";

type DbRow = {
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  image_url: string | null;
  image_alt: string | null;
  tag: string | null;
  read_minutes: number | null;
  published_at: Date | string;
};

function rowToPost(r: DbRow): BlogPost {
  const published =
    r.published_at instanceof Date
      ? r.published_at.toISOString()
      : new Date(r.published_at).toISOString();
  return {
    slug: r.slug,
    title: r.title,
    excerpt: r.excerpt,
    body: r.body,
    image: r.image_url ?? "",
    imageAlt: r.image_alt ?? "",
    tag: r.tag ?? "Essay",
    readMinutes: r.read_minutes ?? 5,
    publishedAt: published,
  };
}

export async function listPosts(): Promise<BlogPost[]> {
  if (!sql) return [...seedPosts].sort(byDateDesc);
  try {
    const rows = (await sql`
      SELECT slug, title, excerpt, body, image_url, image_alt, tag,
             read_minutes, published_at
      FROM posts
      ORDER BY published_at DESC
    `) as DbRow[];
    if (rows.length === 0) return [...seedPosts].sort(byDateDesc);
    return rows.map(rowToPost);
  } catch (err) {
    console.warn(
      "[blog-repo] listPosts DB error, falling back to seed:",
      err instanceof Error ? err.message : err,
    );
    return [...seedPosts].sort(byDateDesc);
  }
}

export async function getPost(slug: string): Promise<BlogPost | null> {
  if (!sql) {
    return seedPosts.find((p) => p.slug === slug) ?? null;
  }
  try {
    const rows = (await sql`
      SELECT slug, title, excerpt, body, image_url, image_alt, tag,
             read_minutes, published_at
      FROM posts
      WHERE slug = ${slug}
      LIMIT 1
    `) as DbRow[];
    if (rows[0]) return rowToPost(rows[0]);
    return seedPosts.find((p) => p.slug === slug) ?? null;
  } catch (err) {
    console.warn(
      "[blog-repo] getPost DB error, falling back to seed:",
      err instanceof Error ? err.message : err,
    );
    return seedPosts.find((p) => p.slug === slug) ?? null;
  }
}

export type PostInput = {
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  image: string;
  imageAlt: string;
  tag: string;
  readMinutes: number;
  publishedAt: string;
};

export async function createPost(p: PostInput): Promise<void> {
  if (!sql) throw new Error("Database not configured");
  await sql`
    INSERT INTO posts
      (slug, title, excerpt, body, image_url, image_alt, tag,
       read_minutes, published_at, updated_at)
    VALUES
      (${p.slug}, ${p.title}, ${p.excerpt}, ${p.body}, ${p.image},
       ${p.imageAlt}, ${p.tag}, ${p.readMinutes}, ${p.publishedAt}, NOW())
  `;
}

export async function updatePost(
  originalSlug: string,
  p: PostInput,
): Promise<void> {
  if (!sql) throw new Error("Database not configured");
  await sql`
    UPDATE posts
    SET slug = ${p.slug},
        title = ${p.title},
        excerpt = ${p.excerpt},
        body = ${p.body},
        image_url = ${p.image},
        image_alt = ${p.imageAlt},
        tag = ${p.tag},
        read_minutes = ${p.readMinutes},
        published_at = ${p.publishedAt},
        updated_at = NOW()
    WHERE slug = ${originalSlug}
  `;
}

export async function deletePost(slug: string): Promise<void> {
  if (!sql) throw new Error("Database not configured");
  await sql`DELETE FROM posts WHERE slug = ${slug}`;
}

export async function ensureSchema(): Promise<void> {
  if (!sql) throw new Error("Database not configured");
  await sql`
    CREATE TABLE IF NOT EXISTS posts (
      id            SERIAL PRIMARY KEY,
      slug          VARCHAR(200) NOT NULL UNIQUE,
      title         TEXT NOT NULL,
      excerpt       TEXT NOT NULL,
      body          TEXT NOT NULL,
      image_url     TEXT,
      image_alt     TEXT,
      tag           VARCHAR(80),
      read_minutes  INTEGER DEFAULT 5,
      published_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `;
}

function byDateDesc(a: BlogPost, b: BlogPost) {
  return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
}

export { dbConfigured };
