import localFont from "next/font/local";
import { Inter, PT_Mono } from "next/font/google";

// Real font files pulled from the project's Fontshare-hosted assets
// (framer.getFonts()) — self-hosted here instead of the Google Fonts
// stand-ins used in the first pass. See MIGRATION_NOTES.md for the fonts
// that have no obtainable source file.
export const array = localFont({
  src: [
    { path: "../public/fonts/array-400.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/array-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-array",
  display: "swap",
});

export const satoshi = localFont({
  src: [
    { path: "../public/fonts/satoshi-400.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/satoshi-500.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/satoshi-700.woff2", weight: "700", style: "normal" },
    { path: "../public/fonts/satoshi-900.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export const cabinetGrotesk = localFont({
  src: [{ path: "../public/fonts/cabinetgrotesk-500.woff2", weight: "500", style: "normal" }],
  variable: "--font-cabinet-grotesk",
  display: "swap",
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-inter",
});

export const ptMono = PT_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pt-mono",
});
