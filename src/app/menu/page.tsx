import type { Metadata } from "next";
import { MenuExplorer } from "@/components/MenuExplorer";
import { DoodleField } from "@/components/Doodles";
import { Reveal } from "@/components/Reveal";
import { MatchaBowl } from "@/components/Illustrations";

export const metadata: Metadata = {
  title: "Our Menu",
  description:
    "Matcha lattes, specialty coffee, iced drinks, mojitos, waffles and more — the full MOMcha menu.",
};

export default function MenuPage() {
  return (
    <div className="relative overflow-hidden">
      <DoodleField tone="text-blue/10" />

      <div className="relative mx-auto max-w-6xl px-6 pb-8 pt-14">
        <Reveal>
          <h1 className="font-script text-center text-7xl font-bold text-blue">
            Our Menu
          </h1>
          <p className="mt-3 text-center text-muted">
            Handcrafted with love — prices in Kenyan Shillings.
          </p>
        </Reveal>

        <MenuExplorer />

        <Reveal className="mt-16 flex justify-center">
          <MatchaBowl className="w-52 opacity-90" />
        </Reveal>
      </div>
    </div>
  );
}
