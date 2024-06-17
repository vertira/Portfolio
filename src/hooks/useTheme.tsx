import { useEffect, useState } from "react";

function detectSystemPreference(): boolean {
  return (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
}

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
    }
    return detectSystemPreference();
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
    console.log(mediaQuery);
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
