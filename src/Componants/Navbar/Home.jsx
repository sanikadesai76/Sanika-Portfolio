import "./Home.css";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCode,
  FaTerminal,
} from "react-icons/fa";

const Home = () => {
  const phrases = [
    "Frontend Developer",
    "Problem Solver",
    "Cloud & AWS Enthusiast",
  ];
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex % phrases.length];
    const speed = isDeleting ? 40 : 90;
    const timeout = setTimeout(() => {
      const nextLength = isDeleting ? text.length - 1 : text.length + 1;
      setText(current.slice(0, nextLength));
      if (!isDeleting && nextLength === current.length) {
        setIsDeleting(true);
      } else if (isDeleting && nextLength === 0) {
        setIsDeleting(false);
        setPhraseIndex((i) => (i + 1) % phrases.length);
      }
    }, text === "" && isDeleting ? 600 : speed);
    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex]);

  return (
    <section className="home-section">
      <div className="home-left">
        <h1 className="title">
          I'm <span className="highlight">Sanika</span> Desai
        </h1>
        <div className="typewriter" aria-label="roles">
          <span className="typewriter-text">{text}</span>
          <span className="caret" aria-hidden="true">|</span>
        </div>
        <p className="description">
          A passionate developer who loves building intuitive web applications
          and solving complex DSA problems. I'm currently exploring the world of
          tech, learning, building, and growing every day!
        </p>

        <div className="social-icons">
          <a
            href="https://github.com/sanikadesai76"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sanika-desai-a20080293/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a href="mailto:sddesai1603@gmail.com" title="Email">
            <FaEnvelope />
          </a>
          <a
            href="https://leetcode.com/sanu_89/"
            target="_blank"
            rel="noopener noreferrer"
            title="LeetCode"
          >
            <FaCode />
          </a>
          <a
            href="https://codolio.com/profile/sa.nu_89"
            target="_blank"
            rel="noopener noreferrer"
            title="Codolio"
          >
            <FaTerminal />
          </a>
        </div>

        <div className="buttons">
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-60}
            spy={true}
            className="btn-primary btn-link"
          >
            My Work
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-60}
            spy={true}
            className="btn-outline btn-link"
          >
            Contact Me
          </Link>
        </div>
      </div>

      <div className="home-right">
        <img
          src="/profile-sanika.jpg"
          alt="Sanika Desai"
          className="profile-pic"
        />
      </div>
    </section>
  );
};

export default Home;
