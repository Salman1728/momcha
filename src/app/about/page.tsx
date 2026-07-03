import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/lib/menu";
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

import aboutCups from "../../../public/photos/about-cups.png";
import cafeInterior from "../../../public/photos/cafe-interior.png";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "MOMcha was born from a simple idea: amazing drinks, good vibes, and great people together in Nairobi.",
};

const values = [
  { icon: LeafDoodle, title: "Premium Ingredients", text: "Carefully sourced for the best quality." },
  { icon: WhiskDoodle, title: "Handcrafted Drinks", text: "Made by hand with passion and care." },
  { icon: SparkleDoodle, title: "Good Vibes", text: "A cosy place with good energy." },
];

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden">
      <DoodleField tone="text-blue/10" />

      <div className="relative mx-auto max-w-6xl px-6 pt-32">
        {/* story */}
        <div className="grid items-center gap-12 md:grid-cols-2">
          <Reveal>
            <h1 className="font-script text-7xl font-bold text-blue sm:text-8xl">
              Our Story
            </h1>
            <div className="mt-7 space-y-4 text-[17px] leading-relaxed text-muted">
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
              <p className="font-script text-3xl text-blue">
                Sip by sip, smile by smile — we&apos;re here to make your day a
                little better.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative mx-auto max-w-sm">
              <div className="photo-card overflow-hidden rounded-[2.5rem] shadow-photo">
                <Image
                  src={aboutCups}
                  alt="MOMcha matcha latte and Blue Dawa side by side"
                  sizes="(min-width: 768px) 384px, 88vw"
                  className="w-full object-cover"
                />
              </div>
              <span className="font-script absolute -bottom-5 left-1/2 -translate-x-1/2 rotate-[-2deg] whitespace-nowrap rounded-full bg-white px-6 py-2 text-2xl font-semibold text-blue shadow-lift">
                made with love 💙
              </span>
              <HeartDoodle className="absolute -right-8 -top-6 w-10 text-blue/40 animate-wiggle" aria-hidden />
            </div>
          </Reveal>
        </div>

        {/* values with dividers, like the mockup */}
        <Reveal className="mt-24">
          <div className="grid divide-y divide-blue-soft rounded-[2.5rem] bg-white py-4 shadow-soft sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {values.map((v) => (
              <div key={v.title} className="flex flex-col items-center px-8 py-8 text-center">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-blue-tint text-blue">
                  <v.icon className="w-9" />
                </span>
                <p className="font-display mt-4 text-xl font-semibold text-ink">{v.title}</p>
                <p className="mt-2 text-sm text-muted">{v.text}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* café interior */}
        <Reveal className="mt-16">
          <div className="photo-card overflow-hidden rounded-[2.5rem] shadow-photo">
            <Image
              src={cafeInterior}
              alt="Inside the MOMcha café"
              sizes="(min-width: 1152px) 1104px, 92vw"
              className="h-[300px] w-full object-cover sm:h-[360px]"
            />
          </div>
        </Reveal>
      </div>

      {/* hours band */}
      <div className="mt-20">
        <BrushEdge className="text-blue" />
        <div className="relative overflow-hidden bg-blue text-white">
          <DoodleField tone="text-white/10" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-6 py-14 md:grid-cols-2">
            <div className="flex items-center gap-5">
              <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-white/15">
                <CupDoodle className="w-9" />
              </span>
              <div>
                <p className="font-display text-xl font-bold">Opening Hours</p>
                <p className="mt-1 text-white/85">{site.hours}</p>
                <p className="font-semibold uppercase tracking-wide">{site.closed}</p>
              </div>
            </div>
            <p className="font-script text-center text-5xl font-bold leading-tight md:text-right">
              Thank you for being
              <br />
              part of our journey!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
