"use client";

import { useEffect, useState } from "react";
import {
  CircleUserRound,
  Menu,
  MessageCircleMore,
  X,
} from "lucide-react";
import { nav } from "@/data/profile";

const ids = nav.map((item) => item.href.slice(1));

export default function TopNav({
  variant = "home",
}: {
  variant?: "home" | "detail";
}) {
  // On a detail page the sections live back on "/", so nothing is spied here.
  const isHome = variant === "home";
  const hrefFor = (href: string) => (isHome ? href : `/${href}`);
  const [active, setActive] = useState<string>(isHome ? ids[0] : "");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on Escape, and whenever the viewport reaches desktop.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const mq = window.matchMedia("(min-width: 48rem)");
    const onChange = () => mq.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onChange);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onChange);
    };
  }, [open]);

  useEffect(() => {
    if (!isHome) return;
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    /**
     * Pick the last section whose top has passed just below the fixed header.
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
  }, [isHome]);

  const linkClass = (href: string) =>
    `transition-colors hover:text-accent ${
      active === href.slice(1) ? "text-accent" : ""
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-20 bg-cream/90 backdrop-blur-sm transition-colors lg:left-[330px] ${
        scrolled || open ? "border-b border-line" : "border-b border-transparent"
      }`}
    >
      <div className="flex h-16 items-center justify-between gap-4 px-5 sm:px-8">
        {/* Spacer balances the nav against the right-hand CTA on wide screens. */}
        <div className="hidden flex-1 xl:block" />

        <CircleUserRound
          className="size-6 shrink-0 text-accent md:hidden"
          strokeWidth={1.75}
        />

        <nav className="hidden items-center gap-5 md:flex">
          <CircleUserRound
            className="size-6 shrink-0 text-accent"
            strokeWidth={1.75}
          />
          <ul className="flex items-center gap-4 text-meta">
            {nav.map((item) => (
              <li key={item.label}>
                <a
                  href={hrefFor(item.href)}
                  aria-current={
                    active === item.href.slice(1) ? "true" : undefined
                  }
                  className={linkClass(item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-1 items-center justify-end gap-2">
          <a
            href={hrefFor("#contact")}
            className="hidden h-10 items-center gap-2 rounded-md bg-ink px-4 text-meta font-medium text-cream transition-opacity hover:opacity-90 md:flex"
          >
            <MessageCircleMore className="size-4" />
            Contact Me
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex size-10 items-center justify-center rounded-md border border-line transition-colors hover:bg-surface md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-menu"
          className="border-t border-line bg-cream px-5 pt-2 pb-4 md:hidden"
        >
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.label}>
                <a
                  href={hrefFor(item.href)}
                  onClick={() => setOpen(false)}
                  aria-current={
                    active === item.href.slice(1) ? "true" : undefined
                  }
                  className={`block py-2.5 text-[15px] ${linkClass(item.href)}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={hrefFor("#contact")}
            onClick={() => setOpen(false)}
            className="mt-3 flex h-11 items-center justify-center gap-2 rounded-md bg-ink text-meta font-medium text-cream"
          >
            <MessageCircleMore className="size-4" />
            Contact Me
          </a>
        </nav>
      ) : null}
    </header>
  );
}
