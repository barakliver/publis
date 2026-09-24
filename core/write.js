/**
 * write.js - writes next week's content from the brand's voice spec.
 *
 * This is what makes the Monday job produce something new rather than
 * replaying a fixed library. It hands Claude the persona, the rules and the
 * last few weeks that already ran, and gets back a content file in the same
 * shape a human would have written by hand.
 *
 * Needs ANTHROPIC_API_KEY. Without it, nothing here runs and the caller falls
 * back to the newest existing content file - see .github/workflows.
 *
 *   node core/write.js <brand> <week>     e.g. node core/write.js before-i-do 2026-W41
 */

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const Anthropic = require('@anthropic-ai/sdk');

const MODEL = 'claude-opus-5';
const RECENT_WEEKS = 3;   // how much history to show, so it stops repeating itself

/** The last few content files, as plain text, so Claude can see what ran. */
function recentContent(contentDir, week) {
  if (!fs.existsSync(contentDir)) return [];
  return fs.readdirSync(contentDir)
    .filter((f) => f.endsWith('.js') && f !== `${week}.js`)
    .sort()
    .slice(-RECENT_WEEKS)
    .map((f) => ({ week: f.replace('.js', ''),
                   body: fs.readFileSync(path.join(contentDir, f), 'utf8') }));
}

function systemPrompt(brand) {
  const p = brand.persona || {};
  const daysLeft = Math.max(0, Math.round(
    (new Date(brand.product.launch_ends) - new Date()) / 86400000));

  return `אתה כותב.ת תוכן לאינסטגרם עבור המותג "${brand.brand.name}" של ${brand.brand.company}.

## המוצר
${brand.product.what}
מטרה: ${brand.product.purpose}
מחיר השקה ${brand.product.price_launch} ש"ח כולל משלוח, עד ${brand.product.launch_ends} (${daysLeft} ימים מהיום). אחר כך ${brand.product.price_regular} ש"ח + משלוח.
אתר: ${brand.brand.website}

## הקהל
${brand.audience.primary}
משני: ${brand.audience.secondary}
הכאב: ${String(brand.audience.pain).trim()}

## מה המוצר באמת מוכר — כל פוסט הוא אחד מהשלושה האלה
${(p.sells || []).map((x) => `- ${x}`).join('\n')}

## הקול — זו הנקודה הכי חשובה
הכותב.ת ${p.name ? `היא ${p.name}` : 'הוא המותג'}. ${p.who || ''}
${p.stance || ''}

### הרגיסטר — זו הנקודה שהלקוח תיקן פעמיים. תקרא.י אותה שוב לפני כל שורה.
${p.register || ''}
${(p.register_rules || []).map((r) => `- ${r}`).join('\n')}

מבחן לכל משפט: האם אפשר לדמיין אותו בהודעת וואטסאפ לחבר.ה טוב.ה?
אם כן — טוב. אם הוא נשמע כמו כרזה או כמו סלוגן — לזרוק ולכתוב מחדש.

משפטי מפתח שחוזרים:
${(p.signature_lines || []).map((l) => `- "${l}"`).join('\n')}

פתיחים אופייניים: ${(p.openers || []).join(' · ')}
שפה: ${(p.vocabulary?.use || []).join(' · ')}
מטאפורות: ${(p.vocabulary?.metaphors || []).join(' · ')}
לועגת ל: ${(p.vocabulary?.mock || []).join(' · ')}

כללי כתיבה:
- גוף ראשון. דעה קודם, הסבר אחר כך. לא פסקנות מלמעלה — מישהי שהייתה שם.
- כמה שפחות ציווי. ״זוג חברים שלי עשה ככה״ עדיף על ״תעשו ככה״.
- מותר להסס, לצחוק על עצמה, לסייג. ״אני יודעת איך זה נשמע״.
- סצנות עם שם, לא אמירות מופשטות. "הדודה שחייבת הזמנה" ולא "מתחים משפחתיים".
- אימוג'ים: מעט, מדויקים. אף פעם לא שורה שלמה.
- פנייה לשני בני הזוג. יחיד בצורה עם נקודה: "מתרגש.ת", "מפחד.ת". רבים: "אתם".
- אסור בשום אופן: ${(brand.rules.forbidden_words || []).join(', ')}
- אימוג'ים אסורים: ${(brand.rules.banned_emoji || []).join(' ')}
- כאב ספציפי ולא מופשט: ${p.vocabulary?.pain_points || ''}
- משפטים קצרים. פסקה של שורה אחת. פתיחה שמפסיקה גלילה, בלי התחממות.
- אסור לפרסם רשימה של הקלפים. אפשר לרמוז על נושא של קלף אחד ככותרת.
- מחיר מוזכר תמיד יחד עם תאריך סיום ההשקה.

## הפורמט
כל פוסט הוא קרוסלה של 4 עד 6 שקפים.
- שקף 1 חייב להרוויח את ההחלקה. דעה, קרס, או שאלה לא נוחה.
- שקף אחד = רעיון אחד. טקסט קצר. הכותרת עד 40 תווים, תת־כותרת עד 90.
- השקף האחרון מבקש משהו: לינק בביו, שמירה, או תיוג.

layout לכל שקף:
- "statement" — רקע קרם. ברירת המחדל.
- "dark" — רקע כחול. לשקף האחרון ולמסרים חדים.
- "dilemma" — במקום headline, שדה dilemma עם שתי אפשרויות קצרות.
- "photo" — דורש שדה photo עם אחד מ: ${(brand._photos || []).join(', ') || 'אין צילומים זמינים'}.

שדות אפשריים בשקף: layout, headline, subline, dilemma, photo, badge, cta.
badge ו-cta רק בשקף האחרון.

## התמהיל לשבוע
${brand.schedule.posts_per_day * 7} פוסטים, ${brand.schedule.stories_per_day * 7} סטורי.
pillar לכל פוסט: pain / value / identity / social_proof / sell.
בערך: 6 sell, 6 value, 5 pain, 3 identity, 1 social_proof.

caption: 3-6 שורות. זה המקום שבו הקול חי — שם מותר לנשום, לספר סצנה קטנה
ולהתפזר קצת. מסתיים בקריאה לפעולה, אבל כזו שנשמעת כמו המלצה של חברה ולא
כמו באנר.
hashtags: שורה אחת.

סטורי הם תמונה בודדת (בלי slides). שדות: pillar, layout, headline, subline, dilemma, photo, cta.
מי שנושא סטיקר לינק או סקר מקבל manual: true (ואם זה סקר, גם poll: true). 5-6 כאלה בשבוע.

## הפלט
JSON בלבד. בלי הסבר, בלי markdown, בלי גדרות קוד. המבנה:
{"posts":[{"pillar":"...","slides":[{...}],"caption":"...","hashtags":"..."}],
 "stories":[{"pillar":"...","layout":"...","headline":"...","subline":"...","cta":"...","manual":true}]}`;
}

function userPrompt(week, recent) {
  const history = recent.length
    ? recent.map((r) => `### ${r.week}\n${r.body}`).join('\n\n')
    : '(אין סבבים קודמים)';

  return `כתוב.י את התוכן לשבוע ${week}.

הסבבים האחרונים שכבר פורסמו נמצאים למטה. **אל תחזור.י עליהם** — לא על הכותרות,
לא על הזוויות, ולא על אותן סצנות. אותו קול, נושאים חדשים.

${history}

עכשיו תן.י לי את ה-JSON לשבוע ${week}.`;
}

/** The generated JSON has to be usable by plan.js before it is written to disk. */
function validate(data, brand) {
  const wantPosts = brand.schedule.posts_per_day * 7;
  const wantStories = brand.schedule.stories_per_day * 7;
  const errs = [];

  if (!Array.isArray(data.posts) || !data.posts.length) errs.push('posts missing');
  if (!Array.isArray(data.stories) || !data.stories.length) errs.push('stories missing');
  if (errs.length) return errs;

  if (data.posts.length !== wantPosts) errs.push(`posts: got ${data.posts.length}, want ${wantPosts}`);
  if (data.stories.length !== wantStories) errs.push(`stories: got ${data.stories.length}, want ${wantStories}`);

  const banned = brand.rules.forbidden_words || [];
  const text = JSON.stringify(data);
  for (const w of banned) if (text.includes(w)) errs.push(`forbidden word: ${w}`);

  data.posts.forEach((p, i) => {
    if (!Array.isArray(p.slides) || p.slides.length < 3) errs.push(`post ${i + 1}: needs 3+ slides`);
    if (!p.caption) errs.push(`post ${i + 1}: no caption`);
    for (const s of p.slides || []) {
      if (!s.headline && !s.dilemma) errs.push(`post ${i + 1}: a slide has no text`);
      if (s.layout === 'photo' && !s.photo) errs.push(`post ${i + 1}: photo slide with no photo`);
    }
  });
  return errs;
}

/** Emit the same shape a hand-written content file has, so nothing downstream changes. */
function toModule(week, data) {
  const body = JSON.stringify({ week, posts: data.posts, stories: data.stories }, null, 2);
  return `/**
 * Content for round ${week}. Generated from the brand voice spec in brand.yaml.
 *
 * Written by core/write.js on ${new Date().toISOString().slice(0, 10)}.
 * Edit freely - once it is on disk it is an ordinary content file.
 */

module.exports = ${body};
`;
}

async function writeWeek(brandId, week) {
  const root = path.resolve(__dirname, '..');
  const brandDir = path.join(root, 'brands', brandId);
  const brand = yaml.load(fs.readFileSync(path.join(brandDir, 'brand.yaml'), 'utf8'));

  const photoDir = path.join(brandDir, 'assets', 'photos', 'post');
  brand._photos = fs.existsSync(photoDir)
    ? fs.readdirSync(photoDir).filter((f) => /\.(jpe?g|png)$/i.test(f)).map((f) => f.replace(/\.[^.]+$/, ''))
    : [];

  const contentDir = path.join(brandDir, 'content');
  const recent = recentContent(contentDir, week);

  const client = new Anthropic();
  let lastErrs = [];

  // Two attempts: the second one is told exactly what was wrong with the first.
  for (let attempt = 1; attempt <= 2; attempt++) {
    const messages = [{ role: 'user', content: userPrompt(week, recent) }];
    if (attempt === 2) {
      messages.push({ role: 'assistant', content: '(פלט קודם נדחה)' });
      messages.push({ role: 'user', content:
        `הפלט הקודם לא עבר בדיקה:\n${lastErrs.map((e) => `- ${e}`).join('\n')}\n\nתקן.י ותן.י JSON מלא מחדש.` });
    }

    const stream = client.messages.stream({
      model: MODEL,
      max_tokens: 64000,
      thinking: { type: 'adaptive' },
      output_config: { effort: 'high' },
      system: [{ type: 'text', text: systemPrompt(brand), cache_control: { type: 'ephemeral' } }],
      messages,
    });
    const response = await stream.finalMessage();

    if (response.stop_reason === 'refusal') {
      throw new Error(`refused: ${response.stop_details?.explanation || 'no reason given'}`);
    }
    if (response.stop_reason === 'max_tokens') {
      lastErrs = ['הפלט נקטע באמצע — קצר.י'];
      continue;
    }

    const raw = response.content.filter((b) => b.type === 'text').map((b) => b.text).join('');
    const json = raw.slice(raw.indexOf('{'), raw.lastIndexOf('}') + 1);

    let data;
    try {
      data = JSON.parse(json);
    } catch (e) {
      lastErrs = [`JSON לא תקין: ${e.message}`];
      continue;
    }

    const errs = validate(data, brand);
    if (errs.length) { lastErrs = errs; continue; }

    fs.mkdirSync(contentDir, { recursive: true });
    const out = path.join(contentDir, `${week}.js`);
    fs.writeFileSync(out, toModule(week, data));

    const u = response.usage;
    const cost = (u.input_tokens * 5 + u.output_tokens * 25) / 1e6;
    return { file: out, posts: data.posts.length, stories: data.stories.length,
             attempt, cost: cost.toFixed(2) };
  }

  throw new Error(`could not produce valid content after 2 attempts:\n${lastErrs.join('\n')}`);
}

if (require.main === module) {
  const [brandId, week] = process.argv.slice(2);
  if (!brandId || !week) {
    console.error('usage: node core/write.js <brand> <week>');
    process.exit(1);
  }
  if (!process.env.ANTHROPIC_API_KEY) {
    console.error('  ANTHROPIC_API_KEY is not set - skipping generation');
    process.exit(2);
  }
  writeWeek(brandId, week)
    .then((r) => console.log(
      `  wrote ${r.posts} posts + ${r.stories} stories -> ${r.file}\n` +
      `  (attempt ${r.attempt}, about $${r.cost})`))
    .catch((e) => { console.error(`  ${e.message}`); process.exit(1); });
}

module.exports = { writeWeek };
