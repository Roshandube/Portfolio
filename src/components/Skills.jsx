import {
  FaShopify,
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaJava,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiMysql,
  SiApachemaven,
  SiApachetomcat,
  SiJavascript,
  SiJquery,
} from "react-icons/si";

const iconMap = {
  "Shopify Liquid": <FaShopify />,
  "Theme Development": <FaShopify />,
  "Sections & Schema": <FaShopify />,
  "AJAX Cart": <SiJquery />,
  Metafields: <FaShopify />,
  React: <FaReact />,
  JavaScript: <SiJavascript />,
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
  Java: <FaJava />,
  Servlets: <FaJava />,
  JSP: <FaJava />,
  MySQL: <SiMysql />,
  Database: <FaDatabase />,
  Git: <FaGitAlt />,
  Maven: <SiApachemaven />,
  Tomcat: <SiApachetomcat />,
};

export default function Skills() {
  const skillCategories = {
    "Shopify Development": [
      "Shopify Liquid",
      "Theme Development",
      "Sections & Schema",
      "AJAX Cart",
      "Metafields",
    ],
    "Frontend Engineering": ["React", "JavaScript", "HTML", "CSS"],
    "Backend & Server": ["Java", "Servlets", "JSP"],
    Database: ["MySQL"],
    Tooling: ["Git", "Maven", "Tomcat"],
  };

  return (
    <section id="skills" className="skills-section">
      <h2>Technical Skills</h2>

      <div className="skills-grid">
        {Object.entries(skillCategories).map(([category, skills], index) => (
          <div key={index} className="skill-category">
            <h3 className="skill-category-title">{category}</h3>

            <div className="skill-badges">
              {skills.map((skill) => (
                <span key={skill} className="skill-badge">
                  <span className="skill-icon">
                    {iconMap[skill] ?? <FaDatabase />}
                  </span>
                  <span>{skill}</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
