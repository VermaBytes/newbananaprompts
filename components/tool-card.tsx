import Link from "next/link";

type ToolCardProps = {
  title: string;
  description: string;
  href: string;
};

export function ToolCard({ title, description, href }: ToolCardProps) {
  return (
    <article className="tool-card rounded-[1.5rem] p-5">
      <p className="theme-kicker text-xs font-semibold uppercase tracking-[0.24em]">Popular Tool</p>
      <h3 className="theme-text-primary mt-3 font-[family-name:var(--font-heading)] text-2xl font-bold">{title}</h3>
      <p className="theme-text-secondary mt-3 text-sm leading-7">{description}</p>
      <Link href={href} className="prompt-read-more mt-5 inline-flex rounded-full px-4 py-2 text-sm font-semibold">
        Open Tool Guide
      </Link>
    </article>
  );
}
