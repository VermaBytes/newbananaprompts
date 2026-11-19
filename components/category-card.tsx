import Link from "next/link";

type CategoryCardProps = {
  title: string;
  description: string;
  href: string;
};

export function CategoryCard({ title, description, href }: CategoryCardProps) {
  return (
    <Link href={href} className="category-card block rounded-none p-4">
      <p className="theme-text-primary font-[family-name:var(--font-heading)] text-lg font-bold">{title}</p>
      <p className="theme-text-secondary mt-1.5 text-xs leading-6">{description}</p>
    </Link>
  );
}
