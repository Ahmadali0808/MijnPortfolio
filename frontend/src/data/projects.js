// List of projects shown on the portfolio.
// slug: short name used in the URL of the project page (e.g. /projects/my-portfolio)
// image: screenshot of the project (null = no screenshot yet)
// githubUrl / liveUrl: links to the source code and live demo (null = not available)



const projects = [
  {
    slug: "my-portfolio",
    number: "01",
    title: "My Portfolio",
    description:
      "A personal portfolio website built to showcase my development skills and projects.",
    technologies: ["React", "JavaScript", "CSS"],
    image: null,
    githubUrl: "https://github.com/Ahmadali0808/MijnPortfolio",
    liveUrl: null,
  },
  {
    slug: "php-project",
    number: "02",
    title: "PHP Project",
    description:
      "A project built with PHP to practise backend development and working with data.",
    technologies: ["PHP", "MySQL", "SQL"],
    image: null,
    githubUrl: null,
    liveUrl: null,
  },
];

export default projects;