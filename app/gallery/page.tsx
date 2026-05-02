import Image from "next/image";
import Link from "next/link";
import { siteData } from "@/lib/site-data";

export const metadata = {
  title: "Landscaping, Tree Removal & Cleanup Gallery in Hot Springs, AR | Onward & Upward",
  description:
    "See real landscaping, tree removal, land clearing, excavation, mulch, soil, and cleanup work from Hot Springs, Benton, Bryant, Malvern, Glenwood, Arkadelphia, and surrounding Arkansas areas.",
};

export default function GalleryPage() {
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

    <a
      href={`tel:${siteData.contact.phone.replace(/[^\d+]/g, "")}`}
      className="bg-emerald-400 text-black px-4 py-2 rounded-full font-semibold"
    >
      Call Now
    </a>

  </div>
</header>

      <section className="mx-auto max-w-7xl px-4 py-16">
        <p className="text-emerald-300 text-sm uppercase tracking-[0.2em]">
          Our Work
        </p>

        <h1 className="mt-3 text-4xl md:text-5xl font-semibold">
          Landscaping, Tree Removal & Cleanup Gallery
        </h1>

        <p className="mt-4 text-white/70 max-w-xl">
          Real project photos, before and after results, landscaping work,
          tree removal, land clearing, brush cleanup, debris hauling, mulch,
          soil, materials, and equipment from around Hot Springs, Benton,
          Bryant, Malvern, Glenwood, Arkadelphia, and surrounding Arkansas communities.
        </p>
      </section>

      {/* BEFORE & AFTER */}
      <section className="mx-auto max-w-7xl px-4 pb-16">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Before & After Landscaping and Cleanup Work
        </h2>

        <div className="grid md:grid-cols-3 gap-10 mt-8">
          {siteData.gallery.map((item, i) => (
            <div key={i} className="space-y-4">
              <h3 className="text-lg font-semibold">{item.title}</h3>

              <div className="grid grid-cols-2 gap-3">
                <div className="relative group overflow-hidden rounded-xl border border-white/10">
                  <Image
                    src={item.before}
                    alt={`Before ${item.alt} in Hot Springs Arkansas`}
                    width={300}
                    height={200}
                    className="w-full h-[200px] object-cover group-hover:scale-105 transition duration-500"
                  />

                  <span className="absolute top-2 left-2 text-xs bg-black/70 px-2 py-1 rounded">
                    Before
                  </span>
                </div>

                <div className="relative group overflow-hidden rounded-xl border border-white/10">
                  <Image
                    src={item.after}
                    alt={`After ${item.alt} in Hot Springs Arkansas`}
                    width={300}
                    height={200}
                    className="w-full h-[200px] object-cover group-hover:scale-105 transition duration-500"
                  />

                  <span className="absolute top-2 left-2 text-xs bg-emerald-400 text-black px-2 py-1 rounded">
                    After
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FULL GALLERY */}
      <section className="mx-auto max-w-7xl px-4 pb-20">
        <h2 className="text-2xl md:text-3xl font-semibold">
          More Landscaping, Tree Work, and Property Cleanup Photos
        </h2>

        <p className="mt-3 text-white/70 max-w-xl">
          A closer look at recent landscaping, tree removal, land clearing,
          brush cleanup, mulch, soil, materials, and outdoor property work
          across Hot Springs and nearby Arkansas areas.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {siteData.galleryImages.map((image, i) => (
            <div
              key={i}
              className="group overflow-hidden rounded-xl border border-white/10 bg-white/5"
            >
              <Image
                src={image.src}
                alt={`Onward & Upward landscaping tree removal and cleanup project photo ${i + 1} in Hot Springs AR`}
                width={500}
                height={350}
                className="w-full h-[260px] object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-20 text-center">
        <h2 className="text-3xl font-semibold">Like what you see?</h2>

        <p className="mt-4 text-white/70">
          Let’s talk about your landscaping, tree removal, land clearing,
          cleanup, mulch, soil, or outdoor property project and get you a quote.
        </p>

        <a
          href="/#contact"
          className="inline-block mt-6 bg-emerald-400 text-black px-6 py-3 rounded-full font-semibold"
        >
          Request a Quote
        </a>
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