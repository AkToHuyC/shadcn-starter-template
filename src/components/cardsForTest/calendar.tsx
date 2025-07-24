"use client";

import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";

const start = new Date(2025, 5, 5);

export function CardsCalendar() {
  const today = new Date();
  console.log("Сегодня:", today.toLocaleDateString("ru-RU")); // Форматируем текущую дату

  const futureDate = new Date(today);
  futureDate.setDate(today.getDate() + 5);
  console.log("Дата через 5 дней:", futureDate.toLocaleDateString("ru-RU")); // Добавляем 5 дней

  return (
    <Card className="hidden max-w-[260px] p-0 sm:flex">
      <CardContent className="p-0">
        <Calendar
          numberOfMonths={1}
          mode="range"
          defaultMonth={start}
          selected={{
            from: start,
            to: new Date(
              start.getFullYear(),
              start.getMonth(),
              start.getDate() + 8,
            ),
          }}
        />
      </CardContent>
    </Card>
  );
}
