import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const htmlFile  = join(__dirname, 'mockups.html');
const fileUrl   = `file:///${htmlFile.replace(/\\/g, '/')}`;

const slides = [
  { id: 's1', name: '1-hero' },
  { id: 's2', name: '2-preview' },
  { id: 's3', name: '3-done' },
  { id: 's4', name: '4-manual' },
  { id: 's5', name: '5-multilingual' },
];

const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
const page    = await browser.newPage();
await page.setViewport({ width: 1280, height: 800, deviceScaleFactor: 1 });
await page.goto(fileUrl, { waitUntil: 'networkidle0' });

for (const { id, name } of slides) {
  const el = await page.$(`#${id}`);
  const out = join(__dirname, `screenshot-${name}.png`);
  await el.screenshot({ path: out, type: 'png', omitBackground: false });
  console.log(`Saved: screenshot-${name}.png`);
}

await browser.close();
console.log('Done — 5 screenshots saved in the screenshots folder.');
