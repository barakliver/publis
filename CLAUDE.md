# publis — content machine

Generates and publishes weekly social content for brands. First brand:
**Before I Do** (Liver Production). Built to be multi-brand from day one.

Talk to the user (Barak) in **Hebrew**. Code, filenames and code comments in
**English**. He is not a developer — explain technical decisions in plain words.

---

## The rules that are not negotiable

1. **Nothing publishes or schedules without explicit approval.** Dry run is the
   default and stays the default. `PUBLISH_MODE=dry` builds everything and
   prints what *would* be scheduled. Only `--live` schedules, and only after
   the user says the round is approved.

2. **This repository is PUBLIC.** (`github.com/barakliver/publis`)
   - Secrets live only in `.env`, which is git-ignored. Never in code, never in
     a log, never in a commit message.
   - `brands/*/knowledge/` is git-ignored and holds private brand material.
   - Marketing copy and rendered images *are* public by design — they are going
     to be posted publicly anyway, and GitHub raw URLs are how Metricool fetches
     the images.

3. **Never reveal the cards' actual content.** The 70 cards are the product.
   Content shows the *tension* the cards resolve, written fresh, in the brand's
   "A או B" format — never the cards' own wording. Enforced by
   `rules.never_reveal_card_content` in `brand.yaml`.

4. **Do not deviate from the visual identity.** Colours, fonts, logo placement
   and frame geometry were measured off the brand's real card artwork and logo
   files. They live in `brand.yaml` and `templates/theme.css`. Changing them is
   the user's call, not a judgement call.

5. **Hebrew is right-to-left; numbers inside it are not.** Every string that
   reaches an image goes through `bidi()` in `template.html`. Without it, dates
   and prices ship reversed — which has already happened in this brand's own
   past posts. `node test/bidi.test.js` guards it. Run it after touching that
   function.

---

## Layout

```
brands/<brand>/        everything brand-specific
  brand.yaml           colours, voice, schedule, rules — the single source
  content/<week>.js    the writing for one round
  templates/           theme.css + template.html
  assets/              logo PNGs and the Hebrew fonts
  knowledge/           git-ignored. private material.

core/                  brand-agnostic engine. knows no brand names.
  plan.js              content + brand.yaml -> a dated round.json
  render.js            round.json -> PNGs, via headless Chromium
  review.js            round.json -> the approval page
  schedule.js          approved round -> Metricool        (stage 4, not built)
  report.js            monthly performance pull           (stage 5, not built)

rounds/<brand>/<week>/ round.json, images/, review.html
test/                  bidi.test.js
```

**Adding a brand is adding a folder.** Copy `brands/before-i-do`, edit
`brand.yaml`, drop in the logo and fonts, write a content file. No code changes.

---

## Running a round

```bash
node core/plan.js    before-i-do 2026-W40      # dates and times
node core/render.js  before-i-do rounds/before-i-do/2026-W40   # images
node core/review.js  before-i-do rounds/before-i-do/2026-W40   # approval page
node test/bidi.test.js
```

Then publish `review.html` as an Artifact with `capabilities: {db:{}, user:{scopes:["profile"]}}`
and the `images/` folder passed as supporting `files`. The team approves there;
the marks and comments are readable back out of the artifact's database.

Chromium renders the images because it lays out Hebrew correctly. It is already
installed at `/opt/pw-browsers/chromium-1194/chrome-linux/chrome`. Never run
`playwright install`.

---

## Writing for this brand

- Address both partners. Hebrew second-person singular uses the dotted form the
  cards already use: `מתרגש.ת`, `מפחד.ת`. Plural `אתם` for the couple.
- Short on the image, long in the caption. The image carries one idea.
- Banned: `היום המושלם`, `קסום`, `חלומי`, `אגדה`.
- The brand's own line: **רגע מאושר שישאר לנצח**. The site's: **שיחה אחת, לפני כל השאר**.
- Price is mentioned only together with the launch end date (26.10.2026).

## Known limits, verified — not assumed

- Instagram's API cannot post a story carrying a link, poll, or product-tag
  sticker. No third-party tool can; Metricool sends a phone notification
  instead. Items needing this carry `manual: true` and are flagged in the
  approval page.
- Metricool's MCP (`https://ai.metricool.com/mcp`) is official and works on the
  free plan. `post_schedule_post`, `get_scheduled_posts`, `update_schedule_post`,
  `get_analytics`, `get_best_time_to_post`. It exposes no media-upload tool, so
  images need a public URL — hence the public repo.
- WhatsApp Cloud API group messaging exists since Feb 2026 but is limited to
  Official Business Accounts at high send volume. Not available here.

Before trusting any of the above in a new situation, re-check it. Do not answer
from memory about Meta or Metricool.
