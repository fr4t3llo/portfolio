"use client";

import { useEffect, useState } from "react";
import { CircleUserRound, MessageCircleMore } from "lucide-react";
import { nav } from "@/data/profile";

const ids = nav.map((item) => item.href.slice(1));

export default function TopNav() {
  const [active, setActive] = useState<string>(ids[0]);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    /**
     * Pick the last section whose top has passed just below the sticky header.
     * Sections are taller than the viewport, so tracking the crossing point is
     * steadier here than reacting to individual intersection events.
     */
    const update = () => {
      const line = 100;
      let current = sections[0]?.id ?? ids[0];
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= line) current = section.id;
      }
      // Snap to the final section once the page is scrolled to the bottom.
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
        current = ids[ids.length - 1];
      }
      setActive(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-10 bg-cream/85 backdrop-blur-sm transition-colors ${
        scrolled ? "border-b border-line" : "border-b border-transparent"
      }`}
    >
      <div className="flex items-center justify-between gap-6 px-8 py-4">
        {/* Spacer keeps the nav optically centred against the right-hand CTA. */}
        <div className="hidden flex-1 xl:block" />

        <nav className="flex items-center gap-5">
          <CircleUserRound
            className="size-6 shrink-0 text-accent"
            strokeWidth={1.75}
          />
          <ul className="flex items-center gap-4 text-meta">
            {nav.map((item) => {
              const isActive = active === item.href.slice(1);
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "true" : undefined}
                    className={`transition-colors hover:text-accent ${
                      isActive ? "text-accent" : ""
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex flex-1 justify-end">
          <a
            href="#contact"
            className="flex h-10 items-center gap-2 rounded-md bg-ink px-4 text-meta font-medium text-cream transition-opacity hover:opacity-90"
          >
            <MessageCircleMore className="size-4" />
            Contact Me
          </a>
        </div>
      </div>
    </header>
  );
}
