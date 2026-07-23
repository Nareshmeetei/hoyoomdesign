"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
};

// Faithful reproduction of the Framer "Buttons/secondary button" component
// (id XJF7PW3wp, "Primary" variant) — the dark glass pill with a circular
// avatar photo, used for the nav's "Book a Brainstorm" CTA. Read directly
// from framer.agent.getNode("XJF7PW3wp") and its $gesture:"hover" replica:
// default border rgba(255,255,255,0.2), gradient fill (Darker Blue -74% ->
// Dark 183%), 5px background blur, triple inset shadow; on hover the border
// becomes the real "Primary" token and the fill flattens to solid "Dark".
// Label uses the real "Body 16" preset (PT Mono, 16px, -0.02em), default
// color the real "white 80" token, hover color the real "Primary" token.
const insetShadow =
  "inset 0px -0.48px 0.48px -1.25px rgba(0,0,0,0.68), inset 0px -1.83px 1.83px -2.5px rgba(0,0,0,0.6), inset 0px -8px 8px -3.75px rgba(0,0,0,0.24)";

export default function SecondaryButton({ href, children, external, className = "" }: Props) {
  const content = (
    <motion.div
      initial="rest"
      whileHover="hover"
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`inline-flex cursor-pointer items-center gap-2.5 rounded-[15px] border px-5 py-2.5 backdrop-blur-[5px] ${className}`}
      style={{ boxShadow: insetShadow }}
      variants={{
        rest: { borderColor: "rgba(255,255,255,0.2)", background: "linear-gradient(180deg, rgb(1,13,15) -74%, rgb(25,44,48) 183%)" },
        hover: { borderColor: "rgb(110,239,138)", background: "rgb(25,44,48)" },
      }}
    >
      <span className="relative block h-[30px] w-[35px] shrink-0 overflow-hidden rounded-full border border-borderColor">
        <Image src="/images/nav-cta-avatar.jpg" alt="" fill sizes="35px" className="object-cover" />
      </span>
      <motion.span
        className="whitespace-nowrap font-mono text-base"
        style={{ letterSpacing: "-0.02em" }}
        variants={{
          rest: { color: "rgba(219,219,219,0.8)" },
          hover: { color: "rgb(110,239,138)" },
        }}
      >
        {children}
      </motion.span>
    </motion.div>
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
