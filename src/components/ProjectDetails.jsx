import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectDetails() {
  const { id } = useParams();

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <h2 style={{ padding: "40px" }}>Project Not Found</h2>;
  }

  return (
    <div className="details-page">
      {/* Back Button */}
      <Link to="/" className="back-btn">
        ← Back to Projects
      </Link>

      <h1>{project.title}</h1>
      <p>{project.description}</p>

      <h2>Screenshots</h2>

      <div className="details-gallery">
        {project.images?.map((img, index) => (
          <div key={index} className="screenshot-card">
            <h4>
              {typeof img === "object" ? img.label : `Screenshot ${index + 1}`}
            </h4>

            <img
              src={typeof img === "object" ? img.src : img}
              alt="Project Screenshot"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
