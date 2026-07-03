import Link from "next/link";
import { site } from "@/lib/menu";
import { BrushEdge, CupDoodle, HeartDoodle } from "@/components/Doodles";

export function Footer() {
  return (
    <footer className="mt-24">
      <BrushEdge className="text-blue" />
      <div className="relative overflow-hidden bg-blue text-white">
        <CupDoodle className="pointer-events-none absolute -left-4 bottom-4 w-24 text-white/10" aria-hidden />
        <HeartDoodle className="pointer-events-none absolute right-8 top-8 w-14 text-white/10" aria-hidden />

        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-3xl font-bold">MOMcha</p>
            <p className="font-script mt-2 text-2xl text-white/90">
              Sip. Smile. Repeat.
            </p>
            <p className="mt-3 max-w-xs text-sm text-white/70">
              Delicious drinks made with love, just for you — in the heart of
              Nairobi.
            </p>
          </div>

          <div>
            <p className="font-display text-lg font-semibold">Explore</p>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              {[
                ["Menu", "/menu"],
                ["About Us", "/about"],
                ["Gallery", "/gallery"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="transition hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-lg font-semibold">Visit Us</p>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li>{site.address}</li>
              <li>{site.hours}</li>
              <li className="font-semibold text-white">{site.closed}</li>
            </ul>
          </div>

          <div>
            <p className="font-display text-lg font-semibold">Say Hello</p>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li>
                <a href={site.phoneHref} className="transition hover:text-white">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="transition hover:text-white">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
                  Instagram {site.handle}
                </a>
              </li>
              <li>
                <a href={site.tiktok} target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
                  TikTok {site.handle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 border-t border-white/15 px-6 py-8 text-center">
          <div className="flex items-center gap-7">
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white transition hover:scale-110 hover:text-blue-soft">
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href={site.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-white transition hover:scale-110 hover:text-blue-soft">
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 4c.4 2.6 2 4.2 4.5 4.5v3c-1.8 0-3.3-.6-4.5-1.5v5.5a5.5 5.5 0 1 1-5.5-5.5v3a2.5 2.5 0 1 0 2.5 2.5V4z" />
              </svg>
            </a>
            <a href={site.directions} target="_blank" rel="noopener noreferrer" aria-label="Google Maps" className="text-white transition hover:scale-110 hover:text-blue-soft">
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21s-7-6.1-7-11.5a7 7 0 0 1 14 0C19 14.9 12 21 12 21z" />
                <circle cx="12" cy="9.5" r="2.5" />
              </svg>
            </a>
          </div>
          <p className="text-sm text-white/85">
            Powered by{" "}
            <a
              href="https://www.quicktap.design/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white underline underline-offset-4 transition hover:text-blue-soft"
            >
              QuickTap
            </a>
          </p>
          <p className="text-xs text-white/60">
            © {new Date().getFullYear()} MOMcha. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
