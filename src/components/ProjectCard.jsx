export default function ProjectCard({ project }) {
  if (!project) return null;

  const { title, description, features = [], tech = [], live, code } = project;

  return (
    <div className="project-card">
      <h3>{title}</h3>

      <p>{description}</p>

      {features.length > 0 && (
        <>
          <h4>Key Features</h4>
          <ul>
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </>
      )}

      {tech.length > 0 && (
        <p>
          <strong>Tech:</strong> {tech.join(", ")}
        </p>
      )}

      <div className="project-links">
        <a href={project.live} target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>
        {" | "}
        <a href={project.code} target="_blank" rel="noopener noreferrer">
          Code
        </a>

        <p style={{ marginTop: "8px", fontSize: "14px", color: "#9ca3af" }}>
          Live demo available via Shopify development store (password
          protected).
        </p>
      </div>
    </div>
  );
}
