"use client";

import Script from "next/script";

export function AdsterraSocialBar() {
  // Load only in production mode
  const isProd = process.env.NODE_ENV === "production";

  if (!isProd) {
    // In development mode, log configuration and return null
    return null;
  }

  return (
    <Script
      id="adsterra-social-bar"
      src="https://pl29743509.effectivecpmnetwork.com/81/f0/37/81f037d2ec9b0be98144b43f0a4ecc9b.js"
      strategy="lazyOnload"
    />
  );
}
