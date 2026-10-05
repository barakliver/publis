"use client";

import { useLayoutEffect, useState } from "react";
import { applyTheme, readTheme, type Theme } from "@/lib/theme";

/**
 * Light and dark, one button.
 *
 * There is deliberately no third "system" position: a tri-state control needs
 * explaining, and the system setting is already the default on a first visit.
 */
export function ThemeToggle({ className = "" }: { className?: string }) {
  // Matches what the boot script put on <html>, so state and DOM agree.
  const [theme, setTheme] = useState<Theme>("light");

  useLayoutEffect(() => {
    const resolved = readTheme();
    setTheme(resolved);
    // React's dev remount clears attributes it does not own, including the one
    // the boot script set. Re-applying here is a no-op in production.
    document.documentElement.setAttribute("data-theme", resolved);
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
  }

  const toDark = theme === "light";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={toDark ? "מעבר לתצוגה כהה" : "מעבר לתצוגה בהירה"}
      title={toDark ? "תצוגה כהה" : "תצוגה בהירה"}
      className={
        "tap grid h-10 w-10 place-items-center rounded-full border border-line " +
        "bg-surface text-ink-2 transition-colors duration-200 " +
        "hover:text-ink active:bg-surface-2 " +
        className
      }
    >
      <svg
        viewBox="0 0 24 24"
        width="19"
        height="19"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {toDark ? (
          // Going to dark: show the moon.
          <path d="M20 14.5A8.2 8.2 0 1 1 9.8 4a6.6 6.6 0 0 0 10.2 10.5Z" />
        ) : (
          // Going to light: show the sun.
          <>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2.6v2M12 19.4v2M2.6 12h2M19.4 12h2M5.4 5.4l1.4 1.4M17.2 17.2l1.4 1.4M18.6 5.4l-1.4 1.4M6.8 17.2l-1.4 1.4" />
          </>
        )}
      </svg>
    </button>
  );
}
