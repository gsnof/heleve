import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: "#FAF6EF",
          100: "#F3EBDD",
          200: "#E6D5B8",
          300: "#D7BD8E",
          400: "#C9A86A",
          500: "#B89352",
          600: "#9E7B3B",
          700: "#7C5F2B",
          800: "#5B441D",
          900: "#3B2B11",
        },
        obsidian: {
          950: "#06080B",
          900: "#0B0E14",
          850: "#10141C",
          800: "#161B26",
          700: "#222B3B",
          600: "#334155",
        },
        champagne: "#E8D8C3",
        warmWhite: "#FAF9F6",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #D7BD8E 0%, #B89352 50%, #8E6D3E 100%)",
        "gold-shimmer": "linear-gradient(90deg, transparent 0%, rgba(215, 189, 142, 0.25) 50%, transparent 100%)",
        "dark-radial": "radial-gradient(circle at 50% 0%, #161B26 0%, #06080B 100%)",
      },
      boxShadow: {
        "gold-glow": "0 0 25px rgba(201, 168, 106, 0.2)",
        "gold-subtle": "0 4px 20px rgba(0, 0, 0, 0.4), 0 0 1px 1px rgba(201, 168, 106, 0.15)",
        "elevation": "0 20px 40px -15px rgba(0, 0, 0, 0.6)",
      },
      animation: {
        "fade-in": "fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
