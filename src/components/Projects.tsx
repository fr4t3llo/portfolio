import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/profile";
import { InitialTile, Section } from "./primitives";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <ul className="space-y-7">
        {projects.map((project) => {
          const body = (
            <>
              <InitialTile label={project.name} size={56} />
              <div className="min-w-0 flex-1">
                <h3 className="text-entry font-medium">{project.name}</h3>
                <p className="mt-1 text-meta leading-relaxed text-muted">
                  {project.description}
                </p>
              </div>
              {project.href ? (
                <span className="flex size-[38px] shrink-0 items-center justify-center rounded-sm bg-surface transition-colors group-hover:bg-line">
                  <ArrowUpRight className="size-[18px]" />
                </span>
              ) : null}
            </>
          );

          return (
            <li key={project.name}>
              {project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-start gap-4 rounded-sm transition-colors hover:bg-surface/60 sm:items-center"
                >
                  {body}
                </a>
              ) : (
                <div className="flex items-start gap-4 sm:items-center">{body}</div>
              )}
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
