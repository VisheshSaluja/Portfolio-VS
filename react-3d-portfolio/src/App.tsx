import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

const App = () => {
  return (
    <>
      {/* Scrollable Resume Sections */}
      <main className="scroll-smooth overflow-x-hidden">
        <section id="hero" className="h-screen w-full snap-start">
          <Hero />
        </section>

        <section id="about" className="min-h-screen w-full snap-start py-24">
          <About />
        </section>

        <section
          id="experience"
          className="min-h-screen w-full snap-start py-24"
        >
          <Experience />
        </section>

        <section id="projects" className="min-h-screen w-full snap-start py-24">
          <Projects />
        </section>

        <section id="skills" className="min-h-screen w-full snap-start py-24">
          <Skills />
        </section>

        <section id="contact" className="min-h-screen w-full snap-start py-24">
          <Contact />
        </section>
      </main>
    </>
  );
};

export default App;
