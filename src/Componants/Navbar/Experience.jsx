import "./Experience.css";

const Experience = () => {
  return (
    <section className="experience">
      <h2 className="section-title">Education</h2>

      <div className="timeline-container">
        <div className="timeline-line"></div>

        <div className="timeline-box">
          <div className="timeline-dot"></div>
          <div className="school-box">
            <h3>
              Bachelor of Technology (B.Tech.) in Computer Science & Engineering
            </h3>
            <span className="duration">2021 - 2025 (Pursuing)</span>
            <h4 className="institute">
              Bharati Vidyapeeth College of Engineering
            </h4>
            <ul>
              <li>Currently in final year with a CGPA of 9.2 / 10</li>
            </ul>
          </div>
        </div>

        <div className="timeline-box left">
          <div className="timeline-dot"></div>
          <div className="school-box">
            <h3>12th Grade</h3>
            <span className="duration">2019 - 2021</span>
            <h4 className="institute">P.B. Patil Junior College</h4>
            <ul>
              <li>Completed with 80.33%</li>
            </ul>
          </div>
        </div>

        <div className="timeline-box">
          <div className="timeline-dot"></div>
          <div className="school-box">
            <h3>10th Grade</h3>
            <span className="duration">2018 - 2019</span>
            <h4 className="institute">New English School</h4>
            <ul>
              <li>Completed with 95%</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
