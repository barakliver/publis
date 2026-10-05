import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * One browser client for the whole app.
 *
 * The studio is a static site, so every read and write happens from the
 * browser under the signed-in user's token. That is safe because row level
 * security is on for every table and the policy is membership of the
 * workspace - the key below is the publishable one, designed to ship to the
 * client, and it grants nothing on its own.
 */
let client: SupabaseClient | null = null;

export function supabase(): SupabaseClient {
  if (client) return client;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!url || !key) {
    throw new Error(
      "Supabase is not configured: NEXT_PUBLIC_SUPABASE_URL and " +
        "NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY must be set at build time.",
    );
  }

  client = createClient(url, key, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      // Nothing is read back out of the URL: sign-in is a typed code, not a
      // redirect, so the app works on any host without an allow-list entry.
      detectSessionInUrl: false,
    },
  });

  return client;
}

/** Where the rendered slides are served from; the database stores paths only. */
export const SLIDES_BASE =
  process.env.NEXT_PUBLIC_SLIDES_BASE ?? "/content";

export function slideUrl(path: string | null | undefined): string | null {
  if (!path) return null;
  return `${SLIDES_BASE}/${path}`;
}
