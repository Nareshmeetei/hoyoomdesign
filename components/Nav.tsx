"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import SecondaryButton from "@/components/SecondaryButton";

const links = [
  { href: "/#process", text: "Process" },
  { href: "/#projects", text: "Projects" },
  { href: "/#faq", text: "FAQs" },
  { href: "/pricing", text: "Pricing" },
];

const CTA_URL = "https://checkout.dodopayments.com/buy/pdt_luow17L2Ht890y4x5it8m?quantity=1";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    // Real "Navigation/Nav" component, "Desktop" variant (framer.agent.getNode("pAJLmyjkD")):
    // width 840px, radius 20px, border rgba(255,255,255,0.1), fill rgba(1,20,24,0.3),
    // 20px background blur, padding 4px 0.
    <header className="fixed top-6 left-1/2 z-50 w-[92%] max-w-[840px] -translate-x-1/2">
      <div className="flex items-center gap-[49px] rounded-[20px] border border-borderColor bg-[rgba(1,20,24,0.3)] px-[30px] py-1 backdrop-blur-[20px]">
        <div className="flex flex-1 items-center gap-2.5">
          <Link href="/" className="flex items-center gap-2">
            {/* Real logo wordmark: framer.agent.getNode("sn783izCx") -> KIifLscAyprtoc8B8h7u320UME.svg, hover opacity 0.75, real desktop size 137x32 */}
            <motion.span whileHover={{ opacity: 0.75 }} transition={{ duration: 0.3 }} className="block">
              <Image src="/logos/logo-real.svg" alt="Hayoom Design" width={137} height={32} priority />
            </motion.span>
          </Link>
        </div>

        <div className="flex items-center gap-2.5">
          {/* Real "Nav / Nav Link" component (framer.agent.getNode("qMV5jssFV")): container
              gap 0, each link's own padding is 6px 10px (its real click-target size). */}
          <nav className="hidden items-center gap-0 md:flex">
            {links.map((l) => (
              <Link
                key={l.text}
                href={l.href}
                className="px-[10px] py-[6px] text-sm font-body text-white/65 hover:text-white transition-colors"
              >
                {l.text}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <SecondaryButton href={CTA_URL} external>
              Book a Brainstorm
            </SecondaryButton>
          </div>
        </div>

        <button
          className="text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="mt-2 flex flex-col gap-4 rounded-2xl border border-borderColor bg-black/90 p-4 md:hidden">
          {links.map((l) => (
            <Link key={l.text} href={l.href} className="text-white/80" onClick={() => setOpen(false)}>
              {l.text}
            </Link>
          ))}
          <SecondaryButton href={CTA_URL} external>
            Book a Brainstorm
          </SecondaryButton>
        </div>
      )}
    </header>
  );
}
