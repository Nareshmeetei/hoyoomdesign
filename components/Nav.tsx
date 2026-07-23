"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import CtaButton from "@/components/CtaButton";

const links = [
  { href: "/#process", text: "Process" },
  { href: "/#projects", text: "Projects" },
  { href: "/#faq", text: "FAQs" },
  { href: "/pricing", text: "Pricing" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-[760px]">
      <div className="flex items-center justify-between rounded-full bg-black/80 border border-white/10 px-5 py-3 backdrop-blur-md">
        <Link href="/" className="flex items-center gap-2">
          {/* Real logo wordmark: framer.agent.getNode("sn783izCx") -> KIifLscAyprtoc8B8h7u320UME.svg, hover opacity 0.75 */}
          <motion.span whileHover={{ opacity: 0.75 }} transition={{ duration: 0.3 }} className="block">
            <Image src="/logos/logo-real.svg" alt="Hayoom Design" width={110} height={26} priority />
          </motion.span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.text}
              href={l.href}
              className="text-sm font-body text-white/65 hover:text-white transition-colors"
            >
              {l.text}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <CtaButton href="https://checkout.dodopayments.com/buy/pdt_luow17L2Ht890y4x5it8m?quantity=1" external>
            Book a Brainstorm
          </CtaButton>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="md:hidden mt-2 rounded-2xl bg-black/90 border border-white/10 p-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link key={l.text} href={l.href} className="text-white/80" onClick={() => setOpen(false)}>
              {l.text}
            </Link>
          ))}
          <CtaButton href="https://checkout.dodopayments.com/buy/pdt_luow17L2Ht890y4x5it8m?quantity=1" external>
            Book a Brainstorm
          </CtaButton>
        </div>
      )}
    </header>
  );
}
