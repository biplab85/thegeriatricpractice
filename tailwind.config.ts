import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "rgb(var(--brand-red) / <alpha-value>)",
          shadow: "rgb(var(--brand-shadow) / <alpha-value>)",
          charcoal: "rgb(var(--brand-charcoal) / <alpha-value>)",
          rose: "rgb(var(--brand-rose) / <alpha-value>)",
          gray: "rgb(var(--brand-gray) / <alpha-value>)"
        }
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"]
      },
      maxWidth: {
        "6xl": "1320px"
      },
      boxShadow: {
        halo: "0 25px 60px rgba(49, 36, 36, 0.18)",
        glow: "0 18px 40px rgba(198, 8, 19, 0.3)"
      }
    }
  },
  plugins: []
};

export default config;
