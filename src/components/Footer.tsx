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

        <div className="border-t border-white/15 py-5 text-center text-xs text-white/60">
          © {new Date().getFullYear()} MOMcha. Made with love in Nairobi.
        </div>
      </div>
    </footer>
  );
}
