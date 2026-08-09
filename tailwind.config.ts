import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: { primary: "#1B302B", "primary-deep": "#344A43", brand: "#71937B", "brand-hover": "#627F6C", accent: "#96AA9E", soft: "#EEF3EF", surface: "#F7F9F7", ink: "#1B302B", "text-muted": "#5A6B65", border: "#DCE5DF" },
      fontFamily: { sans: ["var(--font-body)", "Arial", "sans-serif"] }
    }
  },
  plugins: []
};

export default config;
