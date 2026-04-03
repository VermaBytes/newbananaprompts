"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/blogs", label: "Blogs" },
  { href: "/#popular-tools", label: "Tools" },
  { href: "/#categories", label: "Categories" }
];

export function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const query = searchQuery.trim();
    if (query.length > 0) {
      router.push(`/blogs?query=${encodeURIComponent(query)}`);
    } else {
      router.push("/blogs");
    }
  };

  return (
    <header className="site-header fixed inset-x-0 top-0 z-50 border-b backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <Link href="/" className="min-w-0 flex items-center gap-3">
            <img src="/main-logo.png" alt="Logo" className="h-11 w-11 rounded-xl object-cover" />
          </Link>
          <nav aria-label="Primary" className="flex flex-wrap items-center justify-center gap-2 lg:flex-1">
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
          <form onSubmit={handleSearch} className="w-full max-w-[320px] lg:w-auto">
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
                placeholder="Search posts, tools, prompts..."
                className="theme-input search-pro w-full rounded-full bg-white px-4 py-2.5 pl-11 pr-4 text-sm outline-none placeholder:text-slate-400"
              />
            </div>
          </form>
        </div>
      </div>
    </header>
  );
}
