import type { Metadata } from "next";
import Image from "next/image";
import { MenuExplorer } from "@/components/MenuExplorer";
import { CupDoodle, DoodleField, HeartDoodle, WhiskDoodle } from "@/components/Doodles";
import { Reveal } from "@/components/Reveal";

import menuMatcha from "../../../public/photos/menu-matcha.png";
import menuWhisk from "../../../public/photos/menu-whisk.png";

export const metadata: Metadata = {
  title: "Our Menu",
  description:
    "Matcha lattes, specialty coffee, iced drinks, mojitos, waffles and more — the full MOMcha menu.",
};

export default function MenuPage() {
  return (
    <div className="relative overflow-hidden">
      <DoodleField tone="text-blue/10" />

      <div className="relative mx-auto max-w-6xl px-6 pb-10 pt-32">
        <Reveal>
          <div className="relative mx-auto w-fit text-center">
            <WhiskDoodle className="absolute -left-16 top-1 hidden w-11 text-blue/50 animate-floaty sm:block" aria-hidden />
            <h1 className="font-script text-7xl font-bold text-blue sm:text-8xl">
              Our Menu
            </h1>
            <CupDoodle className="absolute -right-16 bottom-1 hidden w-11 text-blue/50 animate-floaty-alt sm:block" aria-hidden />
            <HeartDoodle className="absolute -right-24 -top-3 hidden w-7 text-blue/30 animate-wiggle md:block" aria-hidden />
          </div>
          <p className="mt-4 text-center text-muted">
            Handcrafted with love — prices in Kenyan Shillings.
          </p>
        </Reveal>

        <MenuExplorer />
      </div>

      {/* photos bleeding off the page corners, like the mockup */}
      <Image
        src={menuMatcha}
        alt="Freshly whisked matcha"
        className="pointer-events-none absolute -left-6 bottom-0 hidden w-64 rounded-tr-[2.5rem] shadow-photo lg:block"
        sizes="256px"
      />
      <Image
        src={menuWhisk}
        alt="Golden matcha whisk"
        className="pointer-events-none absolute -right-4 bottom-0 hidden w-44 rounded-tl-[2.5rem] shadow-photo lg:block"
        sizes="176px"
      />
    </div>
  );
}
