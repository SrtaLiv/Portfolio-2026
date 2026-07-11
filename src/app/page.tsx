import Hero from "@/components/Hero";
import VersionsSection from "@/components/VersionsSection";
import ConnectionSection from "@/components/ConnectionSection";
import ProjectsSection from "@/components/ProjectsSection";
import TimelineSection from "@/components/TimelineSection";
import AboutSection from "@/components/AboutSection";
import LatestVideos from "@/components/LatestVideos";
import InstagramFeed from "@/components/InstagramFeed";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <main className="flex w-full flex-1 flex-col items-center">
      <Hero />
      <VersionsSection />
      <ConnectionSection />
      <ProjectsSection />
      <TimelineSection />
      <AboutSection />
      <section className="w-full px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <LatestVideos />
          <InstagramFeed />
        </div>
      </section>
      <FinalCTA />
    </main>
  );
}
