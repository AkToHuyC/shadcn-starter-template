import { ModeToggle } from "@/components/theme/mode-toggle.tsx";
import { ThemeSelector } from "@/components/theme/theme-selector.tsx";

export default function Header({ className }: { className?: string }) {
  return (
    <header className={className}>
      <h1 className="text-2xl font-bold">Theme Playground</h1>
      <div className="flex gap-4">
        <ModeToggle />
        <ThemeSelector />
      </div>
    </header>
  );
}
