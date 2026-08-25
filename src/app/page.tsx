import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Shell from "@/components/Shell";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <Shell>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </Shell>
  );
}
