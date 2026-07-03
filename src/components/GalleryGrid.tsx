"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DrinkCup, Waffle, MatchaBowl, type Flavor } from "@/components/Illustrations";
import { CupDoodle, HeartDoodle, SparkleDoodle } from "@/components/Doodles";

type Category = "drinks" | "waffles" | "food" | "cafe" | "customers";

type Tile = {
  id: string;
  category: Category;
  label: string;
  kind: "drink" | "waffle" | "bowl" | "sign" | "cafe" | "customers";
  flavor?: Flavor;
  bg: string;
};

const tiles: Tile[] = [
  { id: "matcha-latte", category: "drinks", label: "Matcha Latte", kind: "drink", flavor: "matcha", bg: "from-[#eaf5d8] to-[#cde6a8]" },
  { id: "blue-dawa", category: "drinks", label: "Blue Dawa", kind: "drink", flavor: "blue", bg: "from-[#e3edff] to-[#c2d6ff]" },
  { id: "lotus-waffle", category: "waffles", label: "Lotus Waffle", kind: "waffle", bg: "from-[#fdeed8] to-[#f7d9ac]" },
  { id: "spanish-latte", category: "drinks", label: "Iced Spanish Latte", kind: "drink", flavor: "latte", bg: "from-[#f6ead9] to-[#e8cfa8]" },
  { id: "berry-matcha", category: "drinks", label: "Berry Matcha", kind: "drink", flavor: "berry", bg: "from-[#ffe9f1] to-[#ffd0e0]" },
  { id: "matcha-bowl", category: "food", label: "Fresh Matcha", kind: "bowl", bg: "from-[#eaf5d8] to-[#d5ecb4]" },
  { id: "neon-sign", category: "cafe", label: "Sip. Smile. Repeat.", kind: "sign", bg: "from-[#0e3bb8] to-[#1652e0]" },
  { id: "our-corner", category: "cafe", label: "Our Cosy Corner", kind: "cafe", bg: "from-[#e3edff] to-[#d6e4ff]" },
  { id: "choc-waffle", category: "waffles", label: "Chocolate Waffle", kind: "waffle", bg: "from-[#f3e2d0] to-[#e2c39c]" },
  { id: "happy-you", category: "customers", label: "Happy Customers", kind: "customers", bg: "from-[#fff3e0] to-[#ffe3bd]" },
  { id: "mojito", category: "drinks", label: "Berry Mojito", kind: "drink", flavor: "berry", bg: "from-[#ffe9f1] to-[#ffc9db]" },
  { id: "cafe-vibes", category: "cafe", label: "Café Vibes", kind: "cafe", bg: "from-[#eaf1ff] to-[#d6e4ff]" },
];

const filters: { id: "all" | Category; label: string }[] = [
  { id: "all", label: "All" },
  { id: "drinks", label: "Drinks" },
  { id: "waffles", label: "Waffles" },
  { id: "food", label: "Food" },
  { id: "cafe", label: "Cafe" },
  { id: "customers", label: "Customers" },
];

function TileArt({ tile }: { tile: Tile }) {
  switch (tile.kind) {
    case "drink":
      return <DrinkCup flavor={tile.flavor} className="h-44 drop-shadow-lg" />;
    case "waffle":
      return <Waffle className="h-44 drop-shadow-lg" />;
    case "bowl":
      return <MatchaBowl className="h-32" />;
    case "sign":
      return (
        <p className="font-script px-4 text-center text-4xl font-bold leading-tight text-white [text-shadow:0_0_18px_rgba(255,255,255,0.7)]">
          Sip.
          <br />
          Smile.
          <br />
          Repeat.
        </p>
      );
    case "cafe":
      return <CupDoodle className="w-24 text-blue/50" />;
    case "customers":
      return <HeartDoodle className="w-24 text-blue/50" />;
  }
}

export function GalleryGrid() {
  const [active, setActive] = useState<"all" | Category>("all");
  const visible = tiles.filter((t) => active === "all" || t.category === active);

  return (
    <div className="mt-10">
      <div className="no-scrollbar -mx-6 flex gap-2 overflow-x-auto px-6 pb-2 sm:flex-wrap sm:justify-center">
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => setActive(f.id)}
            className={`shrink-0 rounded-full px-5 py-2 text-sm font-semibold transition ${
              active === f.id
                ? "bg-blue text-white shadow-soft"
                : "bg-white text-muted shadow-soft hover:text-blue"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        <AnimatePresence mode="popLayout">
          {visible.map((tile) => (
            <motion.figure
              key={tile.id}
              layout
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className={`group relative grid aspect-square place-items-center overflow-hidden rounded-3xl bg-gradient-to-br ${tile.bg} shadow-soft`}
            >
              <TileArt tile={tile} />
              <SparkleDoodle
                className="absolute right-3 top-3 w-5 text-white/70 opacity-0 transition group-hover:opacity-100"
                aria-hidden
              />
              <figcaption
                className={`absolute inset-x-0 bottom-0 px-4 pb-3 pt-8 text-sm font-semibold ${
                  tile.kind === "sign" ? "text-white/80" : "text-ink/80"
                } bg-gradient-to-t from-white/70 to-transparent ${
                  tile.kind === "sign" ? "from-blue-ink/60" : ""
                }`}
              >
                {tile.label}
              </figcaption>
            </motion.figure>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
