import Image from "next/image";
import CalEmbed from "@/components/CalEmbed";
import AnimatedGradient from "@/components/AnimatedGradient";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-darkerBlue">
      {/* Real Footer "Animated Gradient Background" params: Mist preset, Checks shape,
          color1/color3 = Secondary token, color2 = Primary green, rotation -50 */}
      <AnimatedGradient color1="rgb(1,20,24)" color2="rgb(110,239,138)" color3="rgb(1,20,24)" rotation={-50} speed={20} />

      <div className="max-w-3xl mx-auto px-6 py-20 text-center relative z-10">
        <span className="inline-block mb-4 text-xs font-mono uppercase tracking-wide text-primary border border-primary/30 rounded-full px-3 py-1">
          Only 4 spots left for this month
        </span>
        <h3 className="font-heading text-3xl md:text-5xl font-medium text-primary mb-4">
          Still Unsure? Let&rsquo;s Brainstorm.
        </h3>
        <p className="text-white/60 max-w-md mx-auto mb-10">
          Book a free quick 15 minute brainstorm. Let&rsquo;s find out how great designs can boost your revenue.
        </p>

        <CalEmbed />

        <div className="flex items-center justify-center gap-6 mt-10">
          <a
            href="https://x.com/nareshmeetei11"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="click"
            className="text-white/50 hover:text-white text-sm transition-colors"
          >
            X
          </a>
          <a
            href="https://www.linkedin.com/in/nareshmeetei/"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="click"
            className="text-white/50 hover:text-white text-sm transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://dribbble.com/nareshmeetei"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="click"
            className="text-white/50 hover:text-white text-sm transition-colors"
          >
            Dribbble
          </a>
        </div>

        <p className="text-white/50 text-sm mt-10">
          <a href="mailto:hello@hayoomdesign.com" data-cursor="click" className="hover:text-white transition-colors">
            hello@hayoomdesign.com
          </a>
        </p>

        <div className="flex items-center justify-center gap-2 mt-10 opacity-60">
          <Image src="/logos/logo-real.svg" alt="Hayoom Design" width={90} height={22} />
        </div>
        <p className="text-xs text-white/40 mt-4">Designed &amp; Developed in Framer</p>
        <p className="text-xs text-white/40">All rights reserved, ©2025</p>
      </div>
    </footer>
  );
}
