
import { getImageDimensions } from "@/lib/image-dimensions";
import Image from "next/image";
import type { OutputExampleData } from "@/lib/posts";
import { isCompleteOutputExample } from "@/lib/prompt-examples.mjs";

export function OutputExample({ promptNumber, example }: {
  promptNumber: number;
  example?: OutputExampleData;
}) {
  const ready = isCompleteOutputExample(example);
  return (
    <figure className="theme-surface space-y-3 border border-cyan-400/20 p-4">
      <h3 className="theme-text-primary text-sm font-semibold">Output Example — Prompt {promptNumber}</h3>
      {ready && example ? (
        <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-slate-900">
          <Image src={example.image!} alt={example.alt!} {...getImageDimensions(example.image!)} style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
            sizes="(max-width: 1024px) 100vw, 850px" className="object-contain" loading="lazy" />
        </div>
      ) : (
        <div className="theme-text-secondary flex aspect-[4/3] items-center justify-center border border-dashed border-slate-400 p-6 text-center text-sm">
          Author upload required: add a real output for Prompt {promptNumber}, describe what is visible, and record the tool and version used.
        </div>
      )}
      <p className="theme-text-muted text-xs">Tool: {ready ? example?.tool : "Author must supply"} · Version: {ready ? example?.version : "Author must supply"}</p>
      <figcaption className="theme-text-secondary text-sm">{ready ? example?.caption : "Placeholder — no real output has been uploaded and documented yet."}</figcaption>
    </figure>
  );
}
