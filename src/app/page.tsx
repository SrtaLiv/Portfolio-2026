import Hero from "@/components/Hero";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <main className="flex w-full flex-1 flex-col items-center">
      <Hero />
      <FinalCTA />
    </main>
  );
}
