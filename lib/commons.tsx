import CTA from "@/components/sections/CTA";
import About from "@/components/sections/Experience";
import Showcase from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";

export type AppSection = {
  name: string;
  href: string;
};

export const appSections: AppSection[] = [
  { name: "Portifólio", href: "showcase" },
  { name: "Serviços", href: "services" },
  { name: "Sobre", href: "about" },
  { name: "Contato", href: "cta" },
];

export const appRender = [
  {
    name: "Hero",
    href: "hero",
    render: (section: AppSection) => renderer(section, Hero),
  },
  {
    name: "Portifólio",
    href: "showcase",
    render: (section: AppSection) => renderer(section, Showcase),
  },
  {
    name: "Serviços",
    href: "services",
    render: (section: AppSection) => renderer(section, Services),
  },
  {
    name: "Sobre",
    href: "about",
    render: (section: AppSection) => renderer(section, About),
  },
  {
    name: "CTA",
    href: "cta",
    render: (section: AppSection) => renderer(section, CTA),
  },
];


const renderer = (section: AppSection, Component: React.ComponentType<AppSection>) => {
  return (
    <div key={`${section.href}-section`}>
      <Component {...section} />
    </div>
  );
};