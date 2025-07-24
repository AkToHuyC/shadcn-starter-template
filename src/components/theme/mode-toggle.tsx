"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button.tsx";
import { Moon, Sun } from "lucide-react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const next = theme === "dark" ? "light" : "dark";

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(next)}
      aria-label="Toggle theme"
    >
      <div key={theme} className="inline-block animate-[spin_0.5s_ease-in-out]">
        {theme === "dark" ? (
          <Sun className="h-5 w-5" />
        ) : (
          <Moon className="h-5 w-5" />
        )}
      </div>
    </Button>
  );
}
