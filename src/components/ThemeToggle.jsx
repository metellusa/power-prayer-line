import React from "react";
import { Moon, Sun } from "lucide-react";
import useLocalStorage from "../hooks/useLocalStorage";

export default function ThemeToggle() {
  const [theme, setTheme] = useLocalStorage("ppl-theme", "light");

  React.useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
  }, [theme]);

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="glass rounded-2xl px-3 py-2 text-sm font-semibold text-power-ink dark:text-white hover:bg-white/80 dark:hover:bg-white/10 transition"
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      <span className="inline-flex items-center gap-2">
        {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        {isDark ? "Light" : "Dark"}
      </span>
    </button>
  );
}
