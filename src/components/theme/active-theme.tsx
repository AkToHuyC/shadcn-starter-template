"use client";

import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

const DEFAULT_THEME = "default";
const STORAGE_KEY = "active-theme";

type ThemeContextType = {
  activeTheme: string;
  setActiveTheme: (theme: string) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ActiveThemeProvider({
  children,
  initialTheme,
}: {
  children: ReactNode;
  initialTheme?: string;
}) {
  // 1) При инициализации читаем из localStorage (если есть), иначе initialTheme или DEFAULT_THEME
  const [activeTheme, setActiveTheme] = useState<string>(() => {
    if (typeof window === "undefined") return initialTheme || DEFAULT_THEME;
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored || initialTheme || DEFAULT_THEME;
  });

  // 2) При каждом изменении activeTheme сохраняем его
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, activeTheme);
  }, [activeTheme]);

  // 3) Применяем класс к body
  useEffect(() => {
    document.body.classList.forEach(
      (cls) => cls.startsWith("theme-") && document.body.classList.remove(cls),
    );
    document.body.classList.add(`theme-${activeTheme}`);
    if (activeTheme.endsWith("-scaled")) {
      document.body.classList.add("theme-scaled");
    }
  }, [activeTheme]);

  return (
    <ThemeContext.Provider value={{ activeTheme, setActiveTheme }}>
      <div className="theme-container">{children}</div>
    </ThemeContext.Provider>
  );
}

export function useThemeConfig() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      "useThemeConfig must be used within an ActiveThemeProvider",
    );
  }
  return context;
}
