/**
 * photos.js - prepares a brand's photo library.
 *
 * Drop any photo into brands/<brand>/assets/photos/source/ and run this. It
 * writes correctly framed copies into photos/post/ (1080x1350) and
 * photos/story/ (1080x1920), which the `photo` layout then uses by name.
 *
 * `--trim-top <pct>` crops a band off the top first. The brand's existing
 * artwork has the heart burned into the top of the frame; the template draws
 * its own, so that band has to go or the mark appears twice.
 *
 *   node core/photos.js <brand> [--trim-top 16]
 */

const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright-core');

const CHROMIUM = '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';
const SIZES = { post: [1080, 1350], story: [1080, 1920] };

async function prepare(brandId, trimTopPct = 0) {
  const root = path.resolve(__dirname, '..');
  const photosDir = path.join(root, 'brands', brandId, 'assets', 'photos');
  const srcDir = path.join(photosDir, 'source');

  if (!fs.existsSync(srcDir)) {
    console.error(`  no source folder. create ${srcDir} and put photos in it.`);
    return 0;
  }
  const files = fs.readdirSync(srcDir).filter((f) => /\.(jpe?g|png|webp)$/i.test(f));
  if (!files.length) { console.error(`  ${srcDir} is empty.`); return 0; }

  for (const kind of Object.keys(SIZES)) {
    fs.mkdirSync(path.join(photosDir, kind), { recursive: true });
  }

  const browser = await chromium.launch({
    executablePath: fs.existsSync(CHROMIUM) ? CHROMIUM : undefined,
    args: ['--no-sandbox'],
  });
  const page = await browser.newPage({ deviceScaleFactor: 1 });

  let done = 0;
  for (const file of files) {
    const base = file.replace(/\.[^.]+$/, '');
    // Inlined as a data URI: a page built with setContent has an about:blank
    // origin and is not allowed to read file://, so a path would never load.
    const ext = path.extname(file).slice(1).toLowerCase();
    const mime = ext === 'png' ? 'image/png' : ext === 'webp' ? 'image/webp' : 'image/jpeg';
    const src = `data:${mime};base64,` +
      fs.readFileSync(path.join(srcDir, file)).toString('base64');

    for (const [kind, [w, h]] of Object.entries(SIZES)) {
      // A cropping frame: the image fills it by cover, shifted up by the trim
      // so the discarded band falls outside the box rather than inside it.
      await page.setViewportSize({ width: w, height: h });
      await page.setContent(`
        <style>
          html,body{margin:0;background:#000}
          .box{width:${w}px;height:${h}px;overflow:hidden;position:relative}
          img{position:absolute;left:50%;top:-${trimTopPct}%;transform:translateX(-50%);
              width:${100 + trimTopPct * 1.6}%;height:${100 + trimTopPct * 1.6}%;
              object-fit:cover;object-position:center}
        </style>
        <div class="box"><img src="${src}"></div>
      `, { waitUntil: 'load' });
      await page.waitForFunction(() => {
        const i = document.querySelector('img');
        return i && i.complete && i.naturalWidth > 0;
      }, { timeout: 15000 });

      await page.locator('.box').screenshot({
        path: path.join(photosDir, kind, `${base}.jpg`),
        type: 'jpeg', quality: 88,
      });
    }
    done++;
    process.stdout.write(`\r  prepared ${done}/${files.length}`);
  }

  await browser.close();
  process.stdout.write(`\r  prepared ${done} photos -> ${photosDir}/{post,story}\n`);
  return done;
}

if (require.main === module) {
  const args = process.argv.slice(2);
  const brandId = args[0];
  const ti = args.indexOf('--trim-top');
  const trim = ti > -1 ? Number(args[ti + 1]) || 0 : 0;
  if (!brandId) {
    console.error('usage: node core/photos.js <brand> [--trim-top 16]');
    process.exit(1);
  }
  prepare(brandId, trim).catch((e) => { console.error(e); process.exit(1); });
}

module.exports = { prepare };
