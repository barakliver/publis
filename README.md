# publis

A content machine: generates weekly social posts and stories for brands,
renders the images from the brand's own visual templates, and puts every round
in front of a human before anything is scheduled.

First brand: **Before I Do** by Liver Production.

## Run a round

```bash
npm install
node core/plan.js    before-i-do 2026-W41
node core/render.js  before-i-do rounds/before-i-do/2026-W41
node core/review.js  before-i-do rounds/before-i-do/2026-W41
```

That produces `rounds/before-i-do/2026-W41/` with `round.json`, 35 PNGs and
`review.html`. Nothing is scheduled and nothing is published — approval comes
first, always.

## Add a brand

1. `cp -r brands/before-i-do brands/<new-brand>`
2. Edit `brands/<new-brand>/brand.yaml` — name, colours, voice, posting rhythm.
3. Replace `assets/` with the new brand's logo files and Hebrew font.
4. Write `content/<week>.js`.

No code changes. `core/` never names a brand.

## Secrets

Copy `.env.example` to `.env` and fill it in. `.env` is git-ignored and this
repository is public — never put a key anywhere else.

## Tests

```bash
node test/bidi.test.js
```

Guards the Hebrew right-to-left rule that keeps dates and prices from shipping
reversed.
