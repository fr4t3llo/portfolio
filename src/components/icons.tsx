import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

/* Brand marks — lucide dropped these, so they're inlined as solid paths. */

export function LinkedInIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.65h.05A4.17 4.17 0 0 1 17.6 8.7c4 0 4.75 2.6 4.75 6V21h-4v-5.5c0-1.31-.03-3-1.85-3-1.85 0-2.13 1.42-2.13 2.9V21h-4V9Z" />
    </svg>
  );
}

export function GitHubIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.12 3.04.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.39-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  );
}

export function MediumIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12ZM20.96 12c0 3.54-1.51 6.4-3.38 6.4-1.87 0-3.39-2.86-3.39-6.4s1.52-6.4 3.39-6.4 3.38 2.87 3.38 6.4ZM24 12c0 3.17-.53 5.74-1.19 5.74-.66 0-1.19-2.57-1.19-5.74s.53-5.74 1.19-5.74C23.47 6.26 24 8.83 24 12Z" />
    </svg>
  );
}

export function StackOverflowIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M17.36 20.2v-5.38h1.79V22H3v-7.18h1.8v5.38h12.56Z" />
      <path d="m6.77 14.32.35-1.76 8.79 1.85-.35 1.76-8.79-1.85Zm1.16-4.2.74-1.62 8.14 3.78-.74 1.63-8.14-3.79Zm2.26-3.99 1.12-1.39 6.9 5.76-1.12 1.38-6.9-5.75Zm4.46-4.25 5.38 7.24-1.44 1.07-5.38-7.24 1.44-1.07ZM6.6 18.36v-1.8h8.98v1.8H6.6Z" />
    </svg>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37s-1.04 1.02-1.04 2.48 1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35ZM12.04 21.5h-.01a9.4 9.4 0 0 1-4.79-1.31l-.34-.2-3.56.93.95-3.47-.22-.36a9.38 9.38 0 0 1-1.44-5.01c0-5.19 4.23-9.41 9.42-9.41a9.36 9.36 0 0 1 6.65 2.76 9.33 9.33 0 0 1 2.75 6.66c0 5.19-4.22 9.41-9.41 9.41ZM20.4 3.6A11.75 11.75 0 0 0 12.04 0C5.55 0 .28 5.27.27 11.75c0 2.07.54 4.09 1.57 5.88L.17 24l6.51-1.71a11.7 11.7 0 0 0 5.36 1.31c6.49 0 11.76-5.28 11.76-11.76 0-3.14-1.22-6.1-3.44-8.32Z" />
    </svg>
  );
}

/** Hero illustration: a line-art phone showing code, ringed with sparkles. */
export function PhoneSparkIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 120 120" fill="none" aria-hidden {...props}>
      <g
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* phone body */}
        <rect x="45" y="26" width="30" height="52" rx="6" />
        <path d="M55 32h10" />
        {/* code glyph */}
        <path d="M55.5 55.5 52 52l3.5-3.5M64.5 48.5 68 52l-3.5 3.5" />
        {/* radiating rays */}
        <path d="M60 18v-6M78 26l4.5-4.5M42 26l-4.5-4.5M84 44h6M30 44h-6M78 62l4.5 4.5M42 62l-4.5 4.5" />
        {/* corner sparkles */}
        <path d="M28 66c0 4-3 7-7 7 4 0 7 3 7 7 0-4 3-7 7-7-4 0-7-3-7-7Z" />
        <path d="M92 62c0 3-2.2 5.2-5.2 5.2 3 0 5.2 2.2 5.2 5.2 0-3 2.2-5.2 5.2-5.2-3 0-5.2-2.2-5.2-5.2Z" />
      </g>
      {/* dot accents */}
      <g fill="currentColor">
        <circle cx="36" cy="86" r="2" />
        <circle cx="84" cy="86" r="2" />
        <circle cx="60" cy="92" r="2" />
      </g>
    </svg>
  );
}

export const brandIcons = {
  linkedin: LinkedInIcon,
  github: GitHubIcon,
  medium: MediumIcon,
  stackoverflow: StackOverflowIcon,
} as const;
