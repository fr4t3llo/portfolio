import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/profile";
import { InitialTile, Section } from "./primitives";
import { asset } from "@/lib/asset";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <ul className="space-y-7">
        {projects.map((project) => {
          const body = (
            <>
              {project.slug ? (
                // First screenshot doubles as the row thumbnail.
                <span className="flex size-[56px] shrink-0 items-center justify-center overflow-hidden rounded-sm bg-surface">
                  <Image
                    src={asset(`/projects/${project.slug}/01.webp`)}
                    alt=""
                    width={552}
                    height={1128}
                    className="h-full w-auto object-contain"
                  />
                </span>
              ) : (
                <InitialTile label={project.name} size={56} />
              )}

              <div className="min-w-0 flex-1">
                <h3 className="text-entry font-medium">{project.name}</h3>
                <p className="mt-1 text-meta leading-relaxed text-muted">
                  {project.description}
                </p>
              </div>

              {project.slug || project.href ? (
                <span className="flex size-[38px] shrink-0 items-center justify-center rounded-sm bg-surface transition-colors group-hover:bg-line">
                  {project.slug ? (
                    <ArrowRight className="size-[18px]" />
                  ) : (
                    <ArrowUpRight className="size-[18px]" />
                  )}
                </span>
              ) : null}
            </>
          );

          const rowClass =
            "group flex items-start gap-4 rounded-sm transition-colors hover:bg-surface/60 sm:items-center";

          return (
            <li key={project.name}>
              {project.slug ? (
                <Link href={`/projects/${project.slug}`} className={rowClass}>
                  {body}
                </Link>
              ) : project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className={rowClass}
                >
                  {body}
                </a>
              ) : (
                <div className="flex items-start gap-4 sm:items-center">
                  {body}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
