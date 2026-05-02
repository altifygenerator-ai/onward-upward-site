import "./globals.css";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://onwardsandupward.com"),

  title: {
    default: "Onward & Upward Services | Landscaping & Excavation in Hot Springs, AR",
    template: "%s | Onward & Upward Services",
  },

  description:
    "Landscaping, excavation, tree removal, and soil delivery in Hot Springs, Glenwood, and surrounding Arkansas areas. Call now for fast, reliable service.",

  keywords: [
  // 🔥 Primary (Hot Springs core)
  "landscaping Hot Springs AR",
  "landscaping Hot Springs Arkansas",
  "lawn care Hot Springs AR",
  "tree removal Hot Springs AR",
  "excavation Hot Springs AR",
  "land clearing Hot Springs AR",
  "yard cleanup Hot Springs AR",

  // 📍 Nearby cities (this is what you're missing)
  "landscaping Benton AR",
  "landscaping Bryant AR",
  "landscaping Malvern AR",
  "landscaping Arkadelphia AR",
  "landscaping Glenwood AR",

  "tree removal Benton AR",
  "tree removal Bryant AR",
  "tree removal Malvern AR",
  "tree removal Arkadelphia AR",

  "excavation Benton AR",
  "excavation Bryant AR",
  "excavation Malvern AR",

  // 🌎 Regional / broader Arkansas (authority + reach)
  "landscaping central Arkansas",
  "land clearing Arkansas",
  "excavation services Arkansas",
  "tree removal central Arkansas",

  // 🧱 Service-specific (intent keywords)
  "mulch delivery Hot Springs AR",
  "topsoil delivery Hot Springs AR",
  "garden soil Hot Springs AR",
  "dirt work Hot Springs AR",
  "grading and leveling Hot Springs AR",

  // 🔎 Buyer intent / real searches
  "affordable landscaping Hot Springs AR",
  "best landscaper Hot Springs AR",
  "local landscaping company Hot Springs",
  "landscaping services near Hot Springs AR",
  "tree cutting service near Hot Springs",

  // ⚡ Light “near me” usage (don’t overdo it)
  "landscaping near me Hot Springs AR",
  "tree removal near me Hot Springs AR",
],

  openGraph: {
    title: "Onward & Upward Services",
    description:
      "Landscaping, excavation, tree removal, and soil delivery in Hot Springs and surrounding areas.",
    url: "https://onwardsandupward.com",
    siteName: "Onward & Upward Services",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Onward & Upward Services",
    description:
      "Landscaping, excavation, and soil delivery in Hot Springs, AR.",
    images: ["/images/hero.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
  canonical: "https://onwardsandupward.com",
},
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}