"use client";

import { useEffect, useState } from "react";

const alerts = [
  {
    type: "trending",
    text: "🔥 <strong>Trending:</strong> 142 people are reading <em>Best Free Claude & GPT-4o Alternatives</em> right now.",
  },
  {
    type: "copy",
    text: "📋 <strong>Prompt Copied:</strong> Someone in New Delhi just copied the <em>Cricket Player Selfie with Fan Prompt</em>!",
  },
  {
    type: "course",
    text: "🚀 <strong>AI Academy:</strong> Riya from Pune just completed <em>Lecture 02 of Web Development with AI</em>.",
  },
  {
    type: "art",
    text: "✨ <strong>Devotional Art:</strong> 48 creators just generated <em>Mata Rani & Krishna Devotional AI images</em>.",
  },
  {
    type: "english",
    text: "💬 <strong>English Practice:</strong> Aman from Noida is practicing with <em>ChatGPT English Conversation Coach</em>.",
  },
  {
    type: "reel",
    text: "🎥 <strong>Viral Video:</strong> A creator just designed an AI reel using the <em>Luma & Runway guide</em>.",
  },
  {
    type: "compression",
    text: "⚡ <strong>Fast Conversion:</strong> Someone just optimized a blog banner using the <em>ILoveIMG guide</em>.",
  },
  {
    type: "seo",
    text: "💡 <strong>SEO Pro Tip:</strong> Use tables and bullet lists in your articles for 5x better ChatGPT Search indexing!",
  }
];

export function FloatingWidgets() {
  const [mounted, setMounted] = useState(false);
  const [alertIndex, setAlertIndex] = useState(0);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Initial alert delay
    const initialTimeout = setTimeout(() => {
      setShowAlert(true);
    }, 4000);

    // Dynamic notification interval loop (runs every 10 seconds: shows for 5.5s, hides, then shows next)
    const alertInterval = setInterval(() => {
      setShowAlert(false);
      
      // Delay before showing the next one
      setTimeout(() => {
        setAlertIndex((prevIndex) => (prevIndex + 1) % alerts.length);
        setShowAlert(true);
      }, 4500); // 4.5s hidden state
    }, 10000); // 10s loop

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(alertInterval);
    };
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* ==========================================
          BOTTOM RIGHT: FLOATING SOCIAL ICONS VERTICAL STACK
          ========================================== */}
      <div className="fixed bottom-6 right-5 z-[9999] flex flex-row gap-4">
        
        {/* WhatsApp */}
        <a
          href="https://wa.me/918381900000?text=Hi%20Shobhit,%20I%20have%20a%20question%20about%20NB%20Prompts!"
          target="_blank"
          rel="noreferrer"
          className="group flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-green-500/50 cursor-pointer"
          aria-label="Chat on WhatsApp"
          title="Chat on WhatsApp"
        >
          {/* SVG WhatsApp (FA look) */}
          <svg className="w-8 h-8 fill-current" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
          </svg>
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/vermabanker?igsh=bWN4cGcyYXhkMW8x"
          target="_blank"
          rel="noreferrer"
          className="group flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 text-white shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer"
          aria-label="Follow us on Instagram"
          title="Follow us on Instagram"
        >
          {/* SVG Instagram (FA look) */}
          <svg className="w-8 h-8 fill-current" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.8 9.9 67.6 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
          </svg>
        </a>

        {/* YouTube */}
        <a
          href="https://www.youtube.com/@ShobhitManar"
          target="_blank"
          rel="noreferrer"
          className="group flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-red-500/50 cursor-pointer"
          aria-label="Subscribe on YouTube"
          title="Subscribe on YouTube"
        >
          {/* SVG YouTube (FA look) */}
          <svg className="w-8 h-8 fill-current" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
            <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.537V175.185l142.739 81.205-142.74 81.23z"/>
          </svg>
        </a>
      </div>

      {/* ==========================================
          BOTTOM LEFT: DYNAMIC ENTERPRISE SOCIAL PROOF POPUP WIDGET
          ========================================== */}
      <div
        className={`fixed bottom-6 left-6 z-40 max-w-sm w-[320px] rounded-none border border-[#eadfce] dark:border-cyan-400/20 bg-white/95 dark:bg-[#1e1713]/95 p-3.5 shadow-[0_10px_35px_rgba(55,36,24,0.15)] dark:shadow-[0_15px_40px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all duration-500 ease-in-out ${
          showAlert ? "translate-y-0 opacity-100 scale-100" : "translate-y-6 opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="flex items-start gap-2.5">
          {/* LOGO INDICATOR */}
          <div className="relative shrink-0 w-8 h-8 rounded-none border border-cyan-400/10 overflow-hidden">
            <img src="/main-logo.png" alt="NB Indicator" className="w-full h-full object-cover" />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white dark:border-slate-950 animate-pulse" />
          </div>

          {/* NOTIFICATION TEXT */}
          <div className="flex-1 min-w-0">
            <p className="text-[10px] uppercase font-extrabold tracking-wider text-cyan-600 dark:text-cyan-400">
              Live updates
            </p>
            <p
              className="mt-1 text-slate-800 dark:text-slate-200 text-[11px] leading-relaxed"
              dangerouslySetInnerHTML={{ __html: alerts[alertIndex].text }}
            />
          </div>

          {/* CLOSE BUTTON */}
          <button
            type="button"
            onClick={() => setShowAlert(false)}
            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 shrink-0 text-sm focus:outline-none transition-colors cursor-pointer"
            aria-label="Dismiss alert"
          >
            ×
          </button>
        </div>
      </div>
    </>
  );
}
