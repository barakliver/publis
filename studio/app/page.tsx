"use client";

import { useCallback, useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { SignIn } from "@/components/auth/sign-in";
import { FeedDeck } from "@/components/feed/feed-deck";

type State = "loading" | "out" | "in";

export default function Page() {
  const [state, setState] = useState<State>("loading");

  const check = useCallback(async () => {
    const { data } = await supabase().auth.getSession();
    setState(data.session ? "in" : "out");
  }, []);

  useEffect(() => {
    void check();
    const { data } = supabase().auth.onAuthStateChange((_event, session) => {
      setState(session ? "in" : "out");
    });
    return () => data.subscription.unsubscribe();
  }, [check]);

  async function signOut() {
    await supabase().auth.signOut();
    setState("out");
  }

  return (
    <div className="mx-auto flex h-dvh w-full max-w-[520px] flex-col">
      {state === "loading" ? null : state === "out" ? (
        <SignIn onSignedIn={() => setState("in")} />
      ) : (
        <FeedDeck onSignOut={() => void signOut()} />
      )}
    </div>
  );
}
