import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
import { servicePages, siteUrl } from "@/lib/site-data";

const page = servicePages["land-clearing-hot-springs-ar"];

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  alternates: {
    canonical: `${siteUrl}/land-clearing-hot-springs-ar`,
  },
  openGraph: {
    title: page.metaTitle,
    description: page.metaDescription,
    url: `${siteUrl}/land-clearing-hot-springs-ar`,
    images: [
      {
        url: page.image,
        width: 1200,
        height: 630,
        alt: page.imageAlt,
      },
    ],
  },
};

export default function Page() {
  return <ServicePage page={page} />;
}
