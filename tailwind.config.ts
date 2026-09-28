import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#181D23",
        deep: "#11161C",
        surface: "#242A31",
        surfacelight: "#2B3138",
        border: "#3A4148",
        primary: "#F1F1EF",
        secondary: "#B5B7B8",
        muted: "#92989E",
        accent: "#D6D4CE",
        success: "#7FAE8B",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      maxWidth: {
        container: "1280px",
      },
      borderRadius: {
        btn: "8px",
        card: "12px",
        media: "14px",
      },
    },
  },
  plugins: [],
};

export default config;
