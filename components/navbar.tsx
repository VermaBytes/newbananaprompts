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
  return (
    <header className="site-header fixed inset-x-0 top-0 z-50 border-b backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#0f766e] text-sm font-bold text-white shadow-lg shadow-[#0f766e]/20">
            NB
          </span>
          <span>
            <span className="theme-text-primary block font-[family-name:var(--font-heading)] text-lg font-bold">
              {SITE_NAME}
            </span>
            <span className="theme-text-muted block text-xs uppercase tracking-[0.24em]">{SITE_TAGLINE}</span>
          </span>
        </Link>
        <div className="flex items-center gap-2">
          <nav aria-label="Primary" className="flex items-center gap-1 sm:gap-2">
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
        </div>
      </div>
    </header>
  );
}
