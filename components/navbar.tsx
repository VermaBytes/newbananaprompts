"use client";

import { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/blogs", label: "Blogs" },
  { href: "/#popular-tools", label: "Tools" },
  { href: "/#categories", label: "Categories" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="site-header fixed inset-x-0 top-0 z-50 border-b backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="min-w-0 flex items-center gap-3">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#0f766e] text-sm font-bold text-white shadow-lg shadow-[#0f766e]/20">
            NB
          </span>
            <span className="min-w-0">
            <span className="theme-text-primary block truncate font-[family-name:var(--font-heading)] text-lg font-bold">
              {SITE_NAME}
            </span>
            <span className="theme-text-muted hidden text-xs uppercase tracking-[0.24em] sm:block">{SITE_TAGLINE}</span>
            </span>
          </Link>
          <div className="flex items-center gap-2">
            <nav aria-label="Primary" className="hidden items-center gap-1 sm:flex sm:gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="theme-nav-link theme-text-secondary rounded-md px-4 py-2 text-sm font-semibold"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <ThemeToggle />
            <button
              type="button"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setIsMenuOpen((open) => !open)}
              className="theme-button theme-soft-hover inline-flex h-11 w-11 items-center justify-center rounded-md sm:hidden"
            >
              <span className="sr-only">{isMenuOpen ? "Close menu" : "Open menu"}</span>
              <span className="flex w-5 flex-col gap-1.5">
                <span
                  className={`block h-0.5 w-full rounded bg-current transition ${isMenuOpen ? "translate-y-2 rotate-45" : ""}`}
                />
                <span className={`block h-0.5 w-full rounded bg-current transition ${isMenuOpen ? "opacity-0" : ""}`} />
                <span
                  className={`block h-0.5 w-full rounded bg-current transition ${isMenuOpen ? "-translate-y-2 -rotate-45" : ""}`}
                />
              </span>
            </button>
          </div>
        </div>
        <nav
          id="mobile-nav"
          aria-label="Mobile Primary"
          className={`${isMenuOpen ? "mt-4 flex" : "hidden"} flex-col gap-2 border-t border-slate-200 pt-4 sm:hidden`}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="theme-nav-link theme-text-secondary rounded-md px-4 py-3 text-sm font-semibold"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        </div>
    </header>
  );
}
