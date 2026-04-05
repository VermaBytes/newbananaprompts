"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/prompt", label: "Prompts" },
  { href: "/#courses", label: "Courses" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/about", label: "About Us" },
];

export function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const query = searchQuery.trim();
    if (query.length > 0) {
      router.push(`/search?query=${encodeURIComponent(query)}`);
    } else {
      router.push("/search");
    }
  };

  return (
    <header className="site-header fixed inset-x-0 top-0 z-50 border-b backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3">
          <Link href="/" className="flex items-center gap-3">
            <img src="/main-logo.png" alt="Logo" className="h-11 w-11 rounded-xl object-cover" />
          </Link>
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="theme-button theme-soft-hover inline-flex items-center rounded-full px-3 py-2 text-sm font-semibold lg:hidden"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
              {isOpen ? <path d="M6 6l12 12M18 6l-12 12" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
          <nav aria-label="Primary" className="hidden flex-1 items-center justify-center gap-2 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="theme-nav-link theme-text-secondary rounded-md px-3 py-2 text-sm font-semibold"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <form onSubmit={handleSearch} className="hidden w-full max-w-[320px] lg:block lg:w-auto">
            <label htmlFor="navbar-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-slate-400">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                  <circle cx="11" cy="11" r="7" />
                  <path d="M16.65 16.65L21 21" />
                </svg>
              </span>
              <input
                id="navbar-search"
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search..."
                className="theme-input search-pro w-full rounded-full bg-white px-3 py-2 pl-9 pr-3 text-sm outline-none placeholder:text-slate-400"
              />
            </div>
          </form>
        </div>
        <div className={`mt-4 space-y-4 lg:hidden ${isOpen ? "block" : "hidden"}`}>
          <nav aria-label="Mobile Primary" className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="theme-nav-link theme-text-secondary rounded-md px-4 py-2 text-sm font-semibold"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <form onSubmit={handleSearch} className="w-full">
            <label htmlFor="navbar-search-mobile" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <span className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-slate-400">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                  <circle cx="11" cy="11" r="7" />
                  <path d="M16.65 16.65L21 21" />
                </svg>
              </span>
              <input
                id="navbar-search-mobile"
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search..."
                className="theme-input search-pro w-full rounded-full bg-white px-3 py-2 pl-9 pr-3 text-sm outline-none placeholder:text-slate-400"
              />
            </div>
          </form>
        </div>
      </div>
    </header>
  );
}
