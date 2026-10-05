import { supabase } from "@/lib/supabase";
import type { FeedItem } from "@/lib/feed";

export type RevisionSide = {
  hook: string | null;
  caption: string | null;
  cta: string | null;
  slides: { id: string; text: string }[];
  note?: string;
};

export type Revision = { before: RevisionSide; after: RevisionSide };

/**
 * Asks the `revise` edge function for a new version.
 *
 * The function holds the Anthropic key and forwards the caller's token to the
 * database, so this sends nothing but the instruction and the item's id.
 */
export async function requestRevision(
  contentId: string,
  instruction: string,
): Promise<Revision> {
  const { data } = await supabase().auth.getSession();
  const token = data.session?.access_token;
  if (!token) throw new Error("לא מחוברת.");

  const url = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/revise`;
  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ contentId, instruction }),
  });

  const payload = (await res.json().catch(() => null)) as
    | (Revision & { message?: string; error?: string })
    | null;

  if (!res.ok) {
    throw new Error(payload?.message ?? "הגרסה הזאת לא הסתדרה.");
  }
  if (!payload?.after) throw new Error("הגרסה הזאת לא הסתדרה.");
  return { before: payload.before, after: payload.after };
}

/**
 * Keeps the new version.
 *
 * The old wording is snapshotted first, so "השאירי את הקודם" stays possible
 * after the fact and the history is not silently overwritten.
 */
export async function applyRevision(
  item: FeedItem,
  after: RevisionSide,
  instruction: string,
) {
  const db = supabase();
  const { data: auth } = await db.auth.getUser();

  const { data: row, error: readError } = await db
    .from("content_items")
    .select("workspace_id, body, hook, caption, cta")
    .eq("id", item.id)
    .single();
  if (readError || !row) throw readError ?? new Error("not found");

  const { error: versionError } = await db.from("content_versions").insert({
    workspace_id: row.workspace_id,
    content_id: item.id,
    snapshot: { hook: row.hook, caption: row.caption, cta: row.cta, body: row.body },
    reason: `revise: ${instruction}`.slice(0, 500),
    created_by: auth.user?.id ?? null,
  });
  if (versionError) throw versionError;

  const byId = new Map(after.slides.map((s) => [s.id, s.text]));
  const body = row.body as { slides?: { id: string; text: string }[] };
  const slides = (body?.slides ?? []).map((s) => ({
    ...s,
    text: byId.get(s.id) ?? s.text,
  }));

  const { error } = await db
    .from("content_items")
    .update({
      hook: after.hook,
      caption: after.caption,
      cta: after.cta,
      body: { ...body, slides },
    })
    .eq("id", item.id);
  if (error) throw error;
}
