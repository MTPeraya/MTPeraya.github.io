import { useEffect, useState } from "react";

export function useDarkMode() {
  const getPreferredScheme = () => {
    const stored = localStorage.getItem("theme");
    if (stored) return stored;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  };

  const [theme, setTheme] = useState(getPreferredScheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e) => setTheme(e.matches ? "dark" : "light");
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // ✅ Use functional update to avoid stale state
  const toggleTheme = () =>
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));

  return [theme, toggleTheme];
}

