import { ArrowRight } from "lucide-react";
import { PhoneSparkIcon } from "./icons";
import { profile } from "@/data/profile";

/* Overlapping status dots that sit to the left of the hero CTA. */
const dots = ["bg-accent", "bg-[#5c514d]", "bg-[#b6afaa]"];

export default function Hero() {
  return (
    <section className="flex flex-col items-center px-8 pt-20 pb-32 text-center">
      <PhoneSparkIcon className="size-[112px] text-accent" />

      <h2 className="mt-12 font-serif text-display">{profile.role}</h2>

      <p className="mt-6 max-w-[34ch] text-lead leading-relaxed text-balance text-muted">
        {profile.tagline}
      </p>

      <div className="mt-12 flex items-center gap-2.5 rounded-full border border-line bg-cream p-1.5 pl-4 shadow-[0_1px_2px_rgba(24,11,7,0.04)]">
        <div className="flex items-center">
          {dots.map((color, i) => (
            <span
              key={color}
              className={`size-[13px] rounded-full ring-2 ring-cream ${color} ${i > 0 ? "-ml-1.5" : ""}`}
            />
          ))}
        </div>
        <a
          href="#experience"
          className="flex h-[42px] items-center gap-2 rounded-full bg-ink px-5 text-meta font-medium text-cream transition-opacity hover:opacity-90"
        >
          View Experience
          <ArrowRight className="size-4 text-accent" />
        </a>
      </div>
    </section>
  );
}
