/**
 * Guards the brand voice rules that are cheap to break and expensive to ship.
 *
 * The forbidden lists in brand.yaml exist because the client named them: the
 * first is cringe romance, the second is therapy speak. A banned word reaching
 * a rendered image is the kind of thing nobody notices until it is on the feed.
 *
 *   node test/voice.test.js
 */
const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const ROOT = path.resolve(__dirname, '..');
let failed = 0;

for (const brandId of fs.readdirSync(path.join(ROOT, 'brands'))) {
  const brandDir = path.join(ROOT, 'brands', brandId);
  const cfgPath = path.join(brandDir, 'brand.yaml');
  if (!fs.existsSync(cfgPath)) continue;

  const brand = yaml.load(fs.readFileSync(cfgPath, 'utf8'));
  const banned = brand.rules?.forbidden_words || [];
  const bannedEmoji = brand.rules?.banned_emoji || [];
  const contentDir = path.join(brandDir, 'content');
  if (!fs.existsSync(contentDir) || (!banned.length && !bannedEmoji.length)) continue;

  for (const file of fs.readdirSync(contentDir).filter((f) => f.endsWith('.js'))) {
    // Read the module rather than the source, so a word in a code comment
    // explaining the rule does not fail the rule.
    const content = require(path.join(contentDir, file));
    const items = [...(content.posts || []), ...(content.stories || [])];

    items.forEach((item, i) => {
      const slides = item.slides || [item];
      const text = [
        item.caption, item.hashtags,
        ...slides.flatMap((s) => [s.headline, s.subline, s.cta, s.badge, ...(s.dilemma || [])]),
      ].filter(Boolean).join(' ');

      for (const word of banned) {
        if (text.includes(word)) {
          failed++;
          console.error(`FAIL ${brandId}/${file} item ${i + 1}: banned word "${word}"`);
        }
      }
      for (const e of bannedEmoji) {
        if (text.includes(e)) {
          failed++;
          console.error(`FAIL ${brandId}/${file} item ${i + 1}: banned emoji ${e}`);
        }
      }
    });
  }
}

console.log(failed ? `\n${failed} voice violations` : 'voice: clean');
process.exit(failed ? 1 : 0);
