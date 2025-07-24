import Header from "@/components/Header.tsx";
import Main from "@/components/Main.tsx";

export default function App() {
  return (
    <>
      <Header
        className={
          "bg-background fixed top-0 right-0 left-0 z-10 flex items-center justify-between gap-4 border-b px-8 py-4"
        }
      />
      <Main className={"bg-background p-6 pt-24"} />
    </>
  );
}
