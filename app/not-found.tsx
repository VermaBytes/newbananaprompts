import Link from "next/link";
export default function NotFound() {
  return <section className="mx-auto flex min-h-[55vh] max-w-2xl flex-col items-center justify-center space-y-5 text-center">
    <p className="theme-kicker text-sm font-semibold uppercase tracking-[0.24em]">404 error</p><h1 className="theme-text-primary text-3xl font-bold sm:text-5xl">Page not found</h1><p className="theme-text-secondary max-w-lg text-sm leading-7 sm:text-base">The address may be incorrect, or the page may have moved. Search the site or return to the latest articles.</p>
    <div className="flex flex-wrap justify-center gap-3"><Link href="/" className="theme-button inline-flex min-h-11 items-center px-5 py-2 text-sm font-semibold">Home</Link><Link href="/blogs" className="theme-button theme-soft-hover inline-flex min-h-11 items-center px-5 py-2 text-sm font-semibold">Browse articles</Link><Link href="/search" className="theme-button theme-soft-hover inline-flex min-h-11 items-center px-5 py-2 text-sm font-semibold">Search</Link></div>
  </section>;
}
