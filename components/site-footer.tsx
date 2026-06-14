import Link from "next/link";
import { areaPages, servicePages, siteData } from "@/lib/site-data";
import { formatPhoneLink, formatMailLink } from "@/lib/utils";

export function SiteFooter() {
  const serviceLinks = Object.values(servicePages).slice(0, 6);
  const areaLinks = Object.values(areaPages);

  return (
    <footer className="border-t border-white/10 bg-[#0b0f0d]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 text-sm text-white/70 md:grid-cols-4">
        <div className="md:col-span-1">
          <p className="font-semibold text-white">{siteData.brand.name}</p>
          <p className="mt-3 leading-relaxed text-white/60">{siteData.brand.tagline}</p>
          <div className="mt-5 space-y-2">
            <a href={formatPhoneLink(siteData.contact.phone)} className="block font-semibold text-emerald-300 hover:text-emerald-200">
              {siteData.contact.phone}
            </a>
            <a href={formatMailLink(siteData.contact.email)} className="block text-white/60 hover:text-emerald-300">
              {siteData.contact.email}
            </a>
          </div>
        </div>

        <div>
          <p className="mb-3 font-semibold text-white">Services</p>
          <div className="flex flex-col gap-2">
            {serviceLinks.map((service) => (
              <Link key={service.slug} href={`/${service.slug}`} className="hover:text-emerald-300">
                {service.navTitle} Hot Springs AR
              </Link>
            ))}
            <Link href="/seasonal" className="hover:text-emerald-300">
              Mulch, Soil & Products
            </Link>
          </div>
        </div>

        <div>
          <p className="mb-3 font-semibold text-white">Areas We Serve</p>
          <div className="flex flex-col gap-2">
            {areaLinks.map((area) => (
              <Link key={area.slug} href={`/service-areas/${area.slug}`} className="hover:text-emerald-300">
                {area.city}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-3 font-semibold text-white">Quick Links</p>
          <div className="flex flex-col gap-2">
            <Link href="/gallery" className="hover:text-emerald-300">Project Gallery</Link>
            <Link href="/seasonal" className="hover:text-emerald-300">Seasonal Products</Link>
            <Link href="/#reviews" className="hover:text-emerald-300">Reviews</Link>
            <Link href="/#contact" className="hover:text-emerald-300">Request Quote</Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} {siteData.brand.name}. All rights reserved.
        <div className="mt-2">
          Site by{" "}
          <a
            href="https://hometownwebservicesar.cc"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-white/70 transition hover:text-emerald-300"
          >
            Hometown Web Services AR
          </a>
        </div>
      </div>
    </footer>
  );
}
