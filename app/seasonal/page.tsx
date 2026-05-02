"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
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

function ProductCard({ item }: { item: any }) {
  const [index, setIndex] = useState(0);

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 shadow-lg shadow-black/20">
      <div
        className="relative h-[220px] w-full cursor-pointer hover:opacity-90 transition"
        onClick={() =>
          setIndex((prev) => (prev + 1) % item.images.length)
        }
      >
        <Image
          src={item.images[index]}
          alt={`${item.name} in Hot Springs AR`}
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

        <div className="absolute left-4 top-4">
          <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-100 backdrop-blur">
            {item.note}
          </span>
        </div>

        <div className="absolute bottom-4 left-4">
          <span className="rounded-full bg-black/60 px-3 py-1 text-sm font-semibold text-white backdrop-blur">
            {item.price}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold text-white">{item.name}</h3>
        <p className="mt-3 flex-grow text-white/70 leading-relaxed">
          {item.description}
        </p>
      </div>
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
            <Image src={siteData.brand.logo} alt="logo" width={60} height={60} />
            <span className="font-semibold">{siteData.brand.name}</span>
          </Link>

          <nav className="hidden md:flex gap-6 text-sm text-white/70">
            <a href="/#services">Services</a>
            <a href="/#work">Work</a>
            <Link href="/seasonal">Products</Link>
            <a href="/#reviews">Reviews</a>
            <a href="/#contact">Contact</a>
            <Link href="/gallery">Gallery</Link>
          </nav>

          <a
            href={phoneLink}
            className="bg-emerald-400 text-black px-4 py-2 rounded-full font-semibold"
          >
            Call Now
          </a>

        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-4 py-16 grid md:grid-cols-2 gap-10">
        <div>
          <p className="text-emerald-300 flex items-center gap-2">
            <CalendarDays className="w-4 h-4" />
            Seasonal Materials & Products
          </p>

          <h1 className="text-4xl md:text-6xl font-semibold mt-4">
            Mulch, soil, plants, and landscaping materials in Hot Springs, AR
          </h1>

          <p className="mt-6 text-white/70">
            This page is updated as the season changes. Check here for mulch delivery,
            topsoil, garden soil, plants, and landscaping materials available in
            Hot Springs, Benton, Bryant, Malvern, and surrounding Arkansas areas.
          </p>

          <div className="mt-6 flex gap-4 flex-wrap">
            <Link
              href="/#quote"
              className="bg-white text-black px-6 py-3 rounded-full font-semibold"
            >
              Request Quote
              <ArrowRight className="inline ml-2 w-4 h-4" />
            </Link>

            <Link href="/" className="border px-6 py-3 rounded-full">
              Back Home
            </Link>
          </div>
        </div>

        <Image
          src={siteData.seasonalItems[0].image}
          alt="mulch and soil delivery Hot Springs AR"
          width={600}
          height={400}
          className="rounded-xl object-cover"
        />
      </section>

      {/* SEASONAL ITEMS */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <SectionHeading
          eyebrow="Available Now"
          title="Seasonal plants, soil, and landscaping materials"
          text="Rotating availability of plants, mulch, soil, and seasonal landscaping products for properties in Hot Springs and surrounding Arkansas areas."
        />

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {siteData.seasonalItems.map((item) => (
            <div key={item.name} className="bg-white/5 p-6 rounded-xl">
              <Image
                src={item.image}
                alt={`${item.name} Hot Springs AR`}
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

      {/* CORE PRODUCTS */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <SectionHeading
          eyebrow="Always Available"
          title="Mulch, soil, and landscaping materials year-round"
          text="We keep core materials in stock year-round for landscaping, land prep, grading, and ongoing outdoor projects."
        />
        <p className="mt-6 text-white/70">
          Click through for more images
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {siteData.products.map((item) => (
            <ProductCard key={item.name} item={item} />
          ))}
        </div>
      </section>

      {/* PROMO */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="bg-emerald-400/10 border border-emerald-400/20 p-8 rounded-xl">
          <div className="flex items-start gap-3">
            <Sparkles className="text-emerald-300" />
            <div>
              <h3 className="text-xl font-semibold">Seasonal deals on mulch, soil, and plants</h3>
              <p className="text-white/70 mt-2">
                Keep an eye on this space for seasonal discounts on mulch delivery,
                topsoil, plants, and landscaping materials in Hot Springs and nearby areas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ADD-ONS */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-8 shadow-lg shadow-black/20">

          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-[0.22em] uppercase text-emerald-300/80">
              Add-ons & Supplies
            </p>

            <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-white tracking-tight">
              Buckets and containers for soil and landscaping work
            </h2>

            <p className="mt-4 text-white/70 leading-relaxed">
              We offer containers for soil pickup, mulch transport, and smaller landscaping projects.
              Great for garden work, planting, and hauling materials.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-black/30 p-6">
              <h3 className="text-lg font-semibold text-white">1 Gallon Pots</h3>
              <p className="mt-2 text-white/70">$3 each</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-black/30 p-6">
              <h3 className="text-lg font-semibold text-white">3 Gallon Pots</h3>
              <p className="mt-2 text-white/70">$8 each</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-black/30 p-6">
              <h3 className="text-lg font-semibold text-white">25 Gallon Pots</h3>
              <p className="mt-2 text-white/70">$45 each</p>
            </div>
          </div>

          <p className="mt-6 text-white/60 text-sm">
            Ask about availability when ordering soil, mulch, or delivery services.
          </p>

        </div>
      </section>

      {/* CONTACT */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="bg-white/5 p-8 rounded-xl">
          <h3 className="text-2xl font-semibold">Need mulch, soil, or delivery?</h3>
          <p className="text-white/70 mt-2">
            Call or message to check availability, schedule delivery, or ask about landscaping materials.
          </p>

          <div className="mt-6 flex gap-4 flex-wrap">
            <a
              href={phoneLink}
              className="bg-emerald-400 text-black px-6 py-3 rounded-full font-semibold"
            >
              <PhoneCall className="inline w-4 h-4 mr-2" />
              Call Now
            </a>

            <Link href="/#contact" className="border px-6 py-3 rounded-full">
              Contact Form
              <ChevronRight className="inline ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
   <footer className="border-t border-white/10 bg-[#0d1210]">
  <div className="mx-auto max-w-7xl px-4 py-10 grid md:grid-cols-3 gap-8 text-sm text-white/70">

    {/* BRAND */}
    <div>
      <p className="font-semibold text-white">{siteData.brand.name}</p>
      <p className="mt-3 text-white/60">
        Landscaping, excavation, tree removal, and cleanup services for
        Hot Springs and surrounding Arkansas communities.
      </p>
    </div>

    {/* SERVICES */}
    <div>
      <p className="font-semibold text-white mb-3">Services</p>
      <div className="flex flex-col gap-2">
        <Link href="/landscaping-hot-springs-ar" className="hover:text-emerald-300">
          Landscaping Hot Springs AR
        </Link>
        <Link href="/excavation-hot-springs-ar" className="hover:text-emerald-300">
          Excavation Hot Springs AR
        </Link>
        <Link href="/tree-removal-hot-springs-ar" className="hover:text-emerald-300">
          Tree Removal Hot Springs AR
        </Link>
        <Link href="/seasonal" className="hover:text-emerald-300">
          Mulch, Soil & Products
        </Link>
      </div>
    </div>

    {/* AREAS */}
    <div>
      <p className="font-semibold text-white mb-3">Areas We Serve</p>
      <div className="flex flex-col gap-2">
        <span>Hot Springs, AR</span>
        <span>Benton, AR</span>
        <span>Bryant, AR</span>
        <span>Malvern, AR</span>
        <span>Glenwood, AR</span>
        <span>Arkadelphia, AR</span>
      </div>
    </div>

  </div>

  {/* BOTTOM */}
  <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
    © {new Date().getFullYear()} {siteData.brand.name}. All rights reserved.

    <div className="mt-2">
      Site by{" "}
      <a
        href="https://hometownwebservicesar.cc"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-emerald-300 transition"
      >
        Hometown Web Services AR
      </a>
    </div>
  </div>
</footer>
    </div>
  );
}