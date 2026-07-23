import type { ReactNode } from "react";

type Props = {
  children: ReactNode[];
  speed?: number; // matches the project's Ticker "speed" control
  gap?: number; // matches the project's Ticker "gap" control (px)
  direction?: "Left" | "Right";
  className?: string;
};

// Reproduces the project's "Ticker" marquee component using its real
// speed/gap/direction control values, with the same content duplicated for a
// seamless loop and edge-fade masking (matching the real "fadeContent" control).
export default function Ticker({ children, speed = 50, gap = 24, direction = "Left", className = "" }: Props) {
  const duration = `${Math.max(6, 2000 / speed)}s`;
  const animationName = direction === "Left" ? "ticker-left" : "ticker-right";

  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      style={{
        maskImage: "linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)",
      }}
    >
      <div
        className="flex w-max items-center"
        style={{ gap, animation: `${animationName} ${duration} linear infinite` }}
      >
        {[...children, ...children].map((child, i) => (
          <div key={i} style={{ marginRight: gap }}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}
