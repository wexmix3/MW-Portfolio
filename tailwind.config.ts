import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Michigan maize gold
        gold: {
          DEFAULT: "#FFCB05",
          light: "#FFD94D",
          dark: "#E6B800",
        },
        // Dark palette
        void: {
          DEFAULT: "#0A0A0F",
          50:  "#F2F2F5",
          100: "#E5E5EA",
          200: "#CBCBD5",
          300: "#A0A0B0",
          400: "#70708A",
          500: "#505065",
          600: "#353548",
          700: "#22222F",
          800: "#16161F",
          900: "#0E0E16",
          950: "#0A0A0F",
        },
        // Accent slate for cards/surfaces
        surface: {
          DEFAULT: "#13131A",
          card:    "#1A1A24",
          border:  "#2A2A3A",
          hover:   "#22222F",
        },
      },
      fontFamily: {
        sans:    ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-instrument)", "Georgia", "serif"],
        mono:    ["var(--font-jetbrains)", "Menlo", "monospace"],
      },
      animation: {
        "fade-up":     "fadeUp 0.6s ease forwards",
        "fade-in":     "fadeIn 0.4s ease forwards",
        "pulse-slow":  "pulse 3s ease-in-out infinite",
        "typing":      "typing 0.5s step-end",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-gold":   "linear-gradient(135deg, #FFCB05, #E6B800)",
        "grid-pattern":    "linear-gradient(rgba(255,203,5,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,203,5,0.03) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid": "60px 60px",
      },
    },
  },
  plugins: [],
};
export default config;
