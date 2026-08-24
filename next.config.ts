import type { NextConfig } from "next";

/**
 * Where the site is served from.
 *
 * A custom domain (and a <user>.github.io user page) serves from the root, so
 * this stays empty — the default.
 *
 * A bare project page serves from a subpath instead — https://<user>.github.io/portfolio —
 * and needs NEXT_PUBLIC_BASE_PATH=/portfolio set at build time, or every asset
 * URL points at the wrong place and the CSS 404s.
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
