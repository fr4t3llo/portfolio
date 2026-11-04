import {
  certifications,
  education,
  experience,
  testimonials,
  volunteering,
} from "@/data/profile";
import { EntryRow, Section } from "./primitives";

export default function Experience() {
  return (
    <>
      <Section id="experience" title="Experience">
        <ul className="space-y-10">
          {experience.map((job) => (
            <EntryRow key={`${job.title}-${job.org}`} entry={job} tile />
          ))}
        </ul>

        {testimonials.map((t) => (
          <figure
            key={t.author}
            className="mt-12 rounded-md border-l-2 border-accent bg-surface/60 px-6 py-5"
          >
            <blockquote className="font-serif text-lead leading-relaxed text-balance">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-4 text-meta text-muted">
              — <span className="font-medium text-ink">{t.author}</span>
              {t.context ? <span>, {t.context}</span> : null}
            </figcaption>
          </figure>
        ))}
      </Section>

      <Section title="Education">
        <ul className="space-y-9">
          {education.map((item) => (
            <EntryRow key={`${item.title}-${item.org}`} entry={item} />
          ))}
        </ul>
      </Section>

      <Section title="Certifications">
        <ul className="space-y-8">
          {certifications.map((item) => (
            <EntryRow key={item.title} entry={item} />
          ))}
        </ul>
      </Section>

      <Section title="Volunteering">
        <ul className="space-y-8">
          {volunteering.map((item) => (
            <EntryRow key={item.title} entry={item} />
          ))}
        </ul>
      </Section>
    </>
  );
}
