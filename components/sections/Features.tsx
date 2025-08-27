"use client";
import { Typography } from "@/stories/typography";
import Image from "next/image";
import Section from "@/components/sections/Section";

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

export default function Showcase() {
  return (
    <Section
      id="showcase"
      tone="default"
      background={{ type: "gradient", from: "from-secondary-50", to: "to-primary-50", directionClass: "bg-gradient-to-r" }}
      padding="xl"
      className="relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-secondary-50 via-transparent to-primary-50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Typography variant="h2" className="font-display text-4xl lg:text-5xl font-light text-foreground mb-6">
            Arte, emoção e identidade em cada retrato
          </Typography>
          <Typography variant="body" className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Cada imagem captura um momento de beleza autêntica, revelando a essência única que faz de cada indivíduo uma pessoa extraordinária.
          </Typography>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {showcaseImages.map((image, index) => (
            <div 
              key={image.id} 
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-background shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
              
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Category overlay */}
              <div className="absolute bottom-4 left-4 z-20">
                <span className="inline-block px-3 py-1 bg-background/90 backdrop-blur-sm text-sm font-medium text-foreground rounded-full">
                  {image.category}
                </span>
              </div>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-5"></div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <Typography variant="body" className="text-lg text-muted-foreground mb-6">
            Descubra mais de nosso trabalho e encontre inspiração para sua própria sessão
          </Typography>
          <button className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-xl">
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
