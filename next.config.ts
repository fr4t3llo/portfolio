import type { NextConfig } from "next";

/**
 * GitHub Pages serves a project repo from a subpath — https://<user>.github.io/portfolio —
 * so the build needs a basePath. The CI workflow sets NEXT_PUBLIC_BASE_PATH=/portfolio;
 * local `npm run dev` leaves it empty and serves from the root.
 *
 * Publishing at a user page instead (a repo named <user>.github.io)? Drop the env var
 * from the workflow and everything serves from "/".
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Emit a plain static site into ./out — Pages has no Node server.
  output: "export",
  basePath,
  assetPrefix: basePath,
  // Pages can't run Next's image optimizer, so images are served as-is.
  images: { unoptimized: true },
  // Emits about/index.html rather than about.html, which Pages resolves cleanly.
  trailingSlash: true,
};

export default nextConfig;
