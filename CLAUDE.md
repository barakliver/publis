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

3. **Never publish the deck.** The 70 cards are the product, so content never
   reproduces them as a list or a set. Teasing *one* card's theme as a hook is
   fine and the brand does it itself ("one of the most important cards asks
   exactly this") — a catalogue is not.

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

**Always republish to the SAME artifact URL** (currently
`https://claude.ai/artifact/J5G1c7D98mtNnUqKDS8pQR`, via `url` from another
conversation). The team has it on their phone home screens, so a new URL each
week would strand them. Approvals are namespaced per round under
`rounds/<week>/items/<id>`, so the weeks do not bleed into each other.
Pass the previous round's image paths as `null` in `files` to remove them.

Chromium renders the images because it lays out Hebrew correctly. It is already
installed at `/opt/pw-browsers/chromium-1194/chrome-linux/chrome`. Never run
`playwright install`.

---

## Carousels

Every post is a `slides` array; a single image is a carousel of one, so
nothing downstream needs two code paths. `render.js` writes
`post-NN-SS.png` per slide and puts the list on `item.images`.

The template draws the furniture: progress dots on every slide (running
left-to-right, matching Instagram's own indicator) and a swipe hint on slide
one. The bottom zone is crowded - the wordmark reaches about 11.5% up from the
bottom, so dots sit at 13.4% and the call to action at 18%. Move one, check
the others.

Shape a carousel so slide one earns the swipe and the last one asks for
something. Four to six slides; one idea per slide, short enough to read
without stopping. Instagram stories have no carousel - stories stay single.

## Two builds of the approval page

`core/review.js` emits both from one source:

- `review.html` — the Artifact build. Shared database, live marks, needs a
  Claude account. Published to the fixed artifact URL above.
- `index.html` — the static build for GitHub Pages. **No account, no sign-in.**
  Marks live in the reviewer's own browser (localStorage, every access
  wrapped) and go back to the team through a WhatsApp message the page
  composes: `wa.me/<brand whatsapp>` prefilled with the reviewer's name, the
  counts, and every item they flagged.

Root `index.html` is the permanent entry point and `review.js` repoints it at
the current round on every build, so a phone home-screen icon keeps working
week to week. `.nojekyll` stops Pages from filtering files.

Pages is served from the repository root, so a round's images are already
reachable at their own path - never duplicate them into a docs folder.

## Photos

`core/photos.js` ingests anything dropped in
`brands/<brand>/assets/photos/source/` and writes both crops. Content then
names a photo without its extension (`photo: 'wine-date'`) and the template
resolves the folder and the right crop.

Claude cannot produce a photograph. `assets/photos/SHOTLIST.md` holds the
shots this brand needs, the framing rules the template imposes, and a
generation prompt matching the brand's existing look. Point the user there
rather than improvising a photo brief.

`--trim-top 19` is only for the brand's older artwork, which has the heart
burned into the top of the frame; the template draws its own.

## Engagement marks

Every slide carries Instagram's like / comment / send / save marks above the
wordmark, drawn inline as SVG. The bottom stack, from the bottom up:
wordmark 3.4%, marks 12.2%, dots 18%, swipe hint and call to action 22%.
Move one, check the rest - they were colliding twice before this spacing.

## Writing for this brand

The voice is **Dani** — a wedding producer who built the deck after watching
the same gap open at every wedding she ran. `persona` in `brand.yaml` holds
her stance, vocabulary and signature lines. She is not a brand explaining
marriage; she is the one person in the room who has seen this two hundred
times and will say the unpopular thing out loud.

- Open with the opinion, flat, before any explanation. "דעה לא פופולרית:",
  "סטורי טיים", "כן, אמרתי את זה", "מלא אומרים לי".
- Business language, never therapy language: a board meeting, a simulator,
  the most expensive project they have ever run. She mocks the
  incense-and-candles version of couple games before anyone else can.
- Named, concrete scenarios — the aunt who must be invited, the magnet
  photographer, who counts the cheques. Never an aphorism where a scene works.
- First person, and she is female: "אני מכריחה", "ראיתי", "אני אומרת".
- Eye level, never from above. A verdict ("X is really Y") reads as a lecture;
  the same idea as a scene the reader recognises reads as a friend. Second
  person, present tense, something you can picture.
- Every carousel asks for something at the end: a save, a tag, or the link.
- Answer objections out loud. "Is this just another card game?" is a real
  question and deserves a real slide.
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
