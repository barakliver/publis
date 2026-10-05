# Skills map — Before I Do Content Studio

What each phase of the build will actually be driven by. Recorded before
implementation so the choices are reviewable, and so nobody installs a second
skill for a job that is already covered.

Discovered on 05.10.2026 by listing the enabled skills, searching the skill
library and searching the plugin catalogue. Three facts shaped it:

1. **The studio's database already exists.** Supabase project
   `before-i-do-studio` (`qakglwmndwdfpjrrmobs`, eu-central-1, healthy) was
   created on 04.10.2026 and carries all 24 tables from the brief plus
   `workspaces`, `profiles`, `workspace_members`, `workspace_invites` and
   `filming_sessions`. **RLS is enabled on every one.** One migration, `init`.
   Two workspaces and two profiles are seeded; every content table is empty.
   Security advisors return one WARN - leaked-password protection is off - and
   no RLS holes.
2. **The Hebrew renderer is already solved in this repo**, which settles the
   "evaluate the approach" item rather than reopening it. See below.
3. **No app code exists yet** in `publis`, and no studio repository is visible.

---

## The map

| # | Task | Skill | Why |
|---|---|---|---|
| 1 | Frontend design, editorial feel | `ui-ux-pro-max` | The strongest enabled design skill: 79 styles, 192 palettes, 74 font pairings, 119 UX guidelines, stack-specific implementation. Covers hierarchy, spacing, typography and anti-generic direction in one place. |
| 2 | UI/UX, flows, empty states | `ui-ux-pro-max` | Same skill, its UX guideline set. No second skill needed - a duplicate here would just disagree with itself. |
| 3 | Next.js App Router | **none** - native | Nothing in the library or the catalogue covers Next.js properly. The one candidate (`Skills For Real React/React Native Engineers`) is community-tier and mostly React Native. Native capability, pinned to the installed major (Next 16.x). |
| 4 | React architecture | **none** - native | Same. |
| 5 | Supabase | `supabase` plugin (**suggested, not yet installed**) + the Supabase MCP already connected here | Partner-tier, official. The MCP is already live and was used to read the schema above, so the plugin adds the Postgres/RLS practice skill rather than access. |
| 6 | Database design | `supabase-postgres-best-practices` (in that plugin) | Mostly a review job now, not a design job - the schema is built. The skill is for indexes, constraints and RLS review before content lands. |
| 7 | Tailwind | `ui-styling` | Covers Tailwind token setup and dark mode. Paired with `design-system` for the token layering. |
| 8 | shadcn/ui | `ui-styling` | Built on Radix + Tailwind, which is exactly the primitive layer wanted. Its defaults get overridden by the brand tokens - the skill is for the accessible behaviour, not the look. |
| 9 | Responsive, mobile-first | `ui-ux-pro-max` | Its responsive and layout guidance. Mobile is the primary interface here. |
| 10 | RTL and Hebrew | **this repo's own `bidi()`** + `rtl-hebrew-docs` for document-side RTL | `rtl-hebrew-docs` is aimed at PDF/DOCX/PPTX, so it is a partial fit; its one transferable lesson - HTML with `dir="rtl"` rendered through headless Chrome - is already what this repo does. The hard part, isolating numbers inside Hebrew, is solved by `bidi()` in `template.html` and guarded by `test/bidi.test.js`. That test is the RTL authority for anything that reaches an image. |
| 11 | Accessibility | `Axe Accessibility` (**suggested, not yet installed**) | Deque, partner-tier. Real WCAG scanning against a running screen, not a checklist from memory. This is the one a11y candidate worth having. |
| 12 | Web design review | `ui-ux-pro-max` | Used as a review pass after each screen, not during. |
| 13 | Playwright | **none** - native, on `playwright-core@1.63` already installed | No Playwright skill exists in either source. Chromium is already on disk at `/opt/pw-browsers`; never run `playwright install`. |
| 14 | Browser testing | `run` (built-in) + Playwright screenshots | `run` knows how to launch a project's app. Screens get opened and looked at, at phone width and desktop. |
| 15 | Visual screenshot review | Playwright screenshot → read the PNG | Same loop this repo already uses for slides: render, look, fix. It has caught a wordmark collision, an invisible engagement row and type covering a face - all of which typechecked fine. |
| 16 | Image processing | **none** - native, headless Chromium | `core/photos.js` already crops 4:5 and 9:16 with no native dependency (`sharp` is not installed and is not needed). |
| 17 | Graphic rendering | **this repo's `core/render.js`** | Decision below. |
| 18 | Canvas / SVG / HTML-to-image | **HTML + headless Chromium** | Decision below. |
| 19 | Image generation | used sparingly | Never in place of a real photograph of the founders, the product or a customer. The brand already has two generated photos with the heart burned into the frame, which is what that road costs. |
| 20 | Spreadsheet import | `xlsx` | Already used: the workbook is extracted to `brands/before-i-do/content/system-60day.json` with all seven sheets kept apart. What remains is mapping that JSON onto the tables, not re-parsing. |
| 21 | Copywriting | `brand` + the Brand Brain in `brand.yaml` | `brand` covers voice and consistency mechanics. The voice itself is the client's own sheet - `persona.voice_sheet` wins over any skill, and `persona.content_test` is the only acceptance test. |
| 22 | Social content | **none** - native + her 60-day system | No social skill in either source is better than her own workbook, which carries 17 POV scripts, a 60-entry story bank and 9 written carousels. |
| 23 | Content strategy | **none** - native + her calendar | Same. Her pillar split is already encoded. |
| 24 | Security review | `security-review` (built-in) + Supabase advisors | The advisors read the live project; the skill reads the diff. Both, before production. |
| 25 | Performance | **none** - native | The one catalogue hit was React Native-oriented. |
| 26 | TypeScript | **none** - native, strict mode | The catalogue offers an LSP plugin and an API-drift checker, neither of which is a practice skill. |
| 27 | Code review | `code-review` (built-in) | Runs on the diff after each phase. |
| 28 | Testing | **none** - native | Unit tests where logic earns them: status transitions, import mapping, repetition detection. |
| 29 | AI architecture | `claude-api` (built-in) | Authoritative on model ids, streaming, tool use and caching - and explicitly not to be answered from memory. `core/write.js` is the existing generation service to grow from, not a prompt inside a component. |
| 30 | Prompt engineering | `claude-api` (built-in) | Same source. |
| 31 | Product design | **none** - native | Judgement, not a skill. |

**Not installed on purpose.** `RLS Schema Explorer for Supabase` duplicates the
official Supabase plugin; `Figma to Code` has no Figma file to work from;
`API Drift Detector` and `typescript-native-lsp` are not practice skills;
`Skills For Real React/React Native Engineers` is community-tier and roughly
half React Native (reanimated, skia, gsap) - worth revisiting only if the
Next.js gap starts costing real mistakes.

---

## Decision: how finished Instagram graphics get rendered

**HTML and CSS laid out by headless Chromium, screenshotted at 1080x1350 and
1080x1920.** This is not a fresh choice - it is what `core/render.js` already
does, and the studio should call the same renderer rather than grow a second
one.

Why it wins over the alternatives, on this product's actual constraint:

- **Hebrew and RTL.** Chromium implements the Unicode bidi algorithm. Canvas
  `fillText` does not do bidi reordering, and SVG `<text>` support is uneven
  across renderers. A price or a date inside a Hebrew line has already shipped
  reversed in this brand's own past posts; `bidi()` plus `test/bidi.test.js`
  is what stops that, and it only works inside a real layout engine.
- **Determinism.** Fonts are loaded from disk (`Rubik.ttf`), the render waits
  for every image to decode, and two consecutive runs are byte-identical.
- **Already proven at both sizes**, with the furniture, the scrim, the
  wordmark and the engagement row all laid out in the same pass.
- **No native dependencies**, so it runs the same in a web container and in
  the Saturday GitHub Action.

What changes for the studio: the renderer becomes a service with an HTTP entry
point instead of a CLI entry point, and templates come from `templates` /
`template_variants` rather than a file. The layout engine does not change.

**What is explicitly rejected:** asking an image model to set Hebrew type. It
cannot, and the failure is silent - letters reorder and nobody notices until a
customer does.

---

## The working loop, per phase

- **Screen:** product thinking → UX → `ui-ux-pro-max` → RTL from the first
  markup, never as a final patch → build → run it → look at it at phone width
  and desktop → `Axe Accessibility` → Playwright for the flow.
- **Data:** read the live schema through the Supabase MCP → migration →
  advisors → `security-review` → `code-review`.
- **Generation:** her voice sheet → `claude-api` for the mechanics → generation
  service, never a prompt in a component → `persona.content_test` on the output.

A screen is not finished because it compiles. It is finished when it has been
looked at.
