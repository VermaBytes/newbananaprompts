import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { createRequire } from "node:module";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";

const require = createRequire(import.meta.url);
const output = mkdtempSync(path.join(tmpdir(), "nb-color-test-"));
try {
  execFileSync(process.execPath, ["node_modules/typescript/bin/tsc", "lib/color-palette.ts", "--module", "commonjs", "--target", "es2017", "--skipLibCheck", "--outDir", output]);
  const { parseHex, hexToRgb, rgbToHex, rgbToHsl, hslToRgb, hexToHsl, hslToHex, generatePalette, randomHex, swatchTextColor } = require(path.join(output, "color-palette.js"));
  assert.equal(parseHex(" #aBc "), "#AABBCC");
  assert.equal(parseHex("a1b2c3"), "#A1B2C3");
  for (const bad of ["", "#", "##FFF", "#12", "#1234", "#12345", "#12345678", "#GG0000", "red", "#FF FF0", "0x123456"]) {
    assert.equal(parseHex(bad), null);
    assert.throws(() => hexToRgb(bad));
    assert.throws(() => generatePalette(bad, "Triadic"));
  }
  const known = [
    ["#FF0000", { r: 255, g: 0, b: 0 }, { h: 0, s: 100, l: 50 }],
    ["#00FF00", { r: 0, g: 255, b: 0 }, { h: 120, s: 100, l: 50 }],
    ["#0000FF", { r: 0, g: 0, b: 255 }, { h: 240, s: 100, l: 50 }],
    ["#FFFFFF", { r: 255, g: 255, b: 255 }, { h: 0, s: 0, l: 100 }],
    ["#000000", { r: 0, g: 0, b: 0 }, { h: 0, s: 0, l: 0 }],
    ["#800000", { r: 128, g: 0, b: 0 }, { h: 0, s: 100, l: 128 / 510 * 100 }]
  ];
  for (const [hex, rgb, hsl] of known) {
    assert.deepEqual(hexToRgb(hex), rgb);
    assert.equal(rgbToHex(rgb), hex);
    const actual = rgbToHsl(rgb);
    for (const key of ["h", "s", "l"]) assert(Math.abs(actual[key] - hsl[key]) < 1e-9);
    assert.deepEqual(hslToRgb(hsl), rgb);
  }
  // Exercise every hue sector and a broad RGB grid without rounding HSL.
  let roundTrips = 0;
  for (let r = 0; r <= 255; r += 17) for (let g = 0; g <= 255; g += 17) for (let b = 0; b <= 255; b += 17) {
    assert.deepEqual(hslToRgb(rgbToHsl({ r, g, b })), { r, g, b });
    roundTrips++;
  }
  assert.equal(hslToHex({ h: -120, s: 100, l: 50 }), "#0000FF");
  assert.equal(hslToHex({ h: 720, s: 100, l: 50 }), "#FF0000");
  assert.deepEqual(generatePalette("#FF0000", "Complementary"), ["#FF0000", "#00FFFF"]);
  assert.deepEqual(generatePalette("#FF0000", "Analogous"), ["#FF0080", "#FF0000", "#FF8000"]);
  assert.deepEqual(generatePalette("#FF0000", "Triadic"), ["#FF0000", "#00FF00", "#0000FF"]);
  assert.deepEqual(generatePalette("#808080", "Monochromatic"), ["#333333", "#5A5A5A", "#808080", "#A6A6A6", "#CCCCCC"]);
  for (const type of ["Complementary", "Analogous", "Triadic"]) assert(generatePalette("#808080", type).every((c) => c === "#808080"));
  for (const hex of ["#0F766E", "#FF7A59", "#123456"]) {
    const base = hexToHsl(hex);
    for (const color of generatePalette(hex, "Triadic")) {
      const rotated = hexToHsl(color);
      assert(Math.abs(rotated.s - base.s) < 1);
      assert(Math.abs(rotated.l - base.l) < 0.4);
    }
  }
  for (const rgb of [{ r: -1, g: 0, b: 0 }, { r: 256, g: 0, b: 0 }, { r: NaN, g: 0, b: 0 }]) {
    assert.throws(() => rgbToHex(rgb)); assert.throws(() => rgbToHsl(rgb));
  }
  for (const hsl of [{ h: Infinity, s: 0, l: 0 }, { h: 0, s: 101, l: 0 }, { h: 0, s: 0, l: -1 }]) assert.throws(() => hslToRgb(hsl));
  assert.equal(randomHex(() => 0), "#000000");
  assert.equal(randomHex(() => 1 - Number.EPSILON), "#FFFFFF");
  assert.throws(() => randomHex(() => 1));
  assert.equal(swatchTextColor("#000000"), "#FFFFFF");
  assert.equal(swatchTextColor("#FFFFFF"), "#000000");
  console.log(`Color tests passed: ${roundTrips} RGB/HSL round trips, known conversions, palettes, parsing, invalid inputs, random boundaries, and label contrast.`);
} finally {
  rmSync(output, { recursive: true, force: true });
}
