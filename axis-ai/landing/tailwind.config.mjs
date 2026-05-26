/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          deep: "#070a0e",
          panel: "#0d1218",
          elev: "#141a23",
        },
        accent: {
          cyan: "#00d4ff",
          cyanGlow: "rgba(0,212,255,0.18)",
        },
        text: {
          primary: "#e8eef5",
          secondary: "#9aa7b5",
          faint: "#5a6675",
        },
        divider: "#1c242f",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        wider: "0.12em",
        widest: "0.18em",
      },
    },
  },
};