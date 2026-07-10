"use client";

import Script from "next/script";
import { useEffect } from "react";

export function AdsterraSocialBar() {
  const isProd = process.env.NODE_ENV === "production";

  useEffect(() => {
    if (!isProd) return;

    // Watch DOM for Adsterra-injected elements and reposition them to bottom
    const fix = () => {
      // Adsterra Social Bar injects a fixed div — target by z-index and position style
      document.querySelectorAll<HTMLElement>("body > div").forEach((el) => {
        const style = window.getComputedStyle(el);
        if (style.position === "fixed") {
          const top = parseInt(style.top || "0", 10);
          const zIndex = parseInt(style.zIndex || "0", 10);
          // If it's fixed and near top (or high z-index), move to bottom
          if ((top >= 0 && top < 200) || zIndex > 100) {
            el.style.setProperty("top", "auto", "important");
            el.style.setProperty("bottom", "0", "important");
            el.style.setProperty("left", "0", "important");
            el.style.setProperty("right", "0", "important");
            el.style.setProperty("width", "100%", "important");
            el.style.setProperty("z-index", "99999", "important");
          }
        }
      });
    };

    // MutationObserver: watch for Adsterra injecting new nodes into body
    const observer = new MutationObserver(() => {
      fix();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["style", "class"],
    });

    // Also run after delays in case script loads late
    const t1 = setTimeout(fix, 500);
    const t2 = setTimeout(fix, 1500);
    const t3 = setTimeout(fix, 3000);

    return () => {
      observer.disconnect();
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [isProd]);

  // Disabled during AdSense compliance review prep to avoid intrusive floaters/redirects
  return null;
}
