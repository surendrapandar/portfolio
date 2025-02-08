import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "AI-Powered Chat Application",
    description:
      "Real-time chat application with AI integration for smart responses and content moderation",
    image: "/projects/project1.jpg",
    tech: ["Next.js", "OpenAI", "Socket.io", "TailwindCSS"],
    github: "https://github.com/yourusername/project1",
    demo: "https://project1-demo.com",
  },
  {
    title: "E-Commerce Platform",
    description:
      "Full-featured e-commerce solution with AI-powered product recommendations",
    image: "/projects/project2.jpg",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/yourusername/project2",
    demo: "https://project2-demo.com",
  },
  {
    title: "AI Content Generator",
    description:
      "Content generation platform using advanced AI models for various content types",
    image: "/projects/project3.jpg",
    tech: ["Python", "FastAPI", "React", "GPT-3"],
    github: "https://github.com/yourusername/project3",
    demo: "https://project3-demo.com",
  },
];

function Projects() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          My Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-500 text-white text-sm px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <Link
                    href={project.github}
                    className="text-white hover:text-blue-500 transition-colors"
                    target="_blank"
                  >
                    <BsGithub size={24} />
                  </Link>
                  <Link
                    href={project.demo}
                    className="text-white hover:text-blue-500 transition-colors"
                    target="_blank"
                  >
                    <FiExternalLink size={24} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
