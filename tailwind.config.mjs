/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0d0d0d",
          2: "#141414",
          3: "#1a1a1a",
        },
        border: {
          DEFAULT: "rgba(255,255,255,0.08)",
          hi: "rgba(255,255,255,0.15)",
        },
        text: {
          DEFAULT: "#f0ede6",
          muted: "#c0bdb5",
          dim: "#9a9690",
          faint: "#7a776f",
        },
        accent: {
          DEFAULT: "#c8f060",
          teal: "#5dcaa5",
        },
      },
      fontFamily: {
        mono: ["DM Mono", "monospace"],
        display: ["Syne", "sans-serif"],
        sans: ["DM Sans", "sans-serif"],
      },
      fontSize: {
        "2xs": ["10px", { letterSpacing: "0.12em" }],
        xs: ["11px", { letterSpacing: "0.06em" }],
      },
      maxWidth: {
        content: "760px",
      },
      animation: {
        pulse: "pulse 2s infinite",
        "fade-in": "fadeIn 0.5s ease both",
      },
      keyframes: {
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
        fadeIn: {
          from: { opacity: "0", transform: "translateY(8px)" },
          to: { opacity: "1", transform: "none" },
        },
      },
    },
  },
  plugins: [],
};
