/**
 * package.js - builds a ready-to-post folder for whoever publishes by hand.
 *
 * Until Metricool is connected, someone opens Instagram and posts. This gives
 * them a folder they can work straight down: one folder per day, one per post,
 * slides numbered in swipe order, the caption sitting next to them, and the
 * items Instagram will not let an API publish marked in the filename itself.
 *
 *   node core/package.js <brand> <round-dir>
 */

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const DAY_FILE = { 'ראשון': 'sun', 'שני': 'mon', 'שלישי': 'tue', 'רביעי': 'wed',
                   'חמישי': 'thu', 'שישי': 'fri', 'שבת': 'sat' };

function buildPackage(brandId, roundDir) {
  const roundPath = path.resolve(roundDir);
  const round = JSON.parse(fs.readFileSync(path.join(roundPath, 'round.json'), 'utf8'));

  const outName = `BeforeIDo-${round.week}`;
  const outDir = path.join(roundPath, outName);
  fs.rmSync(outDir, { recursive: true, force: true });
  fs.mkdirSync(outDir, { recursive: true });

  // Group by date so the folder reads like the week.
  const byDate = new Map();
  for (const item of round.items) {
    if (!byDate.has(item.date)) byDate.set(item.date, []);
    byDate.get(item.date).push(item);
  }

  const allCaptions = [
    `${round.brand_name} — סבב ${round.week}`,
    `${round.starts} עד ${round.ends}`,
    '',
    'כל הטקסטים לפרסום, לפי הסדר. אפשר להעתיק ישירות מכאן.',
    '='.repeat(60), '',
  ];

  let dayNo = 0;
  for (const [date, items] of [...byDate.entries()].sort()) {
    dayNo++;
    const [, mm, dd] = date.split('-');
    const dayHe = items[0].day_he;
    const dayDir = path.join(outDir, `day-${dayNo}-${DAY_FILE[dayHe] || 'day'}-${dd}.${mm}`);
    fs.mkdirSync(dayDir, { recursive: true });

    allCaptions.push('', '#'.repeat(60), `יום ${dayHe}  ${dd}.${mm}`, '#'.repeat(60));

    for (const item of items.sort((a, b) => a.time.localeCompare(b.time))) {
      const hhmm = item.time.replace(':', '');
      const manual = item.manual ? '-MANUAL' : '';
      const cover = (item.slides && item.slides[0]) || item;
      const title = cover.dilemma ? cover.dilemma.join(' / ') : (cover.headline || '');

      const caption = [
        `${item.format === 'story' ? 'סטורי' : 'פוסט'} · יום ${dayHe} · ${item.time}`,
        item.manual ? '⚠️  העלאה ידנית — יש סטיקר לינק או סקר. אינסטגרם לא מאפשרת לתזמן את זה.' : '',
        '-'.repeat(50),
        item.caption || title,
        '',
        item.hashtags || '',
      ].filter(Boolean).join('\n');

      allCaptions.push('', `[${item.time}] ${item.id}${item.manual ? '  ⚠️ ידני' : ''}`,
        '-'.repeat(50), title, '', item.caption || '', item.hashtags || '');

      if (item.images && item.images.length > 1) {
        // A carousel: its own folder, slides numbered in swipe order.
        const postDir = path.join(dayDir, `${hhmm}-${item.id}-carousel${manual}`);
        fs.mkdirSync(postDir, { recursive: true });
        item.images.forEach((rel, i) => {
          fs.copyFileSync(path.join(roundPath, rel),
                          path.join(postDir, `slide-${i + 1}.png`));
        });
        fs.writeFileSync(path.join(postDir, 'caption.txt'), caption);
      } else {
        const rel = (item.images && item.images[0]) || item.image;
        const base = `${hhmm}-${item.id}${manual}`;
        fs.copyFileSync(path.join(roundPath, rel), path.join(dayDir, `${base}.png`));
        fs.writeFileSync(path.join(dayDir, `${base}.txt`), caption);
      }
    }
  }

  fs.writeFileSync(path.join(outDir, 'ALL-CAPTIONS.txt'), allCaptions.join('\n'));
  fs.writeFileSync(path.join(outDir, 'READ-ME-FIRST.txt'), readme(round));

  const zipPath = path.join(roundPath, `${outName}.zip`);
  fs.rmSync(zipPath, { force: true });
  execFileSync('zip', ['-rq', zipPath, outName], { cwd: roundPath });

  return { outDir, zipPath, size: fs.statSync(zipPath).size };
}

function readme(round) {
  return `${round.brand_name} — סבב ${round.week}
${round.starts} עד ${round.ends}

${round.counts.posts} פוסטים (קרוסלות) · ${round.counts.stories} סטורי · ${round.counts.slides} תמונות


איך עובדים עם התיקייה הזאת
============================

תיקייה לכל יום, לפי הסדר. בתוך כל יום, הקבצים מסודרים לפי שעת הפרסום.

  day-1-mon-28.09/
    0900-post-01-carousel/     <- פוסט קרוסלה
        slide-1.png ... slide-6.png   <- מעלים בסדר הזה
        caption.txt                    <- הטקסט להעתקה
    1030-story-01-MANUAL.png   <- סטורי
    1030-story-01-MANUAL.txt


פוסט קרוסלה
-----------
1. פותחים את תיקיית הפוסט.
2. באינסטגרם: + ‑> בחירה מרובה ‑> מסמנים את slide-1 עד הסוף, לפי הסדר.
   הסדר קובע. slide-1 הוא מה שרואים בפיד.
3. מעתיקים את caption.txt לתיאור.


סטורי
-----
מעלים את התמונה כמו שהיא.


⚠️  קבצים עם MANUAL בשם
-----------------------
אלה נושאים סטיקר לינק או סקר. אינסטגרם לא מאפשרת להוסיף אותם דרך
שום כלי תזמון — לא Metricool ולא אחר. צריך להעלות אותם מהאפליקציה
ולהוסיף את הסטיקר ביד. זה 20 שניות, והם הכי ממירים בסבב.

בסבב הזה: ${round.counts.manual} פריטים כאלה.


ALL-CAPTIONS.txt
----------------
כל הטקסטים של השבוע בקובץ אחד, לפי הסדר. נוח אם עובדים מהמחשב.
`;
}

if (require.main === module) {
  const [brandId, roundDir] = process.argv.slice(2);
  if (!brandId || !roundDir) {
    console.error('usage: node core/package.js <brand> <round-dir>');
    process.exit(1);
  }
  const r = buildPackage(brandId, roundDir);
  console.log(`  package -> ${r.zipPath} (${(r.size / 1024 / 1024).toFixed(1)} MB)`);
}

module.exports = { buildPackage };
