import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MenuExplorer } from "@/components/MenuExplorer";
import { getMenuSections } from "@/lib/menu-source";
import { CupDoodle, DoodleField, HeartDoodle, WhiskDoodle } from "@/components/Doodles";
import { Reveal } from "@/components/Reveal";

import logo from "../../../public/photos/logo.png";
import menuMatcha from "../../../public/photos/menu-matcha.png";
import menuWhisk from "../../../public/photos/menu-whisk.png";

export const metadata: Metadata = {
  title: "Our Menu",
  description:
    "Matcha lattes, specialty coffee, iced drinks, mojitos, waffles and more — the full MOMcha menu.",
};

export const revalidate = 300;

export default async function MenuPage() {
  const sections = await getMenuSections();
  return (
    <div className="relative overflow-hidden">
      <DoodleField tone="text-blue/10" />

      <div className="relative mx-auto max-w-6xl px-6 pb-10 pt-14">
        <Reveal>
          <Link href="/" aria-label="Back to home" className="mx-auto mb-8 block w-fit transition hover:scale-105">
            <Image src={logo} alt="MOMcha logo" sizes="72px" className="h-[72px] w-[72px] rounded-full shadow-soft" />
          </Link>
        </Reveal>
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
            Handcrafted with love, just for you.
          </p>
        </Reveal>

        <MenuExplorer sections={sections} />
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
