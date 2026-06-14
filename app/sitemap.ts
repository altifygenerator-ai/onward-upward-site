import type { MetadataRoute } from "next";
import { areaPages, servicePages, siteUrl } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/gallery`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.72,
    },
    {
      url: `${siteUrl}/seasonal`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.82,
    },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = Object.keys(servicePages).map((slug) => ({
    url: `${siteUrl}/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: slug === "landscaping-hot-springs-ar" ? 0.92 : 0.86,
  }));

  const areaRoutes: MetadataRoute.Sitemap = Object.keys(areaPages).map((slug) => ({
    url: `${siteUrl}/service-areas/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: slug === "hot-springs-ar" ? 0.84 : 0.74,
  }));

  return [...staticRoutes, ...serviceRoutes, ...areaRoutes];
}
