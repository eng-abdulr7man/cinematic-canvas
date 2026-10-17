import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Anton"', '"Cairo"', "Impact", "sans-serif"],
        sans: ['"Montserrat"', '"Cairo"', "system-ui", "sans-serif"],
      },
      colors: {
        ink: "hsl(var(--ink) / <alpha-value>)",
        navy: "hsl(var(--navy) / <alpha-value>)",
        cyan: "hsl(var(--cyan) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        muted: "hsl(var(--muted) / <alpha-value>)",
        warm: "hsl(var(--warm) / <alpha-value>)",
        pill: "hsl(var(--pill) / <alpha-value>)",
      },
    },
  },
  plugins: [],
} satisfies Config;
