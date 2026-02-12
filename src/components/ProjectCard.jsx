export default function ProjectCard({ project }) {
  if (!project) return null;

  const {
    title,
    description,
    features = [],
    tech = [],
    live,
    code,
    demoVideo,
  } = project;

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

      {demoVideo && (
        <div className="mt-6">
          <iframe
            width="100%"
            height="400"
            src={`https://www.youtube.com/embed/${demoVideo}`}
            title="Project Demo"
            frameBorder="0"
            allowFullScreen
            className="rounded-lg shadow"
          ></iframe>
        </div>
      )}

      <div className="project-links">
        {code && (
          <a href={code} target="_blank" rel="noopener noreferrer">
            Code
          </a>
        )}

        <p style={{ marginTop: "8px", fontSize: "14px", color: "#9ca3af" }}>
          Demo video available above.
        </p>
      </div>
    </div>
  );
}
