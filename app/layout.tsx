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
  title: "Onward & Upward Services | Landscaping & Excavation in Hot Springs AR",
  description:
    "Landscaping, excavation, tree and debris removal in Hot Springs, Glenwood, and surrounding Arkansas areas. Call for fast service and seasonal specials.",

  keywords: [
    "landscaping Hot Springs AR",
    "excavation Arkansas",
    "mulch delivery Hot Springs",
    "tree removal Arkansas",
  ],

  openGraph: {
    title: "Onward & Upward Services",
    description:
      "Landscaping, excavation, and seasonal services in Hot Springs, AR.",
    url: "https://yourdomain.com",
    siteName: "Onward & Upward Services",
    images: [
      {
        url: "/images/hero/main.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  icons: {
    icon: "/favicon.ico",
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