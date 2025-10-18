import "./Achievement.css";
import {
  FaTrophy,
  FaLightbulb,
  FaStar,
  FaMedal,
  FaChalkboardTeacher,
  FaBook,
} from "react-icons/fa";

const achievements = [
  {
    icon: <FaTrophy />,
    title: "Hackathon Achievements",
    points: [
      "Participate in Smart India Hackathon 2024",
      "Participate in RIT Hackathon 2024",
      "Built Platforms for real-world problems",
    ],
  },
  {
    icon: <FaLightbulb />,
    title: "Open Source & Community",
    points: [
      "Contributor & Campus Ambassador at GSSoC 2024",
      "Active GitHub contributor (sanikadesai76)",
    ],
  },
  {
    icon: <FaStar />,
    title: "Academic Excellence",
    points: [
      "Topper at Bharati Vidyapeeth College of Engineering",
      "Consistently ranked among top performers",
    ],
  },
  {
    icon: <FaMedal />,
    title: "Technical Contributions",
    points: [
      "Projects in C++, MERN Stack",
      "Games: Number Shifting Game",
    ],
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "Organizational Roles",
    points: [
      "Skilled in creative planning and collaboration",
      "Team coordination and communication strengths",
    ],
  },
  {
    icon: <FaBook />,
    title: "Other Highlights",
    points: [
      "500+ LeetCode problems solved",
      "Consistent learning & real-world project focus",
      "Driven by social impact & tech innovation",
    ],
  },
];

const Achievement = () => {
  return (
    <section className="achievement-section">
      <h2 className="achievement-title">Achievements</h2>
      <div className="achievement-grid">
        {achievements.map((achieve, index) => (
          <div className="achievement-card" key={index}>
            <div className="achievement-icon">{achieve.icon}</div>
            <h3>{achieve.title}</h3>
            <ul>
              {achieve.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievement;
