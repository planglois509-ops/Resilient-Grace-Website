// Capture each section of the homepage individually at a given viewport.
// Usage: node sections.mjs [mobile|desktop]

import puppeteer from 'puppeteer-core';
import { existsSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SHOTS_DIR = join(__dirname, 'temporary screenshots');
mkdirSync(SHOTS_DIR, { recursive: true });

const exec = ['C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'].find(p => existsSync(p));

const mode = process.argv[2] || 'mobile';
const W = mode === 'desktop' ? 1440 : 390;
const H = mode === 'desktop' ? 900 : 844;

const browser = await puppeteer.launch({ executablePath: exec, headless: 'new', args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width: W, height: H, deviceScaleFactor: 1 });
await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'no-preference' }]);
// Pre-dismiss the cookie banner so it doesn't cover content in screenshots
await page.evaluateOnNewDocument(() => {
  try { localStorage.setItem('rg-cookies', 'accepted'); } catch {}
});
await page.goto('http://localhost:3000/', { waitUntil: 'networkidle0', timeout: 60000 });
await new Promise(r => setTimeout(r, 3000));

const totalHeight = await page.evaluate(() => document.documentElement.scrollHeight);
const stride = H * 0.85;
const stamp = Date.now();
let i = 0;
for (let y = 0; y < totalHeight; y += stride, i++) {
  await page.evaluate((y) => window.scrollTo({ top: y, behavior: 'instant' }), y);
  await new Promise(r => setTimeout(r, 1100)); // wait for in-view animations
  const out = join(SHOTS_DIR, `${mode}-${stamp}-${String(i).padStart(2, '0')}.png`);
  await page.screenshot({ path: out });
  console.log(`✓ ${out}`);
}
await browser.close();
