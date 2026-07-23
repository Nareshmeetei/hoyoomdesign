import type { Metadata } from "next";
import { Space_Grotesk, Inter, PT_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--space-grotesk",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--inter",
});

const ptMono = PT_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--pt-mono",
});

export const metadata: Metadata = {
  title: "High-Converting AI B2B SaaS Website Design in 14 Days | Hayoom Design",
  description:
    "Elevate your brand with subscription design services. High-converting, buyer-focused websites for B2B SaaS, delivered fast.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${ptMono.variable}`}>
      <body className="font-body">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
