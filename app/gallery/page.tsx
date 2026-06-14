import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Camera } from "lucide-react";
import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteData, siteUrl } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Project Gallery | Landscaping, Excavation & Cleanup in Hot Springs, AR",
  description:
    "View project photos from Onward & Upward Services including landscaping, tree cleanup, excavation, soil, mulch, planting, and property cleanup work around Hot Springs, AR.",
  alternates: {
    canonical: `${siteUrl}/gallery`,
  },
  openGraph: {
    title: "Onward & Upward Project Gallery",
    description:
      "Landscaping, excavation, tree cleanup, soil, mulch, planting, and property cleanup photos from the Hot Springs, AR area.",
    url: `${siteUrl}/gallery`,
    images: [
      {
        url: "/images/gallery/worktruck.jpg",
        width: 1200,
        height: 630,
        alt: "Onward and Upward Services project gallery",
      },
    ],
  },
};

export default function GalleryPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Onward & Upward Services Project Gallery",
    description: metadata.description,
    url: `${siteUrl}/gallery`,
    mainEntity: siteData.galleryImages.slice(0, 12).map((image) => ({
      "@type": "ImageObject",
      contentUrl: `${siteUrl}${image.src}`,
      caption: image.alt,
    })),
  };

  return (
    <div className="min-h-screen bg-[#0d1210] text-white">
      <JsonLd data={schema} />
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(52,211,153,0.16),transparent_30rem)]" />
          <div className="relative mx-auto max-w-7xl px-4 py-16 md:py-20">
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300/80">
              <Camera className="h-4 w-4" />
              Project Gallery
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.02] text-white md:text-6xl">
              Landscaping, excavation, soil, mulch, tree cleanup, and property work around Hot Springs.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/72">
              Browse recent photos from outdoor work, material delivery, planting, cleanup, excavation, and property improvement projects across Hot Springs and Central Arkansas.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/#contact" className="btn-quote-primary inline-flex items-center gap-2">
                Request Quote
              </Link>
              <Link href="/#services" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-emerald-300/50 hover:text-emerald-300">
                View Services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 md:py-20">
          <SectionHeading
            eyebrow="Photos"
            title="Real outdoor work and available materials"
            text="Images are grouped naturally for customers comparing landscaping, tree cleanup, excavation, soil, mulch, planting, and property cleanup work."
          />
          <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3">
            {siteData.galleryImages.map((image) => (
              <div key={image.src} className="mb-5 break-inside-avoid overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/[0.045] p-3">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={700}
                  height={520}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="h-auto w-full rounded-xl object-cover"
                />
                <p className="mt-3 text-sm leading-relaxed text-white/60">{image.alt}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 pb-16 text-center md:pb-20">
          <h2 className="text-3xl font-semibold text-white md:text-5xl">Need work like this on your property?</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-white/70">
            Send a quick message with your location and a few photos of the area. We can talk through landscaping, cleanup, material delivery, tree work, grading, or excavation options.
          </p>
          <Link href="/#contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-emerald-400 px-6 py-3 font-bold text-black transition hover:bg-emerald-300">
            Request Quote <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
