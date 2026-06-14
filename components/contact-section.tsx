import { Mail, PhoneCall } from "lucide-react";
import { siteData } from "@/lib/site-data";
import { formatMailLink, formatPhoneLink, formatSmsLink } from "@/lib/utils";

export function ContactSection({ title = "Get a quote in Hot Springs" }: { title?: string }) {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-16 md:py-20">
      <div className="grid gap-10 rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/20 md:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-10">
        <div className="space-y-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300/80">
              Request a quote
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-5xl">{title}</h2>
            <p className="mt-4 leading-relaxed text-white/70">
              Call, text, or send a message for landscaping, excavation, tree cleanup, land clearing, mulch, soil delivery, grading, brush cleanup, or debris hauling.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <a
              href={formatPhoneLink(siteData.contact.phone)}
              className="flex items-center justify-center gap-2 rounded-2xl bg-emerald-400 px-5 py-4 font-bold text-black transition hover:bg-emerald-300"
            >
              <PhoneCall className="h-4 w-4" />
              Call {siteData.contact.phone}
            </a>
            <a
              href={formatMailLink(siteData.contact.email)}
              className="flex items-center justify-center gap-2 rounded-2xl border border-white/15 px-5 py-4 font-semibold text-white transition hover:border-emerald-300/50 hover:text-emerald-300"
            >
              <Mail className="h-4 w-4" />
              Email Us
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {siteData.contacts.map((person) => (
              <div key={person.name} className="rounded-2xl border border-white/10 bg-black/25 p-4">
                <p className="text-xs uppercase tracking-[0.16em] text-white/45">{person.role}</p>
                <p className="mt-1 text-lg font-semibold text-white">{person.name}</p>
                <a href={formatPhoneLink(person.phone)} className="mt-3 block font-semibold text-emerald-300">
                  {person.phone}
                </a>
                <a href={formatSmsLink(person.phone)} className="mt-1 block text-sm text-white/60 hover:text-emerald-300">
                  Text {person.name}
                </a>
              </div>
            ))}
          </div>

          <p className="text-sm leading-relaxed text-white/50">{siteData.contact.serviceArea}</p>
        </div>

        <div className="rounded-[1.5rem] border border-white/10 bg-black/25 p-5 md:p-6">
          <form
            action={formatMailLink(siteData.contact.email)}
            method="POST"
            encType="text/plain"
            className="space-y-4"
          >
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-semibold text-white/70">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="w-full rounded-xl border border-white/10 bg-black/35 p-3 text-white outline-none transition placeholder:text-white/35 focus:border-emerald-300/50"
              />
            </div>
            <div>
              <label htmlFor="contact" className="mb-2 block text-sm font-semibold text-white/70">Phone or email</label>
              <input
                id="contact"
                type="text"
                name="contact"
                placeholder="Best way to reach you"
                required
                className="w-full rounded-xl border border-white/10 bg-black/35 p-3 text-white outline-none transition placeholder:text-white/35 focus:border-emerald-300/50"
              />
            </div>
            <div>
              <label htmlFor="location" className="mb-2 block text-sm font-semibold text-white/70">Location</label>
              <input
                id="location"
                type="text"
                name="location"
                placeholder="Hot Springs, Benton, Bryant, etc."
                className="w-full rounded-xl border border-white/10 bg-black/35 p-3 text-white outline-none transition placeholder:text-white/35 focus:border-emerald-300/50"
              />
            </div>
            <div>
              <label htmlFor="details" className="mb-2 block text-sm font-semibold text-white/70">Project details</label>
              <textarea
                id="details"
                name="details"
                placeholder="Tell us what kind of landscaping, excavation, tree work, mulch, soil, grading, or cleanup you need."
                rows={5}
                className="w-full rounded-xl border border-white/10 bg-black/35 p-3 text-white outline-none transition placeholder:text-white/35 focus:border-emerald-300/50"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-emerald-400 py-3 font-bold text-black transition hover:bg-emerald-300"
            >
              Send Message
            </button>
            <p className="text-center text-xs text-white/45">
              This opens your email app with the message details filled in.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
