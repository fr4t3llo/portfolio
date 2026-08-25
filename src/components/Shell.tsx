import type { ReactNode } from "react";
import Sidebar from "./Sidebar";
import TopNav from "./TopNav";

/**
 * Page frame shared by the home page and the project detail pages: fixed
 * header, the sidebar rail, and the scrolling content column.
 *
 * `variant` controls the nav — "home" scroll-spies the sections on this page,
 * "detail" links back to them at /#section since they live on another route.
 */
export default function Shell({
  children,
  variant = "home",
}: {
  children: ReactNode;
  variant?: "home" | "detail";
}) {
  return (
    <div id="top" className="min-h-screen">
      <TopNav variant={variant} />

      {/*
        Left rail: stacks under the header on mobile (pt-16 clears the fixed bar),
        pinned full-height beside the content from lg up.
      */}
      <div className="border-b border-line pt-16 lg:fixed lg:inset-y-0 lg:left-0 lg:w-[330px] lg:overflow-y-auto lg:border-b-0 lg:pt-0">
        <Sidebar />
      </div>

      <main className="min-w-0 lg:ml-[330px] lg:pt-16">{children}</main>
    </div>
  );
}
