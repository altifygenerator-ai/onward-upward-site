import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronRight, Leaf, PhoneCall, Sparkles } from "lucide-react";
import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteData, siteUrl } from "@/lib/site-data";
import { formatPhoneLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Mulch & Soil in Hot Springs, AR",
  description:
    "Shop mulch, soil, supersoil, compost blends, seasonal plants, and garden materials with pickup or delivery options around Hot Springs, Arkansas.",
  alternates: {
    canonical: `${siteUrl}/seasonal`,
  },
  openGraph: {
    title: "Mulch, Soil & Supersoil in Hot Springs, AR",
    description:
      "Current soil blends, mulch, compost, plants, and garden materials from Onward & Upward Services.",
    url: `${siteUrl}/seasonal`,
    images: [
      {
        url: "/images/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Mulch soil and seasonal landscaping products in Hot Springs Arkansas",
      },
    ],
  },
};

type Product = (typeof siteData.products)[number];

function ProductCard({ item }: { item: Product }) {
  return (
    <article className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-4 shadow-xl shadow-black/10">
      <div className="grid grid-cols-2 gap-3">
        {item.images.map((image, index) => (
          <div key={image} className={`relative overflow-hidden rounded-[1rem] ${index === 0 ? "col-span-2 h-56" : "h-32"}`}>
            <Image
              src={image}
              alt={`${item.name} available in Hot Springs Arkansas`}
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
      <div className="p-2 pb-1 pt-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <h3 className="max-w-[15rem] text-2xl font-semibold text-white">{item.name}</h3>
          <span className="rounded-full bg-emerald-300 px-3 py-1.5 text-sm font-extrabold text-[#06110b]">{item.price}</span>
        </div>
        <p className="mt-3 leading-7 text-white/62">{item.description}</p>
        <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-emerald-200">
          <CheckCircle2 className="h-4 w-4" />
          {item.note}
        </p>
      </div>
    </article>
  );
}

export default function SeasonalPage() {
  const phoneLink = formatPhoneLink(siteData.contact.phone);

  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Mulch, Soil, Supersoil, Compost, and Seasonal Products in Hot Springs AR",
    url: `${siteUrl}/seasonal`,
    itemListElement: siteData.products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.name,
        description: product.description,
        image: product.images.map((image) => `${siteUrl}${image}`),
        brand: {
          "@type": "Brand",
          name: siteData.brand.name,
        },
        offers: {
          "@type": "Offer",
          priceCurrency: "USD",
          price: product.price.replace(/[^0-9.]/g, ""),
          url: `${siteUrl}/seasonal`,
          seller: {
            "@type": "LocalBusiness",
            name: siteData.brand.name,
          },
        },
      },
    })),
  };

  return (
    <div className="min-h-screen bg-[#0b110e] text-white">
      <JsonLd data={schema} />
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(74,222,128,0.16),transparent_31rem),radial-gradient(circle_at_82%_25%,rgba(201,162,92,0.1),transparent_27rem)]" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 md:px-8 md:py-20 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300/75">{siteData.seasonalIntro.eyebrow}</p>
              <h1 className="mt-5 text-4xl font-semibold leading-[1.02] text-white md:text-6xl">
                Mulch, soil, supersoil, compost, plants, and seasonal products.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
                {siteData.seasonalIntro.body} Check current availability for pickup, delivery, or help spreading and installing materials.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/#contact" className="btn-quote-primary inline-flex items-center gap-2">
                  Check Availability <ArrowRight className="h-4 w-4" />
                </Link>
                <a href={phoneLink} className="btn-outline inline-flex items-center gap-2">
                  <PhoneCall className="h-4 w-4" />
                  {siteData.contact.phone}
                </a>
              </div>
            </div>

            <div className="grid grid-cols-[1.08fr_0.92fr] gap-4">
              <div className="relative min-h-[470px] overflow-hidden rounded-[1.8rem] border border-white/10 shadow-2xl shadow-black/30 sm:translate-y-6">
                <Image src="/images/projects/garden-plot.webp" alt="Raised garden bed filled with quality garden soil" fill sizes="(min-width: 1024px) 32vw, 55vw" className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/10 bg-black/55 p-4 backdrop-blur-md">
                  <p className="font-semibold text-white">Materials for gardens, landscape beds, grading, and property work</p>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="relative min-h-[225px] overflow-hidden rounded-[1.5rem] border border-white/10">
                  <Image src="/images/gallery/soil6.jpg" alt="Bulk soil and compost blend" fill sizes="(min-width: 1024px) 22vw, 42vw" className="object-cover" />
                </div>
                <div className="relative min-h-[225px] overflow-hidden rounded-[1.5rem] border border-white/10">
                  <Image src="/images/projects/tractor-work.webp" alt="Tractor moving soil for a landscaping project" fill sizes="(min-width: 1024px) 22vw, 42vw" className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
          <SectionHeading
            eyebrow="Seasonal Selection"
            title="Plants, soil, and landscaping materials"
            text="Plant and garden supply availability can change with the season. Call before making the trip or planning a delivery."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {siteData.seasonalItems.map((item) => (
              <article key={item.name} className="service-card">
                <div className="relative h-60 overflow-hidden rounded-[1.15rem]">
                  <Image src={item.image} alt={item.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                </div>
                <div className="mt-5 flex items-center gap-2 text-emerald-200">
                  <Leaf className="h-4 w-4" />
                  <span className="text-xs font-bold uppercase tracking-[0.16em]">{item.tag}</span>
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-white">{item.name}</h3>
                <p className="mt-3 leading-7 text-white/62">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-white/8 bg-[#0e1712]">
          <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
            <SectionHeading
              eyebrow="Core Products"
              title="Soil blends for gardens, beds, and outdoor projects"
              text="These core material options are useful for planting, landscape refreshes, land prep, grading support, and general property work."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {siteData.products.map((item) => (
                <ProductCard key={item.name} item={item} />
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
          <div className="rounded-[2rem] border border-emerald-300/15 bg-emerald-300/[0.055] p-6 md:p-10">
            <div className="flex gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-emerald-300/20 bg-emerald-300/[0.08]">
                <Sparkles className="h-5 w-5 text-emerald-200" />
              </span>
              <div>
                <h2 className="text-2xl font-semibold text-white md:text-4xl">Ask about current mulch, soil, and plant availability.</h2>
                <p className="mt-4 max-w-3xl leading-8 text-white/68">
                  Availability can shift with the season. Call or message to check current products, schedule delivery, or combine materials with landscaping and yard cleanup work.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-16 md:px-8 md:pb-24">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 md:p-10">
            <SectionHeading
              eyebrow="Add-ons & Supplies"
              title="Buckets and containers for soil and landscaping work"
              text="Containers may be available for soil pickup, mulch transport, garden work, planting, and smaller landscape projects."
            />
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {["1 Gallon Pots, $3 each", "3 Gallon Pots, $8 each", "25 Gallon Pots, $45 each"].map((item) => (
                <div key={item} className="rounded-[1.2rem] border border-white/10 bg-black/20 p-6">
                  <h3 className="text-xl font-semibold text-white">{item}</h3>
                  <p className="mt-3 leading-7 text-white/58">Ask about availability when ordering soil, mulch, or delivery services.</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={phoneLink} className="btn-quote-primary inline-flex items-center gap-2">
                <PhoneCall className="h-4 w-4" />
                Call Now
              </a>
              <Link href="/#contact" className="btn-outline inline-flex items-center gap-2">
                Contact Form <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
