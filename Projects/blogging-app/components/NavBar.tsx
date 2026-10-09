"use client";

import { useSyncExternalStore } from "react";

const subscribe = (callback: () => void) => {
  window.addEventListener("themechange", callback);
  return () => window.removeEventListener("themechange", callback);
};

const NavBar = () => {
  const isDark = useSyncExternalStore(
    subscribe,
    () => document.documentElement.classList.contains("dark"),
    () => false,
  );

  const toggleTheme = () => {
    const next = !isDark;
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    window.dispatchEvent(new Event("themechange"));
  };

  return (
    <nav className="flex items-center justify-between border-b border-border px-6 py-4">
      <span className="text-lg font-semibold">Blogging App</span>
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
        className="rounded-md border border-border bg-surface px-3 py-1.5 text-sm text-foreground hover:bg-border"
      >
        {isDark ? "Light" : "Dark"}
      </button>
    </nav>
  );
};

export default NavBar;
