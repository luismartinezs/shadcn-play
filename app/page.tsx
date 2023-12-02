import Faq from "@/components/faq";
import { DProgress } from "@/components/DProgress";

export default function Home() {
  return (
    <main className="container max-w-3xl flex flex-col gap-16 py-16">
      <Faq />
      <DProgress stopped />
    </main>
  );
}
