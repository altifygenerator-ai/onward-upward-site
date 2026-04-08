import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CalendarDays,
  Camera,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Leaf,
  MapPin,
  Mail,
  PhoneCall,
  Send,
  Sparkles,
  Star,
  Tractor,
  Trees,
  UploadCloud,
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

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1 text-amber-300">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`h-4 w-4 ${i < rating ? "fill-current" : "opacity-25"}`} />
      ))}
    </div>
  );
}

export default function HomePage() {
  const phoneLink = `tel:${siteData.contact.phone.replace(/[^\d+]/g, "")}`;
  const mailLink = `mailto:${siteData.contact.email}`;

  const servicesWithIcons = [
    { ...siteData.services[0], icon: Trees },
    { ...siteData.services[1], icon: Tractor },
    { ...siteData.services[2], icon: UploadCloud },
  ];

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
            <a href="#services">Services</a>
            <a href="#work">Work</a>
            <Link href="/seasonal">Seasonal</Link>
            <a href="#reviews">Reviews</a>
            <a href="#contact">Contact</a>
          </nav>

          <a href={phoneLink} className="bg-emerald-400 text-black px-4 py-2 rounded-full font-semibold">
            Call Now
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-4 py-16 grid md:grid-cols-2 gap-10">
        <div>
          <p className="text-emerald-300">{siteData.hero.eyebrow}</p>
          <h1 className="text-4xl md:text-6xl font-semibold mt-4">
            {siteData.hero.headline}
          </h1>
          <p className="mt-6 text-white/70">{siteData.hero.body}</p>

          <div className="mt-6 flex gap-4">
            <a href="#quote" className="bg-white text-black px-6 py-3 rounded-full font-semibold">
              Request Quote
            </a>
            <Link href="/seasonal" className="border px-6 py-3 rounded-full">
              Seasonal
            </Link>
          </div>
        </div>

        <Image
          src={siteData.hero.image}
          alt="hero"
          width={600}
          height={400}
          className="rounded-xl object-cover"
        />
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-7xl px-4 py-16">
        <SectionHeading
          eyebrow="Services"
          title="What we do"
          text="Clear, simple services with real results."
        />

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {servicesWithIcons.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="bg-white/5 p-6 rounded-xl">
                <Image
  src={service.image}
  alt={service.title}
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

      {/* GALLERY */}
      <section id="work" className="mx-auto max-w-7xl px-4 py-16">
        <SectionHeading
          eyebrow="Work"
          title="Before & After"
          text="See the difference."
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
      </section>

      {/* SEASONAL PREVIEW */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <SectionHeading
          eyebrow="Seasonal"
          title="Featured Products"
          text="What’s available right now."
        />

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {siteData.seasonalItems.map((item) => (
            <div key={item.name} className="bg-white/5 p-6 rounded-xl">
              <Image src={item.image} alt={item.name} width={400} height={200} className="w-full h-[200px] object-cover rounded-lg" />
              <h3 className="mt-4 font-semibold">{item.name}</h3>
              <p className="text-white/70">{item.description}</p>
            </div>
          ))}
        </div>

        <Link href="/seasonal" className="inline-block mt-6 text-emerald-300">
          View full seasonal →
        </Link>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="mx-auto max-w-7xl px-4 py-16">
        <SectionHeading
          eyebrow="Reviews"
          title="What people are saying"
          text="Real feedback from customers."
        />

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {siteData.reviews.map((review, i) => (
            <div key={review.name + i} className="bg-white/5 p-6 rounded-xl">
              <StarRow rating={5} />
              <Image src={review.image} alt="review" width={200} height={200} className="w-full h-[150px] object-cover mt-4 rounded" />
              <p className="mt-4 text-white/70">“{review.quote}”</p>
              <p className="mt-2 font-semibold">{review.name}</p>
            </div>
          ))}
        </div>
      </section>
      <section id="quote" className="mx-auto max-w-7xl px-4 py-16">
  <div className="grid md:grid-cols-2 gap-10">

    {/* LEFT SIDE */}
    <div>
      <h2 className="text-3xl md:text-4xl font-semibold">
        Get a quick quote
      </h2>
      <p className="mt-4 text-white/70">
        Tell us what you need and we’ll get back to you fast. You can also call if you want a quicker answer.
      </p>

      <div className="mt-6">
        <a
          href={`tel:${siteData.contact.phone.replace(/[^\d+]/g, "")}`}
          className="inline-block bg-emerald-400 text-black px-6 py-3 rounded-full font-semibold"
        >
          Call Now: {siteData.contact.phone}
        </a>
      </div>
    </div>

    {/* RIGHT SIDE FORM */}
    <form
      action="https://formspree.io/f/YOUR_FORM_ID"
      method="POST"
      className="bg-white/5 p-6 rounded-xl space-y-4"
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

      <select
        name="service"
        className="w-full p-3 rounded bg-black/30 border border-white/10"
      >
        <option>Service Needed</option>
        <option>Landscaping</option>
        <option>Excavation</option>
        <option>Tree / Debris Removal</option>
        <option>Seasonal / Plants</option>
      </select>

      <textarea
        name="details"
        placeholder="Project details..."
        rows={4}
        className="w-full p-3 rounded bg-black/30 border border-white/10"
      />

      <button
        type="submit"
        className="w-full bg-emerald-400 text-black py-3 rounded-full font-semibold"
      >
        Send Request
      </button>
    </form>
  </div>
</section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-7xl px-4 py-16">
        <SectionHeading
          eyebrow="Contact"
          title="Get in touch"
          text="Call or message anytime."
        />

        <div className="mt-6 space-y-3">
          <a href={phoneLink}>{siteData.contact.phone}</a>
          <br />
          <a href={mailLink}>{siteData.contact.email}</a>
        </div>
      </section>
    </div>
  );
}