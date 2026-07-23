import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import projects from "@/content/projects.json";
import Reveal from "@/components/Reveal";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  return { title: project ? `${project.title} | Hayoom Design` : "Case Study | Hayoom Design" };
}

export default function CaseStudyDetail({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <div className="pt-40 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/case-study" className="text-primary text-sm mb-8 inline-block hover:opacity-70 transition-opacity">
          &larr; Back
        </Link>
        <Reveal>
          {project.thumbnail && (
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-8 bg-black/40">
              <Image src={project.thumbnail} alt={project.title || project.slug} fill className="object-cover" />
            </div>
          )}
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-white mb-8">{project.title}</h1>
        </Reveal>
        <div
          className="prose-content"
          dangerouslySetInnerHTML={{ __html: project.content || "" }}
        />
      </div>
    </div>
  );
}
