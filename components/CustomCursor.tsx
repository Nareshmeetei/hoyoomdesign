"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "@phosphor-icons/react";

// Reproduces the project's "Cursor" component, "CLick" variant:
// an 82px circular bubble that follows the pointer, offset (20px, 20px)
// to the right of the cursor, shown while hovering [data-cursor="click"] targets.
export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    setIsTouch(window.matchMedia("(hover: none)").matches);

    function onMove(e: MouseEvent) {
      setPos({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      setVisible(!!target.closest('[data-cursor="click"]'));
    }
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  if (isTouch) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="pointer-events-none fixed z-[100] flex items-center justify-center gap-1 rounded-full text-black text-xs font-medium"
          style={{
            left: pos.x + 20,
            top: pos.y + 20,
            width: 82,
            height: 82,
            background:
              "linear-gradient(90deg, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0.65) 36%, rgba(255,255,255,0.65) 54%, rgb(219,219,219) 100%)",
          }}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        >
          Visit
          <ArrowUpRight size={16} weight="regular" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
