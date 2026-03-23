"use client";

type Theme = "light" | "dark";

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
}

function getPreferredTheme(): Theme {
  const storedTheme = window.localStorage.getItem("theme") as Theme | null;
  return storedTheme ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
}

export function ThemeToggle() {
  function toggleTheme() {
    const currentTheme = (document.documentElement.dataset.theme as Theme | undefined) ?? getPreferredTheme();
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
    window.localStorage.setItem("theme", nextTheme);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-button rounded-full px-4 py-2 text-sm font-semibold"
      aria-label="Toggle dark mode"
    >
      Theme
    </button>
  );
}
