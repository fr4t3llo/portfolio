import {
  creativeSkills,
  languages,
  skillGroups,
  technologies,
} from "@/data/profile";
import { Section, Tag } from "./primitives";
import TechIcon from "./TechIcon";

export default function Skills() {
  return (
    <>
      <Section id="skills" title="Skills">
        <div className="space-y-8">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <p className="mb-3 text-meta font-medium tracking-wide text-muted uppercase">
                {group.title}
              </p>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-10 text-meta">Technologies &amp; tools:</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <TechIcon key={tech} name={tech} />
          ))}
        </ul>

        <p className="mt-10 text-meta text-muted">
          Also: {creativeSkills.join(" · ")}
        </p>
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
