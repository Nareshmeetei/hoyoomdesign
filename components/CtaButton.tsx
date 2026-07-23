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

// Real spring transition read from the component's "Main Button" node
// (transition: "spring-physics 500 60 1 0s").
const springTransition = { type: "spring" as const, stiffness: 500, damping: 60, mass: 1 };

// Faithful reproduction of the Framer "Buttons/Button" component (id IYmDo4Yhz,
// "Main Button" variant), read directly from its real node tree and its
// $gesture:"hover" replica via framer.agent.getNode. Structure, outside-in:
//  - Main Button (no clip): two ambient glow blobs that bleed past the pill
//  - container (clip, 1.4px padding = the ring): three solid blurred blobs
//    clipped to the ring, tinting its rounded edge
//  - Inner Container (clip, 16px/100px padding = the dark pill body): two
//    radial-gradient blobs behind the label
// Colors are the project's real "Primary" (rgb(110,239,138)) and
// "white 80" (rgba(219,219,219,0.8)) color-style tokens.
export default function CtaButton({ href, children, external, className = "" }: Props) {
  const content = (
    <motion.div
      initial="rest"
      whileHover="hover"
      whileTap={{ scale: 0.97 }}
      transition={springTransition}
      className={`relative inline-block cursor-pointer ${className}`}
    >
      {/* Main Button level: two ambient glow blobs, not clipped */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute rounded-full"
        style={{ left: -11, bottom: 6, width: 58, height: 30, filter: "blur(10px)", zIndex: -1 }}
        variants={{
          rest: { background: "radial-gradient(50% 50% at 50% 50%, rgb(110,239,138) 0%, rgba(0,0,0,0) 100%)" },
          hover: { background: "radial-gradient(50% 50% at 50% 50%, rgb(52,163,76) 0%, rgba(0,0,0,0) 100%)" },
        }}
      />
      <motion.span
        aria-hidden
        className="pointer-events-none absolute rounded-full"
        style={{ right: -12, top: -7, width: 74, height: 41, filter: "blur(10px)", opacity: 0.62, zIndex: -1 }}
        variants={{
          rest: { background: "radial-gradient(50% 50% at 50% 50%, rgb(110,239,138) 0%, rgba(0,0,0,0) 100%)" },
          hover: { background: "radial-gradient(50% 50% at 50% 50%, rgb(52,163,76) 0%, rgba(0,0,0,0) 100%)" },
        }}
      />

      {/* container: the 1.4px ring */}
      <motion.div
        className="relative overflow-hidden rounded-[20px]"
        style={{ padding: "1.4px" }}
        variants={{
          rest: { backgroundColor: "rgba(110,240,138,0.24)", boxShadow: "0px 1px 9px 0px rgba(255,255,255,0)" },
          hover: { backgroundColor: "rgba(110,240,138,0.71)", boxShadow: "0px 1px 7px 0px rgba(255,255,255,0.24)" },
        }}
      >
        {/* three solid blurred blobs, clipped to the ring's rounded rect */}
        <motion.span
          aria-hidden
          className="pointer-events-none absolute rounded-full"
          style={{ right: -17.5, top: -19, filter: "blur(8px)", backgroundColor: "rgb(110,239,138)" }}
          variants={{
            rest: { width: 95, height: 36 },
            hover: { width: 95, height: 36 },
          }}
        />
        <motion.span
          aria-hidden
          className="pointer-events-none absolute rounded-full"
          style={{ left: -22.5, bottom: -17.75, filter: "blur(8px)", backgroundColor: "rgb(110,239,138)" }}
          variants={{
            rest: { width: 54, height: 45.5 },
            hover: { width: 87, height: 51 },
          }}
        />
        <motion.span
          aria-hidden
          className="pointer-events-none absolute rounded-full"
          style={{ left: -22.5, bottom: -17.5, filter: "blur(8px)", backgroundColor: "rgb(110,239,138)" }}
          variants={{
            rest: { width: 40, height: 33.5 },
            hover: { width: 60.8, height: 39 },
          }}
        />

        {/* Inner Container: the solid dark pill */}
        <motion.div
          className="relative overflow-hidden rounded-[20px] px-[100px] py-4"
          variants={{
            rest: { backgroundColor: "rgb(1,15,18)" },
            hover: { backgroundColor: "rgb(3,22,26)" },
          }}
        >
          <motion.span
            aria-hidden
            className="pointer-events-none absolute rounded-full"
            style={{ left: "9%", bottom: "-55%", filter: "blur(10px)" }}
            variants={{
              rest: {
                width: 77,
                height: 41,
                opacity: 0.41,
                background: "radial-gradient(50% 50% at 50% 50%, rgb(110,239,138) 0%, rgba(0,0,0,0) 100%)",
              },
              hover: {
                width: 77,
                height: 48,
                opacity: 0.5,
                background: "radial-gradient(50% 50% at 50% 50%, rgb(52,163,76) 0%, rgba(0,0,0,0) 100%)",
              },
            }}
          />
          <motion.span
            aria-hidden
            className="pointer-events-none absolute rounded-full"
            style={{ right: "-8%", top: "-45%", filter: "blur(10px)" }}
            variants={{
              rest: { width: 92, height: 40, background: "radial-gradient(50% 50% at 50% 50%, rgb(44,64,54) 0%, rgb(6,31,36) 100%)" },
              hover: { width: 127, height: 40, background: "radial-gradient(50% 50% at 50% 50%, rgb(52,163,76) 0%, rgba(0,0,0,0) 100%)" },
            }}
          />
          <motion.span
            className="relative whitespace-nowrap text-sm font-medium"
            variants={{
              rest: { color: "rgb(110,239,138)" },
              hover: { color: "rgba(219,219,219,0.8)" },
            }}
          >
            {children}
          </motion.span>
        </motion.div>
      </motion.div>
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
