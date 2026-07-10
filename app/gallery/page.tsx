import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Camera, CheckCircle2 } from "lucide-react";
import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteData, siteUrl } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Project Gallery",
  description:
    "See landscaping, mulch, excavation, tree cleanup, soil, planting, and property cleanup projects completed around Hot Springs and Central Arkansas.",
  alternates: {
    canonical: `${siteUrl}/gallery`,
  },
  openGraph: {
    title: "Onward & Upward Services Project Gallery",
    description:
      "Real landscaping, excavation, mulch, tree cleanup, soil, and property work from the Hot Springs area.",
    url: `${siteUrl}/gallery`,
    images: [
      {
        url: "/images/og-home.jpg",
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
    mainEntity: siteData.galleryImages.slice(0, 16).map((image) => ({
      "@type": "ImageObject",
      contentUrl: `${siteUrl}${image.src}`,
      caption: image.alt,
    })),
  };

  return (
    <div className="min-h-screen bg-[#0b110e] text-white">
      <JsonLd data={schema} />
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(74,222,128,0.16),transparent_31rem),radial-gradient(circle_at_82%_28%,rgba(201,162,92,0.1),transparent_28rem)]" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 md:px-8 md:py-20 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300/75">
                <Camera className="h-4 w-4" />
                Project Gallery
              </p>
              <h1 className="mt-5 text-4xl font-semibold leading-[1.02] text-white md:text-6xl">
                Real outdoor work around Hot Springs and Central Arkansas.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
                Browse landscaping, mulch, soil, excavation, tree cleanup, planting, and property improvement projects completed by Onward & Upward Services.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/#contact" className="btn-quote-primary inline-flex items-center gap-2">
                  Request Quote <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/#services" className="btn-outline inline-flex items-center gap-2">
                  View Services
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative min-h-[430px] overflow-hidden rounded-[1.6rem] border border-white/10 sm:translate-y-7">
                <Image src={siteData.featuredProject.before} alt={`Before ${siteData.featuredProject.alt}`} fill sizes="(min-width: 1024px) 28vw, 50vw" className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 rounded-full bg-black/70 px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-white backdrop-blur">Before</span>
              </div>
              <div className="relative min-h-[430px] overflow-hidden rounded-[1.6rem] border border-white/10">
                <Image src={siteData.featuredProject.after} alt={`After ${siteData.featuredProject.alt}`} fill sizes="(min-width: 1024px) 28vw, 50vw" className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 rounded-full bg-emerald-300 px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#06110b]">After</span>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-white/8 bg-[#0e1712]">
          <div className="mx-auto grid max-w-7xl gap-4 px-4 py-8 md:grid-cols-3 md:px-8">
            {["Real project photos", "Before and after work", "Landscaping, dirt work, cleanup, and materials"].map((item) => (
              <p key={item} className="flex items-center gap-3 rounded-xl border border-white/8 bg-black/12 px-4 py-3 text-sm font-semibold text-white/70">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-300" />
                {item}
              </p>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
          <SectionHeading
            eyebrow="Project Photos"
            title="Landscaping, cleanup, materials, and equipment at work"
            text="These are real photos from recent projects, available materials, and outdoor work around the area."
          />
          <div className="mt-11 columns-1 gap-5 sm:columns-2 lg:columns-3">
            {siteData.galleryImages.map((image, index) => (
              <figure key={`${image.src}-${index}`} className="mb-5 break-inside-avoid overflow-hidden rounded-[1.35rem] border border-white/10 bg-white/[0.035] p-3 shadow-lg shadow-black/10">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={700}
                  height={620}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="h-auto w-full rounded-[1rem] object-cover"
                />
                <figcaption className="px-1 pb-1 pt-3 text-sm leading-6 text-white/56">{image.alt}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 pb-16 text-center md:px-8 md:pb-24">
          <div className="rounded-[2rem] border border-emerald-300/15 bg-emerald-300/[0.055] px-6 py-12 md:px-12">
            <h2 className="text-3xl font-semibold text-white md:text-5xl">Need work like this on your property?</h2>
            <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/68">
              Send your location, a few photos, and a quick description of the job. We can talk through landscaping, cleanup, material delivery, tree work, grading, or excavation options.
            </p>
            <Link href="/#contact" className="btn-quote-primary mt-8 inline-flex items-center gap-2">
              Request Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
