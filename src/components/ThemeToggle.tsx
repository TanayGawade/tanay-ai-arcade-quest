
import React from "react";
import { useTheme } from "../hooks/useTheme";
import { Moon, Sun } from "lucide-react";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gameboy-light dark:bg-gameboy-dark border-2 border-gameboy-dark dark:border-gameboy-accent"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Moon className="h-5 w-5 text-gameboy-accent" />
      ) : (
        <Sun className="h-5 w-5 text-gameboy-dark" />
      )}
    </button>
  );
};

export default ThemeToggle;
