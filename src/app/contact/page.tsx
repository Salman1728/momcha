import type { Metadata } from "next";
import { site } from "@/lib/menu";
import { ContactForm } from "@/components/ContactForm";
import { CupDoodle, DoodleField, HeartDoodle, SteamDoodle } from "@/components/Doodles";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with MOMcha — visit us in Nairobi, call, or send us a message.",
};

const socials = [
  {
    label: site.phone,
    href: site.phoneHref,
    icon: (
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
    ),
  },
  {
    label: site.email,
    href: `mailto:${site.email}`,
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="3" />
        <path d="m3 8 9 6 9-6" />
      </>
    ),
  },
  {
    label: `Instagram ${site.handle}`,
    href: site.instagram,
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    label: `TikTok ${site.handle}`,
    href: site.tiktok,
    icon: (
      <path d="M15 4c.4 2.6 2 4.2 4.5 4.5v3c-1.8 0-3.3-.6-4.5-1.5v5.5a5.5 5.5 0 1 1-5.5-5.5v3a2.5 2.5 0 1 0 2.5 2.5V4z" />
    ),
  },
];

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden">
      <DoodleField tone="text-blue/10" />

      <div className="relative mx-auto max-w-6xl px-6 pb-8 pt-32">
        <Reveal>
          <h1 className="font-script text-center text-7xl font-bold text-blue sm:text-8xl">
            Get In Touch
          </h1>
          <p className="mx-auto mt-4 max-w-md text-center text-muted">
            We&apos;d love to hear from you! Whether it&apos;s a question,
            feedback or just a friendly hello.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          {/* left column: details */}
          <div className="space-y-6">
            <Reveal>
              <div className="rounded-[2rem] bg-white p-7 shadow-soft">
                <p className="font-display text-xl font-bold text-ink">Say Hello</p>
                <ul className="mt-4 space-y-3">
                  {socials.map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target={s.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 text-[15px] font-medium text-muted transition hover:text-blue"
                      >
                        <span className="grid h-10 w-10 place-items-center rounded-full bg-blue-tint text-blue transition group-hover:scale-110">
                          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                            {s.icon}
                          </svg>
                        </span>
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="map-grid relative overflow-hidden rounded-[2rem] bg-blue-tint shadow-soft">
                {/* stylised roads */}
                <svg viewBox="0 0 400 240" className="h-56 w-full" aria-hidden>
                  <g stroke="#ffffff" strokeLinecap="round" fill="none">
                    <path d="M-10 170 C 90 150, 150 190, 250 160 S 390 120, 420 140" strokeWidth="22" />
                    <path d="M120 -10 C 130 60, 100 140, 150 250" strokeWidth="16" />
                    <path d="M300 -10 C 280 80, 330 160, 290 250" strokeWidth="12" />
                  </g>
                  <g stroke="#cfe1ff" strokeWidth="3" strokeDasharray="8 10" fill="none">
                    <path d="M-10 170 C 90 150, 150 190, 250 160 S 390 120, 420 140" />
                  </g>
                  {/* pin */}
                  <g className="animate-floaty" style={{ transformOrigin: "200px 100px" }}>
                    <path
                      d="M200 60a26 26 0 0 1 26 26c0 19-26 46-26 46s-26-27-26-46a26 26 0 0 1 26-26z"
                      fill="#0161dd"
                      stroke="#fff"
                      strokeWidth="4"
                    />
                    <circle cx="200" cy="86" r="9" fill="#fff" />
                  </g>
                </svg>
                <div className="flex flex-wrap items-center justify-between gap-3 p-6 pt-2">
                  <div>
                    <p className="font-display font-bold text-ink">Find Us</p>
                    <p className="text-sm text-muted">{site.address}</p>
                  </div>
                  <a
                    href={site.directions}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-blue px-6 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:scale-105"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="relative overflow-hidden rounded-[2rem] bg-blue p-7 text-white shadow-lift">
                <SteamDoodle className="absolute right-6 top-5 w-10 text-white/30 animate-wiggle" aria-hidden />
                <CupDoodle className="absolute -bottom-3 -right-3 w-20 text-white/10" aria-hidden />
                <p className="font-display text-xl font-bold">Opening Hours</p>
                <p className="mt-2 text-white/85">{site.hours}</p>
                <p className="mt-1 font-semibold uppercase tracking-wide">
                  {site.closed}
                </p>
              </div>
            </Reveal>
          </div>

          {/* right column: form */}
          <Reveal delay={0.15}>
            <div className="glass relative h-full rounded-[2rem] p-7 shadow-soft sm:p-9">
              <HeartDoodle className="absolute right-6 top-6 w-7 text-blue/30 animate-wiggle" aria-hidden />
              <p className="font-display text-2xl font-bold text-ink">
                Send Us a Message
              </p>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
