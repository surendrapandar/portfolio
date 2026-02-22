import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import {
  SiFlutter,
  SiSwift,
  SiKotlin,
  SiFirebase,
  SiMongodb,
} from "react-icons/si";

export default function TechStack() {
  const technologies = {
    frontend: [
      { name: "React Native", icon: FaReact },
      { name: "Flutter", icon: SiFlutter },
      { name: "iOS (Swift)", icon: SiSwift },
      { name: "Android (Kotlin)", icon: SiKotlin },
    ],
    backend: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Firebase", icon: SiFirebase },
      { name: "MongoDB", icon: SiMongodb },
      { name: "SQL", icon: FaDatabase },
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
              <h3 className="font-semibold text-black">{tech.name}</h3>
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
          Mobile Development Technologies
        </h2>
        <TechSection title="Frontend & Mobile" techs={technologies.frontend} />
        <TechSection title="Backend & Database" techs={technologies.backend} />
      </div>
    </section>
  );
}
