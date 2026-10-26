import { useEffect } from "react";
import { Link, useParams } from "react-router";
import projects from "../data/projects";

function ProjectPage() {
  // get the slug from the url, like "my-portfolio"
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  // start at the top of the page when it opens
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <main className="project-page">
        <h1>Project not found</h1>
        <Link to="/">Back to home</Link>
      </main>
    );
  }

  return (
    <main className="project-page">
      <a href="/#projects" className="back-link">
        ← Back to projects
      </a>

      <p className="project-number">PROJECT {project.number}</p>
      <h1>{project.title}</h1>
      <p>{project.description}</p>

      <h2>Built with</h2>
      <ul className="tech-list">
        {project.technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>

      <div className="project-links">
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
        )}

        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noreferrer">
            Live demo
          </a>
        )}
      </div>
    </main>
  );
}

export default ProjectPage;
