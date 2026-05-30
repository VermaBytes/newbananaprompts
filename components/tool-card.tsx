import Link from "next/link";

type ToolCardProps = {
  title: string;
  description: string;
  href: string;
};

export function ToolCard({ title, description, href }: ToolCardProps) {
  const isExternal = href.startsWith("http");

  return (
    <article className="tool-card rounded-none p-4">
      <p className="theme-kicker text-[10px] font-semibold uppercase tracking-[0.24em]">Popular Tool</p>
      <h3 className="theme-text-primary mt-2 font-[family-name:var(--font-heading)] text-xl font-bold">{title}</h3>
      <p className="theme-text-secondary mt-2 text-xs leading-6">{description}</p>
      {isExternal ? (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="prompt-read-more mt-4 inline-flex rounded-none px-3.5 py-1.5 text-xs font-semibold"
        >
          Open Tool
        </a>
      ) : (
        <Link href={href} className="prompt-read-more mt-4 inline-flex rounded-none px-3.5 py-1.5 text-xs font-semibold">
          Open Tool Guide
        </Link>
      )}
    </article>
  );
}
