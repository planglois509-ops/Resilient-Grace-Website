import puppeteer from 'puppeteer-core';
import { existsSync } from 'node:fs';

const exec = ['C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'].find(p => existsSync(p));

const browser = await puppeteer.launch({ executablePath: exec, headless: 'new', args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
await page.goto('http://localhost:3000/', { waitUntil: 'networkidle0' });
await new Promise(r => setTimeout(r, 4000));
const result = await page.evaluate(() => {
  const h1 = document.querySelector('h1');
  const cs = h1 ? window.getComputedStyle(h1) : null;
  return {
    h1Text: h1?.textContent?.slice(0, 60),
    h1Opacity: cs?.opacity,
    h1Transform: cs?.transform,
    h1Visibility: cs?.visibility,
    h1Display: cs?.display,
    rect: h1?.getBoundingClientRect(),
    hasReduceMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  };
});
console.log(JSON.stringify(result, null, 2));
await browser.close();
