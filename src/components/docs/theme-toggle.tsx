"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className="p-2 rounded-md border"
      >
        <Sun size={18} className="opacity-0" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={() =>
        setTheme(resolvedTheme === "dark" ? "light" : "dark")
      }
      aria-label="Toggle theme"
      className="p-2 rounded-md border"
    >
      {resolvedTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
