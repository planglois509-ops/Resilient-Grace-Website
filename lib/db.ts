/**
 * Neon Postgres client.
 *
 * Reads from DATABASE_URL (or POSTGRES_URL — both names are auto-provisioned
 * by the Vercel Marketplace Neon integration). Returns a serverless SQL
 * tagged-template function.
 *
 * If no database URL is set (local dev without Vercel env), `sql` is null and
 * the blog falls back to the seed data in `app/blog/posts.ts`.
 */

import { neon } from "@neondatabase/serverless";

const url =
  process.env.DATABASE_URL ||
  process.env.POSTGRES_URL ||
  process.env.POSTGRES_PRISMA_URL ||
  process.env.DATABASE_URL_UNPOOLED ||
  process.env.POSTGRES_URL_NON_POOLING ||
  null;

export const sql = url ? neon(url) : null;

export const dbConfigured = Boolean(sql);
