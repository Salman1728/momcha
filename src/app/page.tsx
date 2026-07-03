import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/menu";
import { BestSellers } from "@/components/BestSellers";
import {
  BrushEdge,
  DoodleField,
  HeartDoodle,
  LeafDoodle,
  SparkleDoodle,
  WhiskDoodle,
} from "@/components/Doodles";
import { Reveal } from "@/components/Reveal";

import heroCups from "../../public/photos/hero-cups.png";
import cafeInterior from "../../public/photos/cafe-interior.png";

const features = [
  { icon: LeafDoodle, title: "Premium Ingredients", text: "We use only the best quality ingredients." },
  { icon: WhiskDoodle, title: "Handcrafted", text: "Made with love and perfected by hand." },
  { icon: SparkleDoodle, title: "Good Vibes", text: "Great drinks, chill vibes and happy smiles." },
  { icon: HeartDoodle, title: "Made For You", text: "Your happiness is our recipe." },
];

const ticker = ["Matcha", "Coffee", "Iced Drinks", "Mojitos", "Waffles", "Cold Foams", "Good Vibes"];

export default function Home() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-blue text-white">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_35%,rgba(255,255,255,0.14),transparent_70%)]"
        />
        <DoodleField tone="text-white/15" />

        <div className="mx-auto grid max-w-6xl items-center gap-6 px-6 pb-10 pt-32 md:grid-cols-[1.05fr_1fr] md:pb-16 md:pt-36">
          <div className="relative z-10">
            <Reveal>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em]">
                <span className="h-1.5 w-1.5 rounded-full bg-matcha" />
                {site.closed}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="font-script mt-6 text-[5.2rem] font-bold leading-[0.9] sm:text-[6.5rem]">
                Sip.
                <br />
                Smile.
                <br />
                Repeat.
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-sm text-lg font-light text-white/90">
                Delicious drinks made{" "}
                <span className="font-semibold">with love</span>, just for you.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link
                  href="/menu"
                  className="rounded-full bg-white px-8 py-3.5 font-semibold text-blue shadow-lift transition hover:scale-105 hover:shadow-photo"
                >
                  View Menu
                </Link>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border-2 border-white/70 px-8 py-3.5 font-semibold text-white transition hover:bg-white hover:text-blue"
                >
                  Order Now
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="relative z-10">
            <div className="relative mx-auto max-w-[440px]">
              <Image
                src={heroCups}
                alt="MOMcha signature matcha latte and Blue Dawa with whipped cream"
                priority
                sizes="(min-width: 768px) 440px, 85vw"
                className="hero-photo-mask w-full animate-floaty drop-shadow-2xl"
              />
              <SparkleDoodle className="absolute -left-2 top-6 w-10 text-white/80 animate-wiggle" aria-hidden />
              <HeartDoodle className="absolute -right-2 bottom-16 w-8 text-white/60 animate-floaty-alt" aria-hidden />
            </div>
          </Reveal>
        </div>

        <BrushEdge flip className="relative z-10 -mb-px text-cream" />
      </section>

      {/* ================= TICKER ================= */}
      <div className="overflow-hidden border-y border-blue-soft/60 bg-cream py-3">
        <div className="animate-marquee flex w-max items-center gap-8 whitespace-nowrap">
          {[...ticker, ...ticker, ...ticker, ...ticker].map((t, i) => (
            <span key={i} className="flex items-center gap-8">
              <span className="font-display text-sm font-bold uppercase tracking-[0.2em] text-blue">
                {t}
              </span>
              <SparkleDoodle className="w-4 text-matcha" aria-hidden />
            </span>
          ))}
        </div>
      </div>

      {/* ================= BEST SELLERS ================= */}
      <section className="relative mx-auto max-w-6xl px-6 pb-4 pt-16">
        <Reveal>
          <h2 className="font-display text-center text-[2.6rem] font-bold leading-tight text-blue">
            ✨ Our Best Sellers ✨
          </h2>
          <p className="font-script mt-1 text-center text-3xl text-muted">
            the ones everyone keeps coming back for
          </p>
        </Reveal>

        <div className="mt-12">
          <BestSellers />
        </div>

        <Reveal className="mt-10 text-center">
          <Link
            href="/menu"
            className="inline-block rounded-full border-2 border-blue px-8 py-3 font-semibold text-blue transition hover:bg-blue hover:text-white"
          >
            See the full menu →
          </Link>
        </Reveal>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="mt-16 bg-blue-tint/70 py-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.08}>
              <div className="flex items-start gap-4 lg:flex-col lg:items-center lg:text-center">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white text-blue shadow-soft">
                  <f.icon className="w-8" />
                </span>
                <div>
                  <p className="font-display text-lg font-semibold text-ink">{f.title}</p>
                  <p className="mt-1 text-sm text-muted">{f.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= VISIT US ================= */}
      <section className="mx-auto max-w-6xl px-6 pt-20">
        <Reveal>
          <div className="photo-card group relative overflow-hidden rounded-[2.5rem] shadow-photo">
            <Image
              src={cafeInterior}
              alt="Inside the MOMcha café — blue chairs and the MOMcha sign"
              sizes="(min-width: 1152px) 1104px, 92vw"
              className="h-[380px] w-full object-cover sm:h-[420px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-ink/85 via-blue-ink/25 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex flex-col items-start gap-4 p-8 text-white sm:flex-row sm:items-end sm:justify-between sm:p-10">
              <div>
                <p className="font-script text-5xl font-bold">Come say hi!</p>
                <p className="mt-2 max-w-md text-white/85">
                  {site.address} · {site.hours}
                </p>
              </div>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 rounded-full bg-white px-7 py-3 font-semibold text-blue shadow-lift transition hover:scale-105"
              >
                Order on WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
