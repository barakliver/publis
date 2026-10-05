"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { decide, fetchQueue, skip, type Approval, type FeedItem } from "@/lib/feed";
import { ChangeSheet } from "@/components/feed/change-sheet";
import { ThemeToggle } from "@/components/theme-toggle";

const FILTERS: { id: Approval; label: string }[] = [
  { id: "pending", label: "ממתינים" },
  { id: "approved", label: "אושרו" },
  { id: "rejected", label: "נדחו" },
];

export function FeedDeck() {
  const [filter, setFilter] = useState<Approval>("pending");
  const [items, setItems] = useState<FeedItem[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [flash, setFlash] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [changing, setChanging] = useState<FeedItem | null>(null);

  const load = useCallback(async (which: Approval) => {
    setItems(null);
    setError(null);
    try {
      setItems(await fetchQueue(which));
    } catch {
      setError("לא הצלחנו לטעון את התוכן.");
    }
  }, []);

  useEffect(() => {
    void load(filter);
  }, [filter, load]);

  function say(text: string) {
    setFlash(text);
    window.setTimeout(() => setFlash(null), 1100);
  }

  async function onDecide(item: FeedItem, approval: "approved" | "rejected") {
    setBusy(true);
    // Leave the deck immediately; the write is confirmed or undone after.
    setItems((list) => (list ?? []).filter((i) => i.id !== item.id));
    try {
      await decide(item.id, approval);
      say(approval === "approved" ? "אושר" : "נדחה");
    } catch {
      setItems((list) => [item, ...(list ?? [])]);
      say("לא נשמר. נסי שוב.");
    } finally {
      setBusy(false);
    }
  }

  async function onSkip(item: FeedItem) {
    setBusy(true);
    setItems((list) => {
      const rest = (list ?? []).filter((i) => i.id !== item.id);
      return [...rest, { ...item, skipCount: item.skipCount + 1 }];
    });
    try {
      await skip(item.id, item.skipCount);
    } catch {
      say("לא נשמר. נסי שוב.");
    } finally {
      setBusy(false);
    }
  }

  const current = items?.[0] ?? null;

  return (
    <div className="flex h-full flex-col">
      <Header
        filter={filter}
        onFilter={setFilter}
        count={items?.length ?? null}
      />

      <main className="relative flex min-h-0 flex-1 flex-col">
        {items === null ? (
          <Loading />
        ) : error ? (
          <Message title={error} action="נסי שוב" onAction={() => void load(filter)} />
        ) : current ? (
          <Card
            key={current.id}
            item={current}
            busy={busy}
            decided={filter !== "pending"}
            onApprove={() => void onDecide(current, "approved")}
            onReject={() => void onDecide(current, "rejected")}
            onSkip={() => void onSkip(current)}
            onChange={() => setChanging(current)}
          />
        ) : (
          <Empty filter={filter} onGoPending={() => setFilter("pending")} />
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

      {changing && (
        <ChangeSheet
          item={changing}
          onClose={() => setChanging(null)}
          onApplied={() => {
            setChanging(null);
            say("נשמר");
            void load(filter);
          }}
        />
      )}
    </div>
  );
}

function Header({
  filter,
  onFilter,
  count,
}: {
  filter: Approval;
  onFilter: (f: Approval) => void;
  count: number | null;
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
                (on ? "bg-surface-2 text-ink" : "text-ink-3 hover:text-ink-2")
              }
            >
              {f.label}
              {on && count !== null && count > 0 && (
                <span className="ms-1.5 tabular-nums text-ink-3">{count}</span>
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
  busy,
  decided,
  onApprove,
  onReject,
  onSkip,
  onChange,
}: {
  item: FeedItem;
  busy: boolean;
  decided: boolean;
  onApprove: () => void;
  onReject: () => void;
  onSkip: () => void;
  onChange: () => void;
}) {
  const [slide, setSlide] = useState(0);
  const strip = useRef<HTMLDivElement>(null);
  const shown = item.slides.filter((s) => s.image);

  function onScroll() {
    const el = strip.current;
    if (!el) return;
    const w = el.clientWidth || 1;
    // scrollLeft runs negative in an RTL container.
    setSlide(Math.round(Math.abs(el.scrollLeft) / w));
  }

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div
        ref={strip}
        onScroll={onScroll}
        dir="rtl"
        className="flex min-h-0 flex-1 snap-x snap-mandatory overflow-x-auto overflow-y-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {shown.map((s) => (
          <div
            key={s.id}
            className="flex w-full flex-none snap-center items-center justify-center px-4"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={s.image ?? ""}
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
          {shown.length > 1 && (
            <span>
              שקף {slide + 1} מתוך {shown.length}
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

        {item.skipCount >= 3 && !decided && (
          <p className="mt-2 text-[13px] text-ink-2">
            עברת על זה {item.skipCount} פעמים. אולי כדאי לשנות משהו?
          </p>
        )}
      </div>

      {!decided && (
        <div className="flex-none">
          <button
            type="button"
            onClick={onSkip}
            disabled={busy}
            className="tap mx-auto mt-3 block text-[12.5px] text-ink-3 transition-colors hover:text-ink-2 disabled:opacity-40"
          >
            לא בטוחה <span aria-hidden>↑</span>
          </button>

          <div className="mt-2 flex items-center justify-center gap-4 pb-1">
            {/* The heart sits on the start side - the right, in Hebrew -
                because that is where the dominant action belongs here. */}
            <Round label="אישור" onClick={onApprove} tone="yes" disabled={busy}>
              <path d="M12 20.3 4.6 13a4.9 4.9 0 0 1 7-6.9l.4.4.4-.4a4.9 4.9 0 0 1 7 6.9Z" />
            </Round>

            <button
              type="button"
              onClick={onChange}
              disabled={busy}
              className="tap h-[38px] rounded-full border border-line bg-surface px-5 text-[13.5px] text-ink transition-colors hover:bg-surface-2 disabled:opacity-40"
            >
              שינוי
            </button>

            <Round label="דחייה" onClick={onReject} tone="no" disabled={busy}>
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
  disabled,
  children,
}: {
  label: string;
  onClick: () => void;
  tone: "yes" | "no";
  disabled?: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className={
        "tap grid h-12 w-12 place-items-center rounded-full border bg-surface transition-[transform,background-color] duration-150 active:scale-95 disabled:opacity-40 " +
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

function Loading() {
  return (
    <div className="flex flex-1 items-center justify-center px-4">
      <div className="h-full max-h-[62vh] w-full animate-pulse rounded-[var(--radius-card)] bg-surface" />
    </div>
  );
}

function Message({
  title,
  action,
  onAction,
}: {
  title: string;
  action: string;
  onAction: () => void;
}) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center">
      <p className="t-display text-[24px] text-ink">{title}</p>
      <button
        type="button"
        onClick={onAction}
        className="tap rounded-full border border-line bg-surface px-5 py-2.5 text-[14px] text-ink transition-colors hover:bg-surface-2"
      >
        {action}
      </button>
    </div>
  );
}

function Empty({
  filter,
  onGoPending,
}: {
  filter: Approval;
  onGoPending: () => void;
}) {
  if (filter === "pending") {
    return <Message title="עברת על הכל." action="רענון" onAction={onGoPending} />;
  }
  return (
    <Message
      title={filter === "approved" ? "עוד לא אישרת משהו." : "עוד לא דחית כלום."}
      action="בואי נעבור על הממתינים"
      onAction={onGoPending}
    />
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
          disabled={!t.on}
          aria-current={t.on ? "page" : undefined}
          title={t.on ? undefined : "עוד לא נבנה"}
          className={
            "tap flex flex-1 flex-col items-center gap-1 py-1 text-[10.5px] transition-colors " +
            (t.on ? "text-ink" : "text-ink-3 opacity-45")
          }
        >
          <span
            aria-hidden
            className={
              t.action
                ? "h-[18px] w-[18px] rounded-full border-[1.5px] border-current"
                : "h-[18px] w-[18px] rounded-[5px] border-[1.5px] border-current"
            }
          />
          {t.label}
        </button>
      ))}
    </nav>
  );
}
