import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-left">© {new Date().getFullYear()} Sanika Desai</div>
        <div className="footer-right">
          <a href="https://github.com/sanikadesai76" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/sanika-desai-a20080293/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="mailto:sddesai1603@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


