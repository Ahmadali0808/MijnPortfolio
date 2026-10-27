import { Link } from "react-router";

function ProjectCard({ slug, image, number, title, description, technologies, githubUrl, liveUrl }) {
  return (
    <article className="project-card">
      {image && <img src={image} alt={title} className="project-image" loading="lazy" />}

      <p className="project-number">PROJECT {number}</p>

      <h3>{title}</h3>

      <p>{description}</p>

      <span className="project-tech">{technologies.join(" · ")}</span>

      <div className="project-links">
        <Link to={`/projects/${slug}`}>View project</Link>

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
