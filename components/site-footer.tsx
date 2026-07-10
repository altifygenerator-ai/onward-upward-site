import Image from "next/image";
import Link from "next/link";
import { MapPin, PhoneCall } from "lucide-react";
import { areaPages, servicePages, siteData } from "@/lib/site-data";
import { formatMailLink, formatPhoneLink } from "@/lib/utils";

export function SiteFooter() {
  const serviceLinks = Object.values(servicePages).slice(0, 6);
  const areaLinks = Object.values(areaPages);

  return (
    <footer className="border-t border-white/10 bg-[#070c09]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 text-sm text-white/68 md:grid-cols-[1.25fr_1fr_1fr_0.9fr] md:px-8 md:py-16">
        <div>
          <div className="flex items-center gap-3">
            <span className="relative h-14 w-14 overflow-hidden rounded-xl border border-emerald-300/15 bg-[#101914]">
              <Image src="/images/logo-mark.webp" alt="" fill sizes="56px" className="object-cover" />
            </span>
            <div>
              <p className="font-semibold text-white">{siteData.brand.name}</p>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-emerald-300/55">Hot Springs, Arkansas</p>
            </div>
          </div>
          <p className="mt-5 max-w-sm leading-7 text-white/58">{siteData.brand.tagline}</p>
          <div className="mt-6 space-y-3">
            <a href={formatPhoneLink(siteData.contact.phone)} className="flex items-center gap-2 font-semibold text-emerald-200 hover:text-emerald-100">
              <PhoneCall className="h-4 w-4" />
              {siteData.contact.phone}
            </a>
            <a href={formatMailLink(siteData.contact.email)} className="block break-all text-white/58 hover:text-emerald-200">
              {siteData.contact.email}
            </a>
            <p className="flex items-start gap-2 text-white/48">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              {siteData.contact.address}
            </p>
          </div>
        </div>

        <div>
          <p className="mb-4 font-semibold text-white">Services</p>
          <div className="flex flex-col gap-2.5">
            {serviceLinks.map((service) => (
              <Link key={service.slug} href={`/${service.slug}`} className="transition hover:text-emerald-200">
                {service.navTitle}
              </Link>
            ))}
            <Link href="/seasonal" className="transition hover:text-emerald-200">
              Mulch, Soil & Products
            </Link>
          </div>
        </div>

        <div>
          <p className="mb-4 font-semibold text-white">Areas We Serve</p>
          <div className="flex flex-col gap-2.5">
            {areaLinks.map((area) => (
              <Link key={area.slug} href={`/service-areas/${area.slug}`} className="transition hover:text-emerald-200">
                {area.city}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 font-semibold text-white">Quick Links</p>
          <div className="flex flex-col gap-2.5">
            <Link href="/gallery" className="transition hover:text-emerald-200">Project Gallery</Link>
            <Link href="/seasonal" className="transition hover:text-emerald-200">Seasonal Products</Link>
            <Link href="/#reviews" className="transition hover:text-emerald-200">Reviews</Link>
            <Link href="/#contact" className="transition hover:text-emerald-200">Request Quote</Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/8 px-4 py-6 text-center text-xs text-white/42">
        © {new Date().getFullYear()} {siteData.brand.name}. All rights reserved.
        <div className="mt-2">
          Site by{" "}
          <a
            href="https://hometownwebservicesar.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-white/62 transition hover:text-emerald-200"
          >
            Hometown Web Services
          </a>
        </div>
      </div>
    </footer>
  );
}
