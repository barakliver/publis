"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { ThemeToggle } from "@/components/theme-toggle";

/**
 * Sign in with a six-digit code rather than a magic link.
 *
 * A link has to come back to an address the project has been told to allow,
 * which breaks the moment the app moves host. A typed code needs no redirect
 * at all, so this works on Pages today and anywhere else later.
 */
export function SignIn({ onSignedIn }: { onSignedIn: () => void }) {
  const [stage, setStage] = useState<"email" | "code">("email");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function sendCode(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    const { error } = await supabase().auth.signInWithOtp({
      email: email.trim(),
      options: { shouldCreateUser: false },
    });
    setBusy(false);
    if (error) {
      setError("לא הצלחנו לשלוח קוד לכתובת הזאת. בדקי אותה ונסי שוב.");
      return;
    }
    setStage("code");
  }

  async function verify(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    const { error } = await supabase().auth.verifyOtp({
      email: email.trim(),
      token: code.trim(),
      type: "email",
    });
    setBusy(false);
    if (error) {
      setError("הקוד לא התקבל. אפשר לבקש קוד חדש.");
      return;
    }
    onSignedIn();
  }

  return (
    <div className="flex h-full flex-col">
      <div className="flex justify-end px-4 pt-4">
        <ThemeToggle />
      </div>

      <div className="flex flex-1 items-center justify-center px-7">
        <div className="w-full max-w-[340px]">
          <h1 className="t-display text-[32px] text-ink">Before I Do</h1>
          <p className="mt-2 text-[15px] text-ink-2">
            {stage === "email"
              ? "נשלח לך קוד למייל."
              : `שלחנו קוד ל־${email}.`}
          </p>

          <form
            onSubmit={stage === "email" ? sendCode : verify}
            className="mt-6 flex flex-col gap-3"
          >
            {stage === "email" ? (
              <>
                <label htmlFor="email" className="t-label">
                  מייל
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  autoComplete="email"
                  dir="ltr"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 rounded-[var(--radius-control)] border border-line bg-surface px-4 text-[16px] text-ink outline-none placeholder:text-ink-3"
                  placeholder="you@example.com"
                />
              </>
            ) : (
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
              <p role="alert" className="text-[13.5px] text-ink-2">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={busy}
              className="tap mt-1 h-12 rounded-[var(--radius-control)] bg-ink text-[15px] font-medium text-ground transition-opacity disabled:opacity-50"
            >
              {busy ? "רגע…" : stage === "email" ? "שלחו קוד" : "כניסה"}
            </button>

            {stage === "code" && (
              <button
                type="button"
                onClick={() => {
                  setStage("email");
                  setCode("");
                  setError(null);
                }}
                className="tap text-[13px] text-ink-3"
              >
                כתובת אחרת
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
