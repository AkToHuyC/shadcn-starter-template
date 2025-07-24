import { CardsActivityGoal } from "@/components/cardsForTest/activity-goal.tsx";
import { CardsCalendar } from "@/components/cardsForTest/calendar.tsx";
import { CardsChat } from "@/components/cardsForTest/chat.tsx";
import { CardsCookieSettings } from "@/components/cardsForTest/cookie-settings.tsx";
import { CardsCreateAccount } from "@/components/cardsForTest/create-account.tsx";
import { CardsExerciseMinutes } from "@/components/cardsForTest/exercise-minutes.tsx";
import { CardsForms } from "@/components/cardsForTest/forms.tsx";
import { CardsPayments } from "@/components/cardsForTest/payments.tsx";
import { CardsReportIssue } from "@/components/cardsForTest/report-issue.tsx";
import { CardsShare } from "@/components/cardsForTest/share.tsx";
import { CardsStats } from "@/components/cardsForTest/stats.tsx";
import { CardsTeamMembers } from "@/components/cardsForTest/team-members.tsx";

export function CardsDemo() {
  return (
    <div className="md:grids-col-2 grid **:data-[slot=card]:shadow-none md:gap-4 lg:grid-cols-10 xl:grid-cols-11">
      <div className="grid gap-4 lg:col-span-4 xl:col-span-6">
        <CardsStats />
        <div className="grid gap-1 sm:grid-cols-[auto_1fr] md:hidden">
          <CardsCalendar />
          <div className="pt-3 sm:pt-0 sm:pl-2 xl:pl-4">
            <CardsActivityGoal />
          </div>
          <div className="pt-3 sm:col-span-2 xl:pt-4">
            <CardsExerciseMinutes />
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          <div className="flex flex-col gap-4">
            <CardsForms />
            <CardsTeamMembers />
            <CardsCookieSettings />
          </div>
          <div className="flex flex-col gap-4">
            <CardsCreateAccount />
            <CardsChat />
            <div className="hidden xl:block">
              <CardsReportIssue />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 lg:col-span-6 xl:col-span-5">
        <div className="hidden gap-1 sm:grid-cols-[auto_1fr] md:grid">
          <CardsCalendar />
          <div className="pt-3 sm:pt-0 sm:pl-2 xl:pl-3">
            <CardsActivityGoal />
          </div>
          <div className="pt-3 sm:col-span-2 xl:pt-3">
            <CardsExerciseMinutes />
          </div>
        </div>
        <div className="hidden md:block">
          <CardsPayments />
        </div>
        <CardsShare />
        <div className="xl:hidden">
          <CardsReportIssue />
        </div>
      </div>
    </div>
  );
}
