/**
 * Guards the Hebrew bidi rule in template.html.
 *
 * Hebrew artwork breaks in exactly two ways, and both have shipped in this
 * brand's own past posts: a reversed date and a shekel sign on the wrong side.
 * These cases are the regression net.
 *
 *   node test/bidi.test.js
 */
const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(
  path.join(__dirname, '..', 'brands', 'before-i-do', 'templates', 'template.html'), 'utf8');

const src = html.match(/function bidi\(s\) \{[\s\S]*?\n\}/)[0];
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const bidi = new Function('esc', `${src}; return bidi;`)(esc);

const wrap = (s) => `<bdi dir="ltr">${s}</bdi>`;
const cases = [
  ['₪129 במחיר השקה',          `₪${wrap('129')} במחיר השקה`],
  ['מחיר ההשקה נגמר ב-26.10',  `מחיר ההשקה נגמר ב-${wrap('26.10')}`],
  ['אם היה לכם 30% פחות',      `אם היה לכם ${wrap('30%')} פחות`],
  ['129₪ כולל משלוח',          `${wrap('129')}₪ כולל משלוח`],
  ['beforeido.co.il',           wrap('beforeido.co.il')],
  ['לינק בביו',                 'לינק בביו'],
  ['ערב אחד. 70 שאלות.',       `ערב אחד. ${wrap('70')} שאלות.`],
  // A phone number is one run: split at the hyphen it prints reversed.
  ['03-5335503, גבעת שמואל',   `${wrap('03-5335503')}, גבעת שמואל`],
  ['052-660-4320',              wrap('052-660-4320')],
  ['נגמר ב-26.10 בערב',        `נגמר ב-${wrap('26.10')} בערב`],
];

let failed = 0;
for (const [input, expected] of cases) {
  const got = bidi(input);
  if (got !== expected) {
    failed++;
    console.error(`FAIL  ${input}\n  expected: ${expected}\n  got:      ${got}`);
  }
}
console.log(failed ? `\n${failed}/${cases.length} failed` : `bidi: ${cases.length}/${cases.length} passed`);
process.exit(failed ? 1 : 0);
