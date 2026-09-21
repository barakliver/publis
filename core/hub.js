/**
 * hub.js - builds the front door.
 *
 * One page listing every business, each with its current round. This is what
 * the team installs on their phone; the per-round pages hang off it. It reads
 * whatever is under brands/, so adding a business really is adding a folder.
 *
 *   node core/hub.js
 */

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const ROOT = path.resolve(__dirname, '..');

/** Every brand folder, with its latest built round if it has one. */
function surveyBrands() {
  const brandsDir = path.join(ROOT, 'brands');
  if (!fs.existsSync(brandsDir)) return [];

  return fs.readdirSync(brandsDir)
    .filter((d) => fs.existsSync(path.join(brandsDir, d, 'brand.yaml')))
    .map((id) => {
      const brand = yaml.load(fs.readFileSync(path.join(brandsDir, id, 'brand.yaml'), 'utf8'));
      const roundsDir = path.join(ROOT, 'rounds', id);
      const weeks = fs.existsSync(roundsDir)
        ? fs.readdirSync(roundsDir)
            .filter((w) => fs.existsSync(path.join(roundsDir, w, 'round.json')))
            .sort()
        : [];
      const week = weeks[weeks.length - 1] || null;

      let counts = null;
      if (week) {
        const r = JSON.parse(fs.readFileSync(path.join(roundsDir, week, 'round.json'), 'utf8'));
        counts = r.counts;
      }
      return {
        id,
        name: brand.brand?.name || id,
        company: brand.brand?.company || '',
        kind: brand.brand?.kind || '',
        setup: brand.setup_needed || null,
        colors: brand.visual?.colors || {},
        week, weeks, counts,
      };
    })
    .sort((a, b) => (b.week ? 1 : 0) - (a.week ? 1 : 0) || a.name.localeCompare(b.name));
}

function esc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function card(b) {
  const blue = b.colors.blue || '#4E6BA5';
  const red = b.colors.red || '#F64C3B';

  if (!b.week) {
    return `<article class="biz waiting">
      <span class="swatch" style="--a:${esc(blue)};--b:${esc(red)}"></span>
      <div class="biz-in">
        <h2>${esc(b.name)}</h2>
        ${b.company ? `<p class="sub">${esc(b.company)}</p>` : ''}
        <p class="need">${esc(b.setup || 'עוד אין סבב. צריך להשלים את פרטי המותג.')}</p>
      </div>
    </article>`;
  }

  const c = b.counts || {};
  return `<a class="biz" href="rounds/${esc(b.id)}/${esc(b.week)}/">
      <span class="swatch" style="--a:${esc(blue)};--b:${esc(red)}"></span>
      <div class="biz-in">
        <h2>${esc(b.name)}</h2>
        ${b.company ? `<p class="sub">${esc(b.company)}</p>` : ''}
        <p class="stat">
          <b>${esc(b.week.replace('-W', ' · שבוע '))}</b><br>
          ${c.posts || 0} קרוסלות · ${c.stories || 0} סטורי
        </p>
      </div>
      <span class="go">‹</span>
    </a>`;
}

function buildHub() {
  const brands = surveyBrands();
  const live = brands.filter((b) => b.week);

  const html = `<!doctype html>
<html lang="he" dir="rtl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>סבבי תוכן</title>
<meta name="theme-color" content="#4E6BA5">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-title" content="סבבים">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<link rel="manifest" href="manifest.webmanifest">
<link rel="apple-touch-icon" href="icons/icon-180.png">
<link rel="icon" href="icons/icon-192.png">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Assistant:wght@400;600;700&family=Heebo:wght@500;700;800&display=swap">
<style>
:root{
  --ground:#F5F3EF; --surface:#FFFFFF; --sunken:#EEEBE4;
  --ink:#1A2130; --ink-soft:#5B6577; --ink-faint:#8C95A4;
  --line:#E2DED6; --brand:#4E6BA5;
  color-scheme:light dark;
  padding-top:env(safe-area-inset-top,0); padding-bottom:env(safe-area-inset-bottom,0);
}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]){
  --ground:#14171E; --surface:#1C212B; --sunken:#232936;
  --ink:#ECEEF2; --ink-soft:#A6AEBD; --ink-faint:#737C8C;
  --line:#2E3542; --brand:#8CA6D8;
}}
:root[data-theme="dark"]{
  --ground:#14171E; --surface:#1C212B; --sunken:#232936;
  --ink:#ECEEF2; --ink-soft:#A6AEBD; --ink-faint:#737C8C;
  --line:#2E3542; --brand:#8CA6D8;
}
*{box-sizing:border-box}
body{margin:0;direction:rtl;background:var(--ground);color:var(--ink);
     font-family:'Assistant',system-ui,sans-serif;font-size:15px;line-height:1.5;
     -webkit-font-smoothing:antialiased}
h1,h2{font-family:'Heebo','Assistant',system-ui,sans-serif}
.wrap{max-width:720px;margin:0 auto;padding-inline:16px;padding-block:26px 60px}
header h1{margin:0;font-size:26px;font-weight:800;letter-spacing:-.02em}
header p{margin:5px 0 0;color:var(--ink-soft);font-size:14px}
.group{margin-top:28px}
.group h3{margin:0 0 9px;font-size:11px;font-weight:700;letter-spacing:.13em;
          text-transform:uppercase;color:var(--ink-faint)}
.biz{display:flex;align-items:center;gap:13px;text-decoration:none;color:inherit;
     background:var(--surface);border:1px solid var(--line);border-radius:15px;
     padding:15px;margin-bottom:10px;
     box-shadow:0 1px 2px rgba(26,33,48,.05),0 6px 18px rgba(26,33,48,.05);
     transition:border-color .16s ease}
.biz:hover{border-color:var(--brand)}
.biz.waiting{opacity:.72;box-shadow:none}
.swatch{flex:none;width:42px;height:42px;border-radius:12px;
        background:linear-gradient(135deg,var(--a) 0 62%,var(--b) 62% 100%)}
.biz-in{flex:1;min-width:0}
.biz h2{margin:0;font-size:17px;font-weight:700}
.sub{margin:1px 0 0;font-size:12.5px;color:var(--ink-faint)}
.stat{margin:6px 0 0;font-size:13px;color:var(--ink-soft);font-variant-numeric:tabular-nums}
.need{margin:6px 0 0;font-size:13px;color:var(--ink-faint)}
.go{flex:none;font-size:22px;color:var(--ink-faint);line-height:1}
.foot{margin-top:30px;padding:15px;border-radius:15px;background:var(--sunken);
      border:1px solid var(--line);font-size:13px;color:var(--ink-soft)}
.foot b{color:var(--ink)}
.foot ul{margin:7px 0 0;padding-inline-start:18px}
.foot li{margin-bottom:3px}
@media (prefers-reduced-motion:reduce){*{transition:none!important}}
</style>
</head>
<body>
<div class="wrap">
  <header>
    <h1>סבבי תוכן</h1>
    <p>כל העסקים במקום אחד. נבנה מחדש כל שבת בערב.</p>
  </header>

  ${live.length ? `<section class="group">
    <h3>פעילים</h3>
    ${live.map(card).join('\n    ')}
  </section>` : ''}

  ${brands.filter((b) => !b.week).length ? `<section class="group">
    <h3>ממתינים להשלמת פרטים</h3>
    ${brands.filter((b) => !b.week).map(card).join('\n    ')}
  </section>` : ''}

  <section class="foot">
    <b>איך זה עובד</b>
    <ul>
      <li>בוחרים עסק, ורואים את הסבב הנוכחי שלו.</li>
      <li>אפשר לסמן, לערוך טקסטים ולהוריד כל קרוסלה בנפרד.</li>
      <li>שום דבר לא מתפרסם בלי אישור.</li>
      <li><b>להתקנה:</b> בספארי — שתף ← הוסף למסך הבית. באנדרואיד — ⋮ ← הוסף למסך הבית.</li>
    </ul>
  </section>
</div>
</body>
</html>
`;

  fs.writeFileSync(path.join(ROOT, 'index.html'), html);
  return { brands, live: live.length };
}

if (require.main === module) {
  const r = buildHub();
  console.log(`  hub -> index.html (${r.live} live, ${r.brands.length - r.live} waiting)`);
  for (const b of r.brands) {
    console.log(`     ${b.week ? '●' : '○'} ${b.name}${b.week ? `  ${b.week}` : ''}`);
  }
}

module.exports = { buildHub, surveyBrands };
