"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { site } from "@/lib/menu";

import logo from "../../public/photos/logo.png";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About Us" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6">
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 transition-all duration-300 sm:px-7 ${
          scrolled
            ? "glass-blue py-2.5 shadow-lift"
            : "bg-blue py-3.5 shadow-soft"
        }`}
      >
        <Link
          href="/"
          className="flex items-center gap-2.5 transition hover:scale-105"
        >
          <Image
            src={logo}
            alt=""
            sizes="36px"
            className="h-9 w-9 rounded-full ring-2 ring-white/40"
          />
          <span className="font-display text-2xl font-bold tracking-wide text-white">
            M<span className="text-blue-soft">O</span>Mcha
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <li key={l.href} className="relative">
                <Link
                  href={l.href}
                  className={`relative z-10 block rounded-full px-4 py-2 text-sm font-medium transition ${
                    active ? "text-blue" : "text-white/85 hover:text-white"
                  }`}
                >
                  {l.label}
                </Link>
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    className="absolute inset-0 rounded-full bg-white shadow-soft"
                  />
                )}
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full border-2 border-white/80 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white hover:text-blue md:block"
          >
            Order Now
          </a>
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full text-white transition hover:bg-white/10 md:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mx-auto mt-2 max-w-6xl rounded-[2rem] bg-blue p-4 shadow-lift md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={`block rounded-2xl px-4 py-3 font-medium transition ${
                      pathname === l.href
                        ? "bg-white text-blue"
                        : "text-white/90 hover:bg-white/10"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block rounded-2xl border-2 border-white/80 px-4 py-3 text-center font-semibold text-white"
                >
                  Order Now
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
