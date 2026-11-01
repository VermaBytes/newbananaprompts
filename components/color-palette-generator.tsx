"use client";

import { useRef, useState, type FormEvent } from "react";
import { generatePalette, hexToRgb, hexToHsl, hslToHex, rgbToHex, paletteTypes, parseHex, randomHex, swatchTextColor, type PaletteType } from "@/lib/color-palette";

const control = "theme-input w-full min-w-0 p-3 text-base focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700";
const button = "theme-button px-4 py-3 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 disabled:opacity-50";
const presets = ["#0F766E", "#FF7A59", "#FDF574", "#2563EB", "#9333EA", "#111827"];

export function ColorPaletteGenerator() {
  const [active, setActive] = useState("#0F766E");
  const [hexInput, setHexInput] = useState(active);
  const [rgbInput, setRgbInput] = useState(["15", "118", "110"]);
  const [hslInput, setHslInput] = useState(["175.34", "77.44", "26.08"]);
  const [type, setType] = useState<PaletteType>("Complementary");
  const [error, setError] = useState("");
  const [errorSource, setErrorSource] = useState("");
  const [feedback, setFeedback] = useState("");
  const [manualCopy, setManualCopy] = useState("");
  const [copying, setCopying] = useState(false);
  const attempt = useRef(0);
  const fallback = useRef<HTMLTextAreaElement>(null);
  const rgb = hexToRgb(active), hsl = hexToHsl(active);
  const palette = generatePalette(active, type);
  const round = (value: number) => Math.round(value * 100) / 100;

  function select(hex: string) {
    attempt.current++;
    setCopying(false);
    setActive(hex);
    setHexInput(hex);
    const nextRgb = hexToRgb(hex), nextHsl = hexToHsl(hex);
    setRgbInput([nextRgb.r, nextRgb.g, nextRgb.b].map(String));
    setHslInput([nextHsl.h, nextHsl.s, nextHsl.l].map((value) => String(round(value))));
    setError(""); setErrorSource(""); setFeedback(`Active color: ${hex}. Palette updated.`); setManualCopy("");
  }

  function apply(event: FormEvent, source: "hex" | "rgb" | "hsl") {
    event.preventDefault();
    try {
      if (source === "hex") {
        const parsed = parseHex(hexInput);
        if (!parsed) throw new Error("Enter 3 or 6 hexadecimal digits (0–9, A–F), with an optional #. Alpha values and color names are not supported.");
        select(parsed);
      } else {
        const inputs = source === "rgb" ? rgbInput : hslInput;
        if (inputs.some((v) => !v.trim())) throw new Error("Complete all three color channels.");
        const [a, b, c] = inputs.map(Number);
        if (source === "rgb") {
          if (![a, b, c].every(Number.isInteger)) throw new Error("RGB channels must be whole numbers between 0 and 255.");
          select(rgbToHex({ r: a, g: b, b: c }));
        } else {
          if (!Number.isFinite(a) || a < 0 || a > 360) throw new Error("Hue must be between 0 and 360 degrees.");
          select(hslToHex({ h: a, s: b, l: c }));
        }
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Check your color values.");
      setErrorSource(source);
      setFeedback("");
    }
  }

  async function copy(text: string, label: string) {
    const current = ++attempt.current;
    setCopying(true); setManualCopy(""); setFeedback("");
    try {
      await navigator.clipboard.writeText(text);
      if (current === attempt.current) setFeedback(`${label} copied to clipboard.`);
    } catch {
      if (current === attempt.current) {
        setManualCopy(text);
        setFeedback("Clipboard access is unavailable. Use the manual copy field below.");
      }
    } finally {
      if (current === attempt.current) setCopying(false);
    }
  }

  function channelFields(source: "rgb" | "hsl", values: string[], labels: string[]) {
    return <div className="grid grid-cols-3 gap-3">{labels.map((label, index) => <div key={label} className="min-w-0 space-y-2">
      <label htmlFor={`${source}-${index}`} className="block text-sm font-semibold">{label}</label>
      <input id={`${source}-${index}`} type="number" min={0} max={source === "rgb" ? 255 : index === 0 ? 360 : 100} step={source === "rgb" ? 1 : "any"} value={values[index]} className={control} aria-invalid={errorSource === source} aria-describedby={errorSource === source ? "color-error" : `${source}-help`} onChange={(event) => {
        const next = [...values]; next[index] = event.target.value;
        (source === "rgb" ? setRgbInput : setHslInput)(next);
        setError(""); setErrorSource("");
      }} />
    </div>)}</div>;
  }

  return <div className="space-y-8">
    <div className="grid items-start gap-6 lg:grid-cols-2">
      <section className="site-panel min-w-0 space-y-6 p-5 sm:p-7" aria-labelledby="color-input-heading">
        <h2 id="color-input-heading" className="text-xl font-bold">Choose or convert a color</h2>
        <form noValidate onSubmit={(e) => apply(e, "hex")} className="space-y-3">
          <label htmlFor="color-hex" className="block font-semibold">HEX color</label>
          <input id="color-hex" value={hexInput} maxLength={30} spellCheck={false} autoComplete="off" placeholder="#0F766E or #ABC" className={control} aria-invalid={errorSource === "hex"} aria-describedby={errorSource === "hex" ? "hex-help color-error" : "hex-help"} onChange={(e) => { setHexInput(e.target.value); setError(""); setErrorSource(""); }} />
          <p id="hex-help" className="theme-text-secondary text-sm">Enter 3 or 6 HEX digits, then apply. The preview keeps the last valid color while you edit.</p>
          <div className="flex flex-wrap gap-3"><button className={button} type="submit">Apply HEX</button><button className={button} type="button" onClick={() => select(randomHex())}>Random Color</button></div>
        </form>
        <form noValidate onSubmit={(e) => apply(e, "rgb")} className="space-y-3">
          <h3 className="font-bold">RGB to HEX</h3>
          {channelFields("rgb", rgbInput, ["Red", "Green", "Blue"])}
          <p id="rgb-help" className="theme-text-secondary text-sm">Each RGB channel uses a whole number from 0 to 255.</p>
          <button type="submit" className={button}>Apply RGB</button>
        </form>
        <form noValidate onSubmit={(e) => apply(e, "hsl")} className="space-y-3">
          <h3 className="font-bold">HSL to HEX</h3>
          {channelFields("hsl", hslInput, ["Hue (°)", "Saturation (%)", "Lightness (%)"])}
          <p id="hsl-help" className="theme-text-secondary text-sm">Hue: 0–360°. Saturation and lightness: 0–100%. Conversion rounds to 8-bit RGB.</p>
          <button type="submit" className={button}>Apply HSL</button>
        </form>
        {error && <p id="color-error" role="alert" className="theme-accent-text font-semibold">{error}</p>}
      </section>
      <section className="theme-card min-w-0 space-y-5 p-5 sm:p-7" aria-labelledby="preview-heading">
        <h2 id="preview-heading" className="text-xl font-bold">Active color</h2>
        <div className="flex min-h-48 items-center justify-center border border-black/20 p-6 text-center font-mono text-2xl font-bold" style={{ backgroundColor: active, color: swatchTextColor(active) }}>{active}</div>
        <dl className="space-y-3 break-words text-sm"><div><dt className="font-bold">HEX</dt><dd className="theme-text-secondary font-mono">{active}</dd></div><div><dt className="font-bold">RGB</dt><dd className="theme-text-secondary font-mono">rgb({rgb.r}, {rgb.g}, {rgb.b})</dd></div><div><dt className="font-bold">HSL</dt><dd className="theme-text-secondary font-mono">hsl({round(hsl.h)}, {round(hsl.s)}%, {round(hsl.l)}%)</dd></div></dl>
        <button type="button" disabled={copying} className={button} onClick={() => copy(active, active)}>Copy Active HEX</button>
        <h3 className="font-bold">Useful presets</h3>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">{presets.map((hex) => <button type="button" key={hex} className={`${button} flex items-center gap-2 px-2`} aria-label={`Select preset ${hex}`} aria-pressed={active === hex} onClick={() => select(hex)}><span aria-hidden="true" className="h-6 w-6 shrink-0 border border-black/20" style={{ backgroundColor: hex }} /><span className="font-mono text-xs">{hex}</span></button>)}</div>
      </section>
    </div>
    <section className="space-y-5" aria-labelledby="palette-heading">
      <h2 id="palette-heading" className="text-2xl font-bold">Your color palette</h2>
      <div className="flex flex-wrap items-end gap-4">
        <div className="w-full max-w-xs space-y-2"><label htmlFor="palette-type" className="block font-semibold">Palette type</label><select id="palette-type" value={type} className={control} onChange={(e) => { attempt.current++; setCopying(false); setType(e.target.value as PaletteType); setFeedback("Palette type updated."); setManualCopy(""); }}>{paletteTypes.map((name) => <option key={name}>{name}</option>)}</select></div>
        <button type="button" disabled={copying} className={button} onClick={() => copy(palette.join(", "), `${type} palette`)}>Copy Entire Palette</button>
      </div>
      <p className="theme-text-secondary text-sm">Select a swatch to make it active and rebuild the palette around it. For monochromatic palettes, the order is 60% shade, 30% shade, original, 30% tint, 60% tint.</p>
      <ul className="grid gap-4 sm:grid-cols-3 lg:grid-cols-5">{palette.map((hex, index) => <li key={`${index}-${hex}`} className="theme-card min-w-0 border p-3">
        <button type="button" className="flex min-h-36 w-full items-center justify-center border border-black/20 p-3 font-mono font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700" style={{ backgroundColor: hex, color: swatchTextColor(hex) }} aria-label={`Select palette color ${index + 1}: ${hex}`} aria-pressed={active === hex} onClick={() => select(hex)}>{hex}</button>
        <button type="button" disabled={copying} className={`${button} mt-3 w-full px-2`} onClick={() => copy(hex, hex)}>Copy {hex}</button>
      </li>)}</ul>
    </section>
    <div className="space-y-3"><p role="status" aria-live="polite" className="theme-kicker min-h-6 font-semibold">{feedback}</p>
      {manualCopy && <div className="space-y-2"><label htmlFor="manual-palette-copy" className="block font-semibold">Manual copy: select this text, then use your device&apos;s Copy command</label><textarea ref={fallback} id="manual-palette-copy" readOnly value={manualCopy} rows={3} className={control} onFocus={(e) => e.target.select()} /><button type="button" className={button} onClick={() => { fallback.current?.focus(); fallback.current?.select(); }}>Select Copy Text</button></div>}
    </div>
    <noscript>This color tool requires JavaScript for conversions, palette generation, and copy actions.</noscript>
  </div>;
}
