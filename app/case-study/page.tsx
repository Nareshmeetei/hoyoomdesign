import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import projects from "@/content/projects.json";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Case Studies | Hayoom Design",
};

export default function CaseStudyIndex() {
  return (
    <div className="pt-40 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <p className="text-primary text-xs font-mono uppercase tracking-wide mb-3 text-center">Projects</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Some Latest Projects Our Clients Loved
          </h1>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <Link
                href={`/case-study/${p.slug}`}
                data-cursor="click"
                className="group block rounded-2xl border border-white/10 bg-cardBg overflow-hidden"
              >
                {p.thumbnail && (
                  <div className="relative w-full aspect-video bg-black/40">
                    <Image
                      src={p.thumbnail}
                      alt={p.title || p.slug}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-6 flex items-center justify-between">
                  <h2 className="font-heading text-lg font-bold text-white">{p.title}</h2>
                  <span className="text-primary text-sm opacity-0 group-hover:opacity-100 transition-opacity">View Project</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
