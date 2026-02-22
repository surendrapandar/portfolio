import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "AI Native Note Intelligence",
    description:
      "Get smart suggestions, chat with note, summarize key points, and extract action items with a powerful AI-powered note-taking app",
    image: "/image/chopdi.png",
    demo: "https://www.ainative.com",

    tags: ["AI", "Generative AI", "SaaS"],
  },

  {
    title: "AI Emoji Generator",
    description:
      "Generate emojis from text using AI. Just type your text and get emojis.",
    image: "/emoji.jpg",
    demo: "https://www.emojis.com",

    tags: ["AI", "Generative AI", "SaaS"],
  },
  {
    title: "FeedbackHub",
    description:
      "Build better products with real user feedback (not guesses🤨)",
    image: "/feedbackhub.png",
    demo: "https://feedbackhub.dev",

    tags: ["SaaS", "Feedback", "Analytics"],
  },
  {
    title: "Fortiche",
    description:
      "A Social Ecommerce marketplace platform that connects buyers and sellers.",
    image: "/image/fortiche.png",
    demo: "https://www.fortiche.com/",

    tags: ["Ecommerce", "Marketplace", "Social"],
  },
  {
    title: "Insayy",
    description: "Connect with Top Creators for 1:1 Mentorship and Guidance",
    image: "/insayy.png",
    demo: "https://www.insayy.com",

    tags: ["AI", "Mentorship", "SaaS"],
  },

  {
    title: "Bullseye App",
    description:
      "App is design to provide all information regarding stock market at one place.",
    image: "/bullseyeapp.png",
    demo: "https://play.google.com/store/apps/details?id=com.rajan.bullseye",

    tags: ["React Native", "Finance", "Trading"],
  },

  {
    title: "Inventory",
    description:
      "Never Run Out of Stock Again. From Spreadsheets to Smart Inventory.",
    image: "/image/inventory.png",
    demo: "https://www.inventoryreorder.com/",

    tags: ["Inventory Management", "SaaS", "Analytics"],
  },
  {
    title: "Writeon",
    description:
      "AI Powered Tool to Build Your LinkedIn Brand & Audience Effortlessly!",
    image: "/writeon.png",
    demo: "https://www.writeon.site",

    tags: ["AI", "LinkedIn", "SaaS"],
  },
  {
    title: "Solution App",
    description:
      "A mobile app for students to find solutions to their problems.",
    image: "/solutionapp.png",
    demo: "https://play.google.com/store/apps/details?id=com.rootankit.biharboardsolutionclass10",

    tags: ["React Native", "Education", "Mobile"],
  },
];

const Projects = () => {
  return (
    <section id="ourwork" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="sm:text-5xl text-4xl font-extrabold text-center text-black mb-20 -mt-10 sm:mt-0">
          Our Recent <span className="text-black">Work</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto -mt-10 sm:mt-0">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 border border-gray-200"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-full transition-transform duration-300 transform hover:scale-110 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col">
                <h3 className="text-2xl font-bold text-black mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-100 border border-gray-200 text-gray-600 text-xs px-3 py-1.5 rounded-full font-medium hover:border-gray-300 hover:text-black transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Project Button */}
                <div className="mt-auto">
                  <Link
                    href={project.demo}
                    className="text-black hover:text-gray-600 transition-all duration-200 flex items-center space-x-2"
                    target="_blank"
                  >
                    <span className="text-lg font-medium">
                      Visit {project.title}
                    </span>
                    <FiExternalLink size={20} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>{" "}
    </section>
  );
};

export default Projects;
