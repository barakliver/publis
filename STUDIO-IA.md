# Content Studio — information architecture and design reset

The durable copy of the proposal put to the client on 05.10.2026. The reviewable
version is an artifact: https://claude.ai/artifact/WtFXjmTiGJdKYxRmdhfoD2

**Nothing here is built yet.** The client asked to see the structure before any
interface code is written, and these decisions are awaiting her answer.

---

## What was and was not audited

She asked for an audit of what the current implementation inherited from the old
content machine. **The current implementation is not in this repository** - there
is no application code in `publis`, only the CLI pipeline. A repo named
`danipro` was pushed two hours after the Supabase project was created and may be
it; adding it to the session was denied on permissions.

So the audit below covers only what was read first-hand: the Supabase schema
(29 tables, read through the MCP) and this pipeline. Any interface living in
`danipro` is unexamined, and must not be described as if it were not.

---

## The legacy rule, applied

The test used to split the three categories: **if a thing can be described
without saying what it looks like, it is infrastructure. If it cannot, it is
experience, and it gets rewritten.**

### KEEP — infrastructure with no product identity

- **The database schema.** 29 tables, RLS on every one, no holes in the security
  advisors. It describes a domain, not an interface.
- **The image renderer.** Headless Chromium laying out HTML. The function is
  "Hebrew lays out correctly"; it becomes a service behind an HTTP entry point.
- **`bidi()` and `test/bidi.test.js`.** Ten cases that stop a reversed price.
- **The 60-day extraction.** Seven sheets already mapped to structure.

### REBUILD — the function survives, the experience is written from scratch

| Today | Becomes |
|---|---|
| Approval page: a per-day list of cards with tick marks | A feed of one item at a time |
| Slide-text edit that warns the image will not redraw | A change that produces a version and a comparison |
| Photo named by filename inside a content file | A gallery that opens in context |
| Day position in an array | A calendar screen inside Library, not the home |
| `layout` hardcoded in the template | The `templates` / `template_variants` tables that already exist |

### REMOVE — exists because the old product had it

- The list/grid view switch. Two ways to look at the same thing means neither is
  right; the feed shows one item.
- The הכל / פוסטים / סטורי tabs above the list.
- The WhatsApp export. It was a bridge because there was no shared database.
- The multi-brand hub. Before I Do is a product, not a row in a list.
- The desktop lightbox with arrows and a counter.

---

## Navigation

**Three tabs and one action**, not four tabs. Create is an action, not a
destination: it opens a sheet, finishes, and disappears. As a tab it would break
back behaviour on day one.

```
[ פיד ]        [ (+) יצירה ]        [ גלריה ]        [ ספרייה ]
  tab             action               tab              tab
```

| Screen | Contents |
|---|---|
| **פיד** | Home. One item, large, ready for a decision. Filters: היום · חדשים · אושרו |
| **גיליון יצירה** | יש לי רעיון · סטורי · קרוסלה · POV · פוסט · מהגלריה |
| **גלריה** | Media grid. Chips: מומלצות · אחרונות · לא השתמשנו · אני · ברק · אנחנו · המשחק · מאחורי הקלעים |
| **ספרייה** | לוח · אושרו · נדחו · רעיונות · קהל · תבניות · מוח המותג · נתונים · הגדרות |

Library's nine items are grouped by what they do, not by table name: **content**
(calendar, approved, rejected), **raw material** (ideas, audience, templates),
**the brand** (brand brain, analytics, settings).

Feed detail order on scroll, in one visual language throughout: visual → caption
→ copy → supporting stories → production instructions → assets → editing →
internal notes → status.

---

## Three decisions

One is settled; two are still open.

### 1. Horizontal drag and vertical scroll in the same region

The card answers a horizontal drag and an upward scroll opens the detail. Same
square. This is the gesture conflict that makes a product feel loose.

**Resolution:** direction lock on first movement at a 30-degree threshold, and
the card owns the horizontal gesture *only while the detail sheet is at rest*.
Once the sheet is engaged at all, horizontal drag is disabled until it returns.
Inside a carousel the horizontal drag changes slide, so the decision there is a
long drag or the button - never a guess.

### 2. "Not sure" — DECIDED 05.10.2026

Approve, reject and change cover three intents. The fourth is the common one:
**not sure**. Without it an item the client is undecided about blocks the queue
and the product forces a decision that is not ready.

**Built as:** swipe up, or the small `לא בטוחה` control. It sits **above** the
three buttons rather than in the row with them - four controls at equal weight
would flatten the primary decision, and this is not a decision but a deferral of
one.

The item returns to the end of the queue quietly: no confirmation, no toast, and
**no new status in the database** - ordering plus a counter. On the third return
of the same item, one line appears ("עברת על זה שלוש פעמים") and the change
sheet opens ready. The hesitation becomes information instead of staying stuck.

### 3. Thin Hebrew on a dark ground

Light type on a dark ground blooms and reads heavier than it is. In a large
headline that is an advantage - 300 on near-black reads like 400 on white. In a
small label it is the opposite: the same bloom blurs thin strokes, and Hebrew
has no ascenders or descenders to help word recognition.

**Rule:** never below 400 under 20px; 300 is good above 28px. Never `#000` as the
ground - bloom is worst on absolute black. **The app's typography is therefore
not the slides' typography**, even though both are Rubik.

---

## Tokens

| Token | Value | Role |
|---|---|---|
| `ground` | `#0B0D10` | Near-black, faint cool bias |
| `surface` | `#15181D` | Sheets, cards, rows |
| `surface-2` | `#1E222A` | Active chip, field, pressed |
| `line` | `#272C35` | Divider — visible in dark, not theoretical |
| `ink` | `#F2F1EE` | Primary text. Warm white, not `#FFF` |
| `ink-2` | `#9BA1AC` | Secondary, still 4.5:1 |
| `ink-3` | `#6B717C` | Labels only, never body |
| `yes` | `#F64C3B` | Approve — the brand's heart is the like |
| `no` | `#737C8C` | Reject — cool grey; a rejection is a decision, not an error |

Approve is the brand red rather than the conventional green: the fingerprint
heart is already a mark of affection, so lighting it on a right swipe needs no
explanation. Rejection takes a cool grey instead of a second red.

**Type:** Frank Ruhl Libre (the first Hebrew serif cut for print, 1908) for the
large editorial moments - screen titles, empty states, version comparison. Rubik
for everything else, because it is already the typeface of the images, so the app
and the output speak in one voice.
