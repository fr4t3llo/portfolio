import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import Shell from "@/components/Shell";
import { GitHubIcon } from "@/components/icons";
import { profile, projects } from "@/data/profile";
import { asset } from "@/lib/asset";

const detailed = projects.filter((p) => p.slug);

export function generateStaticParams() {
  return detailed.map((p) => ({ slug: p.slug! }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = detailed.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.name} — ${profile.name}`,
    description: project.summary ?? project.description,
  };
}

export default async function ProjectPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = detailed.find((p) => p.slug === slug);
  if (!project) notFound();

  const shots = Array.from({ length: project.shots ?? 0 }, (_, i) =>
    asset(`/projects/${project.slug}/${String(i + 1).padStart(2, "0")}.webp`),
  );

  return (
    <Shell variant="detail">
      <article className="px-5 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-[780px]">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-meta text-muted transition-colors hover:text-accent"
          >
            <ArrowLeft className="size-4" />
            All projects
          </Link>

          <h1 className="mt-8 font-serif text-section">{project.name}</h1>
          <p className="mt-4 max-w-[60ch] text-body leading-relaxed text-muted">
            {project.summary ?? project.description}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-2.5">
            {project.repo ? (
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="flex h-11 items-center gap-2 rounded-md bg-ink px-4 text-meta font-medium text-cream transition-opacity hover:opacity-90"
              >
                <GitHubIcon className="size-4" />
                View source
                <ArrowUpRight className="size-4 text-accent" />
              </a>
            ) : null}
            {project.tech?.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-surface px-3 py-2 text-meta"
              >
                {tech}
              </span>
            ))}
          </div>

          {shots.length > 0 ? (
            <section className="mt-14">
              <h2 className="text-entry font-medium">Screens</h2>
              {/*
                Device mockups are transparent PNGs converted to WebP, so they
                sit directly on the page background with no plate behind them.
              */}
              <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
                {shots.map((src, i) => (
                  <li key={src}>
                    <Image
                      src={src}
                      alt={`${project.name} screenshot ${i + 1}`}
                      width={552}
                      height={1128}
                      priority={i === 0}
                      className="h-auto w-full drop-shadow-[0_8px_24px_rgba(24,11,7,0.12)]"
                    />
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {project.features?.length ? (
            <section className="mt-14">
              <h2 className="text-entry font-medium">What it does</h2>
              <ul className="mt-5 space-y-3">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex gap-3 text-meta leading-relaxed text-muted"
                  >
                    <Check
                      aria-hidden
                      className="mt-0.5 size-4 shrink-0 text-accent"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          <div className="mt-14 border-t border-line pt-7">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-meta text-muted transition-colors hover:text-accent"
            >
              <ArrowLeft className="size-4" />
              Back to all projects
            </Link>
          </div>
        </div>
      </article>
    </Shell>
  );
}
