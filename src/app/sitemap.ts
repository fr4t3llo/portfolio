import type { MetadataRoute } from "next";
import { profile, projects } from "@/data/profile";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  // trailingSlash is on, so canonical URLs end in "/".
  return [
    { url: `${profile.siteUrl}/`, priority: 1 },
    ...projects
      .filter((p) => p.slug)
      .map((p) => ({
        url: `${profile.siteUrl}/projects/${p.slug}/`,
        priority: 0.6,
      })),
  ];
}
