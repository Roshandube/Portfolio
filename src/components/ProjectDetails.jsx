import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import Seo from "./Seo";

export default function ProjectDetails() {
  const { id } = useParams();

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <h2 style={{ padding: "40px" }}>Project Not Found</h2>;
  }

  const firstImage = project.images?.[0];
  const imagePath =
    typeof firstImage === "object" ? firstImage.src : firstImage || "/images/admin-login.png";

  return (
    <div className="details-page">
      <Seo
        title={`${project.title} | Roshan Dubey`}
        description={project.description}
        path={`/project/${project.id}`}
        image={imagePath}
        type="article"
      />
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
              alt={
                typeof img === "object"
                  ? `${project.title} - ${img.label}`
                  : `${project.title} screenshot ${index + 1}`
              }
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
