'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type ColorOption = 'blue' | 'emerald' | 'violet' | 'teal' | 'amber' | 'rose';
export type Mode = 'light' | 'dark';

interface ThemeContextType {
  primaryColor: ColorOption;
  mode: Mode;
  setPrimaryColor: (color: ColorOption) => void;
  toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const colorClasses: Record<
  ColorOption,
  {
    bg: string;
    text: string;
    border: string;
    hover: string;
    gradient: string;
  }
> = {
  blue: {
    bg: "bg-blue-600",
    text: "text-blue-600",
    border: "border-blue-600",
    hover: "hover:bg-blue-700",
    gradient: "from-blue-600 via-blue-700 to-blue-800",
  },
  emerald: {
    bg: "bg-emerald-600",
    text: "text-emerald-600",
    border: "border-emerald-600",
    hover: "hover:bg-emerald-700",
    gradient: "from-emerald-600 via-emerald-700 to-emerald-800",
  },
  violet: {
    bg: "bg-violet-600",
    text: "text-violet-600",
    border: "border-violet-600",
    hover: "hover:bg-violet-700",
    gradient: "from-violet-600 via-violet-700 to-violet-900",
  },
  teal: {
    bg: "bg-teal-600",
    text: "text-teal-600",
    border: "border-teal-600",
    hover: "hover:bg-teal-700",
    gradient: "from-teal-600 via-teal-700 to-teal-800",
  },
  amber: {
    bg: "bg-amber-600",
    text: "text-amber-600",
    border: "border-amber-600",
    hover: "hover:bg-amber-700",
    gradient: "from-amber-500 via-amber-600 to-amber-700",
  },
  rose: {
    bg: "bg-rose-600",
    text: "text-rose-600",
    border: "border-rose-600",
    hover: "hover:bg-rose-700",
    gradient: "from-rose-600 via-rose-700 to-rose-800",
  },
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [primaryColor, setPrimaryColor] = useState<ColorOption>('blue');
  const [mode, setMode] = useState<Mode>('light');

  useEffect(() => {
    const savedMode = localStorage.getItem("theme-mode") as Mode;
    const savedColor = localStorage.getItem("primary-color") as ColorOption;
    if (savedMode) setMode(savedMode);
    if (savedColor) setPrimaryColor(savedColor);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme-mode", mode);
    document.documentElement.classList.toggle("dark", mode === "dark");
  }, [mode]);

  useEffect(() => {
    localStorage.setItem("primary-color", primaryColor);
  }, [primaryColor]);

  const toggleMode = () => setMode(prev => (prev === 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider value={{ primaryColor, mode, setPrimaryColor, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
}
