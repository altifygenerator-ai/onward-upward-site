import Link from "next/link";
import Image from "next/image";
import { formatPhoneLink, formatMailLink, formatSmsLink } from "@/lib/utils";
import { CheckCircle2, MapPin, Trees, UploadCloud, Tractor } from "lucide-react";
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

export const metadata = {
  title: "Tree Removal, Land Clearing & Cleanup in Hot Springs, AR | Onward & Upward",
  description:
    "Tree removal, land clearing, brush cutting, excavation, and storm cleanup in Hot Springs, Benton, Bryant, Malvern, Glenwood, Arkadelphia, and surrounding Arkansas areas. Fast, reliable service.",
};

export default function TreeRemovalHotSpringsPage() {
  const phoneLink = `tel:${siteData.contact.phone.replace(/[^\d+]/g, "")}`;

  const relatedServices = [
    { ...siteData.services[2], icon: UploadCloud },
    { ...siteData.services[0], icon: Trees },
    { ...siteData.services[1], icon: Tractor },
  ];

  return (
    <div className="min-h-screen bg-[#0d1210] text-white">
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

          <a href={phoneLink} className="bg-emerald-400 text-black px-4 py-2 rounded-full font-semibold">
            Call Now
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-emerald-300 flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            Hot Springs, Arkansas
          </p>

          <h1 className="text-4xl md:text-6xl font-semibold mt-4">
            Tree Removal & Cleanup in Hot Springs, AR
          </h1>

          <p className="mt-6 text-white/70 leading-relaxed">
            We handle tree removal, land clearing, brush cutting, storm cleanup, and debris
            hauling for properties in Hot Springs, Benton, Bryant, Malvern, Glenwood, Arkadelphia,
            and surrounding Arkansas areas. Whether it’s a fallen tree, overgrown land, or full property cleanup,
            we get it cleared and under control.
          </p>

          <div className="mt-6 flex gap-4 flex-wrap">
            <a href="/#contact" className="bg-white text-black px-6 py-3 rounded-full font-semibold">
              Request Quote
            </a>

            <a href={phoneLink} className="border border-white/20 px-6 py-3 rounded-full">
              Call Now
            </a>
          </div>
        </div>

        <div className="relative h-[420px] w-full rounded-xl overflow-hidden border border-white/10">
          <Image
            src="/images/gallery/treework1.jpg"
            alt="tree removal and land clearing in Hot Springs AR"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <SectionHeading
          eyebrow="Tree & Cleanup"
          title="Clearing, hauling, and getting properties cleaned up"
          text="We take care of the heavy work so you don’t have to — from tree removal and land clearing to full debris cleanup."
        />

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {relatedServices.map((service) => {
            const Icon = service.icon;

            return (
              <div key={service.title} className="bg-white/5 p-6 rounded-xl border border-white/10">
                <Image
                  src={service.image}
                  alt={service.alt}
                  width={400}
                  height={300}
                  className="w-full h-[200px] object-cover rounded-lg"
                />

                <Icon className="mt-4 text-emerald-300" />
                <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
                <p className="text-white/70 mt-2">{service.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* DETAILS */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">
              Tree removal, land clearing, and debris hauling.
            </h2>

            <p className="mt-4 text-white/70 leading-relaxed">
              From storm damage to overgrown areas, we help restore properties with tree removal,
              land clearing, brush cutting, and debris hauling. Whether you need cleanup after a storm
              or full clearing for a project, we focus on getting the job done safely and efficiently.
            </p>

            <div className="mt-6 grid gap-3 text-white/70">
              <p className="flex gap-2"><CheckCircle2 className="text-emerald-300" /> Tree removal and cutting</p>
              <p className="flex gap-2"><CheckCircle2 className="text-emerald-300" /> Brush clearing and overgrowth removal</p>
              <p className="flex gap-2"><CheckCircle2 className="text-emerald-300" /> Storm cleanup and debris hauling</p>
              <p className="flex gap-2"><CheckCircle2 className="text-emerald-300" /> Property cleanup and land clearing</p>
            </div>
          </div>

          <div className="relative h-[320px] w-full rounded-[1.5rem] overflow-hidden border border-white/10">
            <Image
              src="/images/gallery/treework2.jpg"
              alt="brush clearing and cleanup Hot Springs AR"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* LOCAL */}
      <section className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Tree removal and land clearing in Hot Springs and nearby areas.
        </h2>

        <p className="mt-6 text-white/70 leading-relaxed">
          We serve Hot Springs, Benton, Bryant, Malvern, Glenwood, Arkadelphia,
          and surrounding central Arkansas communities with tree removal, land clearing,
          brush cutting, and debris cleanup services.
        </p>

        <p className="mt-6 text-white/60 leading-relaxed">
          If you’re searching for tree removal in Hot Springs, AR, land clearing near Benton,
          brush cleanup in Bryant, or storm cleanup in Malvern, Onward & Upward Services is ready to help.
        </p>
      </section>

      {/* GALLERY */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <SectionHeading
          eyebrow="Recent Work"
          title="Tree Removal & Cleanup Results"
          text="Real work from properties in the area."
        />

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {siteData.gallery.map((item) => (
            <div key={item.title}>
              <h3 className="mb-3">{item.title}</h3>
              <div className="grid grid-cols-2 gap-2">
                <Image src={item.before} alt="before" width={200} height={150} className="w-full h-[200px] object-cover rounded-lg" />
                <Image src={item.after} alt="after" width={200} height={150} className="w-full h-[200px] object-cover rounded-lg" />
              </div>
            </div>
          ))}
        </div>

        <Link href="/gallery" className="inline-block mt-8 text-emerald-300">
          View full gallery →
        </Link>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-7xl px-4 py-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold">
            Need tree removal or land clearing?
          </h2>

          <p className="mt-4 text-white/70">
            Call or message us and we’ll get your property cleaned up.
          </p>

          <div className="mt-6 flex justify-center gap-4 flex-wrap">
            <a href={phoneLink} className="bg-emerald-400 text-black px-6 py-3 rounded-full font-semibold">
              Call Now
            </a>

            <a href="/#contact" className="border border-white/20 px-6 py-3 rounded-full">
              Request Quote
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#0d1210]">
        <div className="mx-auto max-w-7xl px-4 py-6 text-center text-sm text-white/60">
          © {new Date().getFullYear()} {siteData.brand.name}. All rights reserved.

          <div className="mt-2 text-white/40">
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