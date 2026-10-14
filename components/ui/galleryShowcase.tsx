import { AnimatedText } from "@/components/ui/animatedText";
import { ProjectCard } from "@/components/ui/projectCard";

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  tags?: string[];
  link?: string;
  featured?: boolean;
  category?: string;
  year?: number;
}

interface GalleryShowcaseProps {
  items: Project[];
  title?: string;
  description?: string;
}

export function GalleryShowcase({
  items,
  title = "Projetos",
  description,
}: GalleryShowcaseProps) {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl lg:text-5xl font-medium italic tracking-[-0.01em] text-foreground mb-4">
            <AnimatedText text={title} />
          </h1>
          {description && (
            <p className="reveal text-xl text-muted-foreground max-w-3xl mx-auto">
              {description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {items.map((project, index) => (
            <div key={project.id} className="reveal" style={{ "--d": index % 3 } as React.CSSProperties}>
            <ProjectCard
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              imageAlt={project.imageAlt}
              tags={project.tags}
              link={project.link}
            />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
