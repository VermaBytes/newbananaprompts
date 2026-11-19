import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { createRequire } from "node:module";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";

const require = createRequire(import.meta.url);
const output = mkdtempSync(path.join(tmpdir(), "nb-prompt-test-"));
try {
  execFileSync(process.execPath, ["node_modules/typescript/bin/tsc", "lib/prompt-generator.ts", "--module", "commonjs", "--target", "es2017", "--skipLibCheck", "--outDir", output]);
  const { buildPrompt, categories, platforms, detailLevels } = require(path.join(output, "prompt-generator.js"));
  const base = { idea: "A specific beginner-friendly brief", category: "Custom", platform: "Universal", detail: "Simple" };
  assert.throws(() => buildPrompt({ ...base, idea: " \n " }), /Describe/);
  assert.throws(() => buildPrompt({ ...base, idea: "x".repeat(4001) }), /4,000/);
  assert.equal(buildPrompt({ ...base, idea: "  Example  " }), buildPrompt({ ...base, idea: "Example" }));
  let combinations = 0;
  for (const category of categories) {
    for (const platform of platforms) {
      const results = detailLevels.map((detail) => {
        const options = { ...base, category, platform, detail };
        const result = buildPrompt(options);
        assert(result.includes(base.idea));
        assert.equal(result, buildPrompt(options));
        assert.notEqual(result, buildPrompt(options, 1));
        assert.equal(result, buildPrompt(options, 3));
        if (category === "Coding & Development") {
          for (const term of ["architecture", "security", "accessibility", "tests", "unrelated"]) assert(result.includes(term));
          assert(!result.includes("1:1"));
        }
        if (category === "SEO Content") {
          for (const term of ["search intent", "keyword stuffing", "factual accuracy"]) assert(result.includes(term));
        }
        if (platform === "Midjourney" && category === "AI Image Generation") {
          for (const term of ["composition", "lighting", "style", "1:1"]) assert(result.includes(term));
        }
        combinations++;
        return result;
      });
      assert(results[0].length < results[1].length);
      assert(results[1].length < results[2].length);
    }
  }
  const unique = new Set(categories.map((category) => buildPrompt({ ...base, category })));
  assert.equal(unique.size, categories.length);
  console.log(`Passed ${combinations} combinations, category differentiation, input validation, detail levels, and deterministic regeneration.`);
} finally {
  rmSync(output, { recursive: true, force: true });
}
