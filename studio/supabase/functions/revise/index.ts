/**
 * revise - rewrites one piece of content from a free-text instruction.
 *
 * The studio is a static site, so the Anthropic key cannot live in it. This
 * runs on Supabase instead, with the key as a function secret.
 *
 * There is no sign-in, by the client's decision, so the function runs as the
 * anon role under the same row level security policies the app itself obeys -
 * read this one workspace, write its history. It never uses the service role,
 * so it cannot reach anything the app could not reach anyway.
 *
 * It changes TEXT only. The slide pictures are rendered upstream from the
 * words, so a revision rides the next render - the app says so rather than
 * letting anyone think the image redrew.
 */
import Anthropic from "npm:@anthropic-ai/sdk@0.74.0";
import { zodOutputFormat } from "npm:@anthropic-ai/sdk@0.74.0/helpers/zod";
import { createClient } from "npm:@supabase/supabase-js@2";
import { z } from "npm:zod@3.25.76";

const MODEL = "claude-opus-5-5";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const Revision = z.object({
  hook: z.string().describe("הכותרת של השקף הראשון"),
  slides: z
    .array(z.object({ id: z.string(), text: z.string() }))
    .describe("כל השקפים, באותו סדר ועם אותם מזהים"),
  caption: z.string().describe("הכיתוב מתחת לפוסט"),
  cta: z.string().describe("הבקשה בשקף האחרון"),
  note: z.string().describe("משפט אחד בעברית: מה שונה ולמה"),
});

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...cors, "Content-Type": "application/json" },
  });
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  if (req.method !== "POST") return json({ error: "method" }, 405);

  const apiKey = Deno.env.get("ANTHROPIC_API_KEY");
  if (!apiKey) {
    return json(
      { error: "no_key", message: "חסר מפתח ANTHROPIC_API_KEY בהגדרות הפונקציה." },
      503,
    );
  }

  // Anon, not the service role: row level security still decides everything.
  const db = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_ANON_KEY")!,
  );

  let body: { contentId?: string; instruction?: string };
  try {
    body = await req.json();
  } catch {
    return json({ error: "bad_json" }, 400);
  }

  const contentId = (body.contentId ?? "").trim();
  const instruction = (body.instruction ?? "").trim();
  if (!contentId || !instruction) return json({ error: "missing_fields" }, 400);
  if (instruction.length > 2000) return json({ error: "instruction_too_long" }, 400);

  const { data: item, error: itemError } = await db
    .from("content_items")
    .select("id, workspace_id, format, hook, caption, cta, body")
    .eq("id", contentId)
    .single();

  if (itemError || !item) return json({ error: "not_found" }, 404);

  // The brand's own voice, as the client wrote it. Pinned entries first.
  const { data: brain } = await db
    .from("brand_brain_entries")
    .select("section, title, body")
    .eq("workspace_id", item.workspace_id)
    .is("deleted_at", null)
    .order("pinned", { ascending: false })
    .order("sort_order", { ascending: true })
    .limit(60);

  const voice = (brain ?? [])
    .map((e) => `[${e.section}] ${e.title ? e.title + ": " : ""}${e.body}`)
    .join("\n");

  const slides = (item.body?.slides ?? []) as { id: string; text: string }[];

  const system = [
    "את/ה הקופירייטר/ית של Before I Do - משחק קלפים לזוגות מאורסים.",
    "המשימה: לשכתב פריט תוכן קיים לפי בקשה אחת של הלקוחה.",
    "",
    "חוקים:",
    "- כותבים בעברית בלבד.",
    "- לא ממציאים נושא חדש. משנים רק את מה שהבקשה מבקשת.",
    "- מחזירים בדיוק את אותו מספר שקפים, עם אותם מזהים ובאותו סדר.",
    "- שקף נושא רעיון אחד וקצר מספיק לקרוא תוך כדי גלילה.",
    "- בלי אימוג'ים, בלי האשטגים, בלי שפת פרסום.",
    "- המבחן היחיד: האם מאורסת תשלח את זה לארוס שלה?",
    "",
    "קול המותג, כפי שהלקוחה כתבה אותו:",
    voice || "(לא נמצא מידע על קול המותג)",
  ].join("\n");

  const user = [
    "הפריט הנוכחי:",
    JSON.stringify(
      {
        format: item.format,
        hook: item.hook,
        slides: slides.map((s) => ({ id: s.id, text: s.text })),
        caption: item.caption,
        cta: item.cta,
      },
      null,
      1,
    ),
    "",
    "מה שהיא ביקשה לשנות:",
    instruction,
  ].join("\n");

  const started = Date.now();
  const anthropic = new Anthropic({ apiKey });

  try {
    const response = await anthropic.messages.parse({
      model: MODEL,
      max_tokens: 8000,
      // Opus 5.5 defaults to medium; a voice-sensitive rewrite is worth saying
      // so explicitly rather than inheriting it.
      output_config: { effort: "medium", format: zodOutputFormat(Revision) },
      system,
      messages: [{ role: "user", content: user }],
    });

    if (response.stop_reason === "refusal") {
      return json({ error: "refused", message: "הבקשה הזאת לא עברה. נסי לנסח אחרת." }, 422);
    }

    const parsed = response.parsed_output;
    if (!parsed) return json({ error: "unparsed" }, 502);

    // Keep the model honest about the slide list: same ids, same order.
    const byId = new Map(parsed.slides.map((s) => [s.id, s.text]));
    const merged = slides.map((s) => ({ ...s, text: byId.get(s.id) ?? s.text }));

    const after = {
      hook: parsed.hook,
      caption: parsed.caption,
      cta: parsed.cta,
      slides: merged,
      note: parsed.note,
    };

    await db.from("generation_history").insert({
      workspace_id: item.workspace_id,
      content_id: item.id,
      task: "revise",
      provider: "anthropic",
      model: MODEL,
      input: { instruction },
      context_summary: { brain_entries: brain?.length ?? 0, slides: slides.length },
      output: after,
      status: "ok",
      latency_ms: Date.now() - started,
    });

    return json({
      before: {
        hook: item.hook,
        caption: item.caption,
        cta: item.cta,
        slides,
      },
      after,
    });
  } catch (e) {
    const message = e instanceof Error ? e.message : "unknown";
    await db.from("generation_history").insert({
      workspace_id: item.workspace_id,
      content_id: item.id,
      task: "revise",
      provider: "anthropic",
      model: MODEL,
      input: { instruction },
      context_summary: {},
      status: "error",
      error: message.slice(0, 500),
      latency_ms: Date.now() - started,
    });
    return json({ error: "generation_failed", message: "הגרסה הזאת לא הסתדרה." }, 502);
  }
});
