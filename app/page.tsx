import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Leaf,
  MapPin,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Star,
  Trees,
  Tractor,
  UploadCloud,
} from "lucide-react";
import { ContactSection } from "@/components/contact-section";
import { JsonLd } from "@/components/json-ld";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { areaPages, siteData, siteUrl } from "@/lib/site-data";
import { formatPhoneLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Landscaping & Excavation in Hot Springs, AR | Onward & Upward",
  description:
    "Landscaping, excavation, grading, tree and brush cleanup, mulch and soil delivery, and yard cleanup in Hot Springs and nearby Central Arkansas.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Landscaping & Excavation in Hot Springs, AR | Onward & Upward",
    description:
      "Practical outdoor property work including landscaping, excavation, grading, tree cleanup, mulch, soil delivery, and hauling.",
    url: siteUrl,
    images: [
      {
        url: "/images/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Onward and Upward Services landscaping project in Hot Springs Arkansas",
      },
    ],
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
      "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
      name: siteData.brand.name,
      image: `${siteUrl}/images/og-home.jpg`,
      logo: `${siteUrl}${siteData.brand.logo}`,
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
    <div className="min-h-screen bg-[#0b110e] text-white">
      <JsonLd data={schema} />
      <SiteHeader />

      <main>
        <section className="hero-grid relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_14%,rgba(74,222,128,0.17),transparent_32rem),radial-gradient(circle_at_82%_28%,rgba(201,162,92,0.12),transparent_28rem)]" />
          <div className="absolute inset-y-0 right-0 hidden w-[46%] bg-[linear-gradient(90deg,transparent,rgba(8,13,10,0.22))] lg:block" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-14 pt-12 md:px-8 md:pb-20 md:pt-18 lg:grid-cols-[0.94fr_1.06fr]">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/[0.07] px-4 py-2 text-xs font-bold uppercase tracking-[0.17em] text-emerald-200">
                <MapPin className="h-3.5 w-3.5" />
                Hot Springs & Central Arkansas
              </div>
              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300/75">
                {siteData.hero.eyebrow}
              </p>
              <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.02] text-white sm:text-5xl md:text-6xl lg:text-[4.35rem]">
                {siteData.hero.headline}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
                {siteData.hero.body}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/#contact" className="btn-quote-primary inline-flex items-center gap-2">
                  Request Quote <ArrowRight className="h-4 w-4" />
                </Link>
                <a href={phoneLink} className="btn-outline inline-flex items-center gap-2">
                  <PhoneCall className="h-4 w-4" />
                  {siteData.contact.phone}
                </a>
              </div>

              <div className="mt-9 grid max-w-2xl gap-3 sm:grid-cols-3">
                {["Honest local work", "Residential & small commercial", "Call or text for a quote"].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-sm text-white/62">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-300" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-2xl lg:mx-0">
              <div className="relative min-h-[450px] overflow-hidden rounded-[2rem] border border-white/12 bg-white/5 shadow-[0_32px_90px_rgba(0,0,0,0.42)] sm:min-h-[560px]">
                <Image
                  src={siteData.hero.image}
                  alt="Onward and Upward crew completing outdoor property work in Hot Springs Arkansas"
                  fill
                  priority
                  sizes="(min-width: 1024px) 52vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07100b]/90 via-black/5 to-transparent" />
                <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/45 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white/80 backdrop-blur-md">
                  Real local work
                </div>
                <div className="absolute bottom-5 left-5 right-5 rounded-[1.35rem] border border-white/12 bg-[#07100b]/78 p-5 backdrop-blur-xl">
                  <p className="text-lg font-semibold text-white">One crew for the work outside.</p>
                  <p className="mt-1.5 text-sm leading-6 text-white/62">
                    Landscaping, dirt work, tree cleanup, material delivery, grading, and hauling.
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-8 -left-3 hidden w-52 overflow-hidden rounded-[1.4rem] border border-white/15 bg-[#0d1711] p-2 shadow-2xl shadow-black/45 sm:block lg:-left-10">
                <div className="relative h-36 overflow-hidden rounded-xl">
                  <Image
                    src={siteData.featuredProject.after}
                    alt="Recent mulch bed refresh completed in Hot Springs Arkansas"
                    fill
                    sizes="208px"
                    className="object-cover"
                  />
                </div>
                <p className="px-2 pb-2 pt-3 text-xs font-bold uppercase tracking-[0.14em] text-emerald-200">
                  Recent mulch refresh
                </p>
              </div>

              <div className="absolute -right-3 top-10 hidden w-44 overflow-hidden rounded-[1.35rem] border border-white/15 bg-[#0d1711] p-2 shadow-2xl shadow-black/45 md:block lg:-right-8">
                <div className="relative h-28 overflow-hidden rounded-xl">
                  <Image
                    src="/images/projects/tractor-work.webp"
                    alt="Tractor moving soil for a property project"
                    fill
                    sizes="176px"
                    className="object-cover"
                  />
                </div>
                <p className="px-2 pb-2 pt-3 text-xs font-bold uppercase tracking-[0.14em] text-white/65">
                  Dirt & material work
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-10 mx-auto -mt-px max-w-7xl px-4 py-8 md:px-8 md:py-10">
          <div className="grid overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#111a15]/92 shadow-xl shadow-black/20 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Hot Springs area service",
              "Landscaping and cleanup",
              "Mulch, soil, and materials",
              "Quotes by call or text",
            ].map((item, index) => (
              <div key={item} className="flex items-center gap-3 border-white/8 p-5 sm:[&:nth-child(odd)]:border-r lg:border-r lg:last:border-r-0">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-emerald-300/20 bg-emerald-300/[0.08] text-sm font-bold text-emerald-200">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm font-semibold leading-5 text-white/76">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
          <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Services"
              title="The outdoor work your property needs"
              text="From a clean landscape refresh to dirt work, tree cleanup, and material delivery, we handle practical projects for homes, rentals, lots, and local businesses."
            />
            <Link href="/#contact" className="btn-outline inline-flex w-fit items-center gap-2">
              Get a quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-11 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {siteData.services.map((service, index) => {
              const Icon = serviceIcons[index] ?? Sparkles;
              return (
                <Link
                  key={service.href}
                  href={service.href}
                  className={`service-card group ${index === 0 ? "lg:col-span-2 lg:grid lg:grid-cols-[1.1fr_0.9fr]" : ""}`}
                >
                  <div className={`relative overflow-hidden rounded-[1.15rem] ${index === 0 ? "min-h-64 lg:min-h-full" : "h-52"}`}>
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      sizes={index === 0 ? "(min-width: 1024px) 45vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"}
                      className="object-cover transition duration-700 group-hover:scale-[1.045]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                  </div>
                  <div className="flex flex-col p-1 pt-5 lg:p-1 lg:pt-5">
                    <div className="flex items-center justify-between gap-4">
                      <span className="grid h-11 w-11 place-items-center rounded-full border border-emerald-300/20 bg-emerald-300/[0.08]">
                        <Icon className="h-5 w-5 text-emerald-200" />
                      </span>
                      <span className="text-xs font-bold uppercase tracking-[0.15em] text-white/35">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="mt-4 text-2xl font-semibold text-white">{service.title}</h3>
                    <p className="mt-3 leading-7 text-white/62">{service.text}</p>
                    <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-bold text-emerald-200">
                      View service <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="border-y border-white/8 bg-[#0e1712]">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-[0.83fr_1.17fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300/75">Recent Project</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-white md:text-5xl">
                {siteData.featuredProject.title}
              </h2>
              <p className="mt-5 max-w-xl leading-8 text-white/68">{siteData.featuredProject.text}</p>
              <div className="mt-7 grid gap-3 text-sm text-white/70 sm:grid-cols-2">
                {["Fresh mulch installed", "Beds and tree areas shaped", "Edges cleaned up", "Finished across the front yard"].map((item) => (
                  <p key={item} className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-300" />
                    {item}
                  </p>
                ))}
              </div>
              <Link href="/gallery" className="btn-outline mt-8 inline-flex items-center gap-2">
                See more projects <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <figure className="project-frame sm:translate-y-7">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem]">
                  <Image
                    src={siteData.featuredProject.before}
                    alt={`Before ${siteData.featuredProject.alt}`}
                    fill
                    sizes="(min-width: 640px) 32vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3 flex items-center justify-between px-1 text-xs font-bold uppercase tracking-[0.15em] text-white/46">
                  Before <span>01</span>
                </figcaption>
              </figure>
              <figure className="project-frame">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem]">
                  <Image
                    src={siteData.featuredProject.after}
                    alt={`After ${siteData.featuredProject.alt}`}
                    fill
                    sizes="(min-width: 640px) 32vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3 flex items-center justify-between px-1 text-xs font-bold uppercase tracking-[0.15em] text-emerald-200">
                  After <span>02</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
          <div className="grid gap-10 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 shadow-2xl shadow-black/15 md:p-10 lg:grid-cols-[1fr_0.92fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300/75">Soil & Materials</p>
              <h2 className="mt-3 text-3xl font-semibold text-white md:text-5xl">
                Supersoil, compost blends, mulch, and landscape materials.
              </h2>
              <p className="mt-5 max-w-2xl leading-8 text-white/68">
                We offer quality soil blends, compost, mulch, and landscaping materials for small garden projects, full bed refreshes, grading support, and larger outdoor work. Pickup or delivery may be available around Hot Springs and nearby areas.
              </p>
              <div className="mt-7 grid gap-3 text-white/72">
                {siteData.products.map((product) => (
                  <p key={product.name} className="flex gap-3 rounded-xl border border-white/8 bg-black/15 px-4 py-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />
                    <span>{product.name}, {product.price}</span>
                  </p>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/seasonal" className="btn-quote-primary">
                  View Products
                </Link>
                <Link href="/mulch-soil-delivery-hot-springs-ar" className="btn-outline">
                  Delivery Details
                </Link>
              </div>
            </div>
            <div className="relative min-h-[390px] overflow-hidden rounded-[1.5rem] border border-white/10 lg:min-h-[520px]">
              <Image
                src="/images/projects/garden-plot.webp"
                alt="Raised garden bed with quality soil and healthy plants"
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/12 bg-black/55 p-4 backdrop-blur-md">
                <p className="font-semibold text-white">Soil and material for gardens, beds, and outdoor projects</p>
                <p className="mt-1 text-sm text-white/60">Call for current availability and delivery options.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
          <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Recent Work"
              title="Before and after property work"
              text="A look at real landscaping, mulch, cleanup, and grading projects completed around Hot Springs and Central Arkansas."
            />
            <Link href="/gallery" className="btn-outline inline-flex w-fit items-center gap-2">
              Full gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-11 grid gap-6 md:grid-cols-3">
            {siteData.gallery.map((item) => (
              <article key={item.title} className="rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-4 shadow-lg shadow-black/10">
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative h-64 overflow-hidden rounded-[1rem]">
                    <Image src={item.before} alt={`Before ${item.alt}`} fill sizes="(min-width: 768px) 16vw, 46vw" className="object-cover" />
                    <span className="absolute bottom-3 left-3 rounded-full bg-black/70 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur">Before</span>
                  </div>
                  <div className="relative h-64 overflow-hidden rounded-[1rem]">
                    <Image src={item.after} alt={`After ${item.alt}`} fill sizes="(min-width: 768px) 16vw, 46vw" className="object-cover" />
                    <span className="absolute bottom-3 left-3 rounded-full bg-emerald-300 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#07110d]">After</span>
                  </div>
                </div>
                <h3 className="px-1 pb-1 pt-5 text-xl font-semibold text-white">{item.title}</h3>
              </article>
            ))}
          </div>
        </section>

        <section id="areas" className="border-y border-white/8 bg-[#0e1712]">
          <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
            <SectionHeading
              eyebrow="Areas We Serve"
              title="Outdoor property services across the Hot Springs area"
              text="We work in Hot Springs and surrounding Central Arkansas communities. Reach out with your location and project details to check current availability."
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {Object.values(areaPages).map((area) => (
                <Link key={area.slug} href={`/service-areas/${area.slug}`} className="area-card group">
                  <div className="flex items-center justify-between gap-4">
                    <span className="grid h-10 w-10 place-items-center rounded-full border border-emerald-300/20 bg-emerald-300/[0.08]">
                      <MapPin className="h-4 w-4 text-emerald-200" />
                    </span>
                    <ArrowRight className="h-4 w-4 text-white/30 transition group-hover:translate-x-1 group-hover:text-emerald-200" />
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold text-white">{area.city}</h3>
                  <p className="mt-3 leading-7 text-white/60">{area.heroText}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
          <div className="relative overflow-hidden rounded-[2rem] border border-emerald-300/15 bg-[linear-gradient(135deg,rgba(34,197,94,0.1),rgba(255,255,255,0.025)_48%,rgba(201,162,92,0.08))] px-6 py-12 md:px-12 md:py-16">
            <Image
              src="/images/logo-mark.webp"
              alt=""
              width={380}
              height={380}
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-24 hidden opacity-[0.09] mix-blend-screen md:block"
            />
            <div className="relative max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300/75">What we stand for</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-white md:text-5xl">
                Built on faith, honest work, and serving the Hot Springs community.
              </h2>
              <p className="mt-6 max-w-3xl leading-8 text-white/70">
                The mission of Onward & Upward Services is to uplift and strengthen the community through honest work, quality landscaping, excavation, cleanup, and products that bring life, growth, and transformation.
              </p>
              <p className="mt-5 max-w-3xl leading-8 text-white/58">
                The vision is to be a driving force for growth, restoration, and community impact, bringing beauty from the ground up and making each outdoor project a reflection of hard work, heart, and faith.
              </p>
            </div>
          </div>
        </section>

        <section id="reviews" className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
          <SectionHeading
            eyebrow="Reviews"
            title="What local customers say"
            text="Feedback from people who have worked with Onward & Upward Services around Hot Springs and Central Arkansas."
            align="center"
          />
          <div className="mt-11 grid gap-6 md:grid-cols-3">
            {siteData.reviews.map((review) => (
              <article key={review.name} className="review-card">
                <div className="relative h-44 overflow-hidden rounded-[1.15rem]">
                  <Image src={review.image} alt={`${review.name} review for Onward and Upward Services`} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
                </div>
                <div className="mt-5">
                  {review.source === "Recent work" ? (
                    <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-emerald-200">
                      <Sparkles className="h-4 w-4" /> Recent work note
                    </span>
                  ) : (
                    <StarRow />
                  )}
                </div>
                <p className="mt-4 text-lg leading-8 text-white/78">“{review.quote}”</p>
                <div className="mt-6 border-t border-white/8 pt-4">
                  <p className="font-semibold text-white">{review.name}</p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-emerald-300/70">{review.source}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  );
}
