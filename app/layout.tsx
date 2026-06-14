import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { siteData, siteUrl } from "@/lib/site-data";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Landscaping, Excavation & Tree Work in Hot Springs, AR | Onward & Upward Services",
    template: "%s | Onward & Upward Services",
  },
  description:
    "Landscaping, excavation, tree work, land clearing, grading, drainage help, mulch, soil delivery, yard cleanup, and debris hauling in Hot Springs and Central Arkansas.",
  keywords: [
    "landscaping Hot Springs AR",
    "excavation Hot Springs AR",
    "tree removal Hot Springs AR",
    "land clearing Hot Springs AR",
    "yard cleanup Hot Springs AR",
    "mulch delivery Hot Springs AR",
    "soil delivery Hot Springs AR",
    "grading Hot Springs AR",
    "drainage help Hot Springs AR",
    "brush cleanup Hot Springs AR",
    "debris hauling Hot Springs AR",
    "landscaping Benton AR",
    "landscaping Bryant AR",
    "landscaping Malvern AR",
    "landscaping Glenwood AR",
    "landscaping Arkadelphia AR",
    "Central Arkansas property cleanup",
  ],
  authors: [{ name: siteData.brand.name }],
  creator: siteData.brand.name,
  publisher: siteData.brand.name,
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Landscaping, Excavation & Tree Work in Hot Springs, AR",
    description:
      "Outdoor property services around Hot Springs including landscaping, excavation, tree cleanup, land clearing, grading, mulch, soil delivery, and hauling.",
    url: siteUrl,
    siteName: siteData.brand.name,
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "Onward and Upward Services landscaping and excavation work in Hot Springs Arkansas",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Landscaping, Excavation & Tree Work in Hot Springs, AR",
    description:
      "Landscaping, excavation, tree cleanup, mulch, soil delivery, land clearing, grading, and yard cleanup around Hot Springs and Central Arkansas.",
    images: ["/images/hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
