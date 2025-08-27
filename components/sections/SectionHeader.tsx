"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface SectionHeaderProps {
  overline?: string;
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  align?: "left" | "center" | "right";
  size?: "sm" | "md" | "lg";
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string; // permite ajustar cor conforme o fundo (ex.: text-primary-foreground/80)
}

const sizeToClasses: Record<NonNullable<SectionHeaderProps["size"]>, { title: string; subtitle: string; overline: string }> = {
  sm: { title: "text-2xl sm:text-3xl", subtitle: "text-base sm:text-lg", overline: "text-xs" },
  md: { title: "text-3xl sm:text-4xl", subtitle: "text-lg sm:text-xl", overline: "text-xs" },
  lg: { title: "text-4xl sm:text-5xl lg:text-6xl", subtitle: "text-xl sm:text-2xl", overline: "text-xs" },
};

export default function SectionHeader({
  overline,
  title,
  subtitle,
  align = "center",
  size = "md",
  className,
  titleClassName,
  subtitleClassName,
}: SectionHeaderProps) {
  const alignClass =
    align === "left" ? "text-left items-start" : align === "right" ? "text-right items-end" : "text-center items-center";

  return (
    <div className={cn("flex flex-col gap-3 mb-8", alignClass, className)}>
      {overline ? (
        <span className={cn("uppercase tracking-wider text-muted-foreground", sizeToClasses[size].overline)}>
          {overline}
        </span>
      ) : null}
      <h2 className={cn("font-bold", sizeToClasses[size].title, titleClassName)}>{title}</h2>
      {subtitle ? (
        <p className={cn("max-w-3xl", sizeToClasses[size].subtitle, subtitleClassName)}>{subtitle}</p>
      ) : null}
    </div>
  );
} 