import {
  certifications,
  education,
  experience,
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
