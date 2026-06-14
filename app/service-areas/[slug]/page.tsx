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
          url: "/images/hero.png",
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
    <div className="min-h-screen bg-[#0d1210] text-white">
      <JsonLd data={schema} />
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(52,211,153,0.16),transparent_30rem)]" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-20">
            <div>
              <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300/80">
                <MapPin className="h-4 w-4" />
                {page.city}
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-[1.02] text-white md:text-6xl">
                {page.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/72">{page.heroText}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/#contact" className="btn-quote-primary inline-flex items-center gap-2">
                  Request Quote
                </Link>
                <a href={phoneLink} className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-emerald-300/50 hover:text-emerald-300">
                  <PhoneCall className="h-4 w-4" />
                  Call Now
                </a>
              </div>
            </div>

            <div className="relative min-h-[380px] overflow-hidden rounded-[1.7rem] border border-white/10 bg-white/5 shadow-2xl shadow-black/30 md:min-h-[480px]">
              <Image src="/images/gallery/worktruck.jpg" alt={`${siteData.brand.name} serving ${page.city}`} fill className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 md:py-20">
          <SectionHeading
            eyebrow="Local Service Area"
            title={`Outdoor property help near ${page.city}`}
            text="This page is written for the specific local area instead of using one copied page for every city. That gives customers clearer information and gives Google more useful local content to index."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {page.localNotes.map((note) => (
              <div key={note} className="rounded-2xl border border-white/10 bg-white/[0.045] p-5">
                <CheckCircle2 className="h-5 w-5 text-emerald-300" />
                <p className="mt-3 font-semibold text-white">{note}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 md:py-20">
          <SectionHeading
            eyebrow="Services"
            title={`Services available near ${page.city}`}
            text="Choose the exact service you need, from landscaping and excavation to tree cleanup, material delivery, grading, and yard cleanup."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {siteData.services.slice(0, 6).map((service) => (
              <Link key={service.href} href={service.href} className="group rounded-[1.4rem] border border-white/10 bg-white/[0.045] p-5 transition hover:-translate-y-1 hover:border-emerald-300/40 hover:bg-white/[0.07]">
                <div className="relative h-44 overflow-hidden rounded-xl">
                  <Image src={service.image} alt={`${service.alt} near ${page.city}`} fill className="object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{service.text}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-emerald-300">
                  Learn more <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        <ContactSection title={`Need outdoor property work near ${page.city}?`} />
      </main>

      <SiteFooter />
    </div>
  );
}
