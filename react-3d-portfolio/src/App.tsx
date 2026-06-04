import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Travel from "./sections/Travel";
import Contact from "./sections/Contact";

const App = () => {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Travel />
        <Contact />
      </main>
    </div>
  );
};

export default App;
