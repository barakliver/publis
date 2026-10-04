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

  // Days this brand does not post on. A shomer-shabbat bakery does not publish
  // on Shabbat, and filling the week mechanically would have scheduled one.
  // Named in Hebrew so brand.yaml reads the way the owner thinks about it.
  const skip = new Set(s.skip_days || []);
  // How much a week can actually hold. More content than slots used to wrap
  // silently back onto day one and stack two items on the same time - which
  // looks fine in the round and loses a post in real life.
  const capacity = (perDay) => Math.max(0, (7 - (s.skip_days || []).length)) * perDay;
  const checkFits = (n, perDay, what) => {
    const cap = capacity(perDay);
    if (n > cap) {
      throw new Error(
        `${n} ${what} do not fit one week: ${cap} slots ` +
        `(${7 - (s.skip_days || []).length} posting days x ${perDay} a day). ` +
        `Split them across rounds.`);
    }
  };
  const runDays = HEB_DAYS.map((name, i) => ({ name, i })).filter((d) => !skip.has(d.name));
  if (!runDays.length) throw new Error('schedule.skip_days leaves no day to post on');
  // Day N of the round maps to the Nth day the brand actually posts.
  const dayOffset = (n) => runDays[n % runDays.length].i;

  // Content that names a day is PINNED to it. A bakery whose loaves come out
  // on a rota writes "today is Monday, the babila is back" - and that line is
  // simply false if the planner drops it on Tuesday because of where it sat in
  // the array. Position is a default, never a fact.
  const pinnedDay = (item, fallback) => {
    if (!item.day) return fallback;
    const i = HEB_DAYS.indexOf(item.day);
    if (i < 0) throw new Error(`unknown day "${item.day}" - use one of ${HEB_DAYS.join(', ')}`);
    if (skip.has(item.day)) throw new Error(`content pinned to ${item.day}, which schedule.skip_days excludes`);
    return i;
  };

  checkFits(content.posts.length, s.post_times.length, 'posts');
  checkFits(content.stories.length, s.story_times.length, 'stories');

  // Posts: fill day by day, one per configured time slot.
  // A post is always a slides[] array - a single image is just a carousel of
  // one, so nothing downstream needs two code paths.
  content.posts.forEach((post, i) => {
    const day = pinnedDay(post, dayOffset(Math.floor(i / s.post_times.length)));
    const slot = i % s.post_times.length;
    const date = addDays(monday, day);
    const { slides, day: _pinned, ...rest } = post;
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
  // A story can be one frame or a sequence the viewer taps through. Instagram
  // has no swipeable CAROUSEL in stories - that is a post format - but a run
  // of consecutive frames is exactly how a story works, and it is the shape
  // this brand's brief asks for: hook, process, close-up, call to action.
  content.stories.forEach((story, i) => {
    const day = pinnedDay(story, dayOffset(Math.floor(i / s.story_times.length)));
    const slot = i % s.story_times.length;
    const date = addDays(monday, day);
    const { slides, day: _pinned, ...rest } = story;
    const frames = (slides && slides.length) ? slides : [story];
    items.push({
      id: `story-${String(i + 1).padStart(2, '0')}`,
      format: 'story',
      channel: 'instagram',
      date: ymd(date),
      day_he: HEB_DAYS[day % 7],
      time: s.story_times[slot],
      status: 'draft',
      type: frames.length > 1 ? 'sequence' : 'single',
      ...rest,
      slides: frames,
    });
  });

  items.sort((a, b) => (a.date + a.time).localeCompare(b.date + b.time));

  const round = {
    brand: brandId,
    brand_name: brand.brand.name,
    whatsapp: brand.brand.whatsapp || '',
    kind: brand.brand.kind || '',
    instagram: brand.brand.instagram || '',
    // Carried so the app can wear each business's own colours - switching
    // between them has to be unmistakable, not a change of heading.
    colors: brand.visual?.colors || {},
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
