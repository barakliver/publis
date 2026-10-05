import { FeedDeck } from "@/components/feed/feed-deck";

/**
 * The feed opens straight away - no sign-in.
 *
 * The client asked for it, and the app is a static site, so "no sign-in" means
 * the anon role reads and writes directly under row level security. The
 * policies allow exactly three things inside this one workspace: read the
 * content, record a decision, and write the history that keeps a decision
 * reversible. Nothing can be deleted and no other workspace is reachable.
 */
export default function Page() {
  return (
    <div className="mx-auto flex h-dvh w-full max-w-[520px] flex-col">
      <FeedDeck />
    </div>
  );
}
