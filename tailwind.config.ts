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
        primary: {
          DEFAULT: "#FF69B4", // Rosa padrão
          foreground: "#FF1493", // Rosa escuro
          50: "#FFF0F5",
          100: "#FFD6EC",
          200: "#FFADD2",
          300: "#FF83B8",
          400: "#FF599E",
          500: "#FF69B4", // Rosa padrão
          600: "#FF1493", // Rosa escuro
          700: "#FF007F",
          800: "#DB0060",
          900: "#B30049",
          950: "#800033",
        },
        secondary: {
          50: "#FFF5F5",
          100: "#FED7D7",
          200: "#FEB2B2",
          300: "#FC8181",
          400: "#F56565",
          500: "#E53E3E", // Vermelho padrão
          600: "#C53030", // Vermelho escuro
          700: "#9B2C2C",
          800: "#822727",
          900: "#63171B",
          950: "#4A1215",
        }
      }
    }
  },
  plugins: [tailwindcssAnimate],
};

export default config;
