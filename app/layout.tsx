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
    "landscaping Hot Springs AR",
    "excavation Hot Springs Arkansas",
    "tree removal Hot Springs AR",
    "mulch and soil delivery Arkansas",
    "yard cleanup Hot Springs",
    "garden soil near me",
    "land clearing Arkansas",
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