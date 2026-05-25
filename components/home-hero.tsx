import Link from "next/link";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-cyan-400/10 bg-[#020617] px-6 py-8 md:py-10 md:px-8 shadow-[0_0_50px_rgba(56,189,248,0.06)] lg:min-h-[420px] lg:flex lg:items-center">
      
      {/* =========================
          AI BACKGROUND EFFECTS
      ========================= */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        
        {/* CYAN GLOW */}
        <div className="absolute left-0 top-0 h-64 w-64 animate-pulse rounded-full bg-cyan-500/15 blur-3xl" />

        {/* ORANGE GLOW */}
        <div className="absolute bottom-0 right-0 h-64 w-64 animate-pulse rounded-full bg-orange-500/15 blur-3xl" />

        {/* CENTER AI LIGHT */}
        <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-blue-500/5 blur-3xl" />

        {/* GRID EFFECT */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative w-full grid gap-6 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
        
        {/* =========================
            LEFT CONTENT
        ========================= */}
        <div className="space-y-4">
          
          {/* BADGE */}
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-cyan-300 shadow-[0_0_12px_rgba(56,189,248,0.08)]">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
            AI Prompt & Blog Hub
          </div>

          {/* HEADING */}
          <div className="space-y-3">
            <h1 className="max-w-2xl text-balance font-[family-name:var(--font-heading)] text-xl sm:text-2xl lg:text-[2.2rem] lg:leading-[1.15] font-extrabold tracking-tight text-white">
              Create Stunning{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-orange-400 bg-clip-text text-transparent">
                AI Images & Videos
              </span>{" "}
              with Powerful Creator Prompts.
            </h1>

            <p className="max-w-xl text-xs leading-5 text-slate-400">
              Discover cinematic AI prompts, Midjourney ideas,
              video generation workflows, blogging resources,
              and modern creator tools designed for editors,
              designers, marketers, and AI creators.
            </p>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-2.5">
            
            <Link
              href="#latest-posts"
              className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-4.5 py-2.5 text-xs font-semibold text-white shadow-[0_0_15px_rgba(56,189,248,0.2)] transition-all duration-500 hover:scale-105"
            >
              <span className="absolute inset-0 bg-white/10 opacity-0 transition duration-500 group-hover:opacity-100" />
              <span className="relative z-10">Explore AI Prompts</span>
            </Link>

            <Link
              href="/about"
              className="rounded-lg border border-white/10 bg-white/5 px-4.5 py-2.5 text-xs font-semibold text-white backdrop-blur-md transition-all duration-500 hover:border-cyan-400/40 hover:text-cyan-300"
            >
              Learn More
            </Link>
          </div>

          {/* STATS */}
          <div className="flex flex-wrap gap-3 pt-1">
            
            <div className="rounded-xl border border-white/5 bg-white/5 px-3.5 py-2 backdrop-blur-md">
              <h3 className="text-base font-bold text-white">500+</h3>
              <p className="text-[9px] text-slate-400">AI Prompts</p>
            </div>

            <div className="rounded-xl border border-white/5 bg-white/5 px-3.5 py-2 backdrop-blur-md">
              <h3 className="text-base font-bold text-white">50+</h3>
              <p className="text-[9px] text-slate-400">Creator Tools</p>
            </div>

            <div className="rounded-xl border border-white/5 bg-white/5 px-3.5 py-2 backdrop-blur-md">
              <h3 className="text-base font-bold text-white">24/7</h3>
              <p className="text-[9px] text-slate-400">AI Resources</p>
            </div>
          </div>
        </div>

        {/* =========================
            RIGHT SIDE AI CARDS
        ========================= */}
        <div className="relative grid gap-3.5 md:grid-cols-2 lg:grid-cols-1">
          
          {/* CARD 1 */}
          <div className="group relative overflow-hidden rounded-[1.2rem] border border-cyan-400/10 bg-white/5 p-4 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/20">
            
            <div className="absolute right-0 top-0 h-16 w-16 rounded-full bg-cyan-500/5 blur-xl" />

            <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-cyan-300">
              Trending AI Topics
            </p>

            <div className="mt-3 space-y-1.5 text-xs font-semibold text-white">
              
              <div className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/5 px-2.5 py-1.5 transition-all duration-300 hover:bg-white/10">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                Midjourney Portrait Prompts
              </div>

              <div className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/5 px-2.5 py-1.5 transition-all duration-300 hover:bg-white/10">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
                AI Product Ad Prompts
              </div>

              <div className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/5 px-2.5 py-1.5 transition-all duration-300 hover:bg-white/10">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                Cinematic Video Prompts
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="group relative overflow-hidden rounded-[1.2rem] border border-orange-400/10 bg-white/5 p-4 backdrop-blur-xl transition-all duration-500 hover:border-orange-400/20">
            
            <div className="absolute bottom-0 left-0 h-16 w-16 rounded-full bg-orange-500/5 blur-xl" />

            <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-orange-300">
              Why NB Prompts
            </p>

            <p className="mt-2 text-xs leading-relaxed text-slate-400">
              Built for creators who want high-quality AI prompts,
              SEO-friendly content, and modern workflows in one powerful platform.
            </p>

            {/* MINI FEATURES */}
            <div className="mt-3 flex flex-wrap gap-1.5">
              
              <span className="rounded-full border border-cyan-400/20 bg-cyan-500/5 px-2.5 py-0.5 text-[8px] font-semibold text-cyan-300">
                AI Prompts
              </span>

              <span className="rounded-full border border-orange-400/20 bg-orange-500/5 px-2.5 py-0.5 text-[8px] font-semibold text-orange-300">
                Creator Tools
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}