"use client";

import { useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import gMatcha from "../../public/photos/g-matcha.png";
import gBlue from "../../public/photos/g-blue.png";
import gPair from "../../public/photos/g-pair.png";
import gWaffle from "../../public/photos/g-waffle.png";
import gWhite from "../../public/photos/g-white.png";
import gCafe from "../../public/photos/g-cafe.png";
import gRed from "../../public/photos/g-red.png";
import gCafe2 from "../../public/photos/g2-1.png";
import gKarak from "../../public/photos/g2-4.png";
import gPink from "../../public/photos/g2-6.png";
import pxWaffle from "../../public/photos/waffle.jpg";
import pxMatchaPour from "../../public/photos/matcha-pour.jpg";
import pxWhisk from "../../public/photos/matcha-whisk.jpg";
import pxStrawberry from "../../public/photos/strawberry.jpg";

type Category = "drinks" | "waffles" | "food" | "cafe";

type Tile = {
  id: string;
  category: Category;
  label: string;
  img: StaticImageData;
  tall?: boolean;
};

const tiles: Tile[] = [
  { id: "matcha", category: "drinks", label: "Matcha Latte", img: gMatcha, tall: true },
  { id: "cafe", category: "cafe", label: "Our Space", img: gCafe, tall: true },
  { id: "waffle-berry", category: "waffles", label: "Berry Waffles", img: pxWaffle },
  { id: "blue", category: "drinks", label: "Blue Dawa", img: gBlue, tall: true },
  { id: "pour", category: "food", label: "Matcha in the Making", img: pxMatchaPour, tall: true },
  { id: "red", category: "drinks", label: "Berry Matcha", img: gRed, tall: true },
  { id: "waffle", category: "waffles", label: "Lotus Waffle", img: gWaffle },
  { id: "pair", category: "drinks", label: "Caramel & Pistachio", img: gPair, tall: true },
  { id: "whisk", category: "food", label: "Ceremonial Matcha", img: pxWhisk },
  { id: "karak", category: "drinks", label: "Iced Karak", img: gKarak },
  { id: "white", category: "drinks", label: "Cookies & Cream", img: gWhite, tall: true },
  { id: "cafe2", category: "cafe", label: "Café Corner", img: gCafe2 },
  { id: "strawberry", category: "drinks", label: "Strawberry Shake", img: pxStrawberry, tall: true },
  { id: "pink", category: "drinks", label: "Strawberry Mojito", img: gPink },
];

const filters: { id: "all" | Category; label: string }[] = [
  { id: "all", label: "All" },
  { id: "drinks", label: "Drinks" },
  { id: "waffles", label: "Waffles" },
  { id: "food", label: "Food" },
  { id: "cafe", label: "Cafe" },
];

export function GalleryGrid() {
  const [active, setActive] = useState<"all" | Category>("all");
  const visible = tiles.filter((t) => active === "all" || t.category === active);

  return (
    <div className="mt-10">
      <div className="no-scrollbar -mx-6 overflow-x-auto px-6 sm:mx-auto sm:w-fit sm:overflow-visible sm:px-0">
        <div className="flex w-max gap-1 rounded-full bg-white p-1.5 shadow-soft">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActive(f.id)}
              className={`shrink-0 rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${
                active === f.id
                  ? "bg-blue text-white shadow-soft"
                  : "text-muted hover:bg-blue-tint hover:text-blue"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 [grid-auto-flow:dense]">
        <AnimatePresence mode="popLayout">
          {visible.map((tile) => (
            <motion.figure
              key={tile.id}
              layout
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className={`photo-card group relative overflow-hidden rounded-3xl shadow-soft transition-shadow hover:shadow-lift ${
                tile.tall ? "row-span-2" : ""
              }`}
            >
              <div className={`relative ${tile.tall ? "h-full min-h-[380px]" : "aspect-[4/3]"}`}>
                <Image
                  src={tile.img}
                  alt={tile.label}
                  fill
                  sizes="(min-width:1024px) 25vw, (min-width:768px) 33vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-ink/70 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
              <figcaption className="font-display absolute inset-x-0 bottom-0 translate-y-3 p-4 text-[15px] font-semibold text-white opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {tile.label}
              </figcaption>
            </motion.figure>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
