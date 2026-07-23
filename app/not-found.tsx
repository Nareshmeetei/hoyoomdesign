import CtaButton from "@/components/CtaButton";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center pt-24">
      <p className="text-primary font-mono text-sm mb-4">404</p>
      <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">Sometimes We Get Lost</h1>
      <p className="text-white/60 max-w-md mb-8">Let&rsquo;s get you back where the good stuff lives.</p>
      <CtaButton href="/#hero">Go Back Home</CtaButton>
    </div>
  );
}
