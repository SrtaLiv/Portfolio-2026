import ProjectsSection from "@/components/ProjectsSection";

export const metadata = {
  title: "Proyectos de Olivia Todesco",
  description:
    "Casos reales construidos con Nebula Solutions: plataformas de firmas digitales, marketplaces, PWAs y sistemas de reservas.",
};

export default function ProjectsPage() {
  return (
    <main className="flex w-full flex-1 flex-col items-center pt-32">
      <ProjectsSection />
    </main>
  );
}
