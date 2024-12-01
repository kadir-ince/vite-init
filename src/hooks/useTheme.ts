import { useState, useEffect } from "react";

type Theme = "light" | "dark";

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Local storage'dan tema tercihini al, yoksa sistem tercihini kullan
    const savedTheme = localStorage.getItem("theme") as Theme;
    if (savedTheme) return savedTheme;

    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    // Tema değiştiğinde local storage'a kaydet
    localStorage.setItem("theme", theme);
    // HTML element'ine data-theme attribute'u ekle (CSS için kullanılabilir)
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return { theme, toggleTheme };
};
