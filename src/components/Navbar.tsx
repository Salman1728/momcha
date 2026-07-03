"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site } from "@/lib/menu";

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

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-6">
      <nav className="glass-blue mx-auto flex max-w-6xl items-center justify-between rounded-full bg-blue px-5 py-3 shadow-lift sm:px-7">
        <Link
          href="/"
          className="font-display text-2xl font-bold tracking-wide text-white"
          onClick={() => setOpen(false)}
        >
          MOMcha
        </Link>

        <ul className="hidden items-center gap-6 md:flex">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`relative text-sm font-medium text-white/85 transition hover:text-white ${
                    active
                      ? "text-white after:absolute after:-bottom-1.5 after:left-1/2 after:h-[3px] after:w-5 after:-translate-x-1/2 after:rounded-full after:bg-white"
                      : ""
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-white px-5 py-2 text-sm font-semibold text-blue shadow-soft transition hover:scale-105 hover:bg-blue-tint md:block"
          >
            Order Now
          </a>
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full text-white md:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-3xl bg-blue p-4 shadow-lift md:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-2xl px-4 py-3 font-medium text-white/90 transition hover:bg-white/10 ${
                    pathname === l.href ? "bg-white/15 text-white" : ""
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
                className="mt-1 block rounded-2xl bg-white px-4 py-3 text-center font-semibold text-blue"
              >
                Order Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
