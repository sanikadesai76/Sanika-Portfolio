import { useState, useEffect, useRef } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { HiOutlineMenu, HiX } from "react-icons/hi"; // Hamburger and close icons
import { Link } from "react-scroll";
import "./Nav.css";

const Nav = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false); // mobile menu toggle
  const navRef = useRef(null);

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "light-mode";
  }, [darkMode]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header className="navbar" ref={navRef}>
      <h1>
        <span>Sanika</span> Desai
      </h1>

      <div className="nav-right">
        <button className="mode-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <BsSun size={14} /> : <BsMoon size={14} />}
        </button>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <HiX size={22} /> : <HiOutlineMenu size={22} />}
        </button>

        <nav>
          <ul className={menuOpen ? "active" : ""}>
            <li>
              <Link 
                to="home" 
                smooth={true} 
                duration={500} 
                offset={-60} 
                spy={true}
                onClick={() => setMenuOpen(false)}
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
                onClick={() => setMenuOpen(false)}
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
                onClick={() => setMenuOpen(false)}
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
                onClick={() => setMenuOpen(false)}
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
                onClick={() => setMenuOpen(false)}
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
