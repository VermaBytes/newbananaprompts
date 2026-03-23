import Link from "next/link";

type CategoryCardProps = {
  title: string;
  description: string;
  href: string;
};

export function CategoryCard({ title, description, href }: CategoryCardProps) {
  return (
    <Link href={href} className="category-card block rounded-[1.4rem] p-5">
      <p className="theme-text-primary font-[family-name:var(--font-heading)] text-xl font-bold">{title}</p>
      <p className="theme-text-secondary mt-2 text-sm leading-7">{description}</p>
    </Link>
  );
}
