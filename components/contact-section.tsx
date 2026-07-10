import Image from "next/image";
import { Mail, MessageSquareText, PhoneCall } from "lucide-react";
import { siteData } from "@/lib/site-data";
import { formatMailLink, formatPhoneLink, formatSmsLink } from "@/lib/utils";

export function ContactSection({ title = "Get a quote in Hot Springs" }: { title?: string }) {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
      <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#101914] shadow-[0_35px_100px_rgba(0,0,0,0.28)]">
        <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
          <div className="relative p-6 md:p-10 lg:p-12">
            <div className="absolute inset-0 opacity-[0.18]">
              <Image
                src="/images/projects/tractor-work.webp"
                alt=""
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#0b120e]/85 via-[#0b120e]/94 to-[#0b120e]" />
            </div>

            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300/75">
                Request a quote
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-white md:text-5xl">{title}</h2>
              <p className="mt-5 max-w-xl leading-8 text-white/68">
                Call, text, or send a message with your location and a quick description of the work. Photos of the area are helpful when you have them.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <a
                  href={formatPhoneLink(siteData.contact.phone)}
                  className="flex items-center justify-center gap-2 rounded-2xl bg-emerald-300 px-5 py-4 font-extrabold text-[#06110b] transition hover:bg-emerald-200"
                >
                  <PhoneCall className="h-4 w-4" />
                  Call {siteData.contact.phone}
                </a>
                <a
                  href={formatSmsLink(siteData.contact.phone)}
                  className="flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-black/15 px-5 py-4 font-semibold text-white transition hover:border-emerald-300/45 hover:text-emerald-200"
                >
                  <MessageSquareText className="h-4 w-4" />
                  Send a Text
                </a>
              </div>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {siteData.contacts.map((person) => (
                  <div key={person.name} className="rounded-2xl border border-white/10 bg-black/25 p-4 backdrop-blur-sm">
                    <p className="text-xs font-bold uppercase tracking-[0.15em] text-white/42">{person.role}</p>
                    <p className="mt-2 text-lg font-semibold text-white">{person.name}</p>
                    <a href={formatPhoneLink(person.phone)} className="mt-3 block font-semibold text-emerald-200 hover:text-emerald-100">
                      {person.phone}
                    </a>
                  </div>
                ))}
              </div>

              <p className="mt-7 text-sm leading-7 text-white/50">{siteData.contact.serviceArea}</p>
            </div>
          </div>

          <div className="border-t border-white/8 bg-white/[0.025] p-6 md:p-10 lg:border-l lg:border-t-0 lg:p-12">
            <div className="mb-7 flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-emerald-300/65">Project details</p>
                <p className="mt-2 text-sm leading-6 text-white/52">Share enough for us to understand the job and the best way to reach you.</p>
              </div>
              <span className="hidden h-11 w-11 place-items-center rounded-full border border-white/10 bg-black/20 sm:grid">
                <Mail className="h-5 w-5 text-emerald-200" />
              </span>
            </div>

            <form
              action={formatMailLink(siteData.contact.email)}
              method="POST"
              encType="text/plain"
              className="space-y-4"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-semibold text-white/70">Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                    className="w-full rounded-xl border border-white/10 bg-black/28 p-3.5 text-white outline-none transition placeholder:text-white/30 focus:border-emerald-300/50"
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
                    className="w-full rounded-xl border border-white/10 bg-black/28 p-3.5 text-white outline-none transition placeholder:text-white/30 focus:border-emerald-300/50"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="location" className="mb-2 block text-sm font-semibold text-white/70">Project location</label>
                <input
                  id="location"
                  type="text"
                  name="location"
                  placeholder="Hot Springs, Benton, Bryant, etc."
                  className="w-full rounded-xl border border-white/10 bg-black/28 p-3.5 text-white outline-none transition placeholder:text-white/30 focus:border-emerald-300/50"
                />
              </div>
              <div>
                <label htmlFor="details" className="mb-2 block text-sm font-semibold text-white/70">What do you need done?</label>
                <textarea
                  id="details"
                  name="details"
                  placeholder="Tell us about the landscaping, dirt work, tree cleanup, mulch, soil, grading, or hauling you need."
                  rows={6}
                  className="w-full resize-y rounded-xl border border-white/10 bg-black/28 p-3.5 text-white outline-none transition placeholder:text-white/30 focus:border-emerald-300/50"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-emerald-300 py-3.5 font-extrabold text-[#06110b] transition hover:bg-emerald-200"
              >
                Send Message
              </button>
              <p className="text-center text-xs text-white/38">
                This opens your email app with the message details filled in.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
