// Viewport-bounded screenshots for visual review.
// Usage: node snapshot.mjs <url> <label> [mobile|desktop|full] [scrollY?]

import { spawnSync } from 'node:child_process';
import { mkdirSync, copyFileSync, unlinkSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { tmpdir } from 'node:os';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SHOTS_DIR = join(__dirname, 'temporary screenshots');
const TMP_DIR = tmpdir();

const CHROME_PATHS = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
];

const args = process.argv.slice(2);
const url = args[0] || 'http://localhost:3000';
const label = args[1] || 'snap';
const mode = args[2] || 'mobile';

let W = 390, H = 844;
if (mode === 'desktop') { W = 1440; H = 900; }
else if (mode === 'full') { W = 1440; H = 8000; }
else if (mode === 'mobile-full') { W = 390; H = 6500; }

const chrome = CHROME_PATHS.find((p) => existsSync(p));
if (!chrome) {
  console.error('No Chrome/Edge found.');
  process.exit(1);
}

mkdirSync(SHOTS_DIR, { recursive: true });
const filename = `snap-${Date.now()}-${label}.png`;
const tmpPath = join(TMP_DIR, filename);
const finalPath = join(SHOTS_DIR, filename);

const chromeArgs = [
  '--headless=new',
  '--disable-gpu',
  '--hide-scrollbars',
  '--no-sandbox',
  '--force-device-scale-factor=1',
  `--window-size=${W},${H}`,
  '--default-background-color=ffffffff',
  '--virtual-time-budget=6000',
  `--screenshot=${tmpPath}`,
  url,
];

console.log(`→ ${mode} ${W}x${H} ${url}`);
const result = spawnSync(chrome, chromeArgs, { stdio: 'inherit' });
if (result.status !== 0 || !existsSync(tmpPath)) {
  console.error('Chrome headless failed.');
  process.exit(1);
}
copyFileSync(tmpPath, finalPath);
unlinkSync(tmpPath);
console.log(`✓ ${finalPath}`);
