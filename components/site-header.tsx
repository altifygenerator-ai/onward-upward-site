import Image from "next/image";
import Link from "next/link";
import { Menu, PhoneCall } from "lucide-react";
import { mainNav, siteData } from "@/lib/site-data";
import { formatPhoneLink } from "@/lib/utils";

export function SiteHeader() {
  const phoneLink = formatPhoneLink(siteData.contact.phone);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0d1210]/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3" aria-label="Onward & Upward Services home">
          <Image
            src={siteData.brand.logo}
            alt="Onward & Upward Services logo"
            width={54}
            height={54}
            priority
            className="h-12 w-12 rounded-full object-contain"
          />
          <div className="min-w-0">
            <span className="block truncate text-sm font-semibold text-white sm:text-base">
              {siteData.brand.name}
            </span>
            <span className="hidden text-xs text-white/50 sm:block">Hot Springs, AR</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-white/70 lg:flex" aria-label="Main navigation">
          {mainNav.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-emerald-300">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={phoneLink}
            className="hidden rounded-full bg-emerald-400 px-4 py-2 text-sm font-bold text-black shadow-lg shadow-emerald-500/10 transition hover:bg-emerald-300 sm:inline-flex"
          >
            Call Now
          </a>

          <details className="group relative lg:hidden">
            <summary className="flex cursor-pointer list-none items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white marker:hidden [&::-webkit-details-marker]:hidden">
              <Menu className="h-4 w-4" />
              Menu
            </summary>
            <div className="absolute right-0 mt-3 w-72 overflow-hidden rounded-2xl border border-white/10 bg-[#111815] p-3 shadow-2xl shadow-black/40">
              <div className="grid gap-1">
                {mainNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-xl px-4 py-3 text-sm font-medium text-white/75 transition hover:bg-white/5 hover:text-emerald-300"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <a
                href={phoneLink}
                className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-emerald-400 px-4 py-3 text-sm font-bold text-black"
              >
                <PhoneCall className="h-4 w-4" />
                {siteData.contact.phone}
              </a>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
