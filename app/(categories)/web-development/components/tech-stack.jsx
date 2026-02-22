import { FaReact, FaNodeJs, FaAws, FaDocker, FaCss3 } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";

export default function TechStack() {
  const technologies = {
    frontend: [
      { name: "React.js", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "tailwind CSS", icon: FaCss3 },
    ],
    backend: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "AWS", icon: FaAws },
    ],
  };

  const TechSection = ({ title, techs }) => (
    <div className="mb-16">
      <h3 className="text-2xl font-bold mb-8 text-black">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {techs.map((tech) => {
          const IconComponent = tech.icon;
          return (
            <div
              key={tech.name}
              className="text-center p-8 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
            >
              <IconComponent className="w-20 h-20 mx-auto mb-6 text-black" />
              <h3 className="font-semibold text-gray-800">{tech.name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <section className="py-24 bg-white">
      <div className="container px-4">
        <h2 className="text-3xl font-bold text-center mb-16 text-black">
          Web Development Technologies
        </h2>
        <TechSection
          title="Frontend & Development"
          techs={technologies.frontend}
        />
        <TechSection
          title="Backend & Infrastructure"
          techs={technologies.backend}
        />
      </div>
    </section>
  );
}
