export default function Skills() {
  const skillCategories = {
    "Shopify Development": [
      "Shopify Liquid",
      "Theme Development",
      "Sections & Schema",
      "AJAX Cart",
      "Metafields",
    ],
    Frontend: ["React", "JavaScript", "HTML", "CSS"],
    Backend: ["Java", "Servlets", "JSP"],
    Database: ["MySQL"],
    Tools: ["Git", "Maven", "Tomcat"],
  };

  return (
    <section id="skills" className="skills-section">
      <h2>Technical Skills</h2>

      <div className="project-card">
        {Object.entries(skillCategories).map(([category, skills], index) => (
          <div key={index} className="skill-category">
            <h3>{category}</h3>

            <div className="skill-badges">
              {skills.map((skill, i) => (
                <span key={i} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
