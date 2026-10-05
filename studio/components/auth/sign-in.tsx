"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { ThemeToggle } from "@/components/theme-toggle";

/**
 * Password first, a mailed code second.
 *
 * The code was the only way in at first, and it broke: Supabase's built-in
 * email service allows a couple of messages an hour and then returns
 * `over_email_send_rate_limit`, so a few attempts lock the door for everyone.
 * A password has no such ceiling. The code stays as a way back in, with the
 * limit said out loud instead of looking like a failure.
 */
type Mode = "password" | "code-request" | "code-verify";

export function SignIn({ onSignedIn }: { onSignedIn: () => void }) {
  const [mode, setMode] = useState<Mode>("password");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function withBusy(run: () => Promise<void>) {
    setBusy(true);
    setError(null);
    try {
      await run();
    } finally {
      setBusy(false);
    }
  }

  const signInWithPassword = (e: React.FormEvent) => {
    e.preventDefault();
    void withBusy(async () => {
      const { error } = await supabase().auth.signInWithPassword({
        email: email.trim(),
        password,
      });
      if (error) {
        setError("המייל או הסיסמה לא נכונים.");
        return;
      }
      onSignedIn();
    });
  };

  const sendCode = (e: React.FormEvent) => {
    e.preventDefault();
    void withBusy(async () => {
      const { error } = await supabase().auth.signInWithOtp({
        email: email.trim(),
        options: { shouldCreateUser: false },
      });
      if (error) {
        // The one failure worth naming precisely: it is a quota, not a fault.
        setError(
          error.message.toLowerCase().includes("rate limit")
            ? "נשלחו יותר מדי מיילים בשעה האחרונה. אפשר להיכנס עם סיסמה, או לנסות שוב בעוד שעה."
            : "לא הצלחנו לשלוח קוד לכתובת הזאת.",
        );
        return;
      }
      setMode("code-verify");
    });
  };

  const verifyCode = (e: React.FormEvent) => {
    e.preventDefault();
    void withBusy(async () => {
      const { error } = await supabase().auth.verifyOtp({
        email: email.trim(),
        token: code.trim(),
        type: "email",
      });
      if (error) {
        setError("הקוד לא התקבל.");
        return;
      }
      onSignedIn();
    });
  };

  const onSubmit =
    mode === "password"
      ? signInWithPassword
      : mode === "code-request"
        ? sendCode
        : verifyCode;

  return (
    <div className="flex h-full flex-col">
      <div className="flex justify-end px-4 pt-4">
        <ThemeToggle />
      </div>

      <div className="flex flex-1 items-center justify-center px-7">
        <div className="w-full max-w-[340px]">
          <h1 className="t-display text-[32px] text-ink">Before I Do</h1>
          <p className="mt-2 text-[15px] text-ink-2">
            {mode === "code-verify"
              ? `שלחנו קוד ל־${email}.`
              : "כניסה לסבב התוכן."}
          </p>

          <form onSubmit={onSubmit} className="mt-6 flex flex-col gap-3">
            {mode !== "code-verify" && (
              <>
                <label htmlFor="email" className="t-label">
                  מייל
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  autoComplete="username"
                  dir="ltr"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 rounded-[var(--radius-control)] border border-line bg-surface px-4 text-[16px] text-ink outline-none placeholder:text-ink-3"
                  placeholder="you@example.com"
                />
              </>
            )}

            {mode === "password" && (
              <>
                <label htmlFor="password" className="t-label mt-1">
                  סיסמה
                </label>
                <input
                  id="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  dir="ltr"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12 rounded-[var(--radius-control)] border border-line bg-surface px-4 text-[16px] text-ink outline-none"
                />
              </>
            )}

            {mode === "code-verify" && (
              <>
                <label htmlFor="code" className="t-label">
                  הקוד מהמייל
                </label>
                <input
                  id="code"
                  inputMode="numeric"
                  autoComplete="one-time-code"
                  required
                  dir="ltr"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="h-12 rounded-[var(--radius-control)] border border-line bg-surface px-4 text-center text-[20px] tracking-[0.4em] text-ink outline-none"
                  placeholder="000000"
                />
              </>
            )}

            {error && (
              <p role="alert" className="text-[13.5px] leading-relaxed text-ink-2">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={busy}
              className="tap mt-1 h-12 rounded-[var(--radius-control)] bg-ink text-[15px] font-medium text-ground transition-opacity disabled:opacity-50"
            >
              {busy
                ? "רגע…"
                : mode === "password"
                  ? "כניסה"
                  : mode === "code-request"
                    ? "שלחו קוד"
                    : "כניסה"}
            </button>

            <button
              type="button"
              onClick={() => {
                setError(null);
                setCode("");
                setMode(mode === "password" ? "code-request" : "password");
              }}
              className="tap mt-1 text-[13px] text-ink-3 hover:text-ink-2"
            >
              {mode === "password"
                ? "אין לי סיסמה, שלחו קוד למייל"
                : "כניסה עם סיסמה"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
