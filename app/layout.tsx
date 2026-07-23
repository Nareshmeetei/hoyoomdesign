import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import BlurGradient from "@/components/BlurGradient";
import { array, satoshi, cabinetGrotesk, inter, ptMono } from "@/lib/fonts";

// Real SEO metadata pulled from the project's RootNode (framer.agent.getNode("rootNode")).
export const metadata: Metadata = {
  title: "High-Converting AI B2B SaaS Website Design in 14 Days | Hayoom Design",
  description:
    "Transform your AI B2B SaaS website into a high-converting sales machine in 14 days. Conversion focused, modern and B2B buyer-focused design. 25%+ conversion increase guaranteed.",
  openGraph: {
    images: ["https://framerusercontent.com/images/jLq6NcEN3AMXVVsd4wO1yRunvs.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${array.variable} ${satoshi.variable} ${cabinetGrotesk.variable} ${inter.variable} ${ptMono.variable}`}
    >
      <body className="font-body">
        <SmoothScroll />
        <BlurGradient blur={7} />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
