import Link from "next/link";

export function HomeHero() {
  return (
    <section className="site-panel rounded-sm px-6 py-10 sm:px-8 sm:py-12">
      <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
        <div className="space-y-6">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-blue-700">AI Prompt Blog</p>
          <h1 className="text-balance font-[family-name:var(--font-heading)] text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Best AI image and video prompts for creators, editors, and marketers.
          </h1>
          <p className="max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            PromptFrame publishes simple, usable prompt guides for Midjourney, Flux, Runway, Kling, and other AI tools.
            The layout is intentionally content-first so visitors can move quickly from headline to article.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="#latest-posts"
              className="rounded-md bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Browse Articles
            </Link>
            <Link
              href="/about"
              className="rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-100"
            >
              About the Blog
            </Link>
          </div>
        </div>
        <div className="grid gap-4">
          <div className="rounded-sm border border-slate-200 bg-slate-50 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Popular Topics</p>
            <div className="mt-4 space-y-3 text-sm font-semibold text-slate-800">
              <p>Midjourney portrait prompts</p>
              <p>AI product ad prompts</p>
              <p>Text-to-video cinematic prompts</p>
              <p>Reel and short-form motion prompts</p>
            </div>
          </div>
          <div className="rounded-sm border border-slate-200 bg-white p-5">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Why This Works</p>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Short titles, clear metadata, readable post lists, and a straightforward publishing layout inspired by
              utility-first blog sites like the reference you shared.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
