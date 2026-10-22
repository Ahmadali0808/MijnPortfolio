import ProjectCard from "./components/ProjectCard";
import Navbar from "./components/Navbar";
import projects from "./data/projects";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <section id="home" className="hero">
          <p className="intro">MBO 4 Software Developer</p>
          <h1>Hi, I'm Ahmad.</h1>
          <p className="hero-text">
            I build websites and applications while learning more about software development.
          </p>
          <a href="#projects" className="button">
            View my projects
          </a>
        </section>

        <section id="about" className="section">
          <h2>About me</h2>
          <p>
            I'm a software development student interested in frontend and backend development.
            I enjoy building projects and learning how things work.
          </p>  
        </section>

        <section id="projects" className="section">
          <h2>Projects</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard
                key={project.number}
                number={project.number}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
              />
            ))}
          </div>
        </section>

        <section id="contact" className="section">
          <h2>Contact</h2>
          <p>You can find my code and projects on GitHub.</p>
          <a
            href="https://github.com/Ahmadali0808"
            target="_blank"
            rel="noreferrer"
          >
            Visit my GitHub
          </a>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Ahmad</p>
      </footer>
    </>
  );
}

export default App;
