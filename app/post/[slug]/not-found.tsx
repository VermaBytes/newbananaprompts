import Link from "next/link";

export default function NotFound() {
  return (
    <div className="surface-card rounded-[2rem] px-6 py-16 text-center sm:px-10">
      <h1 className="theme-text-primary font-[family-name:var(--font-heading)] text-3xl font-bold">Post not found</h1>
      <p className="theme-text-secondary mt-3">The article you are looking for does not exist or has been moved.</p>
      <Link
        href="/"
        className="mt-6 inline-flex rounded-full bg-[#0f766e] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-black/20 hover:-translate-y-0.5"
      >
        Return Home
      </Link>
    </div>
  );
}
