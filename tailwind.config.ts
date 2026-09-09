import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1A1A1A",
        acero: "#4A4A4A",
        plata: "#8C8C8C",
        papel: "#F5F4F2",
        linea: "#D9D7D3",
      },
      fontFamily: {
        display: ["var(--font-jost)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      letterSpacing: {
        expediente: "0.18em",
      },
    },
  },
  plugins: [],
};
export default config;
