import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const htmlFile  = join(__dirname, 'mockups.html');
const fileUrl   = `file:///${htmlFile.replace(/\\/g, '/')}`;

const slides = [
  { id: 's1', name: 'screenshot-1-hero' },
  { id: 's2', name: 'screenshot-2-preview' },
  { id: 's3', name: 'screenshot-3-done' },
  { id: 's4', name: 'screenshot-4-manual' },
  { id: 's5', name: 'screenshot-5-multilingual' },
  // Web Store promo tiles (Small 440x280, Marquee 1400x560)
  { id: 't-small',   name: 'promo-small-440x280' },
  { id: 't-marquee', name: 'promo-marquee-1400x560' },
];

const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
const page    = await browser.newPage();
// Viewport must fit the widest element (marquee tile is 1400px wide)
await page.setViewport({ width: 1500, height: 900, deviceScaleFactor: 1 });
await page.goto(fileUrl, { waitUntil: 'networkidle0' });

for (const { id, name } of slides) {
  const el = await page.$(`#${id}`);
  const out = join(__dirname, `${name}.png`);
  await el.screenshot({ path: out, type: 'png', omitBackground: false });
  console.log(`Saved: ${name}.png`);
}

await browser.close();
console.log('Done — 5 screenshots + 2 promo tiles saved in the screenshots folder.');
