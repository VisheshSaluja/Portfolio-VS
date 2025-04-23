import { useEffect, useState } from "react";
import { Link } from "react-scroll";

const sections = ["about", "experience", "projects", "skills", "contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md py-2 shadow-md"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-white">
        <h1 className="text-xl font-bold tracking-wide">Vishesh</h1>
        <ul className="flex space-x-4 md:space-x-6 text-sm md:text-base">
          {sections.map((id) => (
            <li key={id}>
              <Link
                activeClass="text-cyan-400 underline"
                to={id}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="cursor-pointer hover:text-cyan-300 transition"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
