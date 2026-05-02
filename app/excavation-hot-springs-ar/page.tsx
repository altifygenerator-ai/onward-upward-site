import Link from "next/link";
import Image from "next/image";
import { formatPhoneLink, formatMailLink, formatSmsLink } from "@/lib/utils";
import { CheckCircle2, MapPin, Tractor, Trees, UploadCloud } from "lucide-react";
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
  title: "Excavation, Dirt Work & Grading in Hot Springs, AR | Onward & Upward",
  description:
    "Excavation services in Hot Springs, AR including dirt work, grading, drainage help, site prep, land clearing, property shaping, and cleanup in Benton, Bryant, Malvern, Glenwood, Arkadelphia, and nearby areas.",
};

export default function ExcavationHotSpringsPage() {
  const phoneLink = `tel:${siteData.contact.phone.replace(/[^\d+]/g, "")}`;

  const relatedServices = [
    { ...siteData.services[1], icon: Tractor },
    { ...siteData.services[0], icon: Trees },
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
            Excavation Services in Hot Springs, AR
          </h1>

          <p className="mt-6 text-white/70 leading-relaxed">
            Onward & Upward Services provides excavation, dirt work, grading,
            drainage help, site prep, land clearing, and property shaping for homeowners
            and small projects around Hot Springs, Benton, Bryant, Malvern, Glenwood,
            Arkadelphia, and nearby Arkansas communities.
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
            src={siteData.services[1].image}
            alt="excavation dirt work and grading in Hot Springs Arkansas"
            fill
            className="object-cover"
          />
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-4 py-16">
        <SectionHeading
          eyebrow="Local Excavation"
          title="Dirt work, grading, drainage, and property prep"
          text="From grading and drainage help to site prep, land clearing, and cleanup, we handle practical excavation work that helps your property function better."
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
              Excavation Help
            </p>

            <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-white tracking-tight">
              Grading, drainage, site prep, dirt work, and property shaping.
            </h2>

            <p className="mt-4 text-white/70 leading-relaxed">
              Excavation work does not always have to mean a huge commercial job.
              We help with smaller property projects too — shaping land, cleaning
              up rough areas, helping with drainage, prepping spaces, land clearing,
              and moving material where it needs to go.
            </p>

            <div className="mt-6 grid gap-3 text-white/70">
              <p className="flex gap-2"><CheckCircle2 className="text-emerald-300 shrink-0" /> Dirt work and property shaping</p>
              <p className="flex gap-2"><CheckCircle2 className="text-emerald-300 shrink-0" /> Site prep for outdoor projects</p>
              <p className="flex gap-2"><CheckCircle2 className="text-emerald-300 shrink-0" /> Drainage and grading help</p>
              <p className="flex gap-2"><CheckCircle2 className="text-emerald-300 shrink-0" /> Cleanup after digging, grading, or clearing</p>
            </div>
          </div>

          <div className="relative h-[320px] w-full rounded-[1.5rem] overflow-hidden border border-white/10">
            <Image
              src="/images/gallery/excavator.jpg"
              alt="excavation equipment for dirt work and grading in Hot Springs AR"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

            <div className="absolute bottom-4 left-4">
              <span className="rounded-full bg-black/60 px-3 py-1 text-sm text-white backdrop-blur">
                Excavation, grading, and dirt work
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
          Excavation work for Hot Springs and nearby areas.
        </h2>

        <p className="mt-6 text-white/70 leading-relaxed">
          We serve Hot Springs, Benton, Bryant, Malvern, Glenwood, Arkadelphia,
          and surrounding central Arkansas communities with excavation, grading,
          site prep, drainage help, land clearing, cleanup, and practical outdoor
          property work.
        </p>

        <p className="mt-6 text-white/60 leading-relaxed">
          If you are searching for excavation in Hot Springs, AR, dirt work near Benton,
          grading in Bryant, drainage help in Malvern, site prep in Glenwood, or
          property prep around central Arkansas, Onward & Upward Services can help
          get the job moving.
        </p>
      </section>

      <section id="work" className="mx-auto max-w-7xl px-4 py-16">
        <SectionHeading
          eyebrow="Recent Work"
          title="Real Excavation, Cleanup, and Property Work Photos"
          text="See recent excavation, dirt work, cleanup, grading, land clearing, and outdoor projects from the area."
        />

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {siteData.gallery.map((item) => (
            <div key={item.title}>
              <h3 className="mb-3">{item.title}</h3>
              <div className="grid grid-cols-2 gap-2">
                <Image
                  src={item.before}
                  alt={`before ${item.alt} in Hot Springs Arkansas`}
                  width={200}
                  height={150}
                  className="w-full h-[200px] object-cover rounded-lg"
                />

                <Image
                  src={item.after}
                  alt={`after ${item.alt} in Hot Springs Arkansas`}
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
          Honest excavation work with a bigger mission.
        </h2>

        <p className="mt-6 text-white/70 leading-relaxed">
          Onward & Upward Services is built around faith, hard work, and helping
          people move forward. The mission is not just excavation — it is doing
          good work, creating opportunity, and serving the Hot Springs community with integrity.
        </p>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold">
                Get an excavation quote in Hot Springs
              </h2>

              <p className="mt-4 text-white/70">
                Call, text, or send a message for excavation, dirt work, grading,
                drainage help, site prep, land clearing, or property shaping.
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
                  placeholder="Tell us what kind of excavation, dirt work, grading, drainage, site prep, or land clearing you need."
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