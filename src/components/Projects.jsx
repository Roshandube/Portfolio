import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects">
      <h2>Shopify Project</h2>
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </section>
  );
}
