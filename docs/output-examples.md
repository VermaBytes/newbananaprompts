# Real prompt outputs

Upload actual outputs under `public/outputs/`. Do not use a cover, stock image,
diagram, or invented result as evidence that a prompt was run.

Add an `outputExamples` array to the relevant post in `data/posts.json`. Each entry
uses these fields:

- `promptNumber`: the prompt's number in the article.
- `image`: local `/outputs/` path to the uploaded PNG, JPEG, WebP, or AVIF.
- `alt`: describe the visible result, including relevant details or defects.
- `tool`: the tool actually used.
- `version`: the actual model/tool version recorded when generating the output.
- `caption`: one short line explaining the result.

An entry containing only `promptNumber` is a placeholder. Missing entries also
render placeholders automatically. No tool or version is inferred from prose.
Add the remaining fields only after producing and uploading the real output.

Prompts are detected from headings beginning `Prompt N`, paragraphs beginning
`Prompt N` (including HTML-formatted labels), and unnumbered copy-ready or
`Example Prompt` sections. Unnumbered sections receive the next unused number
in article order. Keep explicit prompt numbers unique across the article.
Grouped prompts show their output examples below their section.

Run `npm run audit:outputs` to review warnings. `npm run build` runs the same
non-blocking check before Next.js compilation. The audit includes withheld
AI Prompts posts, requires a file to exist and all descriptive fields to be
filled, and does not count a reused image file as multiple outputs. It cannot
verify provenance: the author is responsible for uploading genuine results.

The rendering integration also works for prompt sections in other categories;
the requested build audit is restricted to the exact `AI Prompts` category.
