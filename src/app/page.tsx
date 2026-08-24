import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Sidebar from "@/components/Sidebar";
import Skills from "@/components/Skills";
import TopNav from "@/components/TopNav";

export default function Home() {
  return (
    <div id="top" className="min-h-screen">
      {/* Fixed on every size: full width on mobile, offset by the rail on desktop. */}
      <TopNav />

      {/*
        Left rail: stacks under the header on mobile (pt-16 clears the fixed bar),
        pinned full-height beside the content from lg up.
      */}
      <div className="border-b border-line pt-16 lg:fixed lg:inset-y-0 lg:left-0 lg:w-[330px] lg:overflow-y-auto lg:border-b-0 lg:pt-0">
        <Sidebar />
      </div>

      <main className="min-w-0 lg:ml-[330px] lg:pt-16">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
