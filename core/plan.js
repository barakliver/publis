/**
 * plan.js - turns a content file into a dated round.
 *
 * Reads the brand's schedule from brand.yaml and stamps each piece of content
 * with a real date, time and id. Nothing here knows anything about a specific
 * brand, which is what makes adding a brand a matter of adding a folder.
 *
 *   node core/plan.js <brand> <week>        e.g. node core/plan.js before-i-do 2026-W40
 */

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

/** Monday of an ISO week, e.g. "2026-W40". */
function isoWeekStart(week) {
  const [year, w] = week.split('-W').map(Number);
  const jan4 = new Date(Date.UTC(year, 0, 4));
  const dayOfWeek = jan4.getUTCDay() || 7;
  const monday = new Date(jan4);
  monday.setUTCDate(jan4.getUTCDate() - dayOfWeek + 1 + (w - 1) * 7);
  return monday;
}

function addDays(date, n) {
  const d = new Date(date);
  d.setUTCDate(d.getUTCDate() + n);
  return d;
}

const ymd = (d) => d.toISOString().slice(0, 10);
const HEB_DAYS = ['שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת', 'ראשון'];

function buildRound(brandId, week) {
  const root = path.resolve(__dirname, '..');
  const brandDir = path.join(root, 'brands', brandId);
  const brand = yaml.load(fs.readFileSync(path.join(brandDir, 'brand.yaml'), 'utf8'));
  const content = require(path.join(brandDir, 'content', `${week}.js`));

  const s = brand.schedule;
  const monday = isoWeekStart(week);
  const items = [];

  // Posts: fill day by day, one per configured time slot.
  // A post is always a slides[] array - a single image is just a carousel of
  // one, so nothing downstream needs two code paths.
  content.posts.forEach((post, i) => {
    const day = Math.floor(i / s.post_times.length);
    const slot = i % s.post_times.length;
    const date = addDays(monday, day);
    const { slides, ...rest } = post;
    items.push({
      id: `post-${String(i + 1).padStart(2, '0')}`,
      format: 'post',
      type: (slides && slides.length > 1) ? 'carousel' : 'single',
      channel: 'instagram',
      date: ymd(date),
      day_he: HEB_DAYS[day % 7],
      time: s.post_times[slot],
      status: 'draft',
      ...rest,
      slides: slides || [{ layout: post.layout, headline: post.headline, subline: post.subline }],
    });
  });

  // Stories: same idea, on their own time slots.
  content.stories.forEach((story, i) => {
    const day = Math.floor(i / s.story_times.length);
    const slot = i % s.story_times.length;
    const date = addDays(monday, day);
    items.push({
      id: `story-${String(i + 1).padStart(2, '0')}`,
      format: 'story',
      channel: 'instagram',
      date: ymd(date),
      day_he: HEB_DAYS[day % 7],
      time: s.story_times[slot],
      status: 'draft',
      type: 'single',
      ...story,
      slides: [story],
    });
  });

  items.sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time));

  const round = {
    brand: brandId,
    brand_name: brand.brand.name,
    whatsapp: brand.brand.whatsapp || '',
    week,
    starts: ymd(monday),
    ends: ymd(addDays(monday, 6)),
    timezone: s.timezone,
    mode: process.env.PUBLISH_MODE || 'dry',
    generated_at: new Date().toISOString(),
    approval: { status: 'pending', approved_by: null, approved_at: null },
    counts: {
      posts: content.posts.length,
      stories: content.stories.length,
      manual: items.filter((i) => i.manual).length,
      carousels: items.filter((i) => i.type === 'carousel').length,
      slides: items.reduce((n, i) => n + i.slides.length, 0),
    },
    items,
  };

  const outDir = path.join(root, 'rounds', brandId, week);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'round.json'), JSON.stringify(round, null, 2));
  return { round, outDir };
}

if (require.main === module) {
  const [brandId, week] = process.argv.slice(2);
  if (!brandId || !week) {
    console.error('usage: node core/plan.js <brand> <week>');
    process.exit(1);
  }
  const { round, outDir } = buildRound(brandId, week);
  console.log(
    `  planned ${round.counts.posts} posts (${round.counts.carousels} carousels) ` +
    `+ ${round.counts.stories} stories\n` +
    `  ${round.counts.slides} slides to render, ${round.counts.manual} need manual publishing\n` +
    `  -> ${outDir}/round.json`
  );
}

module.exports = { buildRound };
