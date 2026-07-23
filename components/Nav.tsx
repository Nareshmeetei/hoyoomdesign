"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

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
          <Image src="/logos/logo-nav.svg" alt="Hayoom Design" width={28} height={28} />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link key={l.text} href={l.href} className="text-sm text-white/65 hover:text-white transition-colors">
              {l.text}
            </Link>
          ))}
        </nav>

        <a
          href="https://checkout.dodopayments.com/buy/pdt_luow17L2Ht890y4x5it8m?quantity=1"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center rounded-full bg-primary text-secondary text-sm font-medium px-4 py-2 hover:opacity-90 transition-opacity"
        >
          Book a Brainstorm
        </a>

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
          <a
            href="https://checkout.dodopayments.com/buy/pdt_luow17L2Ht890y4x5it8m?quantity=1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-primary text-secondary text-sm font-medium px-4 py-2"
          >
            Book a Brainstorm
          </a>
        </div>
      )}
    </header>
  );
}
