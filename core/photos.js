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
 * `--cutout` is a different job on different files: a product already shot
 * against nothing, or with its background removed, that the `product` layout
 * floats on a flat colour. Those must stay PNG with their alpha intact and
 * must NOT be cropped to fill, so they take their own path and their own
 * folder. All this pass does is trim the empty margin, which is what lets the
 * template centre the object rather than centre its bounding box.
 *
 *   node core/photos.js <brand> [--trim-top 16]
 *   node core/photos.js <brand> --cutout
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

/** Cut-outs: keep the alpha, keep the proportions, drop the empty margin. */
async function prepareCutouts(brandId) {
  const root = path.resolve(__dirname, '..');
  const photosDir = path.join(root, 'brands', brandId, 'assets', 'photos');
  const srcDir = path.join(photosDir, 'source');
  const outDir = path.join(photosDir, 'cutout');

  if (!fs.existsSync(srcDir)) {
    console.error(`  no source folder. create ${srcDir} and put cut-outs in it.`);
    return 0;
  }
  // Only formats that can carry transparency. A JPEG has no alpha, so it is
  // not a cut-out however it was produced - saying so beats writing a PNG
  // with a white box baked into it.
  const files = fs.readdirSync(srcDir).filter((f) => /\.(png|webp)$/i.test(f));
  const skipped = fs.readdirSync(srcDir).filter((f) => /\.jpe?g$/i.test(f));
  if (skipped.length) {
    console.error(`  skipped ${skipped.length} JPEG(s) - a JPEG has no transparency, so it cannot be a cut-out:`);
    for (const f of skipped) console.error(`    ${f}`);
  }
  if (!files.length) { console.error('  no PNG or WebP cut-outs found.'); return 0; }

  fs.mkdirSync(outDir, { recursive: true });
  const browser = await chromium.launch({
    executablePath: fs.existsSync(CHROMIUM) ? CHROMIUM : undefined,
    args: ['--no-sandbox'],
  });
  const page = await browser.newPage({ deviceScaleFactor: 1 });
  await page.setContent('<canvas id="c"></canvas>', { waitUntil: 'load' });

  let done = 0, flat = 0;
  for (const file of files) {
    const ext = path.extname(file).slice(1).toLowerCase();
    const src = `data:image/${ext === 'webp' ? 'webp' : 'png'};base64,` +
      fs.readFileSync(path.join(srcDir, file)).toString('base64');

    const out = await page.evaluate(async (dataUri) => {
      const img = new Image();
      img.src = dataUri;
      await img.decode();
      const c = document.getElementById('c');
      c.width = img.naturalWidth; c.height = img.naturalHeight;
      const ctx = c.getContext('2d', { willReadFrequently: true });
      ctx.drawImage(img, 0, 0);
      const { data } = ctx.getImageData(0, 0, c.width, c.height);

      // Bounding box of everything that is not fully transparent.
      let top = c.height, left = c.width, right = -1, bottom = -1;
      for (let y = 0; y < c.height; y++) {
        for (let x = 0; x < c.width; x++) {
          if (data[(y * c.width + x) * 4 + 3] > 8) {
            if (y < top) top = y;
            if (y > bottom) bottom = y;
            if (x < left) left = x;
            if (x > right) right = x;
          }
        }
      }
      // Nothing transparent anywhere: the background was never removed.
      if (right < 0) return { opaque: true };
      const w = right - left + 1, h = bottom - top + 1;
      const opaque = (w === c.width && h === c.height);

      const o = document.createElement('canvas');
      o.width = w; o.height = h;
      o.getContext('2d').drawImage(c, left, top, w, h, 0, 0, w, h);
      return { opaque, w, h, png: o.toDataURL('image/png').split(',')[1] };
    }, src);

    if (out.opaque && !out.png) {
      console.error(`\r  ${file}: no transparency - the background is still on it.`);
      flat++;
      continue;
    }
    if (out.opaque) flat++;
    const base = file.replace(/\.[^.]+$/, '');
    fs.writeFileSync(path.join(outDir, `${base}.png`), Buffer.from(out.png, 'base64'));
    done++;
    process.stdout.write(`\r  cut out ${done}/${files.length}`);
  }

  await browser.close();
  process.stdout.write(`\r  prepared ${done} cut-outs -> ${outDir}\n`);
  if (flat) {
    console.error(`  ${flat} of them had no transparent margin at all - check the background really came off.`);
  }
  return done;
}

if (require.main === module) {
  const args = process.argv.slice(2);
  const brandId = args[0];
  const ti = args.indexOf('--trim-top');
  const trim = ti > -1 ? Number(args[ti + 1]) || 0 : 0;
  if (!brandId) {
    console.error('usage: node core/photos.js <brand> [--trim-top 16]');
    console.error('       node core/photos.js <brand> --cutout');
    process.exit(1);
  }
  if (args.includes('--cutout')) {
    prepareCutouts(brandId).catch((e) => { console.error(e.message); process.exit(1); });
    return;
  }
  prepare(brandId, trim).catch((e) => { console.error(e); process.exit(1); });
}

module.exports = { prepare };
