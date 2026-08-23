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
      {/* Left rail: stacked on small screens, pinned full-height from lg up. */}
      <div className="border-b border-line lg:fixed lg:inset-y-0 lg:left-0 lg:w-[330px] lg:overflow-y-auto lg:border-b-0">
        <Sidebar />
      </div>

      <main className="min-w-0 lg:ml-[330px]">
        <TopNav />
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
