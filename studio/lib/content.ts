import { readFile } from "node:fs/promises";
import path from "node:path";

/**
 * The shape the feed works in.
 *
 * It matches `content_items` in Supabase deliberately - `body.slides` is the
 * same jsonb shape - so moving the feed from this file to the database is a
 * change of loader and nothing else.
 */
export type SlideRole = "cover" | "body" | "final";

export type Slide = {
  id: string;
  role: SlideRole;
  text: string;
  /** Path under /public, when the slide has been rendered. */
  image?: string;
};

export type FeedItem = {
  id: string;
  format: "carousel" | "story" | "post";
  planDay: number | null;
  hook: string;
  caption: string | null;
  cta: string | null;
  slides: Slide[];
};

type RawCarousel = Record<string, string>;

/**
 * The client's own 60-day workbook, extracted and tracked in the content
 * repository. Her wording is used verbatim; nothing here rewrites it.
 */
const SYSTEM_PATH = path.join(
  process.cwd(),
  "..",
  "brands",
  "before-i-do",
  "content",
  "system-60day.json",
);

/** "שקופית 4" -> 4, so the slides keep her order rather than object order. */
function slideIndex(key: string): number | null {
  const m = key.match(/^שקופית\s+(\d+)$/);
  return m ? Number(m[1]) : null;
}

export async function loadCarousels(): Promise<FeedItem[]> {
  const raw = await readFile(SYSTEM_PATH, "utf8");
  const system = JSON.parse(raw) as { carousels?: RawCarousel[] };
  const carousels = system.carousels ?? [];

  return carousels.map((row, i) => {
    const hook = row["כותרת"] ?? "";
    const rest = Object.keys(row)
      .map((k) => ({ k, n: slideIndex(k) }))
      .filter((x): x is { k: string; n: number } => x.n !== null)
      .sort((a, b) => a.n - b.n)
      .map((x) => row[x.k])
      .filter((t) => t && t.trim().length > 0);

    const texts = [hook, ...rest].filter(Boolean);
    const day = Number(row["יום"]);

    const slides: Slide[] = texts.map((text, s) => ({
      id: `c${i + 1}-s${s + 1}`,
      role: s === 0 ? "cover" : s === texts.length - 1 ? "final" : "body",
      text,
      image: `/content/c${i + 1}-s${s + 1}.png`,
    }));

    return {
      id: `carousel-${i + 1}`,
      format: "carousel",
      planDay: Number.isFinite(day) ? day : null,
      hook,
      caption: row["Caption"] ?? null,
      cta: row["CTA"] ?? null,
      slides,
    };
  });
}
