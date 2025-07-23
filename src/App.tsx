import { ModeToggle } from "./components/mode-toggle";
import { Button } from "@/components/ui/button.tsx";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Switch } from "@/components/ui/switch.tsx";

export default function App() {
  return (
    <main className="bg-background text-foreground flex min-h-screen flex-col gap-6 p-6">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Theme playground</h1>
        <ModeToggle />
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Просто карточка</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>

          <div className="flex items-center gap-2">
            <Input placeholder="Введите что-нибудь..." className="max-w-xs" />
            <Switch id="demo-switch" />
            <label htmlFor="demo-switch" className="text-sm">
              Switch me
            </label>
          </div>

          <p className="text-muted-foreground">
            Смените тему сверху и посмотрите, как меняются цвета.
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
