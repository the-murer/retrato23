"use client";

import React from "react";
import { cn } from "@/lib/utils";

export type SectionTone =
  | "default"
  | "primary"
  | "secondary"
  | "muted"
  | "accent"
  | "inverted";

type BackgroundType = "solid" | "gradient" | "image";

type SectionBackground =
  | {
      type: "solid";
      color?: SectionTone;
    }
  | {
      type: "gradient";
      from?: string; // tailwind color or hex
      to?: string; // tailwind color or hex
      directionClass?: string; // e.g. bg-gradient-to-br
    }
  | {
      type: "image";
      src: string;
      behavior?: "fixed" | "scroll"; // fixed = parallax-like
      positionClass?: string; // e.g. bg-center bg-top
    };

export interface SectionProps {
  id?: string;
  tone?: SectionTone;
  background?: SectionBackground;
  overlayClassName?: string; // e.g. bg-black/40
  container?: boolean;
  padding?: "none" | "sm" | "md" | "lg" | "xl";
  className?: string;
  children: React.ReactNode;
}

const toneToBaseClass: Record<SectionTone, string> = {
  default: "bg-background text-foreground",
  primary: "bg-primary text-primary-foreground",
  secondary: "bg-secondary text-secondary-foreground",
  muted: "bg-muted text-muted-foreground",
  accent: "bg-accent text-accent-foreground",
  inverted: "bg-foreground text-background",
};

const paddingToClass: Record<NonNullable<SectionProps["padding"]>, string> = {
  none: "py-0",
  sm: "py-8 sm:py-10",
  md: "py-12 sm:py-16",
  lg: "py-16 sm:py-24 lg:py-32",
  xl: "py-24 sm:py-32 lg:py-40",
};

export default function Section({
  id,
  tone = "default",
  background = { type: "solid", color: "default" },
  overlayClassName,
  container = true,
  padding = "lg",
  className,
  children,
}: SectionProps) {
  const isImageBg = background.type === "image";
  const isGradientBg = background.type === "gradient";

  const baseToneClass =
    background.type === "solid"
      ? toneToBaseClass[(background.color ?? tone) as SectionTone]
      : toneToBaseClass[tone];

  const gradientClass = isGradientBg
    ? cn(
        background.directionClass ?? "bg-gradient-to-br",
        background.from ?? "from-black",
        background.to ?? "to-transparent"
      )
    : undefined;

  const imageStyle = isImageBg
    ? ({
        backgroundImage: `url('${background.src}')`,
      } as React.CSSProperties)
    : undefined;

  const imageClass = isImageBg
    ? cn(
        "bg-no-repeat bg-cover",
        background.positionClass ?? "bg-center",
        background.behavior === "fixed" ? "bg-fixed" : "bg-local"
      )
    : undefined;

  return (
    <section
      id={id}
      className={cn(
        "relative w-full min-w-full",
        paddingToClass[padding],
        baseToneClass,
        isGradientBg && gradientClass,
        isImageBg && imageClass,
        className
      )}
      style={imageStyle}
    >
      {overlayClassName && (
        <div className={cn("absolute inset-0 pointer-events-none", overlayClassName)} />
      )}

      <div className={cn("relative w-full", container && "container mx-auto px-4 sm:px-6 lg:px-8")}>{children}</div>
    </section>
  );
} 