import Link from "next/link";
import Image from "next/image";
import { formatPhoneLink, formatMailLink, formatSmsLink } from "@/lib/utils";
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

export const metadata = {
  title: "Landscaping, Excavation & Tree Removal in Hot Springs, AR | Onward & Upward",
  description:
    "Landscaping, excavation, tree removal, land clearing, mulch, soil delivery, grading, brush cleanup, and debris hauling in Hot Springs, Benton, Bryant, Malvern, Glenwood, Arkadelphia, and surrounding Arkansas areas.",
};

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

      
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0d1210]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
          <Link href="/" className="flex items-center gap-3">
            <Image src={siteData.brand.logo} alt="Onward & Upward Services logo" width={60} height={60} />
            <span className="font-semibold">{siteData.brand.name}</span>
          </Link>

          <nav className="hidden md:flex gap-6 text-sm text-white/70">
            <a href="#services">Services</a>
            <a href="#work">Work</a>
            <Link href="/seasonal">Products</Link>
            <a href="#reviews">Reviews</a>
            <a href="#contact">Contact</a>
            <Link href="/gallery">Gallery</Link>
          </nav>

          <a href={phoneLink} className="bg-emerald-400 text-black px-4 py-2 rounded-full font-semibold">
            Call Now
          </a>
        </div>
      </header>

     
      <section className="mx-auto max-w-7xl px-4 py-16 grid md:grid-cols-2 gap-10">
        <div>
          <p className="text-emerald-300">{siteData.hero.eyebrow}</p>
          <h1 className="text-4xl md:text-6xl font-semibold mt-4">
            Landscaping, Excavation & Tree Removal in Hot Springs, AR
          </h1>
          <p className="mt-6 text-white/70">
            Onward & Upward Services provides landscaping, excavation, tree removal,
            land clearing, grading, brush cleanup, mulch, soil delivery, and debris hauling
            for properties in Hot Springs, Benton, Bryant, Malvern, Glenwood, Arkadelphia,
            and surrounding Arkansas areas.
          </p>

          <div className="mt-6 flex gap-4">
            <a href="/#contact" className="bg-white text-black px-6 py-3 rounded-full font-semibold">
              Request Quote
            </a>
            <Link href="/seasonal" className="border px-6 py-3 rounded-full">
              Products
            </Link>
          </div>
        </div>

      <div className="relative h-[550px] w-full rounded-xl overflow-hidden">
  <Image
    src={siteData.hero.image}
    alt="landscaping excavation and tree removal work in Hot Springs Arkansas"
    fill
    className="object-cover"
  />
</div>
</section>

      
<section id="services" className="mx-auto max-w-7xl px-4 py-16">
  <SectionHeading
    eyebrow="Services"
    title="Landscaping, excavation, tree work, and cleanup"
    text="Clear, practical outdoor services for Hot Springs and nearby areas — from mulch and soil to grading, land clearing, brush cleanup, and debris hauling."
  />

  <div className="grid md:grid-cols-3 gap-6 mt-10">
    {servicesWithIcons.map((service) => {
      const Icon = service.icon;

      return (
        <div key={service.title} className="bg-white/5 p-6 rounded-xl">
          <Image
            src={service.image}
            alt={service.alt}
            width={400}
            height={300}
            className="w-full h-[200px] object-cover rounded-lg"
          />

          <Icon className="mt-4 text-emerald-300" />

          <h3 className="mt-4 text-xl font-semibold">
            {service.title}
          </h3>

          <p className="text-white/70 mt-2">
            {service.text}
          </p>

          {service.href && (
            <Link
              href={service.href}
              className="inline-block mt-4 text-sm font-semibold text-emerald-300 hover:text-emerald-200 transition"
            >
              Learn more →
            </Link>
          )}
        </div>
      );
    })}
  </div>
</section>

<section className="mx-auto max-w-7xl px-4 py-16">
  <div className="grid gap-10 md:grid-cols-2 items-center">

   
    <div>
      <p className="text-sm font-semibold tracking-[0.22em] uppercase text-emerald-300/80">
        Soil & Materials
      </p>

      <h2 className="mt-2 text-3xl md:text-4xl font-semibold text-white tracking-tight">
        Supersoil, garden soil, mulch, and landscape materials.
      </h2>

      <p className="mt-4 text-white/70 leading-relaxed">
        We offer quality soil blends, compost, mulch, and landscaping materials for everything
        from small garden projects to full landscape work. Available for pickup or delivery
        in Hot Springs and surrounding Arkansas areas depending on your needs.
      </p>

      <div className="mt-6 space-y-3 text-white/70">
        <p>• Supersoil blends starting around $40–$65 per yard</p>
        <p>• Supersoil, compost, mulch, and garden soil available</p>
        <p>• Pickup or delivery options around Hot Springs and nearby areas</p>
      </div>

      <div className="mt-6 flex gap-4 flex-wrap">
        <a
          href="/seasonal"
          className="bg-emerald-400 text-black px-6 py-3 rounded-full font-semibold"
        >
          View Current Availability
        </a>

        <a
          href="/#contact"
          className="border border-white/20 px-6 py-3 rounded-full"
        >
          Ask About Soil
        </a>
      </div>
    </div>


    <div className="relative h-[320px] w-full rounded-[1.5rem] overflow-hidden border border-white/10">
      <Image
        src="/images/gallery/soil6.jpg"
        alt="supersoil garden soil and mulch materials in Hot Springs AR"
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

      <div className="absolute bottom-4 left-4">
        <span className="rounded-full bg-black/60 px-3 py-1 text-sm text-white backdrop-blur">
          Call for more info
        </span>
      </div>
    </div>

  </div>
</section>

  
      <section id="work" className="mx-auto max-w-7xl px-4 py-16">
        <SectionHeading
          eyebrow="Work"
          title="Before & After Landscaping and Cleanup Work"
          text="See the difference from real landscaping, tree work, land clearing, and property cleanup projects."
        />

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {siteData.gallery.map((item) => (
            <div key={item.title}>
              <h3 className="mb-3">{item.title}</h3>
              <div className="grid grid-cols-2 gap-2">
                <Image src={item.before} alt={`before ${item.alt} in Hot Springs Arkansas`} width={200} height={150} className="w-full h-[200px] object-cover rounded-lg" />
                <Image src={item.after} alt={`after ${item.alt} in Hot Springs Arkansas`} width={200} height={150} className="w-full h-[200px] object-cover rounded-lg" />
              </div>
            </div>
          ))}
        </div>
      </section>

     
      <section className="mx-auto max-w-7xl px-4 py-16">
        <SectionHeading
          eyebrow="Seasonal"
          title="Featured Mulch, Soil, Plants, and Products"
          text="Current landscaping materials, plants, soil, mulch, and seasonal products available now."
        />

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {siteData.seasonalItems.map((item) => (
            <div key={item.name} className="bg-white/5 p-6 rounded-xl">
              <Image src={item.image} alt={`${item.name} available in Hot Springs AR`} width={400} height={200} className="w-full h-[200px] object-cover rounded-lg" />
              <h3 className="mt-4 font-semibold">{item.name}</h3>
              <p className="text-white/70">{item.description}</p>
            </div>
          ))}
        </div>

        <Link href="/seasonal" className="inline-block mt-6 text-emerald-300">
          View full seasonal →
        </Link>
      </section>
      <section className="mx-auto max-w-5xl px-4 py-16 text-center">
  <h2 className="text-2xl md:text-3xl font-semibold">
    Want to see more local landscaping and cleanup work?
  </h2>

  <p className="mt-4 text-white/70">
    Check out our full gallery for more landscaping projects, tree work, land clearing,
    materials, and recent jobs around Hot Springs and surrounding Arkansas areas.
  </p>

  <Link
    href="/gallery"
    className="inline-block mt-6 bg-emerald-400 text-black px-6 py-3 rounded-full font-semibold"
  >
    View Full Gallery
  </Link>
</section>
<section className="mx-auto max-w-5xl px-4 py-16 text-center">
  <p className="text-sm uppercase tracking-[0.2em] text-emerald-300/80">
    What we stand for
  </p>

  <h2 className="mt-3 text-3xl md:text-4xl font-semibold">
    Built on faith, honest work, and serving the Hot Springs community.
  </h2>

  <p className="mt-6 text-white/70 leading-relaxed">
   The mission of Onward & Upward Services is to uplift and strengthen our community through honest work, quality landscaping, excavation, cleanup, and products that bring life, growth, and transformation. We are called to serve with faith, excellence, and compassion—helping build a better community one yard at a time.
  </p>

  <p className="mt-6 text-white/60 leading-relaxed">
    The vision of Onward & Upward Services is to be a driving force for growth, restoration, and community impact—bringing beauty from the ground up and hope to the people we serve. We believe in moving forward with purpose, rising higher with integrity, and making every landscaping, excavation, and cleanup project a reflection of hard work, heart, and faith.
  </p>
</section>
     <section id="reviews" className="mx-auto max-w-7xl px-4 py-16">
  <h2 className="text-3xl md:text-4xl font-semibold text-center">
    What Our Landscaping Customers Say
  </h2>

  <p className="mt-4 text-center text-white/70">
    Real feedback from people we've worked with in Hot Springs and surrounding areas.
  </p>

  <div className="mt-10 grid gap-6 md:grid-cols-3">
    {siteData.reviews.map((review, i) => (
      <div
        key={i}
        className="bg-white/5 border border-white/10 rounded-2xl p-6"
      >
        {/* IMAGE */}
        <img
          src={review.image}
          alt={`${review.name} landscaping review in Hot Springs AR`}
          className="w-full h-40 object-cover rounded-lg mb-4"
        />

        {/* TEXT */}
        <p className="text-white/80">“{review.quote}”</p>

        {/* NAME + SOURCE */}
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
    
    {/* LEFT */}
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl md:text-4xl font-semibold">
          Get a quote in Hot Springs
        </h2>

        <p className="mt-4 text-white/70">
          Call, text, or send a message for landscaping, excavation, tree removal,
          land clearing, mulch, soil delivery, grading, brush cleanup, or debris hauling.
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
          <div
            key={person.name}
            className="bg-white/5 p-4 rounded-xl border border-white/10"
          >
            <p className="text-sm text-white/50">{person.role}</p>
            <p className="text-lg font-semibold">{person.name}</p>

            <div className="mt-3 space-y-2">
              <a
                href={formatPhoneLink(person.phone)}
                className="block text-emerald-300 font-medium"
              >
                📞 {person.phone}
              </a>

              <a
                href={formatSmsLink(person.phone)}
                className="block text-white/70 text-sm"
              >
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

    {/* RIGHT */}
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
          placeholder="What kind of landscaping, excavation, tree removal, mulch, soil, grading, or cleanup work do you need?"
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