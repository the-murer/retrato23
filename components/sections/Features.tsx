"use client";
import { AnimatedText } from "@/components/ui/animatedText";
import { Typography } from "@/components/common/typography";
import Image from "next/image";
import { Section } from "@/components/common/section";
import { AppSection } from "@/lib/commons";

const showcaseImages = [
  {
    id: 1,
    src: "/showcase/women.jpg",
    alt: "Retratos profissionais",
    category: "Retratos"
  },
  {
    id: 2,
    src: "/showcase/woman_bar.jpg",
    alt: "Fotos de eventos",
    category: "Eventos"
  },
  {
    id: 3,
    src: "/showcase/single_woman.jpg",
    alt: "Fotos de produtos",
    category: "Produtos"
  },
];

export default function Showcase({ name, href }: AppSection) {
  return (
    <Section
      id={href}
      tone="default"
      background={{ type: "gradient", from: "from-secondary-50", to: "to-primary-50", directionClass: "bg-gradient-to-r" }}
      padding="xl"
      className="grain relative overflow-clip"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-secondary-50 via-transparent to-primary-50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Typography variant="h2" className="font-display text-4xl lg:text-5xl font-medium tracking-[-0.01em] text-balance text-foreground mb-6">
            <AnimatedText text="Arte, emoção e" />{" "}
            <em className="accent"><AnimatedText text="identidade" from={3} /></em>{" "}
            <AnimatedText text="em cada retrato" from={4} />
          </Typography>
          <Typography variant="body" className="reveal text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Cada imagem captura um momento de beleza autêntica, revelando a essência única que faz de cada indivíduo uma pessoa extraordinária.
          </Typography>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {showcaseImages.map((image, index) => (
            <div 
              key={image.id}
              style={{ "--d": index } as React.CSSProperties}
              className="reveal viewfinder group relative aspect-[3/4] overflow-clip rounded-sm bg-card shadow-md ring-1 ring-foreground/5 transition-[translate,box-shadow] duration-700 ease-craft hover:-translate-y-1.5 hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              
              <div className="reveal-img absolute inset-0">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              </div>
              
              {/* Category overlay */}
              <div className="absolute bottom-4 left-4 z-20">
                <span className="eyebrow rounded-sm bg-background/90 px-3 py-1.5 text-foreground backdrop-blur-sm">
                  {image.category}
                </span>
              </div>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-5"></div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="reveal text-center mt-16">
          <Typography variant="body" className="text-lg text-muted-foreground mb-6">
            Descubra mais de nosso trabalho e encontre inspiração para sua própria sessão
          </Typography>
          <button className="btn-tactile inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium tracking-[0.02em] hover:bg-primary-900">
            Explorar Portfólio Completo
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </Section>
  );
}
