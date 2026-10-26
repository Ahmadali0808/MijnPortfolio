// List of projects shown on the portfolio.
// slug: short name used in the URL of the project page (e.g. /projects/my-portfolio)
// image: screenshot of the project (null = no screenshot yet)
// githubUrl / liveUrl: links to the source code and live demo (null = not available)
const projects = [
  {
    slug: "electronic-press-kit",
    number: "01",
    title: "Electronic Press Kit",
    description:
      "A Laravel web app where bands can make their own press kit page with info, photos and videos. School project for module A5.",
    technologies: ["PHP", "Laravel", "MySQL", "Blade", "PHPUnit"],
    features: [
      "Login and register",
      "Create, edit and delete bands",
      "A public press kit page for each band",
      "Photo upload and YouTube videos",
      "Pick your own background and text color",
      "Search bands by name",
      "Unit tests and feature tests",
    ],
    learned: [
      "Working with MVC in Laravel",
      "Linking tables with Eloquent relations",
      "Writing tests with PHPUnit",
    ],
    image: null,
    githubUrl: "https://github.com/Ahmadali0808/A5",
    liveUrl: null,
  },
  {
    slug: "dodge-game",
    number: "02",
    title: "Dodge Game",
    description:
      "A browser game made with JavaScript and p5.js. Dodge the falling balls for as long as you can.",
    technologies: ["JavaScript", "p5.js", "HTML", "CSS"],
    features: [
      "Move left and right with the arrow keys",
      "Red balls fall straight down, yellow balls follow you",
      "The longer you survive, the faster it gets",
      "Score and highscore after game over",
    ],
    learned: [
      "Building a game loop",
      "Working with classes and objects in JavaScript",
      "Checking when two things hit each other",
    ],
    image: null,
    githubUrl: "https://github.com/Ahmadali0808/dodge-game",
    liveUrl: null,
  },
  {
    slug: "my-portfolio",
    number: "03",
    title: "My Portfolio",
    description:
      "This website. I made it to show my projects and what I can do.",
    technologies: ["React", "React Router", "JavaScript", "CSS"],
    features: [
      "Home, about, projects and contact sections",
      "A page for each project",
      "All project info in one file so it is easy to add new ones",
    ],
    learned: [
      "Making components in React",
      "Using props and .map() to show a list",
      "Making pages with React Router",
    ],
    image: null,
    githubUrl: "https://github.com/Ahmadali0808/MijnPortfolio",
    liveUrl: null,
  },
];

export default projects;
