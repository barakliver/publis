"use client";

import { useMemo, useRef, useState } from "react";
import type { FeedItem } from "@/lib/content";
import { ThemeToggle } from "@/components/theme-toggle";

type Decision = "approved" | "rejected";

const FILTERS = [
  { id: "today", label: "היום" },
  { id: "new", label: "חדשים" },
  { id: "approved", label: "אושרו" },
] as const;

type FilterId = (typeof FILTERS)[number]["id"];

export function FeedDeck({ items }: { items: FeedItem[] }) {
  const [filter, setFilter] = useState<FilterId>("new");
  const [decisions, setDecisions] = useState<Record<string, Decision>>({});
  // "Not sure" is ordering, not a status: the item goes to the back of the
  // queue and the count is what turns hesitation into information.
  const [skips, setSkips] = useState<Record<string, number>>({});
  const [order, setOrder] = useState<string[]>(() => items.map((i) => i.id));
  const [flash, setFlash] = useState<string | null>(null);

  const byId = useMemo(
    () => Object.fromEntries(items.map((i) => [i.id, i])),
    [items],
  );

  const queue = useMemo(() => {
    if (filter === "approved") {
      return order.filter((id) => decisions[id] === "approved");
    }
    return order.filter((id) => !decisions[id]);
  }, [order, decisions, filter]);

  const current = queue.length > 0 ? byId[queue[0]] : null;

  function decide(id: string, decision: Decision) {
    setDecisions((d) => ({ ...d, [id]: decision }));
    setFlash(decision === "approved" ? "אושר" : "נדחה");
    window.setTimeout(() => setFlash(null), 1100);
  }

  function skip(id: string) {
    setSkips((s) => ({ ...s, [id]: (s[id] ?? 0) + 1 }));
    setOrder((o) => [...o.filter((x) => x !== id), id]);
  }

  const approvedCount = Object.values(decisions).filter(
    (d) => d === "approved",
  ).length;

  return (
    <div className="flex h-full flex-col">
      <Header
        filter={filter}
        onFilter={setFilter}
        remaining={filter === "approved" ? approvedCount : queue.length}
      />

      <main className="relative flex min-h-0 flex-1 flex-col">
        {current ? (
          <Card
            key={current.id}
            item={current}
            skipped={skips[current.id] ?? 0}
            onApprove={() => decide(current.id, "approved")}
            onReject={() => decide(current.id, "rejected")}
            onSkip={() => skip(current.id)}
            decided={filter === "approved"}
          />
        ) : (
          <Empty filter={filter} />
        )}

        {flash && (
          <div
            role="status"
            className="pointer-events-none absolute inset-x-0 top-3 z-20 flex justify-center"
          >
            <span className="rounded-full bg-surface px-4 py-1.5 text-[13px] text-ink-2 shadow-[var(--shadow-card)]">
              {flash}
            </span>
          </div>
        )}
      </main>

      <BottomNav />
    </div>
  );
}

function Header({
  filter,
  onFilter,
  remaining,
}: {
  filter: FilterId;
  onFilter: (f: FilterId) => void;
  remaining: number;
}) {
  return (
    <header
      className="flex flex-none items-center gap-2 px-4 pb-3"
      style={{ paddingTop: "calc(env(safe-area-inset-top, 0px) + 14px)" }}
    >
      <div className="flex flex-1 items-center gap-1.5" role="tablist">
        {FILTERS.map((f) => {
          const on = f.id === filter;
          return (
            <button
              key={f.id}
              role="tab"
              aria-selected={on}
              onClick={() => onFilter(f.id)}
              className={
                "tap rounded-full px-3.5 py-1.5 text-[13px] transition-colors duration-200 " +
                (on
                  ? "bg-surface-2 text-ink"
                  : "text-ink-3 hover:text-ink-2")
              }
            >
              {f.label}
              {on && remaining > 0 && (
                <span className="ms-1.5 tabular-nums text-ink-3">
                  {remaining}
                </span>
              )}
            </button>
          );
        })}
      </div>
      <ThemeToggle />
    </header>
  );
}

function Card({
  item,
  skipped,
  onApprove,
  onReject,
  onSkip,
  decided,
}: {
  item: FeedItem;
  skipped: number;
  onApprove: () => void;
  onReject: () => void;
  onSkip: () => void;
  decided: boolean;
}) {
  const [slide, setSlide] = useState(0);
  const strip = useRef<HTMLDivElement>(null);

  function onScroll() {
    const el = strip.current;
    if (!el) return;
    const w = el.clientWidth || 1;
    // RTL scrollLeft runs negative in every engine that matters here.
    setSlide(Math.round(Math.abs(el.scrollLeft) / w));
  }

  const total = item.slides.length;

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div
        ref={strip}
        onScroll={onScroll}
        dir="rtl"
        className="flex min-h-0 flex-1 snap-x snap-mandatory overflow-x-auto overflow-y-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {item.slides.map((s) => (
          <div
            key={s.id}
            className="flex w-full flex-none snap-center items-center justify-center px-4"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={s.image}
              alt={s.text}
              width={1080}
              height={1350}
              className="max-h-full w-full rounded-[var(--radius-card)] object-contain shadow-[var(--shadow-card)]"
            />
          </div>
        ))}
      </div>

      <div className="flex-none px-5 pt-2.5 text-center">
        <p className="text-[12px] text-ink-3 tabular-nums">
          {total > 1 && (
            <span>
              שקף {slide + 1} מתוך {total}
            </span>
          )}
          {item.planDay && (
            <span className="ms-2 before:ms-2 before:content-['·']">
              יום {item.planDay}
            </span>
          )}
        </p>

        {item.caption && (
          <p className="t-body mx-auto mt-2 max-w-[42ch] text-[14.5px] text-ink-2">
            {item.caption}
          </p>
        )}

        {skipped >= 3 && (
          <p className="mt-2 text-[13px] text-ink-2">
            עברת על זה שלוש פעמים. אולי כדאי לשנות משהו?
          </p>
        )}
      </div>

      {!decided && (
        <div className="flex-none">
          <button
            type="button"
            onClick={onSkip}
            className="tap mx-auto mt-3 block text-[12.5px] text-ink-3 transition-colors hover:text-ink-2"
          >
            לא בטוחה <span aria-hidden>↑</span>
          </button>

          <div className="mt-2 flex items-center justify-center gap-4 pb-1">
            {/* The heart sits on the start side - the right, in Hebrew -
                because that is where the dominant action belongs here. */}
            <Round label="אישור" onClick={onApprove} tone="yes">
              <path d="M12 20.3 4.6 13a4.9 4.9 0 0 1 7-6.9l.4.4.4-.4a4.9 4.9 0 0 1 7 6.9Z" />
            </Round>

            <button
              type="button"
              className="tap h-[38px] rounded-full border border-line bg-surface px-5 text-[13.5px] text-ink transition-colors hover:bg-surface-2"
            >
              שינוי
            </button>

            <Round label="דחייה" onClick={onReject} tone="no">
              <path d="M6 6l12 12M18 6L6 18" />
            </Round>
          </div>
        </div>
      )}
    </div>
  );
}

function Round({
  label,
  onClick,
  tone,
  children,
}: {
  label: string;
  onClick: () => void;
  tone: "yes" | "no";
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={
        "tap grid h-12 w-12 place-items-center rounded-full border bg-surface transition-[transform,background-color] duration-150 active:scale-95 " +
        (tone === "yes"
          ? "border-yes/40 text-yes hover:bg-yes/10"
          : "border-line text-no hover:bg-surface-2")
      }
    >
      <svg
        viewBox="0 0 24 24"
        width="21"
        height="21"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {children}
      </svg>
    </button>
  );
}

function Empty({ filter }: { filter: FilterId }) {
  const copy =
    filter === "approved"
      ? { title: "עוד לא אישרת משהו.", action: "בואי נעבור על החדשים" }
      : { title: "עברת על הכל.", action: "תכין לי עוד 3" };

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center">
      <p className="t-display text-[26px] text-ink">{copy.title}</p>
      <button
        type="button"
        className="tap rounded-full border border-line bg-surface px-5 py-2.5 text-[14px] text-ink transition-colors hover:bg-surface-2"
      >
        {copy.action}
      </button>
    </div>
  );
}

function BottomNav() {
  const tabs = [
    { id: "feed", label: "פיד", on: true },
    { id: "create", label: "יצירה", action: true },
    { id: "gallery", label: "גלריה" },
    { id: "library", label: "ספרייה" },
  ];

  return (
    <nav
      className="flex flex-none border-t border-line-soft px-2 pt-2"
      style={{ paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 10px)" }}
      aria-label="ניווט ראשי"
    >
      {tabs.map((t) => (
        <button
          key={t.id}
          type="button"
          aria-current={t.on ? "page" : undefined}
          className={
            "tap flex flex-1 flex-col items-center gap-1 py-1 text-[10.5px] transition-colors " +
            (t.action ? "text-yes" : t.on ? "text-ink" : "text-ink-3")
          }
        >
          <span
            aria-hidden
            className={
              t.action
                ? "h-[18px] w-[18px] rounded-full bg-yes"
                : "h-[18px] w-[18px] rounded-[5px] border-[1.5px] border-current"
            }
          />
          {t.label}
        </button>
      ))}
    </nav>
  );
}
