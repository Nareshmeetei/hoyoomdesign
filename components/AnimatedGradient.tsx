type Props = {
  color1: string;
  color2: string;
  color3: string;
  rotation?: number;
  speed?: number;
  className?: string;
};

// CSS approximation of the project's "Animated Gradient Background" (Mist
// preset, shader-based in Framer). Uses the real color1/color2/color3 +
// rotation values pulled from the project's component instances; speed maps
// to the CSS animation duration.
export default function AnimatedGradient({ color1, color2, color3, rotation = 0, speed = 20, className = "" }: Props) {
  const duration = Math.max(8, 40 - speed) + "s";
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} style={{ background: color3 }}>
      <div
        className="absolute inset-[-20%] opacity-70 animate-mist-drift"
        style={{
          background: `radial-gradient(45% 45% at 30% 30%, ${color2} 0%, transparent 70%),
                       radial-gradient(40% 40% at 70% 60%, ${color1} 0%, transparent 70%)`,
          transform: `rotate(${rotation}deg)`,
          filter: "blur(60px)",
          animationDuration: duration,
        }}
      />
    </div>
  );
}
