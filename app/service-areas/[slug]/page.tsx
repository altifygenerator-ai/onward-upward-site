import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, MapPin, PhoneCall } from "lucide-react";
import { ContactSection } from "@/components/contact-section";
import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { areaPages, siteData, siteUrl } from "@/lib/site-data";
import { formatPhoneLink } from "@/lib/utils";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(areaPages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = areaPages[slug];

  if (!page) {
    return {};
  }

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: {
      canonical: `${siteUrl}/service-areas/${page.slug}`,
    },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `${siteUrl}/service-areas/${page.slug}`,
      images: [
        {
          url: "/images/og-home.jpg",
          width: 1200,
          height: 630,
          alt: `${siteData.brand.name} serving ${page.city}`,
        },
      ],
    },
  };
}

export default async function AreaPage({ params }: PageProps) {
  const { slug } = await params;
  const page = areaPages[slug];

  if (!page) {
    notFound();
  }

  const phoneLink = formatPhoneLink(siteData.contact.phone);

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: page.title,
      description: page.metaDescription,
      provider: {
        "@type": "LocalBusiness",
        name: siteData.brand.name,
        telephone: siteData.contact.phone,
        email: siteData.contact.email,
      },
      areaServed: {
        "@type": "City",
        name: page.city,
      },
      url: `${siteUrl}/service-areas/${page.slug}`,
      serviceType: "Landscaping, excavation, tree cleanup, material delivery, and property cleanup",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Service Areas", item: `${siteUrl}/#areas` },
        { "@type": "ListItem", position: 3, name: page.city, item: `${siteUrl}/service-areas/${page.slug}` },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0b110e] text-white">
      <JsonLd data={schema} />
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(74,222,128,0.16),transparent_31rem),radial-gradient(circle_at_82%_26%,rgba(201,162,92,0.1),transparent_27rem)]" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 md:px-8 md:py-20 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300/75">
                <MapPin className="h-4 w-4" />
                Serving {page.city}
              </p>
              <h1 className="mt-5 text-4xl font-semibold leading-[1.02] text-white md:text-6xl">
                {page.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">{page.heroText}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/#contact" className="btn-quote-primary inline-flex items-center gap-2">
                  Request Quote <ArrowRight className="h-4 w-4" />
                </Link>
                <a href={phoneLink} className="btn-outline inline-flex items-center gap-2">
                  <PhoneCall className="h-4 w-4" />
                  {siteData.contact.phone}
                </a>
              </div>
            </div>

            <div className="grid grid-cols-[1.08fr_0.92fr] gap-4">
              <div className="relative min-h-[450px] overflow-hidden rounded-[1.8rem] border border-white/10 shadow-2xl shadow-black/30 sm:translate-y-6">
                <Image src="/images/projects/mulch-after-3.webp" alt={`${siteData.brand.name} landscaping work serving ${page.city}`} fill sizes="(min-width: 1024px) 32vw, 55vw" className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              </div>
              <div className="grid gap-4">
                <div className="relative min-h-[215px] overflow-hidden rounded-[1.5rem] border border-white/10">
                  <Image src="/images/projects/tractor-work.webp" alt={`Dirt work and grading near ${page.city}`} fill sizes="(min-width: 1024px) 22vw, 42vw" className="object-cover" />
                </div>
                <div className="relative min-h-[215px] overflow-hidden rounded-[1.5rem] border border-white/10">
                  <Image src="/images/projects/garden-plot.webp" alt={`Soil and landscaping materials near ${page.city}`} fill sizes="(min-width: 1024px) 22vw, 42vw" className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
          <SectionHeading
            eyebrow="Local Service Area"
            title={`Outdoor property help near ${page.city}`}
            text="We handle practical outdoor work for homes, rental properties, rural land, and small commercial properties throughout the area."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {page.localNotes.map((note, index) => (
              <div key={note} className="rounded-[1.35rem] border border-white/10 bg-white/[0.035] p-6">
                <span className="grid h-10 w-10 place-items-center rounded-full border border-emerald-300/20 bg-emerald-300/[0.08] text-xs font-bold text-emerald-200">
                  0{index + 1}
                </span>
                <p className="mt-5 text-lg font-semibold leading-7 text-white">{note}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-white/8 bg-[#0e1712]">
          <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
            <SectionHeading
              eyebrow="Services"
              title={`Services available near ${page.city}`}
              text="Choose the work that best matches your property, from landscaping and excavation to tree cleanup, material delivery, grading, and yard cleanup."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {siteData.services.slice(0, 6).map((service) => (
                <Link key={service.href} href={service.href} className="service-card group">
                  <div className="relative h-48 overflow-hidden rounded-[1.15rem]">
                    <Image src={service.image} alt={`${service.alt} near ${page.city}`} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-[1.045]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/62">{service.text}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-bold text-emerald-200">
                    View service <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-16 md:px-8 md:py-20">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300/75">Before you call</p>
            <h2 className="mt-4 text-3xl font-semibold text-white md:text-5xl">A few details help us quote the job.</h2>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {["Your location and the best way to reach you", "Photos of the area when possible", "A quick description of what needs done", "Any access, hauling, or material concerns"].map((item) => (
                <p key={item} className="flex gap-3 rounded-xl border border-white/8 bg-black/15 px-4 py-3 leading-7 text-white/68">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-300" />
                  {item}
                </p>
              ))}
            </div>
          </div>
        </section>

        <ContactSection title={`Need outdoor property work near ${page.city}?`} />
      </main>

      <SiteFooter />
    </div>
  );
}
