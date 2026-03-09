import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  if (!project) return null;

  const {
    title,
    description,
    features = [],
    tech = [],
    images = [],
    code,
    demoVideo,
  } = project;

  return (
    <div className="project-card">
      <h3 className="project-title">{title}</h3>

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

      {images.length > 0 && (
        <Link to={`/project/${project.id}`} className="view-btn">
          View Screenshots
        </Link>
      )}

      {demoVideo && (
        <div className="mt-6">
          <iframe
            width="100%"
            height="400"
            src={`https://www.youtube.com/embed/${demoVideo}`}
            title="Project Demo"
            frameBorder="0"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
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
      </div>
    </div>
  );
}
