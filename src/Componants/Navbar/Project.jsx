import "./Project.css";
import { useEffect } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; // ← React GitHub Icon

const projects = [
  // 1) File Storage & Sharing App
  {
    title: "File Storage & Sharing App",
    description: [
      "Serverless web application for secure file upload and sharing",
      "Built with AWS S3, Lambda, API Gateway, and Cognito",
      "Features secure file storage with pre-signed URLs for downloads",
    ],
    image:
      "https://www.proofhub.com/articles/wp-content/uploads/2024/02/14-Best-File-Sharing-Apps-for-Businesses-in-2024.jpg",
    tags: ["AWS S3", "AWS Lambda", "API Gateway", "AWS Cognito", "JavaScript"],
    github: "https://github.com/sanikadesai76/File-Storage.git",
  },

  // 2) SHEild - Women Safety Application (new)
  {
    title: "SHEild - Women Safety Application",
    description: [
      "One-stop safety app with SOS alerts and live location sharing",
      "Quick contacts, guidance resources, and safety tips",
    ],
    image:
      "https://media.licdn.com/dms/image/v2/D5612AQGiBF_1JX80vw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1696348536913?e=2147483647&v=beta&t=NKF7Fj-ODWy9gBJTxFcTWAeEwu96EZf6TrwiSITdFBY",
    tags: ["React", "Firebase", "Maps"],
    github: "https://github.com/sanikadesai76",
  },

  // 3) Emotion Detection Web App
  {
    title: "Emotion Detection Web App",
    description: [
      "Detects emotions using a Python ML model",
      "Provide Letter with Solutions",
    ],
    image: "emotion-detect.png",
    tags: ["ReactJS", "Spring Boot", "Python"],
    github: "https://github.com/sanikadesai76/Hackthone_Team_Coders",
  },

  // 4) Number Shifting Game
  {
    title: "Number Shifting Game",
    description: [
      "A console-based logic puzzle built using C++",
      "Practices number manipulation and logical loops",
    ],
    image: "number-shift.png",
    tags: ["C++"],
    github: "https://github.com/sanikadesai76/CPP-Project",
  },

  // 5) YouTube Clone
  {
    title: "YouTube Clone",
    description: [
      "Frontend-only YouTube clone using HTML, CSS, & JavaScript",
      "Responsive UI with homepage and video layout",
    ],
    image: "youtube-clone.png",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/sanikadesai76/Youtube-Clone",
  },

  // 6) Web-Development (new)
  {
  title: "Smiley Emoji Interaction",
  description: [
    "A playful and interactive web application to bring joy to users",
    "On hovering, the emoji changes to a random emoji from a predefined set, creating a fun experience",
    "Focus on simple, engaging UI and dynamic JavaScript interactions"
  ],
  image: "https://www.nexel.in/media/blog_images/web_development_Z62jy4k.jpg",
  tags: ["HTML", "CSS", "JavaScript"],
  github: "https://github.com/sanikadesai76"
}

];

const Project = () => {
  useEffect(() => {
    const cards = Array.from(document.querySelectorAll(".project-card"));
    if (!("IntersectionObserver" in window)) {
      cards.forEach((el) => el.classList.add("reveal-in"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    cards.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const resolvePublicAsset = (assetPath) => {
    if (!assetPath) return import.meta.env.BASE_URL + "vite.svg";
    if (/^https?:\/\//i.test(assetPath)) return assetPath; // absolute URL
    return assetPath.startsWith("/")
      ? assetPath
      : import.meta.env.BASE_URL + assetPath;
  };

  // Convert an SVG file from public/ into a PNG data URL via canvas
  const convertSvgToPngDataUrl = async (svgPublicPath, width = 740, height = 400) => {
    try {
      const response = await fetch(resolvePublicAsset(svgPublicPath));
      const svgText = await response.text();
      const svgBlob = new Blob([svgText], { type: "image/svg+xml" });
      const svgUrl = URL.createObjectURL(svgBlob);

      const img = new Image();
      img.crossOrigin = "anonymous";
      const dataUrl = await new Promise((resolve, reject) => {
        img.onload = () => {
          const canvas = document.createElement("canvas");
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext("2d");
          if (!ctx) {
            URL.revokeObjectURL(svgUrl);
            reject(new Error("Canvas context unavailable"));
            return;
          }
          ctx.fillStyle = "#0d1117";
          ctx.fillRect(0, 0, width, height);
          ctx.drawImage(img, 0, 0, width, height);
          const url = canvas.toDataURL("image/png");
          URL.revokeObjectURL(svgUrl);
          resolve(url);
        };
        img.onerror = reject;
        img.src = svgUrl;
      });
      return dataUrl;
    } catch (e) {
      return resolvePublicAsset("vite.svg");
    }
  };
  return (
    <section className="projects-section">
      <h2 className="project-title">Technical Projects</h2>
      <div className="project-list">
        {projects.map((proj, index) => (
          <div key={index} className="project-card">
            <img
              src={resolvePublicAsset(proj.image)}
              alt={proj.title}
              className="project-image"
              onError={async (e) => {
                const imgEl = e.currentTarget;
                // If project defines an explicit imageFallback URL, use it first
                if (proj.imageFallback && !imgEl.dataset.triedFallback) {
                  imgEl.dataset.triedFallback = "1";
                  imgEl.src = resolvePublicAsset(proj.imageFallback);
                  return;
                }
                // Next fallback: try bundled svg placeholder
                if (!imgEl.dataset.triedSvg) {
                  imgEl.dataset.triedSvg = "1";
                  imgEl.src = resolvePublicAsset("file-storage.svg");
                  return;
                }
                // Second fallback: generate PNG from SVG via canvas
                if (!imgEl.dataset.triedCanvas) {
                  imgEl.dataset.triedCanvas = "1";
                  const url = await convertSvgToPngDataUrl("file-storage.svg", 740, 400);
                  imgEl.src = url;
                  return;
                }
                // Final fallback
                imgEl.onerror = null;
                imgEl.src = resolvePublicAsset("vite.svg");
              }}
            />
            <h3>{proj.title}</h3>
            <ul className="project-desc">
              {proj.description.map((line, idx) => (
                <li key={idx}>{line}</li>
              ))}
            </ul>
            <div className="project-tags">
              {proj.tags.map((tag, i) => (
                <span key={i} className="tag" data-k={tag}>
                  {tag}
                </span>
              ))}
            </div>
            <div className="project-buttons">
              <a
                href={proj.github}
                className="code-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={18} /> Code
              </a>
              {proj.liveDemo && (
                <a
                  href={proj.liveDemo}
                  className="demo-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt size={16} /> Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
