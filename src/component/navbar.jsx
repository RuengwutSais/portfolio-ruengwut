import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";

const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) setIsSticky(true);
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="w-full top-0 left-0 right-0 shadow-sm sticky z-30">
        <nav className="p-4 bg-white">
          <div
            className={`flex item-center justify-between ${
              isSticky ? "static top-0 right-0 left-0" : ""
            }`}
          >
            <div className="font-bold text-2xl text-rose-600">
              <Typewriter
                options={{
                  strings: ["Learn", "Practice", "Create", "Improve"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>

            {/* Style for desktop */}
            <div className="lg:flex font-bold items-center gap-4 hidden text-zinc-900 uppercase">
              <li className="list-none">
                <Link
                  to="about"
                  smooth={true}
                  duration={100}
                  className="block hover:text-rose-600 py-2 px-4 hover:scale-125 cursor-pointer duration-300 ease-in-out"
                >
                  About
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="experience"
                  smooth={true}
                  duration={100}
                  className="block hover:text-rose-600 py-2 px-4 hover:scale-125 cursor-pointer duration-300 ease-in-out"
                >
                  Experience
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="project"
                  smooth={true}
                  duration={100}
                  className="block hover:text-rose-600 py-2 px-4 hover:scale-125 cursor-pointer duration-300 ease-in-out"
                >
                  Projects
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="contact"
                  smooth={true}
                  duration={100}
                  className="block hover:text-rose-600 py-2 px-4 hover:scale-125 cursor-pointer duration-300 ease-in-out"
                >
                  Contact
                </Link>
              </li>
            </div>

            {/* Button for open menu */}
            <button
              className="lg:hidden text-3xl hover:text-rose-600 hover:scale-125 duration-100 ease-in-out "
              onClick={toggleMenu}
            >
              <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} />
            </button>
          </div>

          {/* Style for responsive */}
          {isMenuOpen && (
            <div className=" text-black font-bold uppercase bg-slate-100 p-4 m-4 rounded-md">
              <li className="list-none">
                <Link
                  to="about"
                  smooth={true}
                  duration={100}
                  className="block hover:text-rose-600 py-2 px-4 hover:scale-105 cursor-pointer duration-300 ease-in-out"
                >
                  About
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="experience"
                  smooth={true}
                  duration={100}
                  className="block hover:text-rose-600 py-2 px-4 hover:scale-105 cursor-pointer duration-300 ease-in-out"
                >
                  Experience
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="project"
                  smooth={true}
                  duration={100}
                  className="block hover:text-rose-600 py-2 px-4 hover:scale-105 cursor-pointer duration-300 ease-in-out"
                >
                  Projects
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="contact"
                  smooth={true}
                  duration={100}
                  className="block hover:text-rose-600 py-2 px-4 hover:scale-105 cursor-pointer duration-300 ease-in-out"
                >
                  Contact
                </Link>
              </li>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default NavbarComponent;
