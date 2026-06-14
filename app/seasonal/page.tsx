import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, Leaf, PhoneCall, Sparkles } from "lucide-react";
import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteData, siteUrl } from "@/lib/site-data";
import { formatPhoneLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Mulch, Soil, Supersoil & Seasonal Products in Hot Springs, AR",
  description:
    "Current mulch, soil, supersoil, compost blends, plants, garden supplies, pickup, and delivery options from Onward & Upward Services in Hot Springs, AR.",
  alternates: {
    canonical: `${siteUrl}/seasonal`,
  },
  openGraph: {
    title: "Mulch, Soil & Seasonal Products in Hot Springs, AR",
    description:
      "View current soil blends, mulch, compost, plants, and garden materials available from Onward & Upward Services.",
    url: `${siteUrl}/seasonal`,
    images: [
      {
        url: "/images/gallery/soil6.jpg",
        width: 1200,
        height: 630,
        alt: "Mulch soil and seasonal products in Hot Springs AR",
      },
    ],
  },
};

type Product = (typeof siteData.products)[number];

function ProductCard({ item }: { item: Product }) {
  return (
    <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.045] p-5">
      <div className="grid gap-3">
        {item.images.map((image) => (
          <Image
            key={image}
            src={image}
            alt={`${item.name} available in Hot Springs AR`}
            width={520}
            height={340}
            className="h-52 w-full rounded-xl object-cover"
          />
        ))}
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-white">{item.name}</h3>
          <p className="mt-2 text-white/65">{item.description}</p>
        </div>
        <span className="rounded-full bg-emerald-400 px-3 py-1 text-sm font-bold text-black">{item.price}</span>
      </div>
      <p className="mt-4 text-sm font-semibold text-emerald-300">{item.note}</p>
    </div>
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
        offers: {
          "@type": "Offer",
          priceCurrency: "USD",
          price: product.price.replace(/[^0-9.]/g, ""),
          availability: "https://schema.org/InStock",
        },
      },
    })),
  };

  return (
    <div className="min-h-screen bg-[#0d1210] text-white">
      <JsonLd data={schema} />
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(52,211,153,0.16),transparent_30rem)]" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300/80">{siteData.seasonalIntro.eyebrow}</p>
              <h1 className="mt-4 text-4xl font-semibold leading-[1.02] text-white md:text-6xl">
                Mulch, soil, supersoil, compost, plants, and seasonal products.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/72">
                {siteData.seasonalIntro.body} Check current availability for mulch delivery, topsoil, garden soil, plants, and landscaping materials around Hot Springs and nearby Arkansas areas.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/#contact" className="btn-quote-primary inline-flex items-center gap-2">
                  Request Quote <ArrowRight className="h-4 w-4" />
                </Link>
                <a href={phoneLink} className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-emerald-300/50 hover:text-emerald-300">
                  <PhoneCall className="h-4 w-4" />
                  Call Now
                </a>
              </div>
            </div>
            <div className="relative min-h-[380px] overflow-hidden rounded-[1.7rem] border border-white/10 bg-white/5 shadow-2xl shadow-black/30 md:min-h-[480px]">
              <Image src="/images/gallery/soil6.jpg" alt="mulch soil compost and seasonal products in Hot Springs AR" fill className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 md:py-20">
          <SectionHeading
            eyebrow="Available Now"
            title="Seasonal plants, soil, and landscaping materials"
            text="Rotating availability of plants, mulch, soil, and seasonal landscaping products for properties in Hot Springs and surrounding Arkansas areas."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {siteData.seasonalItems.map((item) => (
              <div key={item.name} className="rounded-[1.4rem] border border-white/10 bg-white/[0.045] p-5">
                <Image src={item.image} alt={item.alt} width={500} height={300} className="h-56 w-full rounded-xl object-cover" />
                <div className="mt-4 flex items-center gap-2 text-emerald-300">
                  <Leaf className="h-4 w-4" />
                  <span className="text-xs font-semibold uppercase tracking-[0.16em]">{item.tag}</span>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">{item.name}</h3>
                <p className="mt-2 leading-relaxed text-white/65">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 md:py-20">
          <SectionHeading
            eyebrow="Core Products"
            title="Mulch, soil, and landscaping materials year-round"
            text="Core materials are useful for landscaping, land prep, grading support, garden beds, and ongoing outdoor projects."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {siteData.products.map((item) => (
              <ProductCard key={item.name} item={item} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 md:py-20">
          <div className="rounded-[2rem] border border-emerald-300/20 bg-emerald-400/10 p-6 md:p-8">
            <div className="flex gap-4">
              <Sparkles className="mt-1 h-6 w-6 shrink-0 text-emerald-300" />
              <div>
                <h2 className="text-2xl font-semibold text-white md:text-4xl">Ask about current mulch, soil, and plant availability.</h2>
                <p className="mt-3 max-w-3xl leading-relaxed text-white/70">
                  Availability can shift with the season. Call or message to check current products, schedule delivery, or combine materials with landscaping and yard cleanup work.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 md:py-20">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 md:p-8">
            <SectionHeading
              eyebrow="Add-ons & Supplies"
              title="Buckets and containers for soil and landscaping work"
              text="Containers may be available for soil pickup, mulch transport, garden work, planting, and smaller landscape projects."
            />
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {["1 Gallon Pots, $3 each", "3 Gallon Pots, $8 each", "25 Gallon Pots, $45 each"].map((item) => (
                <div key={item} className="rounded-xl border border-white/10 bg-black/30 p-6">
                  <h3 className="text-lg font-semibold text-white">{item}</h3>
                  <p className="mt-2 text-white/60">Ask about availability when ordering soil, mulch, or delivery services.</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={phoneLink} className="inline-flex items-center gap-2 rounded-full bg-emerald-400 px-6 py-3 font-bold text-black transition hover:bg-emerald-300">
                <PhoneCall className="h-4 w-4" />
                Call Now
              </a>
              <Link href="/#contact" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-emerald-300/50 hover:text-emerald-300">
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
