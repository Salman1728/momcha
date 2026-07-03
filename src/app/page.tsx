import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/menu";
import { DoodleField } from "@/components/Doodles";
import { Reveal } from "@/components/Reveal";

import logo from "../../public/photos/logo.png";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <DoodleField tone="text-blue/15" />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 pb-20 pt-32 text-center sm:pt-36">
        {/* logo */}
        <Reveal>
          <Image
            src={logo}
            alt="MOMcha logo — Est. 2025"
            priority
            sizes="176px"
            className="h-40 w-40 rounded-full shadow-lift sm:h-44 sm:w-44"
          />
        </Reveal>

        {/* welcome */}
        <Reveal delay={0.1}>
          <h1 className="font-display mt-10 text-5xl font-bold text-blue sm:text-6xl">
            Welcome to M<span className="text-matcha">O</span>Mcha
          </h1>
          <p className="font-script mt-5 text-4xl text-ink">
            delicious drinks made with love, just for you
          </p>
        </Reveal>

        {/* hours */}
        <Reveal delay={0.2} className="mt-12 w-full">
          <div className="grid grid-cols-2 border-y border-blue-soft py-7">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
                Open Hour
              </p>
              <p className="font-display mt-2 text-3xl font-bold text-ink">
                11:00 AM
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
                Close Hour
              </p>
              <p className="font-display mt-2 text-3xl font-bold text-ink">
                11:00 PM
              </p>
            </div>
          </div>
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
            Tuesday – Sunday · {site.closed}
          </p>
        </Reveal>

        {/* buttons */}
        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/menu"
              className="rounded-xl bg-blue px-10 py-4 font-semibold text-white shadow-lift transition hover:scale-105"
            >
              View Menu
            </Link>
            <Link
              href="/gallery"
              className="rounded-xl border-2 border-blue px-10 py-4 font-semibold text-blue transition hover:bg-blue hover:text-white"
            >
              View Gallery
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
