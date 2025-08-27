import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { GalleryShowcase } from "@/components/ui/gallery-showcase";
import { Project } from "@/components/ui/gallery-showcase";

export const metadata: Metadata = {
  title: "Projetos - Bruno Murer",
  description:
    "Conheça alguns dos projetos que desenvolvi, fazendo pontes entre as ideias e entregas.",
};

const projects: Project[] = [
  {
    id: "1",
    title: "Team Planner",
    description: "Aplicativo para controle de times durante sprints.",
    imageUrl: "/team_planner.png",
    imageAlt: "Team Planner",
    tags: ["Next.js", "Mongo", "Tailwind CSS", "TypeScript", "OpenAI-SDK"],
  },
  {
    id: "2",
    title: "Nex Gen",
    description:
      "Poderoso gerador de interfaces que aplica os melhores padrões de design e código atraves de um prompt.",
    imageUrl: "/nex_gen.png",
    imageAlt: "Nex Gen",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    id: "3",
    title: "Intelo",
    description:
      "Aplicação desenvolvida em um final de semana que acabou em segunda colocada no Startup Weekend Chapecó IA.",
    imageUrl: "/intelo.png",
    imageAlt: "Intelo",
    tags: ["React", "Tailwind CSS", "TypeScript", "OpenAI-SDK"],
  },

  {
    id: "4",
    title: "GPT-CLI",
    description:
      "Interface para uso de chaves de api da open-ai para os assistants",
    imageUrl: "/gpt_cli.png",
    imageAlt: "GPT-CLI",
    tags: ["OpenAI-SDK", "React", "Tailwind CSS"],
  },
  {
    id: "5",
    title: "IXChat",
    description:
      "Aplicação web de envio de mensagens em tempo real com mensageria.",
    imageUrl: "/ixchat.png",
    imageAlt: "IXChat",
    tags: ["React", "Mongo", "Tailwind CSS", "Socket.io"],
  },

  {
    id: "6",
    title: "Oeste Links",
    description: "Centralizador de links para a Oeste da Sorte.",
    imageUrl: "/oeste_links.png",
    imageAlt: "Oeste Links",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <GalleryShowcase
          projects={projects}
          title="Meus Projetos"
          description="Conheça alguns dos projetos que desenvolvi, aplicando tecnologia para resolver problemas reais e criar soluções inovadoras."
        />
      </main>
      <Footer />
    </div>
  );
}
