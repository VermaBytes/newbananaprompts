export function AdPlaceholder() {
  return (
    <aside className="site-panel rounded-sm px-6 py-6 text-center">
      <p className="theme-text-muted text-xs font-semibold uppercase tracking-[0.24em]">Google AdSense Placeholder</p>
      <div className="theme-surface mt-4 rounded-sm border border-dashed px-4 py-10">
        <p className="theme-text-primary font-[family-name:var(--font-heading)] text-xl font-bold">Ad Unit Area</p>
        <p className="theme-text-muted mt-2 text-sm">
          Replace this block with your AdSense script and responsive ad component when going live.
        </p>
      </div>
    </aside>
  );
}
