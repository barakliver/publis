/**
 * render.js - turns content items into PNG images.
 *
 * Opens the brand's template.html in a headless Chromium, hands it one item
 * at a time, and screenshots the result. Chromium is used because it lays out
 * Hebrew right-to-left correctly; most image libraries do not, which is how
 * reversed Hebrew ends up in a finished post.
 *
 *   node core/render.js <brand> <round-dir>
 */

const path = require('path');
const fs = require('fs');
const { chromium } = require('playwright-core');

const CHROMIUM = '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';

async function renderRound(brandId, roundDir) {
  const root = path.resolve(__dirname, '..');
  const templatePath = path.join(root, 'brands', brandId, 'templates', 'template.html');
  const roundPath = path.resolve(roundDir);
  const round = JSON.parse(fs.readFileSync(path.join(roundPath, 'round.json'), 'utf8'));
  const imagesDir = path.join(roundPath, 'images');
  fs.mkdirSync(imagesDir, { recursive: true });

  const browser = await chromium.launch({
    executablePath: fs.existsSync(CHROMIUM) ? CHROMIUM : undefined,
    args: ['--no-sandbox', '--font-render-hinting=none'],
  });
  const page = await browser.newPage({ deviceScaleFactor: 1 });
  await page.goto('file://' + templatePath, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);

  let done = 0;
  for (const item of round.items) {
    const size = await page.evaluate((it) => window.render(it), item);
    await page.setViewportSize({ width: size.w, height: size.h });
    await page.evaluate(() => document.fonts.ready);

    const file = path.join(imagesDir, `${item.id}.png`);
    await page.locator('#canvas').screenshot({ path: file });
    item.image = `images/${item.id}.png`;
    done++;
    process.stdout.write(`\r  rendered ${done}/${round.items.length}`);
  }

  await browser.close();
  fs.writeFileSync(path.join(roundPath, 'round.json'), JSON.stringify(round, null, 2));
  process.stdout.write(`\r  rendered ${done}/${round.items.length} images\n`);
  return done;
}

if (require.main === module) {
  const [brandId, roundDir] = process.argv.slice(2);
  if (!brandId || !roundDir) {
    console.error('usage: node core/render.js <brand> <round-dir>');
    process.exit(1);
  }
  renderRound(brandId, roundDir).catch((err) => {
    console.error(err);
    process.exit(1);
  });
}

module.exports = { renderRound };
