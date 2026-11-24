import { AdSense } from "./AdSense";

export function AdBanner({ slot, format = "auto" }) {
  return <AdSense slot={slot} format={format} />;
}
