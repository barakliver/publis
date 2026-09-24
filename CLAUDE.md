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

4. **Do not deviate from the visual identity.** Before I Do's colours, fonts,
   logo placement and frame geometry were measured off its real card artwork.
   `render.js` injects each brand's own `visual.colors` and asset paths into
   the shared template at render time, so one template serves every business;
   a brand with no logo files gets its name set in type. Where a palette was
   proposed rather than supplied, `brand.yaml` says so - replace it, don't
   defend it.

5. **Hebrew is right-to-left; numbers inside it are not.** A phone number,
   a price and a date each have to stay one run. Every string that
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
node core/review.js  before-i-do rounds/before-i-do/2026-W40   # approval pages
node core/package.js before-i-do rounds/before-i-do/2026-W40   # hand-off zip (optional)
node core/hub.js                                               # the front door
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

The template draws one piece of furniture: a swipe hint on slide one. There
are **no progress dots** - Instagram draws its own indicator over the image,
and a second row under it read as a printing error. They were removed at the
client's word; do not put them back.

Shape a carousel so slide one earns the swipe and the last one asks for
something. Four to six slides; one idea per slide, short enough to read
without stopping. Instagram stories have no carousel - stories stay single.

## Two builds of the approval page

`core/review.js` emits both from one source:

- `review.html` — the Artifact build. Shared database, live marks, needs a
  Claude account. Published to the fixed artifact URL above.
- `index.html` — the static build for GitHub Pages. **No account, no sign-in.**
  Installs to a phone home screen as an app (`manifest.webmanifest`, icons at
  the repo root) and serves `download.zip` from beside itself.
  Marks live in the reviewer's own browser (localStorage, every access
  wrapped) and go back to the team through a WhatsApp message the page
  composes: `wa.me/<brand whatsapp>` prefilled with the reviewer's name, the
  counts, and every item they flagged.

Root `index.html` is the permanent entry point and `review.js` repoints it at
the current round on every build, so a phone home-screen icon keeps working
week to week. `.nojekyll` stops Pages from filtering files.

Pages is served from the repository root, so a round's images are already
reachable at their own path - never duplicate them into a docs folder.

## The hub

`core/hub.js` writes the root `index.html`: every business under `brands/`,
each linking to its latest built round. It owns that file - `review.js` must
not touch it. A brand with no round yet shows as waiting, with the
`setup_needed` line from its `brand.yaml` saying what is missing.

Businesses: `before-i-do`, `liver-productions` (Barak Lior, wedding
production - shares the palette, separate voice and audience) and `lehem`
(the bakery in Givat Shmuel - its own crust-and-crumb palette, no logo files
yet so its name is set in type).

## The round page

Three things sit above the list:

- **Tabs** (הכל / פוסטים / סטורי) filter both views. A day left empty by a
  filter hides its heading too.
- **A view switch.** The list is for working; the grid is an Instagram
  profile - story circles above a 4:5 feed grid, newest first, carousels
  marked. Stories never appear in a real feed grid, so they do not appear in
  this one either: the point of the view is to meet the round the way the
  audience will.
- **The business's own colours.** `plan.js` carries `visual.colors` into
  round.json and the page wears them - top bar, headings, tabs, story rings.
  Moving between businesses has to be unmistakable, which is also why
  liver-productions was moved off Before I Do's palette onto deep navy and
  brass.

The lightbox steps through a carousel with a counter and arrow keys, and
downloads the whole set from inside it.

## Editing in the app

The static build carries two kinds of edit, and they behave differently on
purpose:

- **Caption** — live. What is typed is what the copy button and the download
  hand over, because a caption is plain text on both sides.
- **Slide text** — a correction. The image is rendered upstream from it, so a
  fix rides the next build; the slide keeps the old wording until then. The
  UI says so rather than letting anyone think it redrew.

Both ride the WhatsApp export, with the slide fixes listed per slide.

Saving hands over the pictures, not a file. A zip is useless on a phone: it
cannot be unpacked easily and Instagram cannot read one. Each slide is drawn
to a canvas and encoded as JPEG, then offered through `navigator.share` where
it exists — the viewer taps Save Images once and they land in Photos in order
— falling back to saving them one at a time on desktop. The caption goes to
the clipboard at the same moment, because neither path can carry it into
Instagram and that is when it is needed. There is deliberately no whole-week
download.

## The Saturday job

`.github/workflows/weekly-round.yml` runs every Saturday 15:00 UTC (18:00 in
Israel through the summer, 17:00 once the clocks go back) and on demand. It
loops over every folder under `brands/`, so adding a business stays a folder
rather than a workflow edit, and one brand failing does not take the others
down - the failures are collected and reported at the end. It writes next week's content, builds the round, and pushes it, so the
approval page and the download are ready before anyone opens their phone.
Nothing is scheduled or published - the round still waits for approval.

`core/write.js` writes the content from `persona` and `rules` in brand.yaml
plus the last three weeks already on disk, so it does not repeat itself. Model
`claude-opus-5`, streamed, output validated (count, banned words, slide
shape) with one corrective retry before it gives up. Roughly $0.30 a week.

It needs `ANTHROPIC_API_KEY` in the repository's Actions secrets. Without it
that step fails softly and the job reuses the newest content file under a new
week - a round still lands, it is just a repeat.

## Handing a round off

`core/package.js` builds the folder whoever posts by hand actually works
from: one folder per day, one per post, slides named `slide-1..n` in swipe
order, the caption next to them, and `-MANUAL` in the filename for anything
carrying a link or poll sticker. Zipped and sent to the user directly - it is
git-ignored, since it is a second copy of every image.

This is the current delivery path. It stays useful after Metricool is
connected, for the manual items.

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

Instagram's like / comment / send / save marks, drawn inline as SVG, sit above
the wordmark on the **last slide only** - that is the slide doing the asking,
and on every slide they stopped reading as a prompt and started reading as
chrome. A single image and a story are their own last slide, so they keep them.

The bottom stack, from the bottom up: wordmark 3.4%, marks 12.2%, call to
action 19% on the last slide; swipe hint 13.2% on the first. Move one, check
the rest - they were colliding twice before this spacing.

## Type

`Rubik` (variable, `assets/fonts/Rubik.ttf`) sets every image: rounded
terminals and open counters, so the page sounds like the voice rather than
like a form. Headlines are 600, not 700 - at this size the bold reads as a
shout. Assistant and Heebo stay behind it as fallbacks.

The scale in `autoSize()` is deliberately large - the image carries one idea
and has to land at a thumb's distance while scrolling. Anything sized off the
headline (the pill, the badge, the wordmark in type) goes through `clamp()`,
or a three-word hook inflates the whole bottom of the frame.

## Writing for this brand

The voice is the client's own copywriting brief, now config under `persona`
in brand.yaml. Read it before writing a line. The short version:

**What the product sells** - every post is one of these three and nothing
else. Getting this wrong is how the previous round went astray: it was full
of wedding-planning advice, which is Barak Lior's territory and the exact
opposite of what this product is for.
1. a legal excuse to stop talking about the wedding for one evening
2. friction prevention - tomorrow's fight, tonight, on the couch with wine
3. a stylish date night with zero planning and no leaving the house

**Voice** - a smart, stylish, slightly witty friend. Punch first, never warm
up. Short sentences, one-line paragraphs. Premium but casual; there is always
wine and a couch.

**Pain named specifically**, never abstractly: the guest-list spreadsheet, the
in-law WhatsApp group, the DJ's playlist, the aunt who must be invited, the
catering deposit. Not "the stress of planning".

**Banned, absolutely** - two lists in `rules.forbidden_words`: cringe romance
and therapy speak. Emoji stay minimal and deliberate; the rocket, star and
thumb are banned outright. `node test/voice.test.js` enforces both lists
against every content file - run it after writing.

Also standing:
- Address both partners. Second-person singular takes the dotted form the
  cards use. Plural for the couple.
- Short on the image, long in the caption. The image carries one idea.
- Every carousel ends asking for something.
- Price appears only with the launch end date (26.10.2026).

## Known limits, verified — not assumed

Re-checked 24.09.2026 against Meta's own docs and Metricool's, not from memory.
Do it again before trusting any of it in a new situation.

**Publishing to Instagram from here is possible.** Two routes, and the
approval gate in rule 1 sits in front of both.

- **Metricool's MCP** (`https://ai.metricool.com/mcp`) — official, works on the
  free plan, OAuth or `METRICOOL_USER_TOKEN` + `METRICOOL_USER_ID`.
  `post_schedule_post`, `update_schedule_post`, `get_scheduled_posts`,
  `get_analytics`, `get_best_time_to_post`. It exposes no media-upload tool, so
  images need a public URL — which is what the public repo and Pages already
  give us. No Meta app review. This is the shorter road.
- **Instagram's own Content Publishing API** — needs an Instagram professional
  account linked to a Facebook Page, a Meta developer app, and the
  `instagram_business_content_publish` permission through App Review; some
  Pages also need Page Publishing Authorization first. Meta cURLs the media, so
  it too needs a public URL. Carousels up to 10 items and count as one post;
  every carousel image is cropped to the FIRST image's aspect ratio, which is
  safe here because every slide is 4:5. 100 API posts per rolling 24h - a week
  is 21 posts and 14 stories, nowhere near it.

**What no route can do, on either road:**

- A story carrying a link, poll or location sticker cannot be published by any
  API - Meta does not expose them. Metricool sends a phone notification
  instead. Items needing this carry `manual: true` and are flagged in the
  approval page. `core/package.js` marks them `-MANUAL`.
- Stories ignore caption text, and story publishing needs a Business account -
  a Creator account cannot.
- Shopping/product tags and filters are not publishable by API either.
- WhatsApp Cloud API group messaging exists but is limited to Official Business
  Accounts at high send volume. Not available here.

Before trusting any of the above in a new situation, re-check it. Do not answer
from memory about Meta or Metricool.
