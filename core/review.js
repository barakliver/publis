/**
 * review.js - builds the approval page for a round.
 *
 * Produces a single self-contained HTML file. Published as an Artifact it
 * becomes a private page the team opens on a phone: every item with its
 * image and caption, an approve / needs-fixing switch, and a comment box.
 * Decisions and comments live in the artifact's shared database, so several
 * reviewers see each other's marks live and Claude can read them back.
 *
 *   node core/review.js <brand> <round-dir>
 */

const fs = require('fs');
const path = require('path');

const PILLAR_HE = {
  pain: 'כאב',
  value: 'ערך',
  identity: 'זהות',
  social_proof: 'המלצה',
  sell: 'מכירה',
};

function buildPage(round) {
  const days = [];
  for (const item of round.items) {
    let day = days.find((d) => d.date === item.date);
    if (!day) { day = { date: item.date, day_he: item.day_he, items: [] }; days.push(day); }
    day.items.push(item);
  }

  const data = JSON.stringify({ round, days, PILLAR_HE })
    .replace(/</g, '\\u003c')
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');

  return `<title>אישור סבב — Before I Do</title>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Assistant:wght@400;600;700&family=Heebo:wght@500;700;800&display=swap">
<style>
:root {
  --ground:    #F5F3EF;
  --surface:   #FFFFFF;
  --sunken:    #EEEBE4;
  --ink:       #1A2130;
  --ink-soft:  #5B6577;
  --ink-faint: #8C95A4;
  --line:      #E2DED6;
  --line-soft: #EFECE5;

  --brand:     #4E6BA5;
  --brand-dim: #7F9ACE;
  --flag:      #D8402F;
  --ok:        #2D7355;
  --ok-bg:     #E4F0EA;
  --fix-bg:    #FBE8E4;

  --radius: 14px;
  --shadow: 0 1px 2px rgba(26,33,48,.05), 0 6px 18px rgba(26,33,48,.05);
}
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --ground:    #14171E;
    --surface:   #1C212B;
    --sunken:    #232936;
    --ink:       #ECEEF2;
    --ink-soft:  #A6AEBD;
    --ink-faint: #737C8C;
    --line:      #2E3542;
    --line-soft: #262C38;
    --brand:     #8CA6D8;
    --brand-dim: #6B85B8;
    --flag:      #F4705F;
    --ok:        #6FC79E;
    --ok-bg:     #1E3A2E;
    --fix-bg:    #3B211C;
    --shadow: 0 1px 2px rgba(0,0,0,.30), 0 6px 18px rgba(0,0,0,.26);
  }
}
:root[data-theme="dark"] {
  --ground:    #14171E;
  --surface:   #1C212B;
  --sunken:    #232936;
  --ink:       #ECEEF2;
  --ink-soft:  #A6AEBD;
  --ink-faint: #737C8C;
  --line:      #2E3542;
  --line-soft: #262C38;
  --brand:     #8CA6D8;
  --brand-dim: #6B85B8;
  --flag:      #F4705F;
  --ok:        #6FC79E;
  --ok-bg:     #1E3A2E;
  --fix-bg:    #3B211C;
  --shadow: 0 1px 2px rgba(0,0,0,.30), 0 6px 18px rgba(0,0,0,.26);
}

* { box-sizing: border-box; }
body {
  margin: 0;
  direction: rtl;
  background: var(--ground);
  color: var(--ink);
  font-family: 'Assistant', system-ui, -apple-system, 'Segoe UI', sans-serif;
  font-size: 15px;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
h1, h2, h3, .num { font-family: 'Heebo', 'Assistant', system-ui, sans-serif; }

.wrap { max-width: 860px; margin: 0 auto; padding-inline: 16px; padding-block: 0 72px; }

/* ---------- header ---------- */
.top {
  position: sticky; top: env(safe-area-inset-top, 0px); z-index: 20;
  background: color-mix(in srgb, var(--ground) 88%, transparent);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--line);
}
.top-in { max-width: 860px; margin: 0 auto; padding: 14px 16px; }
.eyebrow {
  font-size: 11px; font-weight: 700; letter-spacing: .13em;
  text-transform: uppercase; color: var(--brand); margin: 0 0 3px;
}
.top h1 { margin: 0; font-size: 20px; font-weight: 800; letter-spacing: -.01em; }
.top .range { color: var(--ink-soft); font-size: 13px; margin-top: 2px; }

.meter { display: flex; align-items: center; gap: 10px; margin-top: 11px; }
.bar { flex: 1; height: 6px; border-radius: 99px; background: var(--sunken); overflow: hidden; }
.bar i { display: block; height: 100%; width: 0; background: var(--ok); border-radius: 99px; transition: width .28s ease; }
.meter .count { font-size: 12px; color: var(--ink-soft); font-variant-numeric: tabular-nums; white-space: nowrap; }

.who {
  margin-top: 9px; font-size: 12px; color: var(--ink-faint);
  display: flex; align-items: center; gap: 6px; flex-wrap: wrap;
}
.dot { width: 6px; height: 6px; border-radius: 50%; background: var(--ok); flex: none; }
.dot.off { background: var(--ink-faint); }

/* ---------- day ---------- */
.day { margin-top: 30px; }
.day-head {
  display: flex; align-items: baseline; gap: 9px;
  padding-bottom: 8px; border-bottom: 2px solid var(--line);
}
.day-head h2 { margin: 0; font-size: 16px; font-weight: 700; }
.day-head .d { font-size: 12.5px; color: var(--ink-faint); font-variant-numeric: tabular-nums; }

/* ---------- item ---------- */
.item {
  display: grid; grid-template-columns: 132px 1fr; gap: 14px;
}
.item.carousel { display: block; }
.item.carousel .strip { margin-bottom: 11px; }
.item {
  background: var(--surface); border: 1px solid var(--line);
  border-radius: var(--radius); padding: 13px;
  margin-top: 12px; box-shadow: var(--shadow);
  transition: border-color .18s ease;
}
.item[data-state="approved"] { border-color: color-mix(in srgb, var(--ok) 45%, var(--line)); }
.item[data-state="fix"]      { border-color: color-mix(in srgb, var(--flag) 45%, var(--line)); }

.shot {
  width: 132px; border-radius: 9px; overflow: hidden;
  border: 1px solid var(--line-soft); background: var(--sunken);
  cursor: zoom-in; display: block; padding: 0; flex: none;
}
.shot img { display: block; width: 100%; height: auto; max-height: 188px; object-fit: contain; }

/* A carousel's slides scroll sideways in their own track, so the page
   itself never scrolls horizontally. */
.strip {
  display: flex; gap: 8px; overflow-x: auto; padding-bottom: 6px;
  scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch;
}
.strip .shot { scroll-snap-align: start; position: relative; }
.strip .n {
  position: absolute; inset-block-start: 5px; inset-inline-end: 5px;
  background: color-mix(in srgb, var(--ink) 72%, transparent);
  color: var(--surface); font-size: 10px; font-weight: 700;
  padding: 1px 6px; border-radius: 99px; font-variant-numeric: tabular-nums;
}
.strip::-webkit-scrollbar { height: 5px; }
.strip::-webkit-scrollbar-thumb { background: var(--line); border-radius: 99px; }

.meta { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; margin-bottom: 7px; }
.chip {
  font-size: 11px; font-weight: 700; padding: 2.5px 8px; border-radius: 99px;
  border: 1px solid var(--line); color: var(--ink-soft); background: var(--sunken);
  white-space: nowrap;
}
.chip.time { font-variant-numeric: tabular-nums; color: var(--ink); }
.chip.kind { border-color: var(--brand-dim); color: var(--brand); background: transparent; }
.chip.manual { border-color: var(--flag); color: var(--flag); background: transparent; }

.headline { font-weight: 700; font-size: 15.5px; line-height: 1.32; margin: 0 0 5px; text-wrap: balance; }
.caption {
  font-size: 13.5px; color: var(--ink-soft); white-space: pre-wrap; margin: 0;
  display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 4; overflow: hidden;
}
.caption.open { -webkit-line-clamp: unset; display: block; }
.more {
  background: none; border: 0; padding: 2px 0; margin-top: 2px;
  color: var(--brand); font: inherit; font-size: 12.5px; font-weight: 700; cursor: pointer;
}
.tags { font-size: 12px; color: var(--ink-faint); margin-top: 6px; word-break: break-word; }

/* ---------- controls ---------- */
.actions { display: flex; gap: 7px; margin-top: 11px; flex-wrap: wrap; }
.btn {
  font: inherit; font-size: 13px; font-weight: 700; cursor: pointer;
  padding: 7px 14px; border-radius: 99px;
  border: 1px solid var(--line); background: var(--surface); color: var(--ink-soft);
  transition: background .15s ease, border-color .15s ease, color .15s ease;
}
.btn:hover { border-color: var(--ink-faint); }
.btn:focus-visible { outline: 2px solid var(--brand); outline-offset: 2px; }
.btn[aria-pressed="true"].ok  { background: var(--ok-bg);  border-color: var(--ok);  color: var(--ok); }
.btn[aria-pressed="true"].fix { background: var(--fix-bg); border-color: var(--flag); color: var(--flag); }
.btn:disabled { opacity: .45; cursor: default; }

.notes { margin-top: 10px; border-top: 1px solid var(--line-soft); padding-top: 9px; }
.note { font-size: 13px; margin-bottom: 7px; }
.note b { font-weight: 700; color: var(--ink); }
.note .t { color: var(--ink-faint); font-size: 11.5px; margin-inline-start: 5px; font-variant-numeric: tabular-nums; }
.note p { margin: 1px 0 0; color: var(--ink-soft); white-space: pre-wrap; }

.add { display: flex; gap: 7px; margin-top: 8px; }
.add textarea {
  flex: 1; font: inherit; font-size: 13.5px; resize: vertical; min-height: 38px;
  padding: 8px 10px; border-radius: 9px; border: 1px solid var(--line);
  background: var(--ground); color: var(--ink);
}
.add textarea:focus-visible { outline: 2px solid var(--brand); outline-offset: 1px; }

/* ---------- lightbox ---------- */
dialog {
  border: 0; padding: 0; background: transparent; max-width: 100vw; max-height: 100vh;
}
dialog::backdrop { background: rgba(10,13,20,.86); }
dialog img { max-width: 92vw; max-height: 88vh; border-radius: 10px; display: block; }

/* ---------- footer note ---------- */
.foot {
  margin-top: 34px; padding: 15px; border-radius: var(--radius);
  background: var(--sunken); border: 1px solid var(--line);
  font-size: 13px; color: var(--ink-soft);
}
.foot b { color: var(--ink); }
.foot ul { margin: 7px 0 0; padding-inline-start: 18px; }
.foot li { margin-bottom: 3px; }

.offline {
  margin-top: 14px; padding: 11px 13px; border-radius: 10px;
  background: var(--fix-bg); border: 1px solid var(--flag);
  color: var(--ink); font-size: 13px;
}

@media (max-width: 560px) {
  .item { grid-template-columns: 96px 1fr; gap: 11px; padding: 11px; }
  .shot { width: 96px; }
}
@media (prefers-reduced-motion: reduce) {
  * { transition: none !important; }
}
</style>

<header class="top">
  <div class="top-in">
    <p class="eyebrow">סבב לאישור</p>
    <h1 id="ttl"></h1>
    <div class="range" id="rng"></div>
    <div class="meter">
      <div class="bar"><i id="barfill"></i></div>
      <span class="count" id="cnt"></span>
    </div>
    <div class="who"><span class="dot off" id="livedot"></span><span id="livetxt">מתחבר…</span></div>
  </div>
</header>

<div class="wrap">
  <div id="offline" hidden class="offline"></div>
  <main id="list"></main>

  <section class="foot">
    <b>איך זה עובד</b>
    <ul>
      <li>כל סימון והערה נשמרים מיד ונראים לכל מי שפתח את הדף.</li>
      <li><b>מאשר</b> = מוכן לתזמון. <b>צריך תיקון</b> = כתבו בהערה מה לשנות.</li>
      <li>פריט עם <span style="color:var(--flag);font-weight:700">העלאה ידנית</span> נושא סטיקר לינק או סקר. אינסטגרם לא מאפשרת לפרסם אותו דרך API — תגיע התראה לנייד בזמן הפרסום.</li>
      <li>שום דבר לא מתוזמן ולא מתפרסם עד אישור מפורש.</li>
      <li><b>הדף הזה קבוע.</b> כל שבוע הסבב החדש מופיע כאן באותה כתובת —
          שווה להוסיף אותו למסך הבית (בספארי: שתף ← הוסף למסך הבית).</li>
    </ul>
  </section>
</div>

<dialog id="zoom"><img id="zoomimg" alt=""></dialog>

<script>
const DATA = ${data};
const { round, days, PILLAR_HE } = DATA;

const $ = (id) => document.getElementById(id);
const esc = (s) => String(s == null ? '' : s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;');

/* Local mirror of what the shared store holds, so the page renders
   immediately and stays usable if the store never answers. */
const state = new Map();   // itemId -> {status, notes:[]}
let db = null, me = null, myName = 'אני';
const nameCache = new Map();

$('ttl').textContent = round.brand_name + ' · שבוע ' + round.week.split('-W')[1] + '/' + round.week.split('-W')[0];
$('rng').textContent =
  fmtDate(round.starts) + ' – ' + fmtDate(round.ends) + ' · ' +
  round.counts.posts + ' פוסטים (' + round.counts.slides + ' שקפים), ' +
  round.counts.stories + ' סטורי';

function fmtDate(iso) {
  const [y, m, d] = iso.split('-');
  return d + '.' + m;
}
function fmtTime(iso) {
  const dt = new Date(iso);
  return isNaN(dt) ? '' : dt.toLocaleDateString('he-IL', { day: 'numeric', month: 'numeric' }) +
    ' ' + dt.toLocaleTimeString('he-IL', { hour: '2-digit', minute: '2-digit' });
}

/* ---------- render ---------- */
function itemHTML(it) {
  const cover = (it.slides && it.slides[0]) || it;
  const kind = it.format === 'story' ? 'סטורי'
             : it.type === 'carousel' ? 'קרוסלה · ' + it.slides.length + ' שקפים'
             : 'פוסט';
  const body = cover.dilemma
    ? esc(cover.dilemma[0]) + ' <span style="opacity:.55">או</span> ' + esc(cover.dilemma[1])
    : esc(cover.headline || '');
  const caption = it.caption ? esc(it.caption) : '';
  const long = caption.length > 150;

  const shots = (it.images && it.images.length ? it.images : [it.image]);
  const isCar = shots.length > 1;

  const strip = isCar
    ? '<div class="strip">' + shots.map((src, i) =>
        '<button class="shot" data-zoom="' + esc(src) + '">' +
          '<img src="' + esc(src) + '" alt="" loading="lazy">' +
          '<span class="n">' + (i + 1) + '</span>' +
        '</button>').join('') + '</div>'
    : '<button class="shot" data-zoom="' + esc(shots[0]) + '">' +
        '<img src="' + esc(shots[0]) + '" alt="" loading="lazy">' +
      '</button>';

  return '<article class="item' + (isCar ? ' carousel' : '') + '" id="it-' + it.id + '" data-state="">' +
    strip +
    '<div>' +
      '<div class="meta">' +
        '<span class="chip time">' + esc(it.time) + '</span>' +
        '<span class="chip kind">' + kind + '</span>' +
        '<span class="chip">' + (PILLAR_HE[it.pillar] || it.pillar) + '</span>' +
        (it.manual ? '<span class="chip manual">העלאה ידנית</span>' : '') +
      '</div>' +
      '<p class="headline">' + body + '</p>' +
      (caption ? '<p class="caption" id="cap-' + it.id + '">' + caption + '</p>' : '') +
      (long ? '<button class="more" data-more="' + it.id + '">קראו עוד</button>' : '') +
      (it.hashtags ? '<div class="tags">' + esc(it.hashtags) + '</div>' : '') +
      '<div class="actions">' +
        '<button class="btn ok"  data-act="approved" data-id="' + it.id + '" aria-pressed="false">✓ מאשר</button>' +
        '<button class="btn fix" data-act="fix"      data-id="' + it.id + '" aria-pressed="false">✕ צריך תיקון</button>' +
      '</div>' +
      '<div class="notes" id="nt-' + it.id + '"></div>' +
      '<div class="add">' +
        '<textarea id="ta-' + it.id + '" rows="1" placeholder="הערה — מה לשנות?"></textarea>' +
        '<button class="btn" data-note="' + it.id + '">שליחה</button>' +
      '</div>' +
    '</div>' +
  '</article>';
}

$('list').innerHTML = days.map((d) =>
  '<section class="day">' +
    '<div class="day-head"><h2>יום ' + esc(d.day_he) + '</h2><span class="d">' + fmtDate(d.date) + '</span></div>' +
    d.items.map(itemHTML).join('') +
  '</section>'
).join('');

function paint(id) {
  const s = state.get(id) || {};
  const el = $('it-' + id);
  if (!el) return;
  el.dataset.state = s.status === 'approved' ? 'approved' : s.status === 'fix' ? 'fix' : '';
  el.querySelectorAll('[data-act]').forEach((b) => {
    b.setAttribute('aria-pressed', String(b.dataset.act === s.status));
  });
  const box = $('nt-' + id);
  const notes = s.notes || [];
  box.innerHTML = notes.map((n) =>
    '<div class="note"><b>' + esc(nameCache.get(n.by) || 'צוות') + '</b>' +
    '<span class="t">' + esc(fmtTime(n.at)) + '</span>' +
    '<p>' + esc(n.text) + '</p></div>'
  ).join('');
  progress();
}

function progress() {
  let done = 0;
  for (const it of round.items) {
    const s = state.get(it.id);
    if (s && s.status) done++;
  }
  const total = round.items.length;
  $('barfill').style.width = (done / total * 100) + '%';
  $('cnt').textContent = done + ' מתוך ' + total + ' נבדקו';
}
progress();

/* ---------- interactions ---------- */
document.addEventListener('click', (e) => {
  const zoom = e.target.closest('[data-zoom]');
  if (zoom) { $('zoomimg').src = zoom.dataset.zoom; $('zoom').showModal(); return; }

  const more = e.target.closest('[data-more]');
  if (more) {
    $('cap-' + more.dataset.more).classList.toggle('open');
    more.textContent = more.textContent === 'קראו עוד' ? 'פחות' : 'קראו עוד';
    return;
  }

  const act = e.target.closest('[data-act]');
  if (act) { setStatus(act.dataset.id, act.dataset.act); return; }

  const note = e.target.closest('[data-note]');
  if (note) { addNote(note.dataset.note); return; }
});

$('zoom').addEventListener('click', () => $('zoom').close());

/* ---------- shared store ---------- */
/* The same artifact URL carries a new round every week, so each round gets
   its own subtree. Without this, next week's post-01 would open already
   carrying this week's approval. */
function roundCol() { return db.collection('rounds/' + round.week + '/items'); }
function docFor(id) { return roundCol().doc(id); }

async function setStatus(id, status) {
  const cur = state.get(id) || { notes: [] };
  const next = cur.status === status ? null : status;   // tapping again clears it
  state.set(id, { ...cur, status: next });
  paint(id);
  if (!db) return;
  try {
    await docFor(id).set({
      status: next, notes: cur.notes || [], by: me || null, at: new Date().toISOString(),
    });
  } catch (err) { showOffline(err); }
}

async function addNote(id) {
  const ta = $('ta-' + id);
  const text = ta.value.trim();
  if (!text) return;
  const cur = state.get(id) || { notes: [] };
  const notes = (cur.notes || []).concat([{ by: me || 'anon', text, at: new Date().toISOString() }]);
  state.set(id, { ...cur, notes });
  ta.value = '';
  paint(id);
  if (!db) return;
  try {
    await docFor(id).set({ status: cur.status ?? null, notes, by: me || null, at: new Date().toISOString() });
  } catch (err) { showOffline(err); }
}

function showOffline(err) {
  const box = $('offline');
  box.hidden = false;
  box.textContent = (err && err.code === 'invalid_argument')
    ? 'אין לך הרשאת כתיבה לדף הזה. הסימונים שלך נשמרים רק במכשיר הזה — בקשו הרשאת עריכה.'
    : 'החיבור לשמירה המשותפת נפל. הסימונים נשמרים מקומית בלבד — רעננו את הדף.';
}

(async function connect() {
  const user = await claude.use('user');
  if (user) {
    me = await user.id();
    const mine = await user.me();
    if (mine && mine.name) { myName = mine.name; if (me) nameCache.set(me, mine.name); }
  }

  db = await claude.use('db');
  if (!db) {
    $('livetxt').textContent = 'מצב צפייה — סימונים נשמרים במכשיר הזה בלבד';
    return;
  }

  $('livedot').classList.remove('off');
  $('livetxt').textContent = 'מחובר' + (myName !== 'אני' ? ' · ' + myName : '') + ' — כל שינוי נשמר לכולם';

  roundCol().onSnapshot(async (snap) => {
    const ids = new Set();
    for (const doc of snap.docs) {
      const d = doc.data() || {};
      state.set(doc.id, { status: d.status || null, notes: Array.isArray(d.notes) ? d.notes : [] });
      for (const n of (d.notes || [])) if (n.by) ids.add(n.by);
    }
    await resolveNames(user, ids);
    for (const doc of snap.docs) paint(doc.id);
    progress();
  }, showOffline);
})();

async function resolveNames(user, ids) {
  if (!user) return;
  const missing = [...ids].filter((id) => !nameCache.has(id));
  if (!missing.length) return;
  try {
    const ps = await user.profiles(missing);
    for (const id of missing) nameCache.set(id, (ps[id] && ps[id].name) || 'צוות');
  } catch { /* names are a nicety; the note still reads without one */ }
}
</script>
`;
}

if (require.main === module) {
  const [brandId, roundDir] = process.argv.slice(2);
  if (!brandId || !roundDir) {
    console.error('usage: node core/review.js <brand> <round-dir>');
    process.exit(1);
  }
  const roundPath = path.resolve(roundDir);
  const round = JSON.parse(fs.readFileSync(path.join(roundPath, 'round.json'), 'utf8'));
  const out = path.join(roundPath, 'review.html');
  fs.writeFileSync(out, buildPage(round));
  console.log(`  approval page -> ${out} (${(fs.statSync(out).size / 1024).toFixed(0)} KB)`);
}

module.exports = { buildPage };
