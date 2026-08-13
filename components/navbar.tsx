"use client";

import { useState, useEffect, type FormEvent } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/blogs", label: "Blogs" },
  { href: "/#courses", label: "Courses" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];

export function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

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
    <header className="fixed inset-x-0 top-0 z-50 overflow-hidden border-b border-slate-200/60 dark:border-cyan-400/10 bg-white/80 dark:bg-[#020617cc] shadow-[0_4px_30px_rgba(0,0,0,0.03)] dark:shadow-[0_0_40px_rgba(56,189,248,0.08)] backdrop-blur-2xl transition-all duration-300">
      
      {/* =========================
          AI GLOW EFFECTS (Subtle overlay)
          ========================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-30 dark:opacity-100">
        <div className="absolute -left-20 top-0 h-40 w-40 animate-pulse rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-0 top-0 h-32 w-32 animate-pulse rounded-full bg-orange-500/20 blur-3xl" />
        <div className="absolute left-1/2 top-0 h-20 w-20 -translate-x-1/2 animate-ping rounded-full bg-blue-500/10 blur-2xl" />
      </div>

      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        
        {/* =========================
            LOGO
            ========================= */}
        <Link
          href="/"
          className="group flex items-center gap-3"
        >
          <div className="relative">
            <img
              src="/main-logo.png"
              alt="NB Prompts Logo"
              className="h-10 w-10 rounded-none object-cover shadow-[0_0_20px_rgba(56,189,248,0.35)] transition-all duration-500 group-hover:scale-105 group-hover:rotate-1"
            />
            <div className="absolute inset-0 rounded-none bg-cyan-400/20 blur-lg transition-all duration-500 group-hover:bg-cyan-400/40" />
          </div>

          <div className="hidden sm:block">
            <h2 className="bg-gradient-to-r from-cyan-500 via-blue-500 to-orange-500 bg-clip-text text-sm font-extrabold tracking-wide text-transparent">
              NB Prompts
            </h2>
            <p className="text-[10px] text-slate-500 dark:text-slate-400 transition-all duration-300 group-hover:text-slate-700 dark:group-hover:text-slate-300">
              AI Tools & Blogs Hub
            </p>
          </div>
        </Link>

        {/* =========================
            DESKTOP NAVIGATION
            ========================= */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`group relative overflow-hidden rounded-none px-3.5 py-1.5 text-xs font-semibold transition-all duration-500 ${
                pathname === item.href
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-[0_0_20px_rgba(56,189,248,0.4)]"
                  : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
              }`}
            >
              {/* HOVER GLOW */}
              <span className="absolute inset-0 -z-10 scale-0 rounded-none bg-gradient-to-r from-cyan-500/10 to-orange-500/10 dark:from-cyan-500/20 dark:to-orange-500/20 transition-all duration-500 group-hover:scale-100" />
              {/* ACTIVE BORDER */}
              <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-none bg-cyan-500 dark:bg-cyan-400 transition-all duration-500 group-hover:w-3/4" />
              {item.label}
            </Link>
          ))}
        </nav>

        {/* =========================
            RIGHT SECTION
            ========================= */}
        <div className="flex items-center gap-3">
          
          {/* THEME TOGGLE */}
          <ThemeToggle />

          {/* BELL NOTIFICATION */}
          <NavbarBell />

          {/* SEARCH */}
          <form
            onSubmit={handleSearch}
            className="hidden lg:block"
          >
            <div className="relative">
              <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-400 dark:text-slate-500">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="h-3.5 w-3.5"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="M16.65 16.65L21 21" />
                </svg>
              </span>

              <input
                type="search"
                value={searchQuery}
                onChange={(event) =>
                  setSearchQuery(event.target.value)
                }
                placeholder="Search blogs..."
                className="w-[200px] rounded-none border border-slate-200 dark:border-cyan-400/20 bg-slate-100/70 dark:bg-white/5 px-3 py-1.5 pl-9 text-xs text-slate-800 dark:text-white outline-none backdrop-blur-md transition-all duration-500 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-cyan-500 dark:focus:border-cyan-400 focus:bg-white dark:focus:bg-white/10"
              />
            </div>
          </form>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="inline-flex items-center justify-center rounded-none border border-slate-200 dark:border-cyan-400/20 bg-slate-100/70 dark:bg-white/5 p-2 text-slate-700 dark:text-white transition-all duration-300 hover:scale-105 hover:bg-slate-200/50 dark:hover:bg-white/10 lg:hidden"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              className="h-5 w-5"
            >
              {isOpen ? (
                <path d="M6 6l12 12M18 6l-12 12" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* =========================
          MOBILE MENU
          ========================= */}
      <div
        id="mobile-navigation"
        aria-hidden={!isOpen}
        className={`overflow-hidden border-t border-slate-200/70 dark:border-cyan-400/10 bg-white/95 dark:bg-[#020617f2] backdrop-blur-2xl transition-all duration-500 lg:hidden ${
          isOpen ? "max-h-[500px] py-5" : "max-h-0"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 sm:px-6">
          
          {/* MOBILE LINKS */}
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`rounded-none px-3.5 py-2 text-xs font-semibold transition-all duration-300 ${
                pathname === item.href
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}

          {/* MOBILE SEARCH */}
          <form onSubmit={handleSearch} className="pt-1.5">
            <div className="relative">
              <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-400 dark:text-slate-500">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  className="h-3.5 w-3.5"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="M16.65 16.65L21 21" />
                </svg>
              </span>

              <input
                type="search"
                value={searchQuery}
                onChange={(event) =>
                  setSearchQuery(event.target.value)
                }
                placeholder="Search blogs..."
                className="w-full rounded-none border border-slate-200 dark:border-cyan-400/20 bg-slate-100/70 dark:bg-white/5 px-3 py-2 pl-9 text-xs text-slate-800 dark:text-white outline-none transition-all duration-300 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-cyan-500 dark:focus:border-cyan-400 focus:bg-white dark:focus:bg-white/10"
              />
            </div>
          </form>

          {/* MOBILE THEME TOGGLE */}
          <div className="flex items-center justify-between border-t border-slate-200/40 dark:border-cyan-400/5 pt-3.5 mt-1">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Change Theme</span>
            <ThemeToggle />
          </div>
        </div>
      </div>

    </header>
  );
}

function NavbarBell() {
  // Default to unsubscribed to avoid visible loading delay
  const [subscriptionState, setSubscriptionState] = useState<"loading" | "subscribed" | "unsubscribed" | "blocked">("unsubscribed");
  const [bellRinging, setBellRinging] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Read native permission state synchronously on mount to avoid OneSignal SDK loading delay
    if (typeof window !== "undefined") {
      const nativePermission = window.Notification ? window.Notification.permission : "default";
      if (nativePermission === "denied") {
        setSubscriptionState("blocked");
      } else if (nativePermission === "granted") {
        const optedOut = localStorage.getItem("onesignal_opted_out") === "true";
        setSubscriptionState(optedOut ? "unsubscribed" : "subscribed");
      } else {
        const state = (window as any).onesignalSubscriptionState || "unsubscribed";
        setSubscriptionState(state);
      }
    }

    // Listen to state changes from OneSignalManager
    const handleStateChange = (event: any) => {
      setSubscriptionState(event.detail);
    };

    window.addEventListener("onesignal-state-change", handleStateChange);
    return () => {
      window.removeEventListener("onesignal-state-change", handleStateChange);
    };
  }, []);

  useEffect(() => {
    const ringInterval = setInterval(() => {
      if (subscriptionState === "unsubscribed") {
        setBellRinging(true);
        setTimeout(() => setBellRinging(false), 1000);
      }
    }, 15000);

    return () => clearInterval(ringInterval);
  }, [subscriptionState]);

  const handleBellClick = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("onesignal-bell-click"));
    }
  };

  if (!mounted) return <div className="w-9 h-9" />;

  const tooltipText = {
    loading: "Initializing...",
    subscribed: "Notifications Active",
    unsubscribed: "Subscribe to Updates",
    blocked: "Notifications Blocked (Reset permission in address bar)",
  }[subscriptionState];

  return (
    <div className="relative group/bell">
      <style>{`
        @keyframes custom-bell-ring {
          0%, 100% { transform: rotate(0); }
          10%, 30%, 50%, 70%, 90% { transform: rotate(10deg); }
          20%, 40%, 60%, 80% { transform: rotate(-10deg); }
        }
        .animate-bell-ring {
          animation: custom-bell-ring 1s ease-in-out;
          transform-origin: top center;
        }
      `}</style>

      {/* Tooltip */}
      <div className="pointer-events-none absolute right-1/2 translate-x-1/2 top-full mt-2.5 hidden group-hover/bell:block whitespace-nowrap rounded-none border border-slate-200 dark:border-cyan-400/20 bg-white/95 dark:bg-[#020617]/95 px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-wider text-slate-800 dark:text-cyan-400 shadow-md backdrop-blur-md z-[9999]">
        {tooltipText}
      </div>

      <button
        type="button"
        onClick={handleBellClick}
        disabled={subscriptionState === "loading"}
        className={`group flex h-9 w-9 items-center justify-center rounded-full text-white shadow-md transition-all duration-300 hover:scale-110 hover:shadow-amber-500/50 cursor-pointer relative ${
          subscriptionState === "loading" ? "bg-amber-500/60 cursor-wait" : "bg-amber-500"
        } ${bellRinging ? "animate-bell-ring" : ""}`}
        aria-label={tooltipText}
        title={tooltipText}
      >
        {subscriptionState === "loading" ? (
          /* SVG Spinner */
          <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        ) : (
          /* SVG Bell (Solid/Fill look matching FA style) */
          <svg className="w-5 h-5 fill-current" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
            <path d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"/>
          </svg>
        )}

        {/* Subscribed Dot (Green) */}
        {subscriptionState === "subscribed" && (
          <span className="absolute top-0.5 right-0.5 block h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-[#020617] animate-pulse" />
        )}

        {/* Blocked Dot (Red) */}
        {subscriptionState === "blocked" && (
          <span className="absolute top-0.5 right-0.5 block h-2.5 w-2.5 rounded-full bg-rose-500 ring-2 ring-white dark:ring-[#020617]" />
        )}
      </button>
    </div>
  );
}
