"use client";

import Link from "next/link";
import { Instagram, Mail, Phone } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/retrato23_fotografia/",
    icon: Instagram,
  },
  {
    name: "Email",
    href: "claudianschuster@gmail.com",
    icon: Mail,
  },
  {
    name: "Whatsapp",
    href: "https://wa.me/+554991942425",
    icon: Phone,
  },
];

const contactInfo = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/retrato23_fotografia/",
  },
  { name: "Email", href: "claudianschuster@gmail.com" },
  { name: "Whatsapp", href: "+55 49 9 9194-2425" },
];

const quickLinks = [
  { name: "Portifólio", href: "#showcase" },
  { name: "Serviços", href: "#services" },
  { name: "Sobre", href: "#about" },
  { name: "Contato", href: "#cta" },
];

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer className="grain relative bg-secondary border-t border-border/70">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <Image
                src={theme === "dark" ? "/light_logo.png" : "/dark_logo.png"}
                alt="Retrato 23"
                width={100}
                height={100}
              />
            </Link>
            <p className="text-muted-foreground mb-8 max-w-md leading-relaxed">
              Fotografia que valoriza sua essência. Capturando momentos
              autênticos com elegância e arte, criando imagens imortais que
              contam sua história única.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-primary-300 bg-card flex items-center justify-center text-primary-700 transition-colors duration-300 hover:bg-primary hover:border-primary hover:text-primary-foreground"
                  aria-label={social.name}
                  target="_blank"
                >
                  <social.icon className="h-[18px] w-[18px] stroke-[1.5]" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="eyebrow flex mb-6 text-muted-foreground">
              Links Rápidos
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="link-draw font-display text-xl italic text-foreground/80 hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow flex mb-6 text-muted-foreground">
              Contato
            </h3>
            <div className="space-y-4 text-sm text-foreground/85">
              {contactInfo.map((social) => (
                <div key={social.name}>
                  <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground mb-1">
                    {social.name}
                  </p>
                  <p>{social.href}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border/70 mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Retrato 23. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link
              href="#"
              className="link-draw text-muted-foreground hover:text-foreground text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="link-draw text-muted-foreground hover:text-foreground text-sm"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
