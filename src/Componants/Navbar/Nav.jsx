import { useState, useEffect } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { Link } from "react-scroll";
import "./Nav.css";

const Nav = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "light-mode";
  }, [darkMode]);

  return (
    <header className="navbar">
      <h1>
        <span>Sanika</span> Desai
      </h1>

      <div className="nav-right">
        <button className="mode-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <BsSun size={12} /> : <BsMoon size={12} />}
        </button>

        <nav>
          <ul>
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                offset={-60}
                spy={true}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                offset={-60}
                spy={true}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="education"
                smooth={true}
                duration={500}
                offset={-60}
                spy={true}
              >
                Education
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-60}
                spy={true}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-60}
                spy={true}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
