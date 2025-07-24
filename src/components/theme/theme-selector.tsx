"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.tsx";
import { useThemeConfig } from "@/components/theme/active-theme.tsx";
import { Palette } from "lucide-react";
import { Button } from "@/components/ui/button.tsx"; // Импортируем иконку палитры

const DEFAULT_THEMES = [
  { name: "Default", value: "default" },
  { name: "Mono", value: "mono" },
];

const COLOR_THEMES = [
  { name: "Blue", value: "blue" },
  { name: "Green", value: "green" },
  { name: "Amber", value: "amber" },
  { name: "Rose", value: "rose" },
  { name: "Purple", value: "purple" },
  { name: "Orange", value: "orange" },
  { name: "Teal", value: "teal" },
];

export function ThemeSelector({ className }: React.ComponentProps<"div">) {
  const { activeTheme, setActiveTheme } = useThemeConfig();

  return (
    <div className={className}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <Palette />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[200px]">
          <DropdownMenuLabel>Themes</DropdownMenuLabel>
          {DEFAULT_THEMES.map((theme) => (
            <DropdownMenuItem
              key={theme.value}
              onClick={() => setActiveTheme(theme.value)}
              className={theme.value === activeTheme ? "font-semibold" : ""}
            >
              {theme.name}
            </DropdownMenuItem>
          ))}
          <DropdownMenuSeparator />
          <DropdownMenuLabel>Colors</DropdownMenuLabel>
          {COLOR_THEMES.map((theme) => (
            <DropdownMenuItem
              key={theme.value}
              onClick={() => setActiveTheme(theme.value)}
              className={theme.value === activeTheme ? "font-semibold" : ""}
            >
              {theme.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
