import { slideUrl, supabase } from "@/lib/supabase";

export type Approval = "pending" | "approved" | "rejected";

export type Slide = {
  id: string;
  role: string;
  text: string;
  image: string | null;
};

export type FeedItem = {
  id: string;
  format: string;
  status: string;
  approval: Approval;
  skipCount: number;
  planDay: number | null;
  scheduledOn: string | null;
  hook: string;
  caption: string | null;
  cta: string | null;
  slides: Slide[];
};

type Row = {
  id: string;
  format: string;
  status: string;
  approval: Approval;
  skip_count: number;
  hook: string | null;
  caption: string | null;
  cta: string | null;
  body: { slides?: { id?: string; role?: string; text?: string; image?: string }[]; cta_image?: string } | null;
  content_calendar: { plan_day: number | null; scheduled_on: string | null }[] | null;
};

/** The columns the feed needs - not `select *`, which would pull every field. */
const COLUMNS =
  "id, format, status, approval, skip_count, hook, caption, cta, body, content_calendar(plan_day, scheduled_on)";

function toItem(row: Row): FeedItem {
  const raw = row.body?.slides ?? [];
  const slides: Slide[] = raw.map((s, i) => ({
    id: s.id ?? `${row.id}-${i}`,
    role: s.role ?? "body",
    text: s.text ?? "",
    image: slideUrl(s.image),
  }));

  // The rendered carousel carries one slide more than the workbook: the
  // closing ask, which the import kept on `cta`. It belongs at the end.
  const ctaImage = slideUrl(row.body?.cta_image);
  if (ctaImage) {
    slides.push({
      id: `${row.id}-cta`,
      role: "cta",
      text: row.cta ?? "",
      image: ctaImage,
    });
  }

  const cal = row.content_calendar?.[0];

  return {
    id: row.id,
    format: row.format,
    status: row.status,
    approval: row.approval,
    skipCount: row.skip_count ?? 0,
    planDay: cal?.plan_day ?? null,
    scheduledOn: cal?.scheduled_on ?? null,
    hook: row.hook ?? "",
    caption: row.caption,
    cta: row.cta,
    slides,
  };
}

/**
 * The queue, in plan order.
 *
 * Only pieces that actually have rendered slides are shown: the rest of the
 * sixty days needs a camera, and putting a text-only row in a feed built
 * around a picture would be dishonest about what is ready.
 */
export async function fetchQueue(approval: Approval): Promise<FeedItem[]> {
  const { data, error } = await supabase()
    .from("content_items")
    .select(COLUMNS)
    .is("deleted_at", null)
    .eq("approval", approval)
    .order("skip_count", { ascending: true })
    .limit(200);

  if (error) throw error;

  return ((data ?? []) as unknown as Row[])
    .map(toItem)
    .filter((i) => i.slides.some((s) => s.image))
    .sort((a, b) => {
      if (a.skipCount !== b.skipCount) return a.skipCount - b.skipCount;
      return (a.planDay ?? 999) - (b.planDay ?? 999);
    });
}

export async function decide(id: string, approval: Exclude<Approval, "pending">) {
  // No sign-in, so there is nobody to credit: decided_by stays null and
  // decided_at carries the only fact there is.
  const { error } = await supabase()
    .from("content_items")
    .update({ approval, decided_at: new Date().toISOString() })
    .eq("id", id);
  if (error) throw error;
}

/**
 * "Not sure" moves the item to the back of the queue and counts the pass.
 * It is deliberately not a status: nothing about the piece changed.
 */
export async function skip(id: string, current: number) {
  const { error } = await supabase()
    .from("content_items")
    .update({ skip_count: current + 1 })
    .eq("id", id);
  if (error) throw error;
}
