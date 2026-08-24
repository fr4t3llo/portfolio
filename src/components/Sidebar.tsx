import Image from "next/image";
import { Briefcase, Download, Globe, Mail, MapPin } from "lucide-react";
import { brandIcons } from "./icons";
import { profile } from "@/data/profile";
import { asset } from "@/lib/asset";

const metaIcons = {
  location: MapPin,
  briefcase: Briefcase,
  globe: Globe,
} as const;

export default function Sidebar() {
  return (
    <aside className="flex h-full flex-col border-line px-5 py-6 sm:px-6 lg:border-r">
      {/* Photo sits beside the name on phones, above it on the desktop rail. */}
      <div className="flex items-center gap-4 lg:block">
        <Image
          // next/image only applies basePath via the optimizer, which is off for
          // static export — so the prefix has to be added here.
          src={asset(profile.avatar)}
          alt={profile.name}
          width={240}
          height={240}
          priority
          className="size-[76px] shrink-0 rounded-md object-cover object-top sm:size-[88px] lg:size-[104px]"
        />
        <div className="min-w-0 lg:mt-14">
          <h1 className="font-serif text-name leading-tight">{profile.name}</h1>
          <p className="mt-1 text-meta text-muted">{profile.role}</p>
        </div>
      </div>

      <p className="mt-5 text-meta leading-relaxed text-muted">
        {profile.blurb}
      </p>

      <hr className="my-5 border-line lg:my-6" />

      <ul className="flex flex-wrap gap-x-5 gap-y-3 lg:block lg:space-y-3">
        {profile.meta.map((item) => {
          const Icon = metaIcons[item.icon];
          return (
            <li key={item.label} className="flex items-center gap-2.5 text-meta">
              <Icon className="size-4 shrink-0 text-ink" strokeWidth={2} />
              {item.label}
            </li>
          );
        })}
      </ul>

      {/* Pushes the social row and CTAs to the bottom of the desktop rail. */}
      <div className="mt-6 lg:mt-auto lg:pt-10">
        <ul className="flex gap-2">
          {profile.socials.map((social) => {
            const Icon = brandIcons[social.icon];
            return (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex size-[42px] items-center justify-center rounded-md border border-line transition-colors hover:bg-surface sm:size-[38px]"
                >
                  <Icon className="size-4" />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="mt-3 flex gap-2 lg:mt-4">
          <a
            href={asset(profile.cvHref)}
            download
            className="flex h-[46px] flex-1 items-center justify-center gap-2 rounded-md bg-ink text-meta font-medium text-cream transition-opacity hover:opacity-90"
          >
            <Download className="size-4" />
            Download CV
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email me"
            className="flex size-[46px] shrink-0 items-center justify-center rounded-md border border-line bg-surface transition-colors hover:bg-line"
          >
            <Mail className="size-4" />
          </a>
        </div>
      </div>
    </aside>
  );
}
