import React from "react";
import {
  BsCheckCircleFill,
  BsRocket,
  BsLightning,
  BsHeadset,
  BsPeople,
} from "react-icons/bs";
import Image from "next/image";

function WhyMe() {
  const reasons = [
    {
      title: "Proven Track Record",
      description:
        "Helped 5+ Founders to launch their Product/MVP with 10+ Complete Projects delivered",
      icon: <BsRocket size={32} className="text-[#16f2b3]" />,
    },
    {
      title: "Speed with Quality",
      description:
        "Maintain Quality with speed, Build fast without compromising on quality",
      icon: <BsLightning size={32} className="text-[#16f2b3]" />,
    },
    {
      title: "Post-Launch Support",
      description:
        "Here to help you even after the launch, Launch day is just the beginning",
      icon: <BsHeadset size={32} className="text-[#16f2b3]" />,
    },
    {
      title: "Non-Technical Friendly",
      description:
        "Help you understand everything even if you are not a technical person",
      icon: <BsPeople size={32} className="text-[#16f2b3]" />,
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          <span className="text-[#16f2b3]">Why</span> Choose US?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex flex-col p-6  rounded-lg border border-[#2a2a2a] hover:border-[#16f2b3] transition-all duration-300"
            >
              <div className="mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-400">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyMe;
