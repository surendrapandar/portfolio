import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "Writeon",
    description:
      "AI Powered Tool to Build Your LinkedIn Brand & Audience Effortlessly!",
    image: "/writeon.png",
    demo: "https://www.writeon.site/",
  },
  {
    title: "Insayy",
    description:
      "Connect 1:1 with Professionals, Experts, and Influencers Who Inspire You.",
    image: "/insayy.png",
    demo: "https://www.insayy.com/",
  },
  {
    title: "Professional Portfolio",
    description:
      " A professional portfolio website to Showing your work in a professional way to get more noticed.",
    image: "/portfolio.png",
    demo: "https://project3-demo.com",
  },
];

function Projects() {
  return (
    <section id="ourwork" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-extrabold text-center text-white mb-20">
          Our Recent <span className="text-[#16f2b3]">Work</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative bg-gray-800 rounded-xl overflow-hidden shadow-2xl hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  // layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 transform hover:scale-110"
                />
              </div>
              <div className="p-6 flex flex-col justify-between">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6">{project.description}</p>
                <div className="flex justify-between items-center">
                  <Link
                    href={project.demo}
                    className="text-white hover:text-blue-500 transition-all duration-200 flex items-center space-x-2"
                    target="_blank"
                  >
                    <span className="text-lg">Visit {project.title}</span>
                    <FiExternalLink size={20} />
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
