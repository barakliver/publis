export const THEME_KEY = "bid-theme";

export type Theme = "light" | "dark";

/**
 * Resolves the theme before the first paint and writes it to <html>.
 *
 * Runs as an inline script during HTML parsing, so there is no flash: the
 * stored choice wins, and with no stored choice the system setting decides.
 * Everything is wrapped because localStorage throws in a private window.
 */
export const THEME_BOOT_SCRIPT = `(function(){try{
var t=localStorage.getItem(${JSON.stringify(THEME_KEY)});
if(t!=="light"&&t!=="dark"){t=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}
document.documentElement.setAttribute("data-theme",t);
}catch(e){}})()`;

/** The same resolution, for React state that has to agree with the DOM. */
export function readTheme(): Theme {
  if (typeof window === "undefined") return "light";
  try {
    const stored = window.localStorage.getItem(THEME_KEY);
    if (stored === "light" || stored === "dark") return stored;
  } catch {
    /* private window, blocked storage - fall through to the system setting */
  }
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
  try {
    window.localStorage.setItem(THEME_KEY, theme);
  } catch {
    /* the choice still applies for this page; it just will not be remembered */
  }
}
