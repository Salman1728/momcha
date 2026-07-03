import { site } from "@/lib/menu";
import { BrushEdge } from "@/components/Doodles";

export function Footer() {
  return (
    <footer className="mt-24">
      <BrushEdge className="text-blue" />
      <div className="bg-blue text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-6 py-12 text-center">
          <div className="flex items-center gap-8">
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white transition hover:scale-110 hover:text-blue-soft">
              <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href={site.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-white transition hover:scale-110 hover:text-blue-soft">
              <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 4c.4 2.6 2 4.2 4.5 4.5v3c-1.8 0-3.3-.6-4.5-1.5v5.5a5.5 5.5 0 1 1-5.5-5.5v3a2.5 2.5 0 1 0 2.5 2.5V4z" />
              </svg>
            </a>
            <a href={site.directions} target="_blank" rel="noopener noreferrer" aria-label="Google Maps" className="text-white transition hover:scale-110 hover:text-blue-soft">
              <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21s-7-6.1-7-11.5a7 7 0 0 1 14 0C19 14.9 12 21 12 21z" />
                <circle cx="12" cy="9.5" r="2.5" />
              </svg>
            </a>
          </div>
          <p className="text-[15px] text-white/90">
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
          <p className="text-sm text-white/70">
            © {new Date().getFullYear()} MOMcha. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
