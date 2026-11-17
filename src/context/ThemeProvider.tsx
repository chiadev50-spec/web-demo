import { useEffect, useState, useMemo, useCallback, type ReactNode } from "react";
import { ThemeContext, type Theme } from "./theme-context";

export interface ThemeProviderProps {
  children: ReactNode;
}

// [MARK: ThemeProvider Component with localStorage persistence, error boundary safety, and memoized context]
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("theme") as Theme | null;
        if (saved === "light" || saved === "dark") {
          return saved;
        }
        if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
          return "light";
        }
      } catch {
        // Fallback if localStorage or matchMedia is inaccessible
      }
    }
    return "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    try {
      localStorage.setItem("theme", theme);
    } catch {
      // Ignore localStorage write failures (e.g. private mode)
    }
  }, [theme]);

  // Sync with OS theme changes if user has not explicitly saved a manual preference
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      try {
        const hasSaved = localStorage.getItem("theme");
        if (!hasSaved) {
          setTheme(e.matches ? "dark" : "light");
        }
      } catch {
        setTheme(e.matches ? "dark" : "light");
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
      isDark: theme === "dark",
    }),
    [theme, toggleTheme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
