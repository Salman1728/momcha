"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { menu, type MenuSection } from "@/lib/menu";
import {
  CupDoodle,
  LeafDoodle,
  SparkleDoodle,
  SteamDoodle,
  SwirlDoodle,
  WhiskDoodle,
} from "@/components/Doodles";

const icons: Record<MenuSection["icon"], typeof CupDoodle> = {
  matcha: LeafDoodle,
  coffee: CupDoodle,
  iced: SparkleDoodle,
  warm: SteamDoodle,
  waffle: WhiskDoodle,
  mojito: SwirlDoodle,
  extra: SparkleDoodle,
  foam: SwirlDoodle,
};

export function MenuExplorer({
  sections: allSections = menu,
}: {
  sections?: MenuSection[];
}) {
  const [active, setActive] = useState<string>("all");
  const sections =
    active === "all"
      ? allSections
      : allSections.filter((s) => s.id === active);

  return (
    <div className="mt-10">
      {/* filter chips in a pill tray, like the mockup */}
      <div className="no-scrollbar -mx-6 overflow-x-auto px-6 sm:mx-auto sm:w-fit sm:overflow-visible sm:px-0">
        <div className="flex w-max gap-1 rounded-full bg-white p-1.5 shadow-soft sm:w-auto sm:flex-wrap sm:justify-center">
          {[{ id: "all", title: "All" }, ...allSections].map((s) => (
            <button
              key={s.id}
              onClick={() => setActive(s.id)}
              className={`shrink-0 rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${
                active === s.id
                  ? "bg-blue text-white shadow-soft"
                  : "text-muted hover:bg-blue-tint hover:text-blue"
              }`}
            >
              {s.title}
            </button>
          ))}
        </div>
      </div>

      {/* sections */}
      <motion.div layout className="mt-8 columns-1 gap-6 md:columns-2 lg:columns-3">
        <AnimatePresence mode="popLayout">
          {sections.map((section) => {
            const Icon = icons[section.icon];
            return (
              <motion.section
                key={section.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="mb-6 break-inside-avoid rounded-[2rem] bg-white p-7 shadow-soft"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-blue-tint text-blue">
                    <Icon className="w-6" />
                  </span>
                  <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-blue">
                    {section.title}
                  </h2>
                </div>

                {section.title === "Mojitos" && (
                  <p className="mt-2 text-xs font-medium text-muted">
                    Regular / Large
                  </p>
                )}

                {section.groups.map((group, gi) => (
                  <div key={group.label ?? gi} className="mt-5">
                    {group.label && (
                      <p className="font-script text-2xl font-semibold text-matcha-deep">
                        {group.label}
                      </p>
                    )}
                    <ul className="mt-2 space-y-2.5">
                      {group.items.map((item) => (
                        <li key={item.name} className="flex items-baseline gap-2 text-[15px]">
                          <span className="font-medium text-ink">{item.name}</span>
                          <span className="flex-1 border-b border-dotted border-blue-soft" />
                          <span className="font-display font-bold text-blue">
                            {item.price}
                            {item.priceLarge ? ` / ${item.priceLarge}` : ""}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </motion.section>
            );
          })}
        </AnimatePresence>
      </motion.div>

      <p className="mt-6 text-center text-sm text-muted">
        Add any extra or cold foam to your drink.
      </p>
    </div>
  );
}
