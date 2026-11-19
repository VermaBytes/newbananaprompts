"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    setMounted(true);
    // Determine the initial theme from HTML dataset or localStorage
    const docTheme = document.documentElement.dataset.theme as Theme | undefined;
    if (docTheme) {
      setTheme(docTheme);
    } else {
      const storedTheme = localStorage.getItem("theme") as Theme | null;
      setTheme(storedTheme || "light");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("theme", nextTheme);
  };

  if (!mounted) {
    // Return a placeholder with the same dimensions to prevent layout shift
    return <div className="w-9 h-9" />;
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="flex items-center justify-center w-9 h-9 rounded-none border-none bg-transparent text-slate-300 hover:text-white dark:text-slate-400 dark:hover:text-white transition-all duration-300 outline-none focus:outline-none focus:ring-0 cursor-pointer"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        // SUN ICON (Displays in Dark Mode, click to switch to Light)
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 text-amber-400 hover:scale-110 transition-transform duration-300"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </svg>
      ) : (
        // MOON ICON (Displays in Light Mode, click to switch to Dark)
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 text-cyan-400 hover:rotate-12 hover:scale-110 transition-transform duration-300"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      )}
    </button>
  );
}
