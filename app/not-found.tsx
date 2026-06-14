import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0d1210] text-white">
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 py-24 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300/80">Page not found</p>
        <h1 className="mt-4 text-4xl font-semibold md:text-6xl">This page is not available.</h1>
        <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-white/70">
          Head back to the home page or request a quote for landscaping, excavation, tree cleanup, soil, mulch, grading, or property cleanup around Hot Springs.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="rounded-full bg-white px-6 py-3 font-bold text-black">Back Home</Link>
          <Link href="/#contact" className="rounded-full border border-white/15 px-6 py-3 font-semibold text-white">Request Quote</Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
