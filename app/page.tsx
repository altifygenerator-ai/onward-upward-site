import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Leaf, MapPin, PhoneCall, ShieldCheck, Sparkles, Star, Trees, Tractor, UploadCloud } from "lucide-react";
import { ContactSection } from "@/components/contact-section";
import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { areaPages, siteData, siteUrl } from "@/lib/site-data";
import { formatPhoneLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Landscaping, Excavation, Tree Work & Soil Delivery in Hot Springs, AR",
  description:
    "Onward & Upward Services provides landscaping, excavation, tree cleanup, land clearing, grading, mulch, soil delivery, yard cleanup, and debris hauling in Hot Springs and Central Arkansas.",
  alternates: {
    canonical: siteUrl,
  },
};

const serviceIcons = [Trees, Tractor, UploadCloud, Trees, Leaf, Tractor, Sparkles];

function StarRow() {
  return (
    <div className="flex items-center gap-1 text-amber-300" aria-label="Five star rating">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} className="h-4 w-4 fill-current" />
      ))}
    </div>
  );
}

export default function HomePage() {
  const phoneLink = formatPhoneLink(siteData.contact.phone);

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: siteData.brand.name,
      image: `${siteUrl}/images/hero.png`,
      url: siteUrl,
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
      areaServed: siteData.serviceAreas.map((area) => ({ "@type": "City", name: area })),
      description: siteData.hero.body,
      priceRange: "$$",
      makesOffer: siteData.services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          url: `${siteUrl}${service.href}`,
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteData.brand.name,
      url: siteUrl,
      potentialAction: {
        "@type": "SearchAction",
        target: `${siteUrl}/?s={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What services does Onward & Upward Services offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Services include landscaping, excavation, tree cleanup, land clearing, grading, drainage help, mulch, soil delivery, yard cleanup, and debris hauling.",
          },
        },
        {
          "@type": "Question",
          name: "What areas do you serve?",
          acceptedAnswer: {
            "@type": "Answer",
            text: siteData.contact.serviceArea,
          },
        },
        {
          "@type": "Question",
          name: "Can I call for a quote?",
          acceptedAnswer: {
            "@type": "Answer",
            text: `Yes. Call ${siteData.contact.phone} to ask about current availability and get a quote for your outdoor project.`,
          },
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0d1210] text-white">
      <JsonLd data={schema} />
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(52,211,153,0.18),transparent_32rem)]" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-12 pt-14 md:grid-cols-[1fr_0.86fr] md:pb-16 md:pt-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300/80">
                {siteData.hero.eyebrow}
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-[1.02] text-white md:text-6xl lg:text-7xl">
                {siteData.hero.headline}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/72">
                {siteData.hero.body}
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
              <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/62">
                {siteData.serviceAreas.slice(0, 4).map((area) => (
                  <span key={area} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2">
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative min-h-[420px] overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/5 shadow-2xl shadow-black/35 md:min-h-[560px]">
              <Image
                src={siteData.hero.image}
                alt="landscaping excavation tree work and cleanup in Hot Springs Arkansas"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-black/55 p-4 backdrop-blur">
                <p className="font-semibold text-white">Landscaping, dirt work, tree cleanup, soil, mulch, and hauling</p>
                <p className="mt-1 text-sm text-white/65">Hot Springs and surrounding Central Arkansas communities</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-8 md:py-10">
          <div className="grid gap-4 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4 md:grid-cols-4 md:p-5">
            {["Local Hot Springs area service", "Landscaping and cleanup", "Mulch, soil, and materials", "Call or text for a quote"].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl bg-black/20 p-4">
                <ShieldCheck className="h-5 w-5 shrink-0 text-emerald-300" />
                <p className="text-sm font-semibold text-white/78">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-4 py-16 md:py-20">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Services"
              title="Outdoor property services built around real local searches"
              text="Clear service pages help customers and Google understand exactly what Onward & Upward handles around Hot Springs and nearby Central Arkansas communities."
            />
            <Link href="/#contact" className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-bold text-white transition hover:border-emerald-300/50 hover:text-emerald-300">
              Get a quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {siteData.services.map((service, index) => {
              const Icon = serviceIcons[index] ?? Sparkles;
              return (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group rounded-[1.4rem] border border-white/10 bg-white/[0.045] p-5 transition hover:-translate-y-1 hover:border-emerald-300/40 hover:bg-white/[0.07]"
                >
                  <div className="relative h-52 overflow-hidden rounded-2xl">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <Icon className="mt-5 h-6 w-6 text-emerald-300" />
                  <h3 className="mt-4 text-2xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-3 leading-relaxed text-white/66">{service.text}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-emerald-300">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 md:py-20">
          <div className="grid gap-10 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 md:grid-cols-2 md:p-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300/80">Soil & Materials</p>
              <h2 className="mt-3 text-3xl font-semibold text-white md:text-5xl">
                Supersoil, compost blends, mulch, and landscape materials.
              </h2>
              <p className="mt-5 leading-relaxed text-white/70">
                We offer quality soil blends, compost, mulch, and landscaping materials for small garden projects, full bed refreshes, grading support, and larger outdoor work. Pickup or delivery may be available around Hot Springs and nearby areas.
              </p>
              <div className="mt-6 grid gap-3 text-white/72">
                {siteData.products.map((product) => (
                  <p key={product.name} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />
                    <span>{product.name}, {product.price}</span>
                  </p>
                ))}
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/seasonal" className="rounded-full bg-emerald-400 px-6 py-3 font-bold text-black transition hover:bg-emerald-300">
                  View Products
                </Link>
                <Link href="/mulch-soil-delivery-hot-springs-ar" className="rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-emerald-300/50 hover:text-emerald-300">
                  Soil Delivery Page
                </Link>
              </div>
            </div>
            <div className="relative min-h-[340px] overflow-hidden rounded-[1.5rem] border border-white/10">
              <Image src="/images/gallery/soil6.jpg" alt="supersoil garden soil compost and mulch materials in Hot Springs AR" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-5 left-5 rounded-full bg-black/60 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
                Call for current availability
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="mx-auto max-w-7xl px-4 py-16 md:py-20">
          <SectionHeading
            eyebrow="Recent Work"
            title="Before and after landscaping, cleanup, and property work"
            text="A small look at real outdoor work including driveway cleanup, brush clearing, seasonal planting, soil, tree cleanup, and property improvement projects."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {siteData.gallery.map((item) => (
              <div key={item.title} className="rounded-[1.4rem] border border-white/10 bg-white/[0.045] p-4">
                <h3 className="mb-4 text-xl font-semibold text-white">{item.title}</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Image src={item.before} alt={`before ${item.alt}`} width={360} height={260} className="h-56 w-full rounded-xl object-cover" />
                    <p className="mt-2 text-xs uppercase tracking-[0.14em] text-white/45">Before</p>
                  </div>
                  <div>
                    <Image src={item.after} alt={`after ${item.alt}`} width={360} height={260} className="h-56 w-full rounded-xl object-cover" />
                    <p className="mt-2 text-xs uppercase tracking-[0.14em] text-white/45">After</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Link href="/gallery" className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-emerald-300/50 hover:text-emerald-300">
            View Full Gallery <ArrowRight className="h-4 w-4" />
          </Link>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 md:py-20">
          <SectionHeading
            eyebrow="Areas We Serve"
            title="Local pages for Hot Springs and nearby communities"
            text="Each area page has unique local content so customers can find the right service from Google without every page looking the same."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Object.values(areaPages).map((area) => (
              <Link key={area.slug} href={`/service-areas/${area.slug}`} className="rounded-2xl border border-white/10 bg-white/[0.045] p-5 transition hover:-translate-y-1 hover:border-emerald-300/40 hover:bg-white/[0.07]">
                <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-emerald-300/80">
                  <MapPin className="h-4 w-4" />
                  Service Area
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white">{area.city}</h3>
                <p className="mt-3 leading-relaxed text-white/64">{area.heroText}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-16 text-center md:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300/80">What we stand for</p>
          <h2 className="mt-3 text-3xl font-semibold text-white md:text-5xl">
            Built on faith, honest work, and serving the Hot Springs community.
          </h2>
          <p className="mt-6 leading-relaxed text-white/70">
            The mission of Onward & Upward Services is to uplift and strengthen the community through honest work, quality landscaping, excavation, cleanup, and products that bring life, growth, and transformation.
          </p>
          <p className="mt-5 leading-relaxed text-white/60">
            The vision is to be a driving force for growth, restoration, and community impact, bringing beauty from the ground up and making each outdoor project a reflection of hard work, heart, and faith.
          </p>
        </section>

        <section id="reviews" className="mx-auto max-w-7xl px-4 py-16 md:py-20">
          <SectionHeading
            eyebrow="Reviews"
            title="What local customers say"
            text="Real feedback and recent work notes from people around Hot Springs and Central Arkansas."
            align="center"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {siteData.reviews.map((review) => (
              <div key={review.name} className="rounded-[1.4rem] border border-white/10 bg-white/[0.045] p-5">
                <Image src={review.image} alt={`${review.name} landscaping review in Hot Springs AR`} width={480} height={260} className="h-44 w-full rounded-xl object-cover" />
                <div className="mt-4"><StarRow /></div>
                <p className="mt-4 leading-relaxed text-white/78">“{review.quote}”</p>
                <p className="mt-4 font-semibold text-emerald-300">{review.name}</p>
                <p className="text-xs text-white/45">{review.source}</p>
              </div>
            ))}
          </div>
        </section>

        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  );
}
