import type { NextConfig } from "next";
const forPages = process.env.PAGES === "1";
const forArtifact = process.env.ARTIFACT === "1";
const nextConfig: NextConfig = forArtifact
  ? { output: "export", assetPrefix: "./", trailingSlash: false, images: { unoptimized: true } }
  : forPages
    ? { output: "export", basePath: "/publis/app", trailingSlash: true, images: { unoptimized: true } }
    : {};
export default nextConfig;
