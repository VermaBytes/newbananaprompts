import Link from "next/link";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site";

export function Footer() {
  const currentYear = new Date().getFullYear();
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
              About Us
            </Link>

            <Link
              href="/contact"
              className="block text-sm text-slate-400 transition-all duration-300 hover:translate-x-1 hover:text-cyan-400"
            >
              Contact Us
            </Link>

            <Link
              href="/author"
              className="block text-sm text-slate-400 transition-all duration-300 hover:translate-x-1 hover:text-cyan-400"
            >
              Author & Team
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
              href="/cookie-policy"
              className="block text-sm text-slate-400 transition-all duration-300 hover:translate-x-1 hover:text-cyan-400"
            >
              Cookie Policy
            </Link>

            <Link
              href="/editorial-policy"
              className="block text-sm text-slate-400 transition-all duration-300 hover:translate-x-1 hover:text-cyan-400"
            >
              Editorial Policy
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
            © {currentYear} {SITE_NAME}. All rights reserved.
          </p>

          {/* SOCIAL ICONS (CENTERED) */}
          <div className="flex items-center gap-3">
            {/* WhatsApp */}
            <a
              href="https://wa.me/918381900000?text=Hi%20Shobhit,%20I%20have%20a%20question%20about%20NB%20Prompts!"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:scale-110 hover:border-green-500/50 hover:bg-green-500/10 hover:text-green-400 cursor-pointer"
              aria-label="Chat on WhatsApp"
              title="Chat on WhatsApp"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/vermabanker?igsh=bWN4cGcyYXhkMW8x"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:scale-110 hover:border-pink-500/50 hover:bg-pink-500/10 hover:text-pink-400 cursor-pointer"
              aria-label="Follow us on Instagram"
              title="Follow us on Instagram"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.8 9.9 67.6 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/@ShobhitManar"
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 hover:scale-110 hover:border-red-500/50 hover:bg-red-500/10 hover:text-red-400 cursor-pointer"
              aria-label="Subscribe on YouTube"
              title="Subscribe on YouTube"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.537V175.185l142.739 81.205-142.74 81.23z"/>
              </svg>
            </a>
          </div>

          <p className="text-xs tracking-wide text-slate-600">
            Built with AI • Next.js • Modern Web Experience
          </p>
        </div>
      </div>
    </footer>
  );
}
