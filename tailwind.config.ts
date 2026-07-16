import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: { primary: "#0D332B", "primary-deep": "#09251F", brand: "#16865F", accent: "#63D4A7", soft: "#EDF8F3", surface: "#F8FAF9", ink: "#15221E", "text-muted": "#66756F", border: "#D8E5DF" },
      fontFamily: { sans: ["var(--font-body)", "Arial", "sans-serif"] }
    }
  },
  plugins: []
};

export default config;
