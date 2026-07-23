"use client";

import { motion, type Transition } from "framer-motion";
import type { ReactNode } from "react";

// Reproduces the project's dominant scroll-appear effect, used on ~80% of
// animated nodes: threshold 0.5, trigger onInView (once), enter from
// opacity:0/y:50 with spring-physics(320, 70, 1, 0.2s).
const springTransition: Transition = {
  type: "spring",
  stiffness: 320,
  damping: 70,
  mass: 1,
  delay: 0.2,
};

export default function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ ...springTransition, delay: springTransition.delay! + delay }}
    >
      {children}
    </motion.div>
  );
}
