"use client";

import { useEffect, useState } from "react";

export function AdsterraNativeBanner() {
  const isProd = process.env.NODE_ENV === "production";
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    console.log("Adsterra Native Banner: Mounted status set to true.");
  }, []);

  useEffect(() => {
    if (!mounted) return;
    console.log("Adsterra Native Banner: Mounted, checking for container...");

    if (!isProd) {
      console.log("Adsterra Native Banner: Development mode - skipping live script injection.");
      return;
    }

    const containerId = "container-9be433988f3627bdbebe4a665d1a9614";
    const container = document.getElementById(containerId);
    if (!container) {
      console.warn("Adsterra Native Banner: Ad container not found!");
      return;
    }
    console.log("Adsterra Native Banner: Ad container found.");
    console.log("Adsterra Native Banner: Native Banner initialized.");

    // Clear any previous elements to prevent duplicate script injection or duplicate ads
    container.innerHTML = "";

    // Create and append the ad script directly inside the container
    const script = document.createElement("script");
    script.src = "https://pl29743508.effectivecpmnetwork.com/9be433988f3627bdbebe4a665d1a9614/invoke.js";
    script.async = true;
    script.setAttribute("data-cfasync", "false");

    script.onload = () => {
      console.log("Adsterra Native Banner: Adsterra script loaded successfully.");
    };
    script.onerror = (e) => {
      console.error("Adsterra Native Banner: Failed to load Adsterra script.", e);
    };

    container.appendChild(script);

    return () => {
      container.innerHTML = "";
    };
  }, [mounted, isProd]);

  if (!mounted) {
    // Reserved space to avoid layout shift (CLS) during SSR hydration
    return (
      <div className="w-full min-h-[160px] flex items-center justify-center border border-dashed border-slate-700/10 bg-slate-500/5 my-6">
        <span className="text-xs text-slate-400">Advertisement</span>
      </div>
    );
  }

  if (!isProd) {
    // Beautiful mock placeholder card in development mode
    return (
      <aside className="w-full min-h-[160px] flex flex-col items-center justify-center rounded-none border border-dashed border-cyan-400/20 bg-slate-950/20 py-8 text-center my-6">
        <p className="theme-text-muted text-[10px] font-bold uppercase tracking-[0.24em]">Adsterra Native Banner (Dev Placeholder)</p>
        <p className="theme-text-secondary mt-2 text-xs">This ad placement will load live native banners in production mode.</p>
      </aside>
    );
  }

  return (
    <div className="w-full my-6">
      <div className="text-left mb-1.5">
        <span className="text-[9px] font-semibold uppercase tracking-wider text-slate-400/60 dark:text-slate-500/60">Advertisement</span>
      </div>
      <div 
        id="container-9be433988f3627bdbebe4a665d1a9614" 
        className="w-full min-h-[160px] bg-transparent"
      />
    </div>
  );
}
