import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu, PhoneCall } from "lucide-react";
import { mainNav, siteData } from "@/lib/site-data";
import { formatPhoneLink } from "@/lib/utils";

export function SiteHeader() {
  const phoneLink = formatPhoneLink(siteData.contact.phone);

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-[#09100c]/90 shadow-lg shadow-black/10 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3" aria-label="Onward & Upward Services home">
          <span className="relative grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-xl border border-emerald-300/15 bg-[#101914] shadow-lg shadow-black/20">
            <Image
              src="/images/logo-mark.webp"
              alt=""
              width={48}
              height={48}
              priority
              className="h-full w-full object-cover"
            />
          </span>
          <span className="min-w-0">
            <span className="block truncate font-semibold text-white sm:text-base">
              {siteData.brand.name}
            </span>
            <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-300/60 sm:text-[11px]">
              Outdoor property services
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 text-sm font-semibold text-white/66 lg:flex" aria-label="Main navigation">
          {mainNav.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-full px-1 py-2 transition hover:text-emerald-200">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={phoneLink}
            className="hidden items-center gap-2 rounded-full border border-white/12 px-4 py-2.5 text-sm font-bold text-white/82 transition hover:border-emerald-300/40 hover:text-emerald-200 xl:inline-flex"
          >
            <PhoneCall className="h-4 w-4" />
            {siteData.contact.phone}
          </a>
          <Link href="/#contact" className="hidden items-center gap-2 rounded-full bg-emerald-300 px-4 py-2.5 text-sm font-extrabold text-[#06110b] shadow-lg shadow-emerald-950/20 transition hover:bg-emerald-200 sm:inline-flex">
            Get a Quote <ArrowRight className="h-4 w-4" />
          </Link>

          <details className="group relative lg:hidden">
            <summary className="flex cursor-pointer list-none items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-sm font-semibold text-white marker:hidden transition hover:border-emerald-300/35 [&::-webkit-details-marker]:hidden">
              <Menu className="h-4 w-4" />
              Menu
            </summary>
            <div className="absolute right-0 mt-3 w-[min(19rem,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-white/10 bg-[#101914] p-3 shadow-2xl shadow-black/50">
              <div className="grid gap-1">
                {mainNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-xl px-4 py-3 text-sm font-semibold text-white/72 transition hover:bg-white/5 hover:text-emerald-200"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <a
                href={phoneLink}
                className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-emerald-300 px-4 py-3 text-sm font-extrabold text-[#06110b]"
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
