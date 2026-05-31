import Link from "next/link";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-cyan-400/10 bg-[#020617]">
      
      {/* =========================
          AI GLOW BACKGROUND
      ========================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />

        <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      {/* =========================
          MAIN FOOTER
      ========================= */}
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr] lg:px-8">
        
        {/* =========================
            BRAND
        ========================= */}
        <div>
          <div className="flex items-center gap-3">
            <img
              src="/main-logo.png"
              alt="NB Prompts Logo"
              className="h-14 w-14 rounded-2xl object-cover shadow-[0_0_25px_rgba(56,189,248,0.4)]"
            />

            <div>
              <h2 className="bg-gradient-to-r from-cyan-400 via-blue-400 to-orange-400 bg-clip-text text-2xl font-extrabold text-transparent">
                {SITE_NAME}
              </h2>

              <p className="text-xs text-slate-400">
                AI Prompt & Creator Hub
              </p>
            </div>
          </div>

          <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
            {SITE_TAGLINE}. NB Prompts helps creators with
            AI prompts, blogging resources, image tools,
            SEO tips, and modern online creator workflows.
          </p>

          {/* SOCIAL ICONS */}
          <div className="mt-6 flex items-center gap-3">
            
            <a
              href="https://www.youtube.com/@ShobhitManar"
              target="_blank"
              rel="noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:scale-110 hover:border-red-500/50 hover:bg-red-500/10 hover:text-white"
            >
              ▶
            </a>

            <a
              href="https://www.instagram.com/vermabanker?igsh=bWN4cGcyYXhkMW8x"
              target="_blank"
              rel="noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:scale-110 hover:border-pink-500/50 hover:bg-pink-500/10 hover:text-white"
            >
              ◎
            </a>

            <a
              href="https://www.linkedin.com/in/shobhitverma838190/"
              target="_blank"
              rel="noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:scale-110 hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-white"
            >
              in
            </a>

            <a
              href="https://github.com/VermaBytes"
              target="_blank"
              rel="noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:scale-110 hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:text-white"
            >
              ⌘
            </a>
          </div>
        </div>

        {/* =========================
            EXPLORE
        ========================= */}
        <div>
          <h3 className="text-lg font-bold text-white">
            Explore
          </h3>

          <div className="mt-5 space-y-3">
            <Link
              href="/"
              className="block text-sm text-slate-400 transition-all duration-300 hover:translate-x-1 hover:text-cyan-400"
            >
              Home
            </Link>

            <Link
              href="/blogs"
              className="block text-sm text-slate-400 transition-all duration-300 hover:translate-x-1 hover:text-cyan-400"
            >
              Blogs
            </Link>

            <Link
              href="/about"
              className="block text-sm text-slate-400 transition-all duration-300 hover:translate-x-1 hover:text-cyan-400"
            >
              About
            </Link>

            <Link
              href="/contact"
              className="block text-sm text-slate-400 transition-all duration-300 hover:translate-x-1 hover:text-cyan-400"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* =========================
            CATEGORIES
        ========================= */}
        <div>
          <h3 className="text-lg font-bold text-white">
            Categories
          </h3>

          <div className="mt-5 space-y-3">
            <p className="text-sm text-slate-400 transition-all duration-300 hover:text-orange-400">
              AI Prompts
            </p>

            <p className="text-sm text-slate-400 transition-all duration-300 hover:text-orange-400">
              Image Tools
            </p>

            <p className="text-sm text-slate-400 transition-all duration-300 hover:text-orange-400">
              Blogging Tips
            </p>

            <p className="text-sm text-slate-400 transition-all duration-300 hover:text-orange-400">
              Earn Money
            </p>
          </div>
        </div>

        {/* =========================
            LEGAL
        ========================= */}
        <div>
          <h3 className="text-lg font-bold text-white">
            Legal & Social
          </h3>

          <div className="mt-5 space-y-3">
            <Link
              href="/privacy-policy"
              className="block text-sm text-slate-400 transition-all duration-300 hover:translate-x-1 hover:text-cyan-400"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-and-conditions"
              className="block text-sm text-slate-400 transition-all duration-300 hover:translate-x-1 hover:text-cyan-400"
            >
              Terms & Conditions
            </Link>

            <Link
              href="/disclaimer"
              className="block text-sm text-slate-400 transition-all duration-300 hover:translate-x-1 hover:text-cyan-400"
            >
              Disclaimer
            </Link>

            <Link
              href="/contact"
              className="block text-sm text-slate-400 transition-all duration-300 hover:translate-x-1 hover:text-cyan-400"
            >
              Support
            </Link>
          </div>
        </div>
      </div>

      {/* =========================
          BOTTOM BAR
      ========================= */}
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-sm text-slate-500 sm:flex-row sm:px-6 lg:px-8">
          
          <p>
            © 2026 {SITE_NAME}. All rights reserved.
          </p>

          <p className="text-xs tracking-wide text-slate-600">
            Built with AI • Next.js • Modern Web Experience
          </p>
        </div>
      </div>
    </footer>
  );
}