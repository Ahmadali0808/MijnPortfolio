
function ProjectCard({ number, title, description, technologies }) {
  return (
    <article className="project-card">
      <p className="project-number">PROJECT {number}</p>

      <h3>{title}</h3>

      <p>{description}</p>

      <span>{technologies.join(" · ")}</span>
    </article>
  );
}

export default ProjectCard;
