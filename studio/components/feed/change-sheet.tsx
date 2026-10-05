"use client";

import { useEffect, useRef, useState } from "react";
import type { FeedItem } from "@/lib/feed";
import {
  applyRevision,
  requestRevision,
  type Revision,
  type RevisionSide,
} from "@/lib/revise";

/** Starting points, not separate actions: tapping one fills the field. */
const QUICK = [
  "יותר אישי",
  "פחות פרסומי",
  "יותר טבעי",
  "יותר מצחיק",
  "יותר קצר",
  "יותר חד",
  "שנה פתיחה",
  "שנה את הבקשה בסוף",
];

type Stage = "ask" | "working" | "compare";

export function ChangeSheet({
  item,
  onClose,
  onApplied,
}: {
  item: FeedItem;
  onClose: () => void;
  onApplied: () => void;
}) {
  const [stage, setStage] = useState<Stage>("ask");
  const [instruction, setInstruction] = useState("");
  const [revision, setRevision] = useState<Revision | null>(null);
  const [error, setError] = useState<string | null>(null);
  const field = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  async function run() {
    const text = instruction.trim();
    if (!text) {
      field.current?.focus();
      return;
    }
    setStage("working");
    setError(null);
    try {
      setRevision(await requestRevision(item.id, text));
      setStage("compare");
    } catch (e) {
      setError(e instanceof Error ? e.message : "הגרסה הזאת לא הסתדרה.");
      setStage("ask");
    }
  }

  async function keep() {
    if (!revision) return;
    setStage("working");
    try {
      await applyRevision(item, revision.after, instruction.trim());
      onApplied();
    } catch {
      setError("לא הצלחנו לשמור. נסי שוב.");
      setStage("compare");
    }
  }

  return (
    <div className="fixed inset-0 z-30 flex flex-col justify-end">
      <button
        type="button"
        aria-label="סגירה"
        onClick={onClose}
        className="absolute inset-0 bg-[var(--scrim)]"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="שינוי התוכן"
        className="relative mx-auto flex max-h-[86dvh] w-full max-w-[520px] flex-col rounded-t-[var(--radius-sheet)] border border-line bg-surface shadow-[var(--shadow-card)]"
        style={{ paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 14px)" }}
      >
        <div className="mx-auto mt-3 h-[3px] w-8 rounded-full bg-line" />

        {stage === "compare" && revision ? (
          <Compare
            revision={revision}
            onKeep={() => void keep()}
            onRetry={() => setStage("ask")}
            onClose={onClose}
            error={error}
          />
        ) : (
          <div className="flex min-h-0 flex-col overflow-y-auto px-5 pt-4">
            <p className="t-label">מה לשנות?</p>

            <div className="mt-3 flex flex-wrap gap-2">
              {QUICK.map((q) => (
                <button
                  key={q}
                  type="button"
                  disabled={stage === "working"}
                  onClick={() => {
                    setInstruction((v) => (v ? `${v}, ${q}` : q));
                    field.current?.focus();
                  }}
                  className="tap rounded-full border border-line bg-surface-2 px-3 py-1.5 text-[12.5px] text-ink-2 transition-colors hover:text-ink disabled:opacity-40"
                >
                  {q}
                </button>
              ))}
            </div>

            <label htmlFor="instruction" className="t-label mt-5">
              או תכתבי מה היית משנה
            </label>
            <textarea
              id="instruction"
              ref={field}
              rows={3}
              autoFocus
              disabled={stage === "working"}
              value={instruction}
              onChange={(e) => setInstruction(e.target.value)}
              placeholder="זה נשמע לי קצת כמו פרסומת"
              className="mt-2 w-full resize-none rounded-[var(--radius-control)] border border-line bg-ground px-4 py-3 text-[16px] leading-relaxed text-ink outline-none placeholder:text-ink-3 disabled:opacity-50"
            />

            {error && (
              <p role="alert" className="mt-2 text-[13.5px] text-ink-2">
                {error}
              </p>
            )}

            <p className="mt-3 text-[12px] leading-relaxed text-ink-3">
              השינוי הוא על הטקסט. התמונה מצוירת מהמילים בשלב מוקדם יותר, אז היא
              תתעדכן בבנייה הבאה.
            </p>

            <div className="mt-4 flex gap-2 pb-2">
              <button
                type="button"
                onClick={onClose}
                className="tap h-12 flex-1 rounded-[var(--radius-control)] border border-line text-[15px] text-ink-2"
              >
                ביטול
              </button>
              <button
                type="button"
                onClick={() => void run()}
                disabled={stage === "working" || !instruction.trim()}
                className="tap h-12 flex-[2] rounded-[var(--radius-control)] bg-ink text-[15px] font-medium text-ground transition-opacity disabled:opacity-40"
              >
                {stage === "working" ? "כותב…" : "שלחי"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Compare({
  revision,
  onKeep,
  onRetry,
  onClose,
  error,
}: {
  revision: Revision;
  onKeep: () => void;
  onRetry: () => void;
  onClose: () => void;
  error: string | null;
}) {
  const { before, after } = revision;

  return (
    <div className="flex min-h-0 flex-col overflow-y-auto px-5 pt-4">
      {after.note && (
        <p className="t-body text-[14px] text-ink-2">{after.note}</p>
      )}

      <Pair label="פתיחה" old={before.hook} now={after.hook} />
      {before.slides.map((s, i) => {
        const now = after.slides.find((x) => x.id === s.id)?.text ?? s.text;
        if (now === s.text) return null;
        return <Pair key={s.id} label={`שקף ${i + 1}`} old={s.text} now={now} />;
      })}
      <Pair label="כיתוב" old={before.caption} now={after.caption} />
      <Pair label="הבקשה בסוף" old={before.cta} now={after.cta} />

      {error && (
        <p role="alert" className="mt-3 text-[13.5px] text-ink-2">
          {error}
        </p>
      )}

      <div className="mt-5 flex flex-col gap-2 pb-2">
        <button
          type="button"
          onClick={onKeep}
          className="tap h-12 rounded-[var(--radius-control)] bg-ink text-[15px] font-medium text-ground"
        >
          בחרי בחדש
        </button>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={onClose}
            className="tap h-12 flex-1 rounded-[var(--radius-control)] border border-line text-[15px] text-ink-2"
          >
            השאירי את הקודם
          </button>
          <button
            type="button"
            onClick={onRetry}
            className="tap h-12 flex-1 rounded-[var(--radius-control)] border border-line text-[15px] text-ink-2"
          >
            נסי שוב
          </button>
        </div>
      </div>
    </div>
  );
}

function Pair({
  label,
  old,
  now,
}: {
  label: string;
  old: string | null;
  now: string | null;
}) {
  if (!old && !now) return null;
  if (old === now) return null;

  return (
    <section className="mt-4 border-t border-line-soft pt-3 first:border-t-0">
      <p className="t-label">{label}</p>
      <p className="mt-1.5 text-[14px] leading-relaxed text-ink-3 line-through decoration-ink-3/40">
        {old || "—"}
      </p>
      <p className="mt-1 text-[15px] leading-relaxed text-ink">{now || "—"}</p>
    </section>
  );
}
