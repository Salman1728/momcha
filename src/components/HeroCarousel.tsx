"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import heroCups from "../../public/photos/hero-cups.png";
import aboutCups from "../../public/photos/about-cups.png";
import cafeInterior from "../../public/photos/cafe-interior.png";
import matchaPour from "../../public/photos/matcha-pour.jpg";

type Slide = { img: StaticImageData; alt: string };

const slides: Slide[] = [
  { img: heroCups, alt: "MOMcha signature matcha latte and Blue Dawa" },
  { img: aboutCups, alt: "MOMcha cups side by side on a wooden table" },
  { img: cafeInterior, alt: "Inside the MOMcha café" },
  { img: matchaPour, alt: "Milk poured into an iced matcha latte" },
];

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 4500);
    return () => clearInterval(t);
  }, [paused]);

  const go = (i: number) => setIndex((i + slides.length) % slides.length);

  return (
    <div
      className="group relative overflow-hidden rounded-[2.5rem] bg-blue shadow-photo"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative h-[340px] sm:h-[440px] md:h-[520px]">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={slides[index].img}
              alt={slides[index].alt}
              fill
              priority={index === 0}
              sizes="(min-width: 1152px) 1104px, 92vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-blue-ink/30 to-transparent" />
      </div>

      {/* arrows */}
      {([-1, 1] as const).map((dir) => (
        <button
          key={dir}
          aria-label={dir === 1 ? "Next photo" : "Previous photo"}
          onClick={() => go(index + dir)}
          className={`absolute top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/85 text-blue opacity-0 shadow-soft backdrop-blur transition hover:bg-white group-hover:opacity-100 ${
            dir === 1 ? "right-4" : "left-4"
          }`}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            {dir === 1 ? <path d="m9 5 7 7-7 7" /> : <path d="m15 5-7 7 7 7" />}
          </svg>
        </button>
      ))}

      {/* dots */}
      <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
        {slides.map((s, i) => (
          <button
            key={s.alt}
            aria-label={`Go to photo ${i + 1}`}
            onClick={() => go(i)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === index ? "w-8 bg-white" : "w-2.5 bg-white/55 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
