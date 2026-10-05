/**
 * A script that runs while the browser parses the HTML, before first paint.
 *
 * React warns in development when a render produces a <script> tag, so the
 * type is flipped to text/plain on the client - the server-rendered copy has
 * already run by then, and a re-render must not run it twice.
 */
export function InlineScript({ html }: { html: string }) {
  return (
    <script
      type={typeof window === "undefined" ? "text/javascript" : "text/plain"}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
