import Link from "next/link";
import { site } from "@/lib/menu";
import { HeroCarousel } from "@/components/HeroCarousel";
import { DoodleField, SparkleDoodle } from "@/components/Doodles";
import { Reveal } from "@/components/Reveal";

const socials = [
  {
    label: "Instagram",
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
    label: "TikTok",
    href: site.tiktok,
    icon: (
      <path d="M15 4c.4 2.6 2 4.2 4.5 4.5v3c-1.8 0-3.3-.6-4.5-1.5v5.5a5.5 5.5 0 1 1-5.5-5.5v3a2.5 2.5 0 1 0 2.5 2.5V4z" />
    ),
  },
  {
    label: "Google Maps",
    href: site.directions,
    icon: (
      <>
        <path d="M12 21s-7-6.1-7-11.5a7 7 0 0 1 14 0C19 14.9 12 21 12 21z" />
        <circle cx="12" cy="9.5" r="2.5" />
      </>
    ),
  },
  {
    label: "WhatsApp",
    href: site.whatsapp,
    icon: (
      <>
        <path d="M12 3.5a8.5 8.5 0 0 0-7.3 12.8L3.5 20.5l4.3-1.1A8.5 8.5 0 1 0 12 3.5z" />
        <path d="M9 8.5c-.5 2.5 3.5 6.5 6 6l.5-2-2-1-1 .8c-.8-.4-1.7-1.3-2.1-2.1l.8-1-1-2z" />
      </>
    ),
  },
];

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <DoodleField tone="text-blue/10" />

      <div className="relative mx-auto max-w-6xl px-6 pt-28">
        {/* ============ HERO CAROUSEL ============ */}
        <Reveal>
          <HeroCarousel />
        </Reveal>

        {/* ============ WELCOME ============ */}
        <section className="mx-auto max-w-2xl py-16 text-center sm:py-20">
          <Reveal>
            <p className="font-script text-4xl text-muted">welcome to</p>
            <h1 className="font-display mt-1 text-6xl font-bold text-blue sm:text-7xl">
              M<span className="text-matcha">O</span>Mcha
            </h1>
            <p className="font-script mt-4 text-4xl font-semibold text-ink">
              Sip. Smile. Repeat.
            </p>
            <p className="mt-3 text-muted">
              Delicious drinks made with love, just for you.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-8 inline-flex flex-col items-center gap-1 rounded-3xl bg-white px-8 py-4 shadow-soft">
              <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-blue">
                Opening Hours
              </p>
              <p className="text-[15px] text-ink">{site.hours}</p>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                {site.closed}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Link
                href="/menu"
                className="rounded-full bg-blue px-9 py-3.5 font-semibold text-white shadow-lift transition hover:scale-105"
              >
                View Menu
              </Link>
              <Link
                href="/gallery"
                className="rounded-full border-2 border-blue px-9 py-3.5 font-semibold text-blue transition hover:bg-blue hover:text-white"
              >
                Gallery
              </Link>
            </div>
          </Reveal>

          {/* socials */}
          <Reveal delay={0.3}>
            <div className="mt-12 flex items-center justify-center gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  className="grid h-12 w-12 place-items-center rounded-full bg-white text-blue shadow-soft transition hover:-translate-y-1 hover:bg-blue hover:text-white"
                >
                  <svg viewBox="0 0 24 24" className="h-5.5 w-5.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    {s.icon}
                  </svg>
                </a>
              ))}
            </div>
            <p className="mt-10 inline-flex items-center gap-1.5 text-xs font-medium tracking-wide text-muted">
              <SparkleDoodle className="w-3.5 text-matcha" aria-hidden />
              Powered by <span className="font-semibold text-blue">QuickTap</span>
            </p>
          </Reveal>
        </section>
      </div>
    </div>
  );
}
