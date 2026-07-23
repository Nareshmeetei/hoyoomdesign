// Reproduces the project's "Blur Gradient" component (blur: 7px, direction: down):
// a fixed bottom overlay with a progressive backdrop blur, used to soften content
// scrolling behind it near the viewport edge.
export default function BlurGradient({ blur = 7 }: { blur?: number }) {
  return (
    <div
      className="pointer-events-none fixed bottom-0 left-0 right-0 h-24 z-40"
      style={{
        backdropFilter: `blur(${blur}px)`,
        WebkitBackdropFilter: `blur(${blur}px)`,
        maskImage: "linear-gradient(to top, black 0%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 100%)",
      }}
    />
  );
}
