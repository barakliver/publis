import type { NextConfig } from "next";

/**
 * PAGES=1 produces the static build that GitHub Pages serves.
 *
 * Pages hosts the repository itself, so the app lands at /publis/app and the
 * rendered slides are read from /publis/rounds - the originals, already served,
 * never a second copy.
 */
const forPages = process.env.PAGES === "1";

const nextConfig: NextConfig = forPages
  ? {
      output: "export",
      basePath: "/publis/app",
      trailingSlash: true,
      images: { unoptimized: true },
    }
  : {};

export default nextConfig;
