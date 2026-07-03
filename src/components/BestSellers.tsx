"use client";

import Image, { type StaticImageData } from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";
import { CURRENCY } from "@/lib/menu";

import cupMatcha from "../../public/photos/cup-matcha.png";
import cupBlue from "../../public/photos/cup-blue.png";
import waffle from "../../public/photos/g-waffle.png";
import icedLatte from "../../public/photos/iced-latte.jpg";

type Item = {
  name: string;
  price: number;
  tag: string;
  img: StaticImageData;
};

const items: Item[] = [
  { name: "Matcha Latte", price: 650, tag: "signature", img: cupMatcha },
  { name: "Blue Dawa", price: 400, tag: "fan favourite", img: cupBlue },
  { name: "Lotus Waffle", price: 650, tag: "sweet tooth", img: waffle },
  { name: "Iced Spanish Latte", price: 500, tag: "smooth & creamy", img: icedLatte },
];

export function BestSellers() {
  const rail = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    rail.current?.scrollBy({ left: dir * 300, behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* rail controls */}
      <div className="absolute -top-16 right-0 hidden gap-2 sm:flex lg:hidden">
        <ArrowButton dir={-1} onClick={() => scrollBy(-1)} />
        <ArrowButton dir={1} onClick={() => scrollBy(1)} />
      </div>

      <div
        ref={rail}
        className="no-scrollbar -mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-4 lg:mx-0 lg:grid lg:grid-cols-4 lg:overflow-visible lg:px-0"
      >
        {items.map((item, i) => (
          <motion.article
            key={item.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8 }}
            className="photo-card group w-[248px] shrink-0 snap-center overflow-hidden rounded-[2rem] bg-white shadow-soft transition-shadow hover:shadow-lift lg:w-auto"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={item.img}
                alt={item.name}
                fill
                sizes="(min-width:1024px) 25vw, 260px"
                className="object-cover"
              />
              <span className="font-script absolute left-4 top-4 rounded-full bg-white/90 px-3 py-0.5 text-lg font-semibold text-blue shadow-soft">
                {item.tag}
              </span>
            </div>
            <div className="flex items-center justify-between px-5 py-4">
              <p className="font-display text-lg font-semibold text-ink">
                {item.name}
              </p>
              <p className="font-display shrink-0 rounded-full bg-blue-tint px-3 py-1 text-sm font-bold text-blue">
                {CURRENCY} {item.price}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

function ArrowButton({ dir, onClick }: { dir: 1 | -1; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label={dir === 1 ? "Scroll right" : "Scroll left"}
      className="grid h-11 w-11 place-items-center rounded-full bg-white text-blue shadow-soft transition hover:bg-blue hover:text-white"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        {dir === 1 ? <path d="m9 5 7 7-7 7" /> : <path d="m15 5-7 7 7 7" />}
      </svg>
    </button>
  );
}
