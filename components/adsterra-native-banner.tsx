"use client";

import { useEffect, useRef } from "react";

export function AdsterraNativeBanner() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.innerHTML = "";

    const script = document.createElement("script");
    script.async = true;
    script.setAttribute("data-cfasync", "false");
    script.src = "https://pl29743808.profitableratecpmnetwork.com/9be433988f3627bdbebe4a665d1a9614/invoke.js";

    const containerDiv = document.createElement("div");
    containerDiv.id = "container-9be433988f3627bdbebe4a665d1a9614";

    containerRef.current.appendChild(script);
    containerRef.current.appendChild(containerDiv);
  }, []);

  return (
    <div className="my-6 flex justify-center overflow-hidden">
      <div ref={containerRef} />
    </div>
  );
}
