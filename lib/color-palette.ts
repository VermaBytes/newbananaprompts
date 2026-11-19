export type RGB = { r: number; g: number; b: number };
export type HSL = { h: number; s: number; l: number };
export const paletteTypes = ["Complementary", "Analogous", "Triadic", "Monochromatic"] as const;
export type PaletteType = typeof paletteTypes[number];

export function parseHex(input: string): string | null {
  const value = input.trim().replace(/^#/, "");
  if (!/^(?:[0-9a-f]{3}|[0-9a-f]{6})$/i.test(value)) return null;
  return `#${(value.length === 3 ? [...value].map((c) => c + c).join("") : value).toUpperCase()}`;
}

function check(values: number[], maximum: number) {
  if (values.some((value) => !Number.isFinite(value) || value < 0 || value > maximum)) {
    throw new RangeError(`Color channels must be finite numbers between 0 and ${maximum}.`);
  }
}

export function hexToRgb(input: string): RGB {
  const hex = parseHex(input);
  if (!hex) throw new Error("Enter a valid 3- or 6-digit HEX color.");
  return { r: parseInt(hex.slice(1, 3), 16), g: parseInt(hex.slice(3, 5), 16), b: parseInt(hex.slice(5, 7), 16) };
}

export function rgbToHex({ r, g, b }: RGB): string {
  check([r, g, b], 255);
  return `#${[r, g, b].map((channel) => Math.round(channel).toString(16).padStart(2, "0")).join("").toUpperCase()}`;
}

export function rgbToHsl(rgb: RGB): HSL {
  check([rgb.r, rgb.g, rgb.b], 255);
  const [r, g, b] = [rgb.r, rgb.g, rgb.b].map((v) => v / 255);
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  const delta = max - min;
  const l = (max + min) / 2;
  if (delta === 0) return { h: 0, s: 0, l: l * 100 };
  let h = max === r ? (g - b) / delta : max === g ? (b - r) / delta + 2 : (r - g) / delta + 4;
  h = ((h * 60) + 360) % 360;
  return { h, s: Math.min(100, Math.max(0, delta / (1 - Math.abs(2 * l - 1)) * 100)), l: l * 100 };
}

export function hslToRgb({ h, s, l }: HSL): RGB {
  if (!Number.isFinite(h)) throw new RangeError("Hue must be a finite number.");
  check([s, l], 100);
  const hue = ((h % 360) + 360) % 360 / 60;
  const chroma = (1 - Math.abs(2 * l / 100 - 1)) * s / 100;
  const x = chroma * (1 - Math.abs(hue % 2 - 1));
  const m = l / 100 - chroma / 2;
  const channels = hue < 1 ? [chroma, x, 0] : hue < 2 ? [x, chroma, 0] : hue < 3 ? [0, chroma, x] : hue < 4 ? [0, x, chroma] : hue < 5 ? [x, 0, chroma] : [chroma, 0, x];
  const [r, g, b] = channels.map((value) => Math.round((value + m) * 255));
  return { r, g, b };
}

export const hexToHsl = (hex: string): HSL => rgbToHsl(hexToRgb(hex));
export const hslToHex = (hsl: HSL): string => rgbToHex(hslToRgb(hsl));

export function generatePalette(input: string, type: PaletteType): string[] {
  const hex = parseHex(input);
  if (!hex) throw new Error("Enter a valid 3- or 6-digit HEX color.");
  const hsl = hexToHsl(hex);
  if (type === "Monochromatic") {
    const rgb = hexToRgb(hex);
    // Mix encoded sRGB channels with black (shades) and white (tints).
    const mix = (target: number, amount: number) => rgbToHex({
      r: rgb.r + (target - rgb.r) * amount,
      g: rgb.g + (target - rgb.g) * amount,
      b: rgb.b + (target - rgb.b) * amount
    });
    return [mix(0, 0.6), mix(0, 0.3), hex, mix(255, 0.3), mix(255, 0.6)];
  }
  const offsets = { Complementary: [0, 180], Analogous: [-30, 0, 30], Triadic: [0, 120, 240] }[type];
  if (!offsets) throw new Error("Choose a supported palette type.");
  return offsets.map((offset) => offset === 0 ? hex : hslToHex({ ...hsl, h: hsl.h + offset }));
}

export function randomHex(random: () => number = Math.random): string {
  const value = random();
  if (!Number.isFinite(value) || value < 0 || value >= 1) throw new RangeError("Random value must be in [0, 1).");
  return `#${Math.floor(value * 0x1000000).toString(16).padStart(6, "0").toUpperCase()}`;
}

// Choose black or white using WCAG relative luminance for readable preview text.
export function swatchTextColor(hex: string): string {
  const rgb = hexToRgb(hex);
  const [r, g, b] = [rgb.r, rgb.g, rgb.b].map((v) => {
    const c = v / 255;
    return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return (luminance + 0.05) / 0.05 >= 1.05 / (luminance + 0.05) ? "#000000" : "#FFFFFF";
}
