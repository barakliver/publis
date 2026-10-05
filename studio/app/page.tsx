import { loadCarousels } from "@/lib/content";
import { FeedDeck } from "@/components/feed/feed-deck";

export default async function FeedPage() {
  const items = await loadCarousels();

  return (
    <div className="mx-auto flex h-dvh w-full max-w-[520px] flex-col">
      <FeedDeck items={items} />
    </div>
  );
}
