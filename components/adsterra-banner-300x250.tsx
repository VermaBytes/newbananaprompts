"use client";

import { useEffect, useState } from "react";

export function AdsterraBanner300x250() {
  const isProd = process.env.NODE_ENV === "production";
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    if (!isProd) return;

    const containerId = "adsterra-banner-300x250-container";
    const container = document.getElementById(containerId);
    if (!container) {
      console.warn("Adsterra Banner 300x250: Ad container not found!");
      return;
    }
    console.log("Adsterra Banner 300x250: Ad container found.");
    console.log("Adsterra Banner 300x250: Banner 300x250 initialized.");

    // Clear container to prevent duplicate script execution or duplicate ads
    container.innerHTML = "";

    // Set the global atOptions configuration object required by Adsterra invoke.js
    (window as any).atOptions = {
      key: "5ab85ea4a2cd6db679e6e88c7e2b871d",
      format: "iframe",
      height: 250,
      width: 300,
      params: {},
    };

    // Create and append the invoke script directly inside the container
    const script = document.createElement("script");
    script.src = "https://www.highperformanceformat.com/5ab85ea4a2cd6db679e6e88c7e2b871d/invoke.js";
    script.async = true;

    script.onload = () => {
      console.log("Adsterra Banner 300x250: Adsterra script loaded successfully.");
    };
    script.onerror = (e) => {
      console.error("Adsterra Banner 300x250: Failed to load Adsterra script.", e);
    };

    container.appendChild(script);

    return () => {
      container.innerHTML = "";
    };
  }, [isProd]);

  // Enforce absolute layout dimensions (300x250) under all states to prevent CLS
  return (
    <div className="w-full flex flex-col items-center justify-center my-6">
      <div className="w-[300px] text-left mb-1.5">
        <span className="text-[9px] font-semibold uppercase tracking-wider text-slate-400/60 dark:text-slate-500/60">
          Advertisement
        </span>
      </div>
      
      <div 
        className="w-[300px] h-[250px] overflow-hidden bg-transparent shadow-sm border border-slate-500/5"
        style={{ width: "300px", height: "250px" }}
      >
        {!mounted ? (
          // Pre-mount / SSR placeholder matching size
          <div className="w-full h-full bg-slate-500/5 animate-pulse" />
        ) : !isProd ? (
          // Development placeholder
          <div className="w-full h-full flex flex-col items-center justify-center border border-dashed border-cyan-400/20 bg-slate-950/20 px-4 text-center">
            <p className="theme-text-muted text-[10px] font-bold uppercase tracking-[0.16em]">
              Adsterra 300x250 Ad
            </p>
            <p className="theme-text-secondary mt-1.5 text-[11px] leading-relaxed">
              Live banner iframe will inject here in production.
            </p>
          </div>
        ) : (
          // Production ad container
          <div id="adsterra-banner-300x250-container" className="w-full h-full" />
        )}
      </div>
    </div>
  );
}
