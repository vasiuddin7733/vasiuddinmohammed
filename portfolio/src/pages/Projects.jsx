import React from "react";

const projects = [
  {
    title: "Autohaus Royal Management System",
    description:
      "Enterprise-grade automotive platform with microservices architecture supporting trade-ins, marketing, admin, and business operations.",
    techStack: ["React", "Next.js", "Node.js", "NestJS", "TypeORM", "PostgreSQL", "Docker"],
    github: "", // Private/internal - optional
    demo: "",
  },
  {
    title: "Seidual Platform",
    description:
      "An education and virtual event platform built with a modern tech stack. Includes Seidual Account and Admin portals.",
    techStack: ["React", "Next.js", "Vite.js", "Tailwind CSS", "GraphQL", "Redux"],
    github: "",
    demo: "",
  },
  {
    title: "Ausbildungplatz",
    description:
      "A job-matching web app focused on vocational training placements, designed with accessibility and performance in mind.",
    techStack: ["React", "Sass", "GraphQL", "MongoDB"],
    github: "",
    demo: "",
  },
  {
    title: "Zuhauseisthier Mobile App",
    description:
      "A real estate and rental mobile app built using Flutter for cross-platform support, and GraphQL backend.",
    techStack: ["Flutter", "GraphQL", "Node.js", "MongoDB"],
    github: "",
    demo: "",
  },
  {
    title: "E-Learning Admin Portal",
    description:
      "Admin dashboard for content management and user analytics for e-learning applications.",
    techStack: ["React", "Tailwind CSS", "Node.js", "Strapi"],
    github: "",
    demo: "",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-white px-6 py-12 md:px-16">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              {project.title}
            </h2>
            <p className="text-gray-600 mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2 text-sm mb-4">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:underline"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
