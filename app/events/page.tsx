import type { Metadata } from "next";
import UploadForm from "@/components/form";

export const metadata: Metadata = {
  title: "Eventos",
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
