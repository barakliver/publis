# Photo shot list — Before I Do

The `photo` layout needs photographs. Claude renders the graphics but cannot
produce a photograph, so these come from a shoot or an image generator.

## How to add one

1. Put the file in `source/` — any size, JPG or PNG.
2. `node core/photos.js before-i-do --trim-top 0`
   (`--trim-top 19` only for the brand's older artwork, which has the heart
   burned into the top of the frame; new photos need no trim.)
3. Reference it in a content file by its filename without the extension:
   `{ layout: 'photo', photo: 'wine-date', headline: '...' }`

## What makes a photo work here

The template lays a heart at the top, a headline across the middle and a
wordmark, engagement marks and dots across the bottom. So:

- **Leave the middle third quiet.** A face or the product dead centre fights
  the headline. Put the subject low, or off to one side.
- **Shoot wider than you need.** Feed is 4:5 and story is 9:16, cropped from
  the same file. A tight frame loses its edges in the story crop.
- **Warm light, shallow depth.** Golden hour, a lamp, candles. It has to sit
  next to the cream and the blue without fighting them.
- **Hands, not faces, wherever it works.** Hands reading a card, pouring wine,
  reaching across a table. It reads as "us" rather than as models.
- **The deck earns its place in frame** — in hand, on the table, half open —
  but is rarely the subject.
- **No text in the photo.** The template adds it, correctly laid out in Hebrew.

## The shots worth having

| Name | What it is |
|---|---|
| `wine-date` | Two glasses of red on a wooden table at dusk, string lights out of focus behind, the open box and a few cards between them. Nobody in frame, or just hands. |
| `couch-night` | A couple on a sofa, low lamp, blanket, cards spread on the coffee table. Shot from behind or from the side — no eye contact with the camera. |
| `balcony` | Two people on a small balcony at golden hour, city soft behind, deck on a stool between them. |
| `hands-card` | Close crop: one hand holding a single card, a wine glass and a ring just in frame. Shallow depth. |
| `kitchen-floor` | The unglamorous one: sitting on the kitchen floor at midnight, takeaway containers, laptop shut, cards out. |
| `gift` | The closed box wrapped with a ribbon, held out toward the camera — the shot that carries the gift posts. |
| `morning-after` | Morning light, two coffees, cards still on the table from last night, a notebook with a few lines written. |

Seven photos cover a month without repeating. Three of them (`wine-date`,
`couch-night`, `gift`) carry most of the weight.

## If generating rather than shooting

The brand's existing photos were generated, and they set the reference. Keep
the same look: Pinterest wedding, warm and unstyled, real skin and real
fabric, nothing glossy.

A prompt shape that matches:

> Editorial lifestyle photograph, warm golden hour light, shallow depth of
> field, 50mm. An engaged couple at home — hands only, no faces — a small navy
> gift box and a few white cards on the table between two glasses of red wine.
> Soft neutral linen, muted cream and warm wood. Candid, unposed, a little
> imperfect. No text, no logos, no watermarks. Vertical 4:5.

Swap the scene for each row in the table above; hold the light, the palette
and the framing constant, or the feed stops looking like one brand.
