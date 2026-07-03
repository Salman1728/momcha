import type { Metadata } from "next";
import { site } from "@/lib/menu";
import { DrinkCup, MatchaBowl } from "@/components/Illustrations";
import {
  BrushEdge,
  CupDoodle,
  DoodleField,
  HeartDoodle,
  LeafDoodle,
  SparkleDoodle,
  WhiskDoodle,
} from "@/components/Doodles";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "MOMcha was born from a simple idea: amazing drinks, good vibes, and great people together in Nairobi.",
};

const values = [
  {
    icon: LeafDoodle,
    title: "Premium Ingredients",
    text: "Carefully sourced for the best quality.",
  },
  {
    icon: WhiskDoodle,
    title: "Handcrafted Drinks",
    text: "Made by hand with passion and care.",
  },
  {
    icon: SparkleDoodle,
    title: "Good Vibes",
    text: "A cosy place with good energy.",
  },
];

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden">
      <DoodleField tone="text-blue/10" />

      <div className="relative mx-auto max-w-6xl px-6 pt-14">
        {/* story */}
        <div className="grid items-center gap-12 md:grid-cols-2">
          <Reveal>
            <h1 className="font-script text-7xl font-bold text-blue">Our Story</h1>
            <div className="mt-6 space-y-4 text-[17px] leading-relaxed text-muted">
              <p>
                MOMcha was born from a simple idea:{" "}
                <span className="font-semibold text-ink">
                  to create a place where amazing drinks, good vibes, and great
                  people come together.
                </span>
              </p>
              <p>
                Every drink we serve is handcrafted with premium ingredients and
                a whole lot of love. From our signature matcha to our delectable
                waffles, everything is made{" "}
                <span className="font-semibold text-ink">to make you smile.</span>
              </p>
              <p>
                Sip by sip, smile by smile, we&apos;re here to make your day a
                little better.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative mx-auto flex max-w-sm items-end justify-center rounded-[2.5rem] bg-blue-tint p-8 shadow-soft">
              <DrinkCup flavor="matcha" className="w-40 -rotate-6 animate-floaty" />
              <DrinkCup flavor="blue" className="-ml-8 w-44 rotate-6 animate-floaty-alt" />
              <HeartDoodle className="absolute right-6 top-6 w-8 text-blue/40 animate-wiggle" aria-hidden />
            </div>
          </Reveal>
        </div>

        {/* values */}
        <div className="mt-20 grid gap-6 sm:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.1}>
              <div className="flex h-full flex-col items-center rounded-[2rem] bg-white p-8 text-center shadow-soft">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-blue-tint text-blue">
                  <v.icon className="w-9" />
                </span>
                <p className="font-display mt-4 text-xl font-semibold text-ink">
                  {v.title}
                </p>
                <p className="mt-2 text-sm text-muted">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* café placeholder */}
        <Reveal className="mt-20">
          <div className="relative grid min-h-[320px] place-items-center overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-blue-soft via-blue-tint to-cream shadow-soft">
            <div className="text-center">
              <MatchaBowl className="mx-auto w-56" />
              <p className="font-display mt-4 text-3xl font-bold text-blue">MOMcha</p>
              <p className="font-script text-2xl text-muted">
                our cosy corner in Nairobi — photo coming soon
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* hours band */}
      <div className="mt-20">
        <BrushEdge className="text-blue" />
        <div className="relative overflow-hidden bg-blue text-white">
          <DoodleField tone="text-white/10" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-6 py-12 md:grid-cols-2">
            <div className="flex items-center gap-5">
              <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-white/15">
                <CupDoodle className="w-9" />
              </span>
              <div>
                <p className="font-display text-xl font-bold">Opening Hours</p>
                <p className="mt-1 text-white/85">{site.hours}</p>
                <p className="font-semibold uppercase tracking-wide text-white">
                  {site.closed}
                </p>
              </div>
            </div>
            <p className="font-script text-center text-5xl font-bold leading-tight md:text-right">
              Thank you for being
              <br />
              part of our journey!
            </p>
          </div>
        </div>
        <BrushEdge flip className="text-blue" />
      </div>
    </div>
  );
}
