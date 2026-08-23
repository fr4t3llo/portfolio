import { languages, skills, technologies } from "@/data/profile";
import { Section, Tag } from "./primitives";
import TechIcon from "./TechIcon";

export default function Skills() {
  return (
    <>
      <Section id="skills" title="Skills">
        <ul className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Tag key={skill}>{skill}</Tag>
          ))}
        </ul>

        <p className="mt-10 text-meta">Technologies &amp; tools:</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <TechIcon key={tech} name={tech} />
          ))}
        </ul>
      </Section>

      <Section title="Languages">
        <ul className="grid gap-x-10 gap-y-5 sm:grid-cols-2">
          {languages.map((language) => (
            <li
              key={language.name}
              className="flex items-baseline justify-between gap-4 border-b border-line pb-3"
            >
              <span className="text-entry font-medium">{language.name}</span>
              <span className="text-meta text-muted">{language.level}</span>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
