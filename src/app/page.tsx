import Link from "next/link";
import { bestSellers, site, CURRENCY } from "@/lib/menu";
import { DrinkCup, Waffle, type Flavor } from "@/components/Illustrations";
import {
  BrushEdge,
  DoodleField,
  HeartDoodle,
  LeafDoodle,
  SparkleDoodle,
  WhiskDoodle,
  CupDoodle,
} from "@/components/Doodles";
import { Reveal, HoverLift } from "@/components/Reveal";

const features = [
  {
    icon: LeafDoodle,
    title: "Premium Ingredients",
    text: "We use only the best quality ingredients.",
  },
  {
    icon: WhiskDoodle,
    title: "Handcrafted",
    text: "Made with love and perfected by hand.",
  },
  {
    icon: SparkleDoodle,
    title: "Good Vibes",
    text: "Great drinks, chill vibes and happy smiles.",
  },
  {
    icon: HeartDoodle,
    title: "Made For You",
    text: "Your happiness is our recipe.",
  },
];

export default function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative -mt-[76px] overflow-hidden bg-blue pt-[76px] text-white">
        <DoodleField tone="text-white/15" />

        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 pb-8 pt-16 md:grid-cols-2 md:pb-16 md:pt-20">
          <div className="relative z-10">
            <Reveal>
              <p className="inline-block rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em]">
                {site.closed}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="font-script mt-6 text-7xl font-bold leading-[0.95] sm:text-8xl">
                Sip.
                <br />
                Smile.
                <br />
                Repeat.
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-sm text-lg text-white/85">
                Delicious drinks made with love, just for you.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/menu"
                  className="rounded-full bg-white px-7 py-3 font-semibold text-blue shadow-lift transition hover:scale-105"
                >
                  View Menu
                </Link>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border-2 border-white/70 px-7 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  Order Now
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="relative z-10">
            <div className="relative mx-auto flex max-w-md items-end justify-center">
              <DrinkCup
                flavor="matcha"
                className="w-44 -rotate-6 drop-shadow-2xl animate-floaty sm:w-56"
              />
              <DrinkCup
                flavor="blue"
                className="-ml-10 w-48 rotate-6 drop-shadow-2xl animate-floaty-alt sm:w-60"
              />
              <SparkleDoodle className="absolute -top-6 left-8 w-10 text-white/70 animate-wiggle" aria-hidden />
            </div>
          </Reveal>
        </div>

        <BrushEdge flip className="text-cream" />
      </section>

      {/* ============ BEST SELLERS ============ */}
      <section className="relative mx-auto max-w-6xl px-6 py-16">
        <Reveal>
          <h2 className="font-display text-center text-4xl font-bold text-blue">
            ✨ Our Best Sellers ✨
          </h2>
          <p className="font-script mt-2 text-center text-2xl text-muted">
            the drinks everyone keeps coming back for
          </p>
        </Reveal>

        <div className="no-scrollbar mt-10 flex snap-x gap-6 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-4">
          {bestSellers.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.08} className="min-w-[240px] snap-center sm:min-w-0">
              <HoverLift className="h-full">
                <div className="flex h-full flex-col items-center rounded-[2rem] bg-white p-6 shadow-soft">
                  <div className="grid h-48 w-full place-items-center rounded-3xl bg-blue-tint">
                    {item.flavor === "waffle" ? (
                      <Waffle className="h-40" />
                    ) : (
                      <DrinkCup flavor={item.flavor as Flavor} className="h-44" />
                    )}
                  </div>
                  <p className="font-display mt-4 text-xl font-semibold text-ink">
                    {item.name}
                  </p>
                  <p className="mt-1 rounded-full bg-blue px-4 py-1 text-sm font-bold text-white">
                    {CURRENCY} {item.price}
                  </p>
                </div>
              </HoverLift>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 text-center">
          <Link
            href="/menu"
            className="inline-block rounded-full border-2 border-blue px-7 py-3 font-semibold text-blue transition hover:bg-blue hover:text-white"
          >
            See the full menu →
          </Link>
        </Reveal>
      </section>

      {/* ============ FEATURES ============ */}
      <section className="mx-auto max-w-6xl px-6 pb-8">
        <div className="glass grid gap-6 rounded-[2.5rem] p-8 shadow-soft sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.08}>
              <div className="flex flex-col items-center text-center">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-blue-tint text-blue">
                  <f.icon className="w-9" />
                </span>
                <p className="font-display mt-3 text-lg font-semibold text-ink">
                  {f.title}
                </p>
                <p className="mt-1 text-sm text-muted">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="mx-auto max-w-6xl px-6 pt-12">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-blue px-8 py-14 text-center text-white shadow-lift">
            <DoodleField tone="text-white/10" />
            <CupDoodle className="mx-auto w-14 text-white/80 animate-wiggle" aria-hidden />
            <h2 className="font-script relative mt-4 text-5xl font-bold">
              Craving something delicious?
            </h2>
            <p className="relative mt-3 text-white/85">
              {site.hours} · {site.closed}
            </p>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="relative mt-8 inline-block rounded-full bg-white px-8 py-3 font-semibold text-blue shadow-soft transition hover:scale-105"
            >
              Order on WhatsApp
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
