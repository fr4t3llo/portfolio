import { about } from "@/data/profile";
import { Section } from "./primitives";

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="max-w-[600px] space-y-4 text-body leading-relaxed text-muted sm:space-y-5">
        {about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}
