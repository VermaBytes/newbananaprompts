"use client";

import { useEffect, useState } from "react";

export function AdsterraBanner300x250() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center my-6">
      <div className="w-[300px] text-left mb-1.5">
        <span className="text-[9px] font-semibold uppercase tracking-wider text-slate-500/50">
          Sponsored Link
        </span>
      </div>
      
      <div 
        className="w-[300px] h-[250px] overflow-hidden bg-slate-500/5 dark:bg-cyan-950/5 flex flex-col items-center justify-center border border-dashed border-cyan-400/10 px-4 text-center"
        style={{ width: "300px", height: "250px" }}
      >
        <p className="theme-text-muted text-[10px] font-bold uppercase tracking-[0.16em]">
          Ad Placement
        </p>
        <p className="theme-text-secondary mt-1.5 text-[11px] leading-relaxed">
          Sponsor area. No tracking scripts active.
        </p>
      </div>
    </div>
  );
}
