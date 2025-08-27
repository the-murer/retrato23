import Link from "next/link";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

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
    icon: Phone 
  },
];

const contactInfo = [
  { name: "Instagram", href: "https://www.instagram.com/retrato23_fotografia/" },
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
  return (
    <footer className="bg-secondary border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <Image src="/dark_logo.png" alt="Retrato 23" width={100} height={100} />
            </Link>
            <p className="text-muted-foreground mb-8 max-w-md leading-relaxed">
              Photography that values your essence. Capturing authentic moments with elegance and artistry, creating timeless images that tell your unique story.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-background rounded-full flex items-center justify-center text-primary-600 hover:text-primary-700 hover:bg-primary-50 transition-colors duration-300 shadow-sm"
                  aria-label={social.name}
                  target="_blank"
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-light text-xl text-foreground mb-6">
              Links Rápidos
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm uppercase tracking-wide"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-light text-xl text-foreground mb-6">
              Contato
            </h3>
            <div className="space-y-4 text-sm text-muted-foreground">

            {contactInfo.map((social) => (
                <div>
                <p className="font-medium text-foreground mb-1">{social.name}</p>
                <p>{social.href}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Retrato 23. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
