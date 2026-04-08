import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CalendarDays,
  ChevronRight,
  Leaf,
  PhoneCall,
  Sparkles,
} from "lucide-react";
import { siteData } from "@/lib/site-data";

function SectionHeading({ eyebrow, title, text }: any) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-semibold tracking-[0.22em] uppercase text-emerald-300/80">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-white tracking-tight">
        {title}
      </h2>
      <p className="mt-4 text-white/70 leading-relaxed">{text}</p>
    </div>
  );
}

export default function SeasonalPage() {
  const phoneLink = `tel:${siteData.contact.phone.replace(/[^\d+]/g, "")}`;

  return (
    <div className="min-h-screen bg-[#0d1210] text-white">

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0d1210]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
          <Link href="/" className="flex items-center gap-3">
            <Image src={siteData.brand.logo} alt="logo" width={40} height={40} />
            <span className="font-semibold">{siteData.brand.name}</span>
          </Link>

          <nav className="hidden md:flex gap-6 text-sm text-white/70">
            <Link href="/">Home</Link>
            <a href="/#services">Services</a>
            <a href="/#work">Work</a>
            <a href="/#reviews">Reviews</a>
            <a href="/#contact">Contact</a>
          </nav>

          <a href={phoneLink} className="bg-emerald-400 text-black px-4 py-2 rounded-full font-semibold">
            Call Now
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-4 py-16 grid md:grid-cols-2 gap-10">
        <div>
          <p className="text-emerald-300 flex items-center gap-2">
            <CalendarDays className="w-4 h-4" />
            Seasonal Features
          </p>

          <h1 className="text-4xl md:text-6xl font-semibold mt-4">
            Plants, soil, mulch, and what’s available right now.
          </h1>

          <p className="mt-6 text-white/70">
            This page is updated as the season changes. Check here for current plant availability,
            featured products, and garden season specials.
          </p>

          <div className="mt-6 flex gap-4 flex-wrap">
            <Link
              href="/#quote"
              className="bg-white text-black px-6 py-3 rounded-full font-semibold"
            >
              Request Quote
              <ArrowRight className="inline ml-2 w-4 h-4" />
            </Link>

            <Link
              href="/"
              className="border px-6 py-3 rounded-full"
            >
              Back Home
            </Link>
          </div>
        </div>

        {/* FEATURED IMAGE */}
        <Image
          src={siteData.seasonalItems[0].image}
          alt="seasonal"
          width={600}
          height={400}
          className="rounded-xl object-cover"
        />
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <SectionHeading
          eyebrow="Available Now"
          title="Seasonal products and features"
          text="Rotating items based on availability. This keeps things fresh without clutter."
        />

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {siteData.seasonalItems.map((item) => (
            <div key={item.name} className="bg-white/5 p-6 rounded-xl">
              <Image
                src={item.image}
                alt={item.name}
                width={400}
                height={250}
                className="rounded-lg object-cover"
              />

              <div className="mt-4 flex justify-between items-center">
                <div className="flex items-center gap-2 text-emerald-300">
                  <Leaf className="w-4 h-4" />
                  <span className="text-xs uppercase">{item.tag}</span>
                </div>
              </div>

              <h3 className="mt-4 font-semibold text-lg">{item.name}</h3>
              <p className="text-white/70 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROMO BLOCK */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="bg-emerald-400/10 border border-emerald-400/20 p-8 rounded-xl">
          <div className="flex items-start gap-3">
            <Sparkles className="text-emerald-300" />
            <div>
              <h3 className="text-xl font-semibold">Current seasonal promo</h3>
              <p className="text-white/70 mt-2">
                Use this section for current deals like bulk soil pricing, plant discounts,
                or limited-time offers. This should be updated regularly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="bg-white/5 p-8 rounded-xl">
          <h3 className="text-2xl font-semibold">Need help or want to order?</h3>
          <p className="text-white/70 mt-2">
            Call or message to check availability, schedule delivery, or ask questions.
          </p>

          <div className="mt-6 flex gap-4 flex-wrap">
            <a
              href={phoneLink}
              className="bg-emerald-400 text-black px-6 py-3 rounded-full font-semibold"
            >
              <PhoneCall className="inline w-4 h-4 mr-2" />
              Call Now
            </a>

            <Link
              href="/#contact"
              className="border px-6 py-3 rounded-full"
            >
              Contact Form
              <ChevronRight className="inline ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-6 text-center text-white/50">
        {siteData.brand.name} · Seasonal Page
      </footer>
    </div>
  );
}