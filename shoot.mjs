// Proper headless screenshots using puppeteer-core.
// Usage: node shoot.mjs <url> <label> <width> [height] [scrollY] [waitMs]

import puppeteer from 'puppeteer-core';
import { existsSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SHOTS_DIR = join(__dirname, 'temporary screenshots');
mkdirSync(SHOTS_DIR, { recursive: true });

const CHROME_PATHS = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
];
const exec = CHROME_PATHS.find((p) => existsSync(p));
if (!exec) { console.error('No Chrome/Edge'); process.exit(1); }

const [, , url = 'http://localhost:3000', label = 'shot', wArg = '390', hArg = '844', scrollArg = '0', waitArg = '3500'] = process.argv;
const width = +wArg, height = +hArg, scrollY = +scrollArg, waitMs = +waitArg;
const fullPage = hArg === 'full';

const browser = await puppeteer.launch({ executablePath: exec, headless: 'new', args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width, height: fullPage ? 900 : height, deviceScaleFactor: 1 });
await page.emulateMediaFeatures([
  { name: 'prefers-reduced-motion', value: 'no-preference' },
  { name: 'prefers-color-scheme', value: 'light' },
]);
await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });
await new Promise(r => setTimeout(r, waitMs));
if (scrollY > 0) await page.evaluate((y) => window.scrollTo({ top: y, behavior: 'instant' }), scrollY);
await new Promise(r => setTimeout(r, 600));

const filename = `shoot-${Date.now()}-${label}.png`;
const out = join(SHOTS_DIR, filename);
await page.screenshot({ path: out, fullPage });
console.log(`✓ ${out}`);
await browser.close();
