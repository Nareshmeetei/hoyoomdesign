import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(110, 239, 138)",
        secondary: "rgb(1, 20, 24)",
        darkerBlue: "rgb(1, 13, 15)",
        darkAccent: "rgb(25, 44, 48)",
        cardBg: "rgb(13, 13, 13)",
        black2: "rgb(28, 28, 28)",
        warningRed: "rgb(212, 108, 108)",
        starColor: "rgb(235, 171, 52)",
        borderColor: "rgba(255, 255, 255, 0.1)",
      },
      fontFamily: {
        heading: ["var(--font-array)", "sans-serif"],
        cabinet: ["var(--font-cabinet-grotesk)", "sans-serif"],
        body: ["var(--font-satoshi)", "var(--font-inter)", "sans-serif"],
        mono: ["var(--font-pt-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
