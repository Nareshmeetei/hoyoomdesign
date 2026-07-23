"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
};

// Reproduces the project's "Buttons/Button" (Main Button variant), including
// its real default -> hover deltas read from the Framer component's
// $gesture:"hover" node: container bg rgba(110,240,138,0.24) -> 0.71,
// box-shadow 0px 1px 9px rgba(255,255,255,0) -> 0px 1px 7px rgba(255,255,255,0.24),
// text color Primary token -> "white 80" token, plus the layered blurred glow
// (radial-gradient Primary-green blobs, blur 8-10px) that surrounds the pill.
export default function CtaButton({ href, children, external, className = "" }: Props) {
  const content = (
    <motion.span
      data-cursor="click"
      whileHover="hover"
      whileTap={{ scale: 0.97 }}
      initial="rest"
      className={`relative inline-flex items-center justify-center rounded-[20px] px-2 py-2 cursor-pointer ${className}`}
    >
      {/* blurred glow blobs, positioned like the real component's "White Top" / "white" layers */}
      <motion.span
        aria-hidden
        className="absolute rounded-full pointer-events-none"
        style={{ background: "rgb(110,239,138)", width: 95, height: 36, right: -17, top: -19, filter: "blur(8px)" }}
        variants={{ rest: { opacity: 0.5 }, hover: { opacity: 0.9 } }}
        transition={{ duration: 0.3 }}
      />
      <motion.span
        aria-hidden
        className="absolute rounded-full pointer-events-none"
        style={{ background: "rgb(110,239,138)", width: 54, height: 45, left: -22, bottom: -18, filter: "blur(8px)" }}
        variants={{ rest: { opacity: 0.5 }, hover: { opacity: 0.9 } }}
        transition={{ duration: 0.3 }}
      />

      <motion.span
        className="relative rounded-[20px] px-6 py-3.5"
        variants={{
          rest: { backgroundColor: "rgba(110,240,138,0.24)", boxShadow: "0px 1px 9px 0px rgba(255,255,255,0)" },
          hover: { backgroundColor: "rgba(110,240,138,0.71)", boxShadow: "0px 1px 7px 0px rgba(255,255,255,0.24)" },
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <span className="relative rounded-[20px] bg-[rgb(1,15,18)] px-4 py-1">
          <motion.span
            className="relative font-medium text-sm"
            variants={{
              rest: { color: "rgb(110,239,138)" },
              hover: { color: "rgba(219,219,219,0.9)" },
            }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.span>
        </span>
      </motion.span>
    </motion.span>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block">
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className="inline-block">
      {content}
    </Link>
  );
}
