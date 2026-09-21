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
const yaml = require('js-yaml');
const { chromium } = require('playwright-core');

const CHROMIUM = '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';

async function renderRound(brandId, roundDir) {
  const root = path.resolve(__dirname, '..');
  const brandDir = path.join(root, 'brands', brandId);
  const brand = yaml.load(fs.readFileSync(path.join(brandDir, 'brand.yaml'), 'utf8'));

  // A brand may not have its own templates yet; fall back to the shared ones.
  const ownTemplate = path.join(brandDir, 'templates', 'template.html');
  const templatePath = fs.existsSync(ownTemplate)
    ? ownTemplate
    : path.join(root, 'brands', 'before-i-do', 'templates', 'template.html');
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

  // Hand the template everything brand-specific. Asset paths are resolved
  // here, against this brand's folder, and dropped when the file is absent -
  // a brand with no logo renders its name as type instead.
  const rel = (p) => {
    if (!p) return null;
    const abs = path.join(brandDir, p);
    if (!fs.existsSync(abs)) return null;
    return path.relative(path.dirname(templatePath), abs).split(path.sep).join('/');
  };
  const a = brand.visual?.assets || {};
  await page.evaluate((b) => { window.BRAND = b; }, {
    name: brand.brand?.name || brandId,
    colors: brand.visual?.colors || {},
    mark: rel(a.heart || a.mark),
    wordmarks: {
      light: rel(a.wordmark_brand),
      dark: rel(a.wordmark_brand_dark),
      company: { light: rel(a.wordmark_company), dark: rel(a.wordmark_company_dark) },
    },
  });
  await page.evaluate(() => document.fonts.ready);

  const total = round.items.reduce((n, it) => n + it.slides.length, 0);
  let done = 0;
  for (const item of round.items) {
    item.images = [];
    for (let i = 0; i < item.slides.length; i++) {
      // Slide-level fields win; the item carries the shared ones (format, cta).
      const slide = { format: item.format, ...item.slides[i] };
      const pos = { index: i, total: item.slides.length };
      const size = await page.evaluate(([sl, ps]) => window.render(sl, ps), [slide, pos]);
      await page.setViewportSize({ width: size.w, height: size.h });
      await page.evaluate(() => document.fonts.ready);

      const name = item.slides.length > 1
        ? `${item.id}-${String(i + 1).padStart(2, '0')}.png`
        : `${item.id}.png`;
      await page.locator('#canvas').screenshot({ path: path.join(imagesDir, name) });
      item.images.push(`images/${name}`);
      done++;
      process.stdout.write(`\r  rendered ${done}/${total}`);
    }
    item.image = item.images[0];   // the cover, for previews
  }

  await browser.close();
  fs.writeFileSync(path.join(roundPath, 'round.json'), JSON.stringify(round, null, 2));
  process.stdout.write(`\r  rendered ${done}/${total} images\n`);
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
