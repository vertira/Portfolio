import { useEffect, useState } from "react";

function applyDarkMode(): void {
  document.documentElement.classList.add("dark");
}

function removeDarkMode(): void {
  document.documentElement.classList.remove("dark");
}

export function useTheme(): [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>,
] {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const storedPreference = localStorage.getItem("dark-mode");
    if (storedPreference) {
      return storedPreference === "enabled";
    } else {
      return true;
    }
  });

  useEffect(() => {
    if (isDarkMode) {
      applyDarkMode();
    } else {
      removeDarkMode();
    }

    localStorage.setItem("dark-mode", isDarkMode ? "enabled" : "disabled");
  }, [isDarkMode]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (event: MediaQueryListEvent) => {
      if (!localStorage.getItem("dark-mode")) {
        setIsDarkMode(event.matches);
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return [isDarkMode, setIsDarkMode];
}
