import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-darkerBlue">
      <div className="max-w-5xl mx-auto px-6 py-20 text-center relative z-10">
        <span className="inline-block mb-4 text-xs font-mono uppercase tracking-wide text-primary border border-primary/30 rounded-full px-3 py-1">
          Only 4 spots left for this month
        </span>
        <h3 className="font-heading text-3xl md:text-5xl font-bold text-white mb-8">
          Ready to elevate your brand?
        </h3>

        {/* Cal.com booking embed — see MIGRATION_NOTES.md for setup */}
        <div
          id="my-cal-inline-15min"
          className="w-full min-h-[500px] rounded-2xl bg-cardBg border border-white/10 flex items-center justify-center text-white/40 text-sm"
        >
          Cal.com booking widget loads here (see MIGRATION_NOTES.md)
        </div>

        <div className="flex items-center justify-center gap-6 mt-10">
          <a href="https://x.com/nareshmeetei11" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white text-sm">
            X
          </a>
          <a href="https://www.linkedin.com/in/nareshmeetei/" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white text-sm">
            LinkedIn
          </a>
          <a href="https://dribbble.com/nareshmeetei" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white text-sm">
            Dribbble
          </a>
        </div>

        <div className="flex items-center justify-center gap-2 mt-10 opacity-60">
          <Image src="/logos/logo-light.svg" alt="Hayoom Design" width={20} height={20} />
          <span className="text-xs text-white/50">© {new Date().getFullYear()} Hayoom Design. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
