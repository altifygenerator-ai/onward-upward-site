import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0b110e] text-white">
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 py-24 text-center md:px-8 md:py-32">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300/75">Page not found</p>
        <h1 className="mt-5 text-4xl font-semibold md:text-6xl">This page is not available.</h1>
        <p className="mx-auto mt-6 max-w-2xl leading-8 text-white/68">
          Head back to the home page or request a quote for landscaping, excavation, tree cleanup, soil, mulch, grading, or property cleanup around Hot Springs.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-quote-primary inline-flex items-center gap-2">
            Back Home <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/#contact" className="btn-outline">Request Quote</Link>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
