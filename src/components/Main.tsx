import { CardsDemo } from "@/components/cardsForTest/all-test-cards.tsx";

export default function Main({ className }: { className?: string }) {
  return (
    <main className={className}>
      <CardsDemo />
    </main>
  );
}
