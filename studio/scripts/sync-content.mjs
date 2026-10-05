/**
 * Mirrors the rendered slides under public/ for local development.
 *
 * The same files are already served by GitHub Pages from rounds/, so the
 * static build points at those and this copy exists only so `next dev` has
 * something to serve. The path shape is identical on both sides, which is why
 * only the base URL differs and never the code. public/content is git-ignored.
 */
import { cpSync, existsSync, mkdirSync } from "node:fs";
import path from "node:path";

const ROUNDS = path.join(process.cwd(), "..", "rounds");
const OUT = path.join(process.cwd(), "public", "content");

if (!existsSync(ROUNDS)) {
  console.log("  content -> no ../rounds here, skipping");
  process.exit(0);
}

mkdirSync(OUT, { recursive: true });
cpSync(ROUNDS, OUT, { recursive: true, filter: (src) => !src.endsWith(".html") });
console.log("  content -> public/content");
