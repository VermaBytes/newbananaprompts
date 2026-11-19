"use client";

import { useEffect, useRef } from "react";

export function AdsterraBanner300x250() {
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!bannerRef.current) return;
    bannerRef.current.innerHTML = "";

    const atOptionsScript = document.createElement("script");
    atOptionsScript.type = "text/javascript";
    atOptionsScript.text = `
      atOptions = {
        'key' : '5ab85ea4a2cd6db679e6e88c7e2b871d',
        'format' : 'iframe',
        'height' : 250,
        'width' : 300,
        'params' : {}
      };
    `;

    const invokeScript = document.createElement("script");
    invokeScript.type = "text/javascript";
    invokeScript.src = "https://www.highrevenueformat.com/5ab85ea4a2cd6db679e6e88c7e2b871d/invoke.js";

    bannerRef.current.appendChild(atOptionsScript);
    bannerRef.current.appendChild(invokeScript);
  }, []);

  return (
    <div className="my-6 flex justify-center">
      <div ref={bannerRef} className="h-[250px] w-[300px] min-h-[250px]" />
    </div>
  );
}
