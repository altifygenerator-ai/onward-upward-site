import type { MetadataRoute } from "next";
import { areaPages, servicePages, siteUrl } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/gallery`,
      changeFrequency: "monthly",
      priority: 0.72,
    },
    {
      url: `${siteUrl}/seasonal`,
      changeFrequency: "weekly",
      priority: 0.82,
    },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = Object.keys(servicePages).map((slug) => ({
    url: `${siteUrl}/${slug}`,
    changeFrequency: "monthly" as const,
    priority: slug === "landscaping-hot-springs-ar" ? 0.92 : 0.86,
  }));

  const areaRoutes: MetadataRoute.Sitemap = Object.keys(areaPages).map((slug) => ({
    url: `${siteUrl}/service-areas/${slug}`,
    changeFrequency: "monthly" as const,
    priority: slug === "hot-springs-ar" ? 0.84 : 0.74,
  }));

  return [...staticRoutes, ...serviceRoutes, ...areaRoutes];
}
