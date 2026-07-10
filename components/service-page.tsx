import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, PhoneCall } from "lucide-react";
import { ContactSection } from "@/components/contact-section";
import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { servicePages, siteData, siteUrl, type ServicePageData } from "@/lib/site-data";
import { formatPhoneLink } from "@/lib/utils";

type ServicePageProps = {
  page: ServicePageData;
};

const workPhotoSets = {
  landscaping: [
    { src: "/images/projects/mulch-after-3.webp", alt: "Finished mulch bed refresh in Hot Springs Arkansas" },
    { src: "/images/projects/mulch-after-1.webp", alt: "Mulch installation around mature trees" },
    { src: "/images/projects/garden-plot.webp", alt: "Raised garden bed with quality soil" },
  ],
  dirt: [
    { src: "/images/projects/tractor-work.webp", alt: "Tractor moving soil for an outdoor project" },
    { src: "/images/gallery/excavator.jpg", alt: "Excavation equipment working in Central Arkansas" },
    { src: "/images/gallery/exacavatorwork.jpg", alt: "Dirt work and site preparation near Hot Springs" },
  ],
  clearing: [
    { src: "/images/gallery/treework1.jpg", alt: "Tree cleanup work near Hot Springs Arkansas" },
    { src: "/images/gallery/treework2.jpg", alt: "Brush and property clearing in Central Arkansas" },
    { src: "/images/gallery/treework3.jpg", alt: "Tree debris cleanup and haul off" },
  ],
};

function getWorkPhotos(slug: string) {
  if (slug.includes("excavation") || slug.includes("grading")) return workPhotoSets.dirt;
  if (slug.includes("tree") || slug.includes("land-clearing")) return workPhotoSets.clearing;
  return workPhotoSets.landscaping;
}

export function ServicePage({ page }: ServicePageProps) {
  const phoneLink = formatPhoneLink(siteData.contact.phone);
  const related = page.related.map((slug) => servicePages[slug]).filter(Boolean);
  const workPhotos = getWorkPhotos(page.slug);

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: page.heroTitle,
      serviceType: page.serviceType,
      description: page.metaDescription,
      provider: {
        "@type": "LocalBusiness",
        name: siteData.brand.name,
        telephone: siteData.contact.phone,
        email: siteData.contact.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: "1499 Amity Rd",
          addressLocality: "Hot Springs",
          addressRegion: "AR",
          postalCode: "71913",
          addressCountry: "US",
        },
      },
      areaServed: siteData.serviceAreas.map((area) => ({ "@type": "City", name: area })),
      url: `${siteUrl}/${page.slug}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: page.title, item: `${siteUrl}/${page.slug}` },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0b110e] text-white">
      <JsonLd data={schema} />
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_16%,rgba(74,222,128,0.16),transparent_31rem),radial-gradient(circle_at_84%_20%,rgba(201,162,92,0.1),transparent_27rem)]" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 md:px-8 md:py-20 lg:grid-cols-[0.92fr_1.08fr]">
            <div>
              <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300/75">
                <MapPin className="h-4 w-4" />
                {page.eyebrow} · Hot Springs, Arkansas
              </p>
              <h1 className="mt-5 text-4xl font-semibold leading-[1.02] text-white md:text-6xl">
                {page.heroTitle}
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
              <p className="mt-8 max-w-xl text-sm leading-7 text-white/48">{siteData.contact.serviceArea}</p>
            </div>

            <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-white/12 bg-white/5 shadow-[0_35px_90px_rgba(0,0,0,0.36)] md:min-h-[540px]">
              <Image src={page.image} alt={page.imageAlt} fill sizes="(min-width: 1024px) 52vw, 100vw" className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07100b]/85 via-black/5 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-[1.3rem] border border-white/12 bg-[#07100b]/76 p-5 backdrop-blur-xl">
                <p className="font-semibold text-white">{page.title}</p>
                <p className="mt-1.5 text-sm leading-6 text-white/60">Local work for homes, rentals, lots, and small commercial properties.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-10 md:px-8 md:py-12">
          <div className="grid overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#111a15] sm:grid-cols-2 lg:grid-cols-4">
            {page.highlights.map((item, index) => (
              <div key={item} className="border-white/8 p-5 sm:[&:nth-child(odd)]:border-r lg:border-r lg:last:border-r-0">
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-emerald-300/20 bg-emerald-300/[0.08] text-xs font-bold text-emerald-200">
                    0{index + 1}
                  </span>
                  <p className="font-semibold leading-6 text-white/82">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-[0.88fr_1.12fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300/75">What we help with</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-white md:text-5xl">{page.detailsTitle}</h2>
            <p className="mt-5 leading-8 text-white/68">{page.detailsText}</p>
            <div className="mt-7 grid gap-3 text-white/72">
              {page.includes.map((item) => (
                <p key={item} className="flex gap-3 rounded-xl border border-white/8 bg-white/[0.025] px-4 py-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />
                  <span>{item}</span>
                </p>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {workPhotos.map((image, index) => (
              <div
                key={image.src}
                className={`relative overflow-hidden rounded-[1.4rem] border border-white/10 bg-white/5 ${index === 0 ? "min-h-[380px] sm:row-span-2 sm:min-h-full" : "min-h-[240px]"}`}
              >
                <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 28vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-white/8 bg-[#0e1712]">
          <div className="mx-auto max-w-5xl px-4 py-16 md:px-8 md:py-20">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300/75">Serving Central Arkansas</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-white md:text-5xl">{page.localTitle}</h2>
            <p className="mt-6 leading-8 text-white/70">{page.localText}</p>
            <p className="mt-5 leading-8 text-white/56">{page.secondaryText}</p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
          <SectionHeading
            eyebrow="Related Services"
            title="More ways we can help outside"
            text="Outdoor projects often overlap. These related services may be useful when cleanup, materials, grading, or hauling are part of the same job."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {related.map((item) => (
              <Link key={item.slug} href={`/${item.slug}`} className="service-card group">
                <div className="relative h-48 overflow-hidden rounded-[1.15rem]">
                  <Image src={item.image} alt={item.imageAlt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition duration-700 group-hover:scale-[1.045]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-white">{item.navTitle}</h3>
                <p className="mt-3 text-sm leading-7 text-white/62">{item.metaDescription}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-bold text-emerald-200">
                  View service <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-16 md:px-8 md:py-20">
          <SectionHeading eyebrow="Questions" title="Common questions before you call" text="A few quick answers about scheduling, service areas, and the work involved." align="center" />
          <div className="mt-10 grid gap-4">
            {page.faq.map((item) => (
              <details key={item.question} className="group rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition open:border-emerald-300/20 open:bg-emerald-300/[0.035]">
                <summary className="cursor-pointer list-none pr-8 font-semibold text-white marker:hidden [&::-webkit-details-marker]:hidden">
                  {item.question}
                </summary>
                <p className="mt-4 leading-8 text-white/62">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <ContactSection title={`Need ${page.navTitle.toLowerCase()} help?`} />
      </main>

      <SiteFooter />
    </div>
  );
}
