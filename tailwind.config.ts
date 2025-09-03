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
          DEFAULT: "#f06292",
          foreground: "#fff",
          50: "#fff5f7",
          500: "#f06292",
          600: "#ec407a",
          800: "#c2185b",
        },
        secondary: {
          DEFAULT: "#f8bbd0",
          foreground: "#fff",
          50: "#fce4ec",
          200: "#f8bbd0",
          300: "#f48fb1",
          500: "#f06292",
        },
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
