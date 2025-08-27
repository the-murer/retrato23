import React, { JSX } from "react";
import clsx from "clsx";

type Variant = "title" | "subtitle" | "body" | "caption" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type Color = "brand" | "neutral" | "error" | "warning" | "success" | "default";

type TypographyProps = {
  as?: keyof JSX.IntrinsicElements;
  variant?: Variant;
  children: React.ReactNode;
  color?: Color;
  className?: string;
};

const variantClasses: Record<Variant, string> = {
  title: "text-2xl md:text-3xl xl:text-[32px] font-bold",
  subtitle: "text-xl md:text-2xl xl:text-[28px] font-semibold",
  body: "text-base md:text-lg xl:text-xl",
  caption: "text-sm md:text-base",
  h1: "text-4xl md:text-5xl xl:text-6xl font-bold",
  h2: "text-3xl md:text-4xl xl:text-5xl font-semibold",
  h3: "text-2xl md:text-3xl xl:text-4xl font-semibold",
  h4: "text-xl md:text-2xl xl:text-3xl font-medium",
  h5: "text-lg md:text-xl xl:text-2xl font-medium",
  h6: "text-base md:text-lg xl:text-xl font-medium",
};

const colorClasses: Record<Color, string> = {
  brand: "text-primary",
  neutral: "text-muted-foreground",
  error: "text-destructive",
  warning: "text-yellow-600",
  success: "text-green-600",
  default: "text-foreground",
};

const defaultColor: Record<Variant, string> = {
  title: "text-primary",
  subtitle: "text-foreground",
  body: "text-foreground",
  caption: "text-muted-foreground",
  h1: "text-foreground",
  h2: "text-foreground",
  h3: "text-foreground",
  h4: "text-foreground",
  h5: "text-foreground",
  h6: "text-foreground",
};

export function Typography({
  as: Component = "p",
  variant = "body",
  children,
  className,
  color,
}: TypographyProps) {
  const colorClass = color ? colorClasses[color] : defaultColor[variant];

  return (
    <Component className={clsx(variantClasses[variant], colorClass, className)}>
      {children}
    </Component>
  );
}
