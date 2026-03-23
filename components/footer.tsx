import Link from "next/link";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer mt-16 border-t">
      <div className="theme-text-secondary mx-auto grid max-w-7xl gap-8 px-4 py-10 text-sm sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <p className="theme-text-primary font-[family-name:var(--font-heading)] text-2xl font-bold">{SITE_NAME}</p>
          <p className="mt-3 max-w-md leading-7">
            {SITE_TAGLINE}. NB Prompts covers AI prompts, image tools, blogging resources, and useful online tools for creators.
          </p>
        </div>
        <div>
          <p className="theme-text-primary font-[family-name:var(--font-heading)] text-xl font-bold">Explore</p>
          <div className="mt-4 space-y-2">
            <Link href="/" className="block hover:text-blue-700">Home</Link>
            <Link href="/blogs" className="block hover:text-blue-700">Blogs</Link>
            <Link href="/about" className="block hover:text-blue-700">About</Link>
            <Link href="/contact" className="block hover:text-blue-700">Contact</Link>
          </div>
        </div>
        <div>
          <p className="theme-text-primary font-[family-name:var(--font-heading)] text-xl font-bold">Categories</p>
          <div className="mt-4 space-y-2">
            <p>AI Prompts</p>
            <p>Image Tools</p>
            <p>Blogging Tips</p>
            <p>Earn Money</p>
          </div>
        </div>
        <div>
          <p className="theme-text-primary font-[family-name:var(--font-heading)] text-xl font-bold">Legal & Social</p>
          <div className="mt-4 space-y-2">
            <Link href="/privacy-policy" className="block hover:text-blue-700">Privacy Policy</Link>
            <a href="https://x.com" className="block hover:text-blue-700" target="_blank" rel="noreferrer">Youtube</a>
            <a href="https://linkedin.com" className="block hover:text-blue-700" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com" className="block hover:text-blue-700" target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </div>
      </div>
      <div className="theme-text-muted border-t border-inherit py-4 text-center text-sm">Copyright 2026 {SITE_NAME}. All rights reserved.</div>
    </footer>
  );
}
