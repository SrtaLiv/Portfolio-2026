import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import VersionsSection from "@/components/VersionsSection";
import ConnectionSection from "@/components/ConnectionSection";
import ProjectsSection from "@/components/ProjectsSection";
import TimelineSection from "@/components/TimelineSection";
import AboutSection from "@/components/AboutSection";
import ContentSection from "@/components/ContentSection";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex w-full flex-1 flex-col items-center">
        <Hero />
        <Manifesto />
        <VersionsSection />
        <ConnectionSection />
        <ProjectsSection />
        <TimelineSection />
        <AboutSection />
        <ContentSection />
        <FinalCTA />
      </main>
    </>
  );
}
