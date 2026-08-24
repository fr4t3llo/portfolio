import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import type { Entry } from "@/data/profile";

/** A titled block. `id` is set only on the five scroll-spy anchors. */
export function Section({
  id,
  title,
  children,
  divider = true,
}: {
  id?: string;
  title: string;
  children: ReactNode;
  divider?: boolean;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 px-5 py-12 sm:px-8 sm:py-16 ${divider ? "border-b border-line" : ""}`}
    >
      <div className="mx-auto max-w-[780px]">
        <h2 className="font-serif text-section">{title}</h2>
        <div className="mt-8 sm:mt-10">{children}</div>
      </div>
    </section>
  );
}

/** Square tile with an orange serif initial — used where no logo exists. */
export function InitialTile({
  label,
  size = 46,
}: {
  label: string;
  size?: number;
}) {
  return (
    <span
      style={{ width: size, height: size }}
      className="flex shrink-0 items-center justify-center rounded-sm bg-surface font-serif text-lg text-accent"
      aria-hidden
    >
      {label.charAt(0)}
    </span>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <li className="rounded-sm bg-surface px-3 py-1.5 text-meta">{children}</li>
  );
}

/**
 * Title on the left, date on the right, optional summary or bullets underneath —
 * the shared shape of Experience, Education, Certification and Volunteering rows.
 */
export function EntryRow({
  entry,
  tile = false,
}: {
  entry: Entry;
  tile?: boolean;
}) {
  const meta = [entry.org, entry.location].filter(Boolean) as string[];
  const body = entry.summary || entry.details;

  return (
    <li>
      <div className="flex gap-4">
        {tile ? <InitialTile label={entry.org ?? entry.title} /> : null}
        {/* Date drops below the title on phones instead of squeezing it. */}
        <div className="flex min-w-0 flex-1 flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
          <div className="min-w-0">
            <h3 className="text-entry font-medium">
              {entry.href ? (
                <a
                  href={entry.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-start gap-1.5"
                >
                  <span className="group-hover:text-accent">{entry.title}</span>
                  <ArrowUpRight className="mt-1 size-4 shrink-0 text-muted" />
                </a>
              ) : (
                entry.title
              )}
            </h3>
            {meta.length > 0 ? (
              <p className="mt-1 text-meta text-muted">
                {meta.map((part, i) => (
                  <span key={part}>
                    {i > 0 ? <span className="px-2">•</span> : null}
                    {part}
                  </span>
                ))}
              </p>
            ) : null}
          </div>
          <span className="shrink-0 text-meta text-muted sm:pt-0.5 sm:whitespace-nowrap">
            {entry.period}
          </span>
        </div>
      </div>

      {body ? (
        // The 62px indent aligns with the tile, but costs too much width on phones.
        <div className={`mt-3 max-w-[640px] ${tile ? "sm:pl-[62px]" : ""}`}>
          {entry.summary ? (
            <p className="text-meta leading-relaxed text-muted">
              {entry.summary}
            </p>
          ) : null}
          {entry.details ? (
            <ul className="space-y-2 text-meta leading-relaxed text-muted">
              {entry.details.map((detail) => (
                <li key={detail} className="flex gap-2.5">
                  <span aria-hidden className="text-accent">
                    •
                  </span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      ) : null}
    </li>
  );
}
