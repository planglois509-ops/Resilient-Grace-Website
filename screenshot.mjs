// Usage:
//   node screenshot.mjs <url> [label]
//
// Renders <url> in headless Chrome and saves a full-page PNG to
// ./temporary screenshots/screenshot-N[-label].png.
// Auto-increments N so previous screenshots are never overwritten.

import { spawnSync } from 'node:child_process';
import { mkdirSync, readdirSync, copyFileSync, unlinkSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { tmpdir } from 'node:os';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SHOTS_DIR = join(__dirname, 'temporary screenshots');
const TMP_DIR   = tmpdir();

const CHROME_PATHS = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
];

const args = process.argv.slice(2);
const url   = args[0] || 'http://localhost:3000';
const label = args[1] || '';

const W = 720;
const H = 13000;

const chrome = CHROME_PATHS.find((p) => existsSync(p));
if (!chrome) {
  console.error('No Chrome/Edge found. Install Chrome or update CHROME_PATHS in screenshot.mjs.');
  process.exit(1);
}

mkdirSync(SHOTS_DIR, { recursive: true });
const existing = readdirSync(SHOTS_DIR).filter((f) => /^screenshot-(\d+)/.test(f));
const nextN = existing.length === 0
  ? 1
  : Math.max(...existing.map((f) => parseInt(f.match(/^screenshot-(\d+)/)[1], 10))) + 1;

const filename = `screenshot-${nextN}${label ? `-${label}` : ''}.png`;
const tmpPath  = join(TMP_DIR, filename);
const finalPath = join(SHOTS_DIR, filename);

const chromeArgs = [
  '--headless=new',
  '--disable-gpu',
  '--hide-scrollbars',
  '--no-sandbox',
  '--force-device-scale-factor=1',
  `--window-size=${W},${H}`,
  '--default-background-color=ffffffff',
  '--virtual-time-budget=4000',     // wait for fonts/animations
  `--screenshot=${tmpPath}`,
  url,
];

console.log(`→ Rendering ${url}`);
const result = spawnSync(chrome, chromeArgs, { stdio: 'inherit' });

if (result.status !== 0 || !existsSync(tmpPath)) {
  console.error('Chrome headless failed.');
  process.exit(1);
}

copyFileSync(tmpPath, finalPath);
unlinkSync(tmpPath);
console.log(`✓ Saved ${finalPath}`);
