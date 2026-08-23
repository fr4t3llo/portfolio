import type { ReactNode } from "react";
import { Mail } from "lucide-react";
import { connect, profile } from "@/data/profile";
import { brandIcons, WhatsAppIcon } from "./icons";

function ContactCard({
  icon,
  label,
  value,
  href,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="flex flex-1 items-center gap-3.5 rounded-sm bg-surface p-3.5 transition-colors hover:bg-line"
    >
      <span className="flex size-[46px] shrink-0 items-center justify-center rounded-sm bg-accent text-cream">
        {icon}
      </span>
      <span className="min-w-0 text-left">
        <span className="block text-meta font-semibold">{label}</span>
        <span className="block truncate text-meta text-muted">{value}</span>
      </span>
    </a>
  );
}

export default function Contact() {
  return (
    <>
      <section
        id="contact"
        className="scroll-mt-20 border-b border-line px-8 py-20 text-center"
      >
        <div className="mx-auto max-w-[780px]">
          <h2 className="font-serif text-display">{connect.heading}</h2>
          <p className="mx-auto mt-5 max-w-[34ch] text-lead leading-relaxed text-balance text-muted">
            {connect.subtitle}
          </p>

          <div className="mt-10 flex flex-col gap-2.5 sm:flex-row">
            <ContactCard
              icon={<Mail className="size-[18px]" />}
              label="Email Me"
              value={profile.email}
              href={`mailto:${profile.email}`}
            />
            <ContactCard
              icon={<WhatsAppIcon className="size-[18px]" />}
              label="WhatsApp Me"
              value={profile.whatsapp.display}
              href={profile.whatsapp.href}
            />
          </div>

          <p className="mt-12 text-meta">Join my network:</p>
          <ul className="mt-3.5 flex justify-center gap-2">
            {profile.socials.map((social) => {
              const Icon = brandIcons[social.icon];
              return (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="flex size-[46px] items-center justify-center rounded-sm border border-line transition-colors hover:bg-surface"
                  >
                    <Icon className="size-[18px]" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <footer className="px-8 py-7">
        <div className="mx-auto flex max-w-[780px] items-center justify-between text-meta text-muted">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <a href="#top" className="transition-colors hover:text-accent">
            Back to Top
          </a>
        </div>
      </footer>
    </>
  );
}
