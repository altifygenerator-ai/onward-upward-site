import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { siteData, siteUrl } from "@/lib/site-data";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteData.brand.name,
  title: {
    default: "Landscaping & Excavation in Hot Springs, AR | Onward & Upward",
    template: "%s | Onward & Upward",
  },
  description:
    "Landscaping, excavation, grading, tree and brush cleanup, mulch and soil delivery, and yard cleanup in Hot Springs and nearby Central Arkansas.",
  keywords: [
    "landscaping Hot Springs AR",
    "excavation Hot Springs AR",
    "grading Hot Springs AR",
    "tree cleanup Hot Springs AR",
    "land clearing Hot Springs AR",
    "mulch delivery Hot Springs AR",
    "soil delivery Hot Springs AR",
    "yard cleanup Hot Springs AR",
    "brush cleanup Central Arkansas",
    "property cleanup Central Arkansas",
  ],
  authors: [{ name: siteData.brand.name }],
  creator: siteData.brand.name,
  publisher: siteData.brand.name,
  category: "Landscaping and outdoor property services",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Landscaping & Excavation in Hot Springs, AR",
    description:
      "Practical outdoor property work including landscaping, excavation, grading, tree cleanup, mulch, soil delivery, and hauling.",
    url: siteUrl,
    siteName: siteData.brand.name,
    images: [
      {
        url: "/images/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Onward and Upward Services landscaping project in Hot Springs Arkansas",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Landscaping & Excavation in Hot Springs, AR",
    description:
      "Landscaping, excavation, grading, tree cleanup, mulch, soil delivery, and yard cleanup across the Hot Springs area.",
    images: ["/images/og-home.jpg"],
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
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
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
