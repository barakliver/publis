/**
 * Builds the static site GitHub Pages serves, into ../app at the repo root.
 *
 * public/content is the development mirror of the rendered slides. Pages
 * already serves the originals at /publis/rounds, so the mirror is removed
 * before the export - shipping it would commit a second copy of every image.
 */
import { execFileSync } from "node:child_process";
import { cpSync, rmSync } from "node:fs";
import path from "node:path";

const here = process.cwd();
const out = path.join(here, "out");
const dest = path.join(here, "..", "app");

rmSync(path.join(here, "public", "content"), { recursive: true, force: true });
rmSync(out, { recursive: true, force: true });

execFileSync("npx", ["next", "build"], {
  stdio: "inherit",
  env: {
    ...process.env,
    PAGES: "1",
    NEXT_PUBLIC_SLIDES_BASE: "/publis/rounds",
  },
});

rmSync(dest, { recursive: true, force: true });
cpSync(out, dest, { recursive: true });
// Pages runs Jekyll otherwise, which drops every _next folder on the floor.
cpSync(path.join(here, "scripts", "nojekyll"), path.join(dest, ".nojekyll"));

console.log(`\n  pages -> ${path.relative(path.join(here, ".."), dest)}/`);
