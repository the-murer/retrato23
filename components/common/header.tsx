"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "./button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { appSections } from "@/lib/commons";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 backdrop-blur-md bg-background/80">
      <div className="scroll-progress hidden absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-secondary-400 via-secondary-600 to-primary-600" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src={theme === "dark" ? "/light_logo.png" : "/dark_logo.png"}
                alt="Elegant portrait photography"
                width={50}
                height={50}
                className="object-cover"
                priority
              />
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {appSections.map((item) => (
              <Link
                key={item.name}
                href={`#${item.href}`}
                className="link-draw text-muted-foreground hover:text-foreground font-medium text-xs uppercase tracking-[0.2em]"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <Button
                size="sm"
                className="btn-tactile bg-primary hover:bg-primary-900 text-primary-foreground rounded-full px-6 py-2 font-medium tracking-[0.02em]"
              >
                Agendar Sessão
              </Button>
            </div>
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
                className="text-foreground hover:text-primary"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
            {/* <ThemeToggle /> */}
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-border/50 bg-background/95 backdrop-blur-md">
              {appSections.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-3 text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg transition-colors duration-200 font-medium text-sm uppercase tracking-[0.16em]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-3">
                <Button
                  size="sm"
                  className="btn-tactile w-full bg-primary hover:bg-primary-900 text-primary-foreground rounded-full font-medium tracking-[0.02em]"
                >
                  Agendar Sessão
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
