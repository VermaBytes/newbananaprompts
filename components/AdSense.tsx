"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle?: Record<string, unknown>[];
  }
}

type AdSenseProps = {
  slot: string;
  className?: string;
};

export function AdSense({ slot, className = "" }: AdSenseProps) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      if (process.env.NODE_ENV === "development") {
        console.warn("AdSense unit could not initialize.", error);
      }
    }
  }, [slot]);

  if (!slot.trim()) return null;

  return (
    <ins
      className={`adsbygoogle block ${className}`.trim()}
      style={{ display: "block" }}
      data-ad-client="ca-pub-7598958516745914"
      data-ad-slot={slot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}
