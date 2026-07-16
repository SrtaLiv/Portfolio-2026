import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import ConnectionSection from "@/components/ConnectionSection";
import ProjectsSection from "@/components/ProjectsSection";
import TimelineSection from "@/components/TimelineSection";
import AboutSection from "@/components/AboutSection";
import ToolsSection from "@/components/ToolsSection";
import HelpSection from "@/components/HelpSection";
import ContentSection from "@/components/ContentSection";

export default function Home() {
  return (
    <main className="flex w-full flex-1 flex-col items-center">
      <Hero />
      <Manifesto />
      <ConnectionSection />
      <ProjectsSection />
      <TimelineSection />
      <AboutSection />
      <ToolsSection />
      <HelpSection />
      <ContentSection />
    </main>
  );
}
