"use client";

import { useEffect } from "react";

export function AdBanner({ slot, format = "auto" }) {
  useEffect(() => {
    if (!slot?.trim()) return;
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, [slot, format]);

  if (!slot?.trim()) return null;

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-6068512506766570"
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive="true"
    />
  );
}
