import React from "react";
import "./Blog.css";
import { FaLeaf, FaExternalLinkAlt } from "react-icons/fa";

const blogs = [
  {
    title: "Eventually, Things Do Fall into Place",
    content:
      "No matter how big the problem feels in the beginning — be it stress, confusion, or life struggles — time really does help heal. The same big mountain starts feeling smaller with time. The situation may not always change… but our mindset does.",
    footer: "#SelfGrowth #MentalHealth #JustKeepGoing",
    link: "https://www.linkedin.com/posts/sanika-desai-a20080293_selfgrowth-lifelessons-perspective-activity-7328778947381354496-x4_d?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEcF_bgBmYEDdujMXbJh-cu0ZIVxIEIpJ7o",
  },
  {
    title: "Growth Beyond the Grind",
    content:
      "College is not about fun for everyone. It’s about one mission: 'Study hard. Get a good job. Change things at home.' But real growth happens when we explore beyond books — through events, failures, and collaboration.",
    footer: "#GrowBeyond #LearningBeyondBooks",
    link: "https://www.linkedin.com/posts/sanika-desai-a20080293_growbeyond-studentlife-learningbeyondbooks-activity-7343239385565286401-p4ej?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEcF_bgBmYEDdujMXbJh-cu0ZIVxIEIpJ7o",
  },
  {
    title: "Beyond the Degree: The Journey That’s Shaping Me",
    content:
      "College life taught me more than academics. From emotional struggles, managing money, and pressure, to acceptance and self-trust — I learned how to stay calm and grow from within. Life always returns the good you give, in its own time.",
    footer: "#FromStudentToSelf #LifeLessons",
    link: "https://www.linkedin.com/posts/sanika-desai-a20080293_beyond-the-degree-the-journey-thats-shaping-activity-7342588660497731585-gxYf?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEcF_bgBmYEDdujMXbJh-cu0ZIVxIEIpJ7o",
  },
];

const Blog = () => {
  return (
    <section className="blog-section">
      <h2 className="blog-title">
        My <span>Reflections</span>
      </h2>
      <div className="blog-grid">
        {blogs.map((blog, index) => (
          <div className="blog-card" key={index}>
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
            <div className="blog-footer">
              <FaLeaf className="icon" />
              <span>{blog.footer}</span>
            </div>
            <a
              className="blog-button"
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt /> &nbsp; Read Article
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
