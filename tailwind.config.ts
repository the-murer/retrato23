import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./stories/**/*.{js,ts,jsx,tsx,mdx}",
    "./storybook/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#ef476f",
          foreground: "#ffffff",
          50: "#fff5f7",
          100: "#ffe4ec",
          200: "#fbbfcf",
          300: "#f699b2",
          400: "#f37295",
          500: "#ef476f",
          600: "#e4275c",
          700: "#cb1d50",
          800: "#b21844",
          900: "#991339",
          950: "#660822",
        },
        secondary: {
          DEFAULT: "#ffa5c9",
          foreground: "#ffffff",
          50: "#fff7fb",
          100: "#ffeef7",
          200: "#ffd6ed",
          300: "#ffbdd9",
          400: "#ffa5c9",
          500: "#ff8db9",
          600: "#ff749e",
          700: "#ff5b84",
          800: "#ff416a",
          900: "#ff2750",
          950: "#cc1f40",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        ...
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
