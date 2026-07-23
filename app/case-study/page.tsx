import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import projects from "@/content/projects.json";

export const metadata: Metadata = {
  title: "Case Studies | Hayoom Design",
};

export default function CaseStudyIndex() {
  return (
    <div className="pt-40 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-primary text-xs font-mono uppercase tracking-wide mb-3 text-center">Case Studies</p>
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Real projects, real results
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <Link
              key={p.slug}
              href={`/case-study/${p.slug}`}
              className="rounded-2xl border border-white/10 bg-cardBg overflow-hidden group"
            >
              {p.thumbnail && (
                <div className="relative w-full aspect-video bg-black/40">
                  <Image src={p.thumbnail} alt={p.title || p.slug} fill className="object-cover group-hover:scale-105 transition-transform" />
                </div>
              )}
              <div className="p-6">
                <h2 className="font-heading text-lg font-bold text-white">{p.title}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
