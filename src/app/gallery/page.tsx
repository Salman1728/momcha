import type { Metadata } from "next";
import { GalleryGrid } from "@/components/GalleryGrid";
import { DoodleField } from "@/components/Doodles";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/menu";

export const metadata: Metadata = {
  title: "Gallery",
  description: "A peek inside MOMcha — drinks, waffles and café moments.",
};

export default function GalleryPage() {
  return (
    <div className="relative overflow-hidden">
      <DoodleField tone="text-blue/10" />

      <div className="relative mx-auto max-w-6xl px-6 pb-8 pt-32">
        <Reveal>
          <h1 className="font-script text-center text-7xl font-bold text-blue sm:text-8xl">
            Gallery 💙
          </h1>
          <p className="mt-4 text-center text-muted">
            Moments from the café — sips, smiles and everything in between.
          </p>
        </Reveal>

        <GalleryGrid />

        <Reveal className="mt-12 text-center">
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-blue px-8 py-3 font-semibold text-white shadow-lift transition hover:scale-105"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
              <circle cx="12" cy="12" r="4.5" />
              <circle cx="17.6" cy="6.4" r="1.2" fill="currentColor" stroke="none" />
            </svg>
            Follow Us On Instagram
          </a>
        </Reveal>
      </div>
    </div>
  );
}
