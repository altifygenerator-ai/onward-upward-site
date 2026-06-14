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

export function ServicePage({ page }: ServicePageProps) {
  const phoneLink = formatPhoneLink(siteData.contact.phone);
  const related = page.related.map((slug) => servicePages[slug]).filter(Boolean);

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
        address: siteData.contact.address,
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
                Hot Springs, Arkansas
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-[1.02] text-white md:text-6xl">
                {page.heroTitle}
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
            <div className="relative min-h-[360px] overflow-hidden rounded-[1.7rem] border border-white/10 bg-white/5 shadow-2xl shadow-black/30 md:min-h-[460px]">
              <Image src={page.image} alt={page.imageAlt} fill className="object-cover" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/55 p-4 backdrop-blur">
                <p className="text-sm font-semibold text-white">{page.title}</p>
                <p className="mt-1 text-sm text-white/65">{siteData.contact.serviceArea}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 md:py-16">
          <div className="grid gap-4 md:grid-cols-4">
            {page.highlights.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.045] p-5">
                <CheckCircle2 className="h-5 w-5 text-emerald-300" />
                <p className="mt-3 font-semibold text-white">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300/80">What we help with</p>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-5xl">{page.detailsTitle}</h2>
            <p className="mt-5 leading-relaxed text-white/70">{page.detailsText}</p>
            <div className="mt-6 grid gap-3 text-white/72">
              {page.includes.map((item) => (
                <p key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />
                  <span>{item}</span>
                </p>
              ))}
            </div>
          </div>
          <div className="relative min-h-[330px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5">
            <Image src={page.image} alt={page.imageAlt} fill className="object-cover" />
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-14 md:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300/80">Serving Central Arkansas</p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-5xl">{page.localTitle}</h2>
          <p className="mt-6 leading-relaxed text-white/72">{page.localText}</p>
          <p className="mt-5 leading-relaxed text-white/60">{page.secondaryText}</p>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 md:py-16">
          <SectionHeading
            eyebrow="Related Services"
            title="More ways we can help outside"
            text="Many outdoor projects overlap. These related services give Google and visitors a clearer path to the exact work they need."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {related.map((item) => (
              <Link key={item.slug} href={`/${item.slug}`} className="group rounded-2xl border border-white/10 bg-white/[0.045] p-5 transition hover:-translate-y-1 hover:border-emerald-300/40 hover:bg-white/[0.07]">
                <div className="relative h-44 overflow-hidden rounded-xl">
                  <Image src={item.image} alt={item.imageAlt} fill className="object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{item.navTitle}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{item.metaDescription}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-emerald-300">
                  Learn more <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-14 md:py-16">
          <SectionHeading eyebrow="Questions" title="Common questions before you call" text="A few quick answers for local property owners comparing services." align="center" />
          <div className="mt-10 grid gap-4">
            {page.faq.map((item) => (
              <details key={item.question} className="rounded-2xl border border-white/10 bg-white/[0.045] p-5">
                <summary className="cursor-pointer list-none font-semibold text-white marker:hidden [&::-webkit-details-marker]:hidden">
                  {item.question}
                </summary>
                <p className="mt-3 leading-relaxed text-white/65">{item.answer}</p>
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
