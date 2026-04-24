import Link from "next/link";
import Image from "next/image";
import { formatPhoneLink, formatMailLink, formatSmsLink } from "@/lib/utils";
import { CheckCircle2, MapPin, Star, Tractor, Trees, UploadCloud } from "lucide-react";
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
  title: "Landscaping Services in Hot Springs, AR | Onward & Upward Services",
  description:
    "Professional landscaping services in Hot Springs, AR including mulch, flower beds, cleanup, grading, soil, debris removal, and property refresh work.",
};

export default function LandscapingHotSpringsPage() {
  const phoneLink = `tel:${siteData.contact.phone.replace(/[^\d+]/g, "")}`;

  const relatedServices = [
    { ...siteData.services[0], icon: Trees },
    { ...siteData.services[1], icon: Tractor },
    { ...siteData.services[2], icon: UploadCloud },
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

      <section className="mx-auto max-w-7xl px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-emerald-300 flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            Hot Springs, Arkansas
          </p>

          <h1 className="text-4xl md:text-6xl font-semibold mt-4">
            Landscaping Services in Hot Springs, AR
          </h1>

          <p className="mt-6 text-white/70 leading-relaxed">
            Onward & Upward Services provides landscaping, cleanup, mulch, soil,
            bed refreshes, grading, and outdoor property work for homeowners and
            properties around Hot Springs and nearby Arkansas communities.
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
            src={siteData.hero.image}
            alt="landscaping services in Hot Springs Arkansas"
            fill
            className="object-cover"
          />
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-4 py-16">
        <SectionHeading
          eyebrow="Local Landscaping"
          title="Landscaping work built around your property"
          text="Whether you need a full yard refresh or just help getting things cleaned up, we handle practical outdoor work that makes the property look better and function better."
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

      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div>
            <p className="text-sm font-semibold tracking-[0.22em] uppercase text-emerald-300/80">
              What We Help With
            </p>

            <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-white tracking-tight">
              Yard cleanup, beds, soil, mulch, grading, and more.
            </h2>

            <p className="mt-4 text-white/70 leading-relaxed">
              We help with common landscaping needs around Hot Springs including
              property cleanups, flower beds, mulch installation, soil work,
              light grading, debris removal, and getting outdoor areas back under control.
            </p>

            <div className="mt-6 grid gap-3 text-white/70">
              <p className="flex gap-2"><CheckCircle2 className="text-emerald-300 shrink-0" /> Landscape bed cleanup and refreshes</p>
              <p className="flex gap-2"><CheckCircle2 className="text-emerald-300 shrink-0" /> Mulch, soil, and material work</p>
              <p className="flex gap-2"><CheckCircle2 className="text-emerald-300 shrink-0" /> Brush, tree, and debris cleanup</p>
              <p className="flex gap-2"><CheckCircle2 className="text-emerald-300 shrink-0" /> Small grading and property shaping</p>
            </div>
          </div>

          <div className="relative h-[320px] w-full rounded-[1.5rem] overflow-hidden border border-white/10">
            <Image
              src="/images/products/supersoil.jpeg"
              alt="soil and landscaping materials in Hot Springs AR"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

            <div className="absolute bottom-4 left-4">
              <span className="rounded-full bg-black/60 px-3 py-1 text-sm text-white backdrop-blur">
                Soil, mulch, and landscape materials available
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16">
        <p className="text-sm uppercase tracking-[0.2em] text-emerald-300/80">
          Serving Hot Springs
        </p>

        <h2 className="mt-3 text-3xl md:text-4xl font-semibold">
          Local landscaping help for Hot Springs and nearby areas.
        </h2>

        <p className="mt-6 text-white/70 leading-relaxed">
          We serve Hot Springs, Glenwood, and surrounding Arkansas communities.
          From small cleanup jobs to bigger landscape refreshes, the goal is
          simple: show up, do honest work, and leave the property better than we found it.
        </p>

        <p className="mt-6 text-white/60 leading-relaxed">
          If you are searching for landscaping in Hot Springs, AR, yard cleanup,
          mulch installation, soil delivery, brush cleanup, or outdoor property
          work, this is the kind of work we built Onward & Upward Services around.
        </p>
      </section>

      <section id="work" className="mx-auto max-w-7xl px-4 py-16">
        <SectionHeading
          eyebrow="Recent Work"
          title="Before & After Landscaping Results"
          text="Real work photos help show what can be done on local properties."
        />

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {siteData.gallery.map((item) => (
            <div key={item.title}>
              <h3 className="mb-3">{item.title}</h3>
              <div className="grid grid-cols-2 gap-2">
                <Image
                  src={item.before}
                  alt={`before ${item.alt}`}
                  width={200}
                  height={150}
                  className="w-full h-[200px] object-cover rounded-lg"
                />

                <Image
                  src={item.after}
                  alt={`after ${item.alt}`}
                  width={200}
                  height={150}
                  className="w-full h-[200px] object-cover rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>

        <Link href="/gallery" className="inline-block mt-8 text-emerald-300">
          View full project gallery →
        </Link>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-emerald-300/80">
          Why Choose Us
        </p>

        <h2 className="mt-3 text-3xl md:text-4xl font-semibold">
          Honest work with a bigger mission.
        </h2>

        <p className="mt-6 text-white/70 leading-relaxed">
          Onward & Upward Services is built around faith, hard work, and helping
          people move forward. The mission is not just landscaping — it is doing
          good work, creating opportunity, and serving the community with integrity.
        </p>
      </section>

      <section id="reviews" className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-center">
          What Our Customers Say
        </h2>

        <p className="mt-4 text-center text-white/70">
          Real feedback from people we’ve worked with in Hot Springs and surrounding areas.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {siteData.reviews.map((review, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <img
                src={review.image}
                alt={`${review.name} review`}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />

              <p className="text-white/80">“{review.quote}”</p>

              <p className="mt-4 font-semibold text-emerald-300">
                — {review.name}
              </p>

              <p className="text-xs text-white/50">{review.source}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold">
                Get a landscaping quote in Hot Springs
              </h2>

              <p className="mt-4 text-white/70">
                Call, text, or send a message and we’ll get back to you as soon as possible.
              </p>
            </div>

            <div className="space-y-3">
              <a
                href={formatPhoneLink(siteData.contact.phone)}
                className="block bg-emerald-400 text-black px-6 py-3 rounded-xl font-semibold text-center"
              >
                Call Main Line: {siteData.contact.phone}
              </a>

              <a
                href={formatMailLink(siteData.contact.email)}
                className="block border border-white/20 px-6 py-3 rounded-xl text-center"
              >
                Email: {siteData.contact.email}
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {siteData.contacts.map((person) => (
                <div key={person.name} className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <p className="text-sm text-white/50">{person.role}</p>
                  <p className="text-lg font-semibold">{person.name}</p>

                  <div className="mt-3 space-y-2">
                    <a href={formatPhoneLink(person.phone)} className="block text-emerald-300 font-medium">
                      📞 {person.phone}
                    </a>

                    <a href={formatSmsLink(person.phone)} className="block text-white/70 text-sm">
                      Text {person.name}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-sm text-white/50">
              {siteData.contact.serviceArea}
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 lg:mt-8">
              <form
                action="mailto:rebeccaturner220144@gmail.com"
                method="POST"
                encType="text/plain"
                className="space-y-4"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="w-full p-3 rounded bg-black/30 border border-white/10"
                />

                <input
                  type="text"
                  name="contact"
                  placeholder="Phone or Email"
                  required
                  className="w-full p-3 rounded bg-black/30 border border-white/10"
                />

                <textarea
                  name="details"
                  placeholder="Tell us what kind of landscaping or cleanup work you need."
                  rows={4}
                  className="w-full p-3 rounded bg-black/30 border border-white/10"
                />

                <button
                  type="submit"
                  className="w-full bg-emerald-400 text-black py-3 rounded-full font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>
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