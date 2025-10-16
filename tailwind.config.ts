import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#111317",
        foreground: "#F2F4F8",
        violet: {
          50: "#FCEBFF",
          100: "#F7CCFF",
          200: "#EFA6FF",
          300: "#E680FF",
          400: "#D933FF",
          500: "#BF28E5",
          600: "#8F24B3",
          700: "#7F1B99",
          800: "#6C137F",
          900: "#6C137F",
        },
        cyan: {
          50: "#EBFAFF",
          100: "#CCF5FF",
          200: "#A6EEFF",
          300: "#80E5FF",
          400: "#0DD9FF",
          500: "#10B5E6",
          600: "#148AAD",
          700: "#0E7895",
          800: "#08637C",
          900: "#08637C",
        },
        lime: {
          100: "#F9FFCC",
          200: "#F2FF99",
          300: "#E6FF66",
          400: "#D9FF33",
          500: "#BFE60D",
          600: "#829E16",
          700: "#6B8514",
          800: "#556C13",
        },
        pink: {
          100: "#FFD4F3",
          200: "#FFAEEA",
          300: "#FF80DF",
          400: "#FF4DCC",
          500: "#FF1AAF",
          600: "#B30F78",
          700: "#971165",
          800: "#7D1252",
        },
        orange: {
          100: "#FFE5CC",
          200: "#FFCC99",
          300: "#FFAA66",
          400: "#FF8833",
          500: "#FF731A",
          600: "#B8460A",
          700: "#9C3E0D",
          800: "#81360E",
        },
        gray: {
          50: "#F9FAFC",
          100: "#F2F4F8",
          200: "#E4E7ED",
          300: "#CACED6",
          400: "#ACB0B8",
          500: "#898C93",
          600: "#656972",
          700: "#42464F",
          800: "#292C33",
          900: "#1B1D22",
          950: "#111317",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      boxShadow: {
        "glow-violet": "0 0 40px rgba(217, 51, 255, 0.45)",
        "glow-cyan": "0 0 40px rgba(13, 217, 255, 0.45)",
      },
      backgroundImage: {
        "gradient-hero": "linear-gradient(135deg, #6C137F 0%, #0DD9FF 100%)",
        "gradient-pulse": "linear-gradient(90deg, #FF1AAF 0%, #D9FF33 50%, #0DD9FF 100%)",
        "gradient-sunset": "linear-gradient(45deg, #FF8833 0%, #FF4DCC 100%)",
      },
      keyframes: {
        "gradient-xy": {
          "0%, 100%": { backgroundPosition: "0% 0%" },
          "50%": { backgroundPosition: "100% 100%" },
        },
        blob: {
          "0%, 100%": { borderRadius: "60% 40% 30% 70% / 60% 20% 80% 40%" },
          "50%": { borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%" },
        },
      },
      animation: {
        "gradient-xy": "gradient-xy 16s ease infinite",
        blob: "blob 14s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
