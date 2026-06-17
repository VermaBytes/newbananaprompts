"use client";

import Script from "next/script";

export function AdsterraSocialBar() {
  // Load only in production mode
  const isProd = process.env.NODE_ENV === "production";

  if (!isProd) {
    return null;
  }

  return (
    <>
      <Script
        id="adsterra-social-bar"
        src="https://pl29743509.effectivecpmnetwork.com/81/f0/37/81f037d2ec9b0be98144b43f0a4ecc9b.js"
        strategy="lazyOnload"
        onLoad={() => {
          // After Adsterra script loads, find its container and force it to bottom
          const fixPosition = () => {
            const selectors = [
              'div[id^="adsterra"]',
              'div[class*="social"]',
              'div[class*="bar"]',
              'iframe[src*="effectivecpmnetwork"]',
              'iframe[src*="adsterra"]',
            ];
            selectors.forEach((sel) => {
              document.querySelectorAll<HTMLElement>(sel).forEach((el) => {
                el.style.setProperty("position", "fixed", "important");
                el.style.setProperty("bottom", "0", "important");
                el.style.setProperty("top", "auto", "important");
                el.style.setProperty("left", "0", "important");
                el.style.setProperty("right", "0", "important");
                el.style.setProperty("width", "100%", "important");
                el.style.setProperty("z-index", "9999", "important");
                el.style.setProperty("margin", "0", "important");
              });
            });
          };
          // Run immediately and after short delay for async injection
          fixPosition();
          setTimeout(fixPosition, 500);
          setTimeout(fixPosition, 1500);
        }}
      />
    </>
  );
}
