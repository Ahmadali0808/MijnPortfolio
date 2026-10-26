function ProjectCard({ number, title, description, technologies, githubUrl, liveUrl }) {
  return (
    <article className="project-card">
      <p className="project-number">PROJECT {number}</p>

      <h3>{title}</h3>

      <p>{description}</p>

      <span className="project-tech">{technologies.join(" · ")}</span>

      <div className="project-links">
        {/* only show a link when the project has one */}
        {githubUrl && (
          <a href={githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
        )}

        {liveUrl && (
          <a href={liveUrl} target="_blank" rel="noreferrer">
            Live demo
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
