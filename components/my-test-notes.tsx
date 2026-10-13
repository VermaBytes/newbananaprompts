import type { TestNotes } from "@/lib/posts";

export function MyTestNotes({ notes }: { notes?: TestNotes }) {
  const entries = [
    { label: "What I tried", value: notes?.whatITried },
    { label: "What failed", value: notes?.whatFailed },
    { label: "What fixed it", value: notes?.whatFixedIt }
  ].filter((entry) => entry.value?.trim());

  if (!entries.length) return null;

  return (
    <section aria-labelledby="my-test-notes" className="theme-surface space-y-4 border border-cyan-400/20 p-5">
      <h2 id="my-test-notes" className="theme-text-primary text-xl font-bold">My Test Notes</h2>
      <dl className="space-y-4">
        {entries.map((entry) => (
          <div key={entry.label}>
            <dt className="theme-text-primary text-sm font-semibold">{entry.label}</dt>
            <dd className="theme-text-secondary mt-1 whitespace-pre-line text-sm leading-7">{entry.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
