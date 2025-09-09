import type { Metadata } from "next";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import { GalleryShowcase } from "@/components/ui/galleryShowcase";
import { Project } from "@/components/ui/galleryShowcase";
import UploadForm from "@/components/form";

export const metadata: Metadata = {
  title: "Projetos - Bruno Murer",
  description:
    "Conheça alguns dos projetos que desenvolvi, fazendo pontes entre as ideias e entregas.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <UploadForm />
      </main>
    </div>
  );
}
