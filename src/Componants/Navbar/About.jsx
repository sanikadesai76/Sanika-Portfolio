import "./About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <h2 className="section-title">
        About <span>Me</span>
      </h2>

      <div className="about-container">
        {/* Left Side: Who I Am */}
        <div className="about-left">
          <h3>Who I Am</h3>
          <p>
            I'm Sanika Desai, a final-year Computer Science student at Bharati
            Vidyapeeth College of Engineering, Kolhapur. I’m passionate about
            full-stack development and problem-solving, with strong proficiency
            in C++, Data Structures & Algorithms, and core CS fundamentals.
          </p>
          <p>
            I enjoy building interactive web apps using HTML, CSS, JavaScript,
            and React, and I’m experienced with backend tools like Node.js,
            Express.js, and MongoDB. I've solved over 500+ DSA problems across
            platforms like LeetCode, GFG.
          </p>
          <p>
            Outside of tech, I love writing, exploring new tools, and working on
            projects that create real-world impact.
          </p>
        </div>

        {/* Right Side: Skills */}
        <div className="about-right">
          <h3>Technical Skills</h3>
          <div className="skills-grid">
            <div className="skill-card">
              <h4>Frontend</h4>
              <ul>
                <li>HTML/CSS</li>
                <li>JavaScript</li>
                <li>React.js</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
            <div className="skill-card">
              <h4>Backend</h4>
              <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
              </ul>
            </div>
            <div className="skill-card">
              <h4>Other</h4>
              <ul>
                <li>Git & GitHub</li>
                <li>REST APIs</li>
                <li>Figma</li>
              </ul>
            </div>
            <div className="skill-card">
              <h4>Languages</h4>
              <ul>
                <li>C/C++</li>
                <li>Java (Basics)</li>
                <li>JavaScript</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
