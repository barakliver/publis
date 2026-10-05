/**
 * Copies the rendered slides the feed shows into public/.
 *
 * The images already exist once under ../rounds, and the repository is public,
 * so they are not committed a second time - public/content is git-ignored and
 * rebuilt from this script before dev or build.
 */
import { copyFileSync, mkdirSync, readdirSync } from "node:fs";
import path from "node:path";

const ROUNDS = path.join(process.cwd(), "..", "rounds", "before-i-do");
const OUT = path.join(process.cwd(), "public", "content");

// Her nine carousels split across two rounds: seven, then two.
const SOURCES = Array.from({ length: 9 }, (_, i) => ({
  carousel: i + 1,
  round: i < 7 ? "2026-W43" : "2026-W44",
  post: i < 7 ? i + 1 : i - 6,
}));

mkdirSync(OUT, { recursive: true });

let copied = 0;
for (const { carousel, round, post } of SOURCES) {
  const dir = path.join(ROUNDS, round, "images");
  const prefix = `post-${String(post).padStart(2, "0")}-`;
  const files = readdirSync(dir)
    .filter((f) => f.startsWith(prefix) && f.endsWith(".png"))
    .sort();
  files.forEach((file, slide) => {
    copyFileSync(path.join(dir, file), path.join(OUT, `c${carousel}-s${slide + 1}.png`));
    copied += 1;
  });
}

console.log(`  content -> public/content (${copied} slides)`);
