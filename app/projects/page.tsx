import type { Metadata } from "next";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import { GalleryShowcase } from "@/components/ui/galleryShowcase";
import { Project } from "@/components/ui/galleryShowcase";

export const metadata: Metadata = {
  title: "Projetos - Bruno Murer",
  description:
    "Conheça alguns dos projetos que desenvolvi, fazendo pontes entre as ideias e entregas.",
};

const projects: Project[] = [
  {
    id: "1",
    title: "Placeholder",
    description: "Placeholder description.",
    imageUrl: "/placeholder.png",
    imageAlt: "Placeholder",
    tags: ["Placeholder"],
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <GalleryShowcase
          items={projects}
          title="Meus trabalhos"
          description="Conheça alguns dos meus trabalhos."
        />
      </main>
    </div>
  );
}
