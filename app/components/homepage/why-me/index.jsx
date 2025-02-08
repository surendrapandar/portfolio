import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";

function WhyMe() {
  const reasons = [
    "Helped 5+ Founders to launch their Product/MVP",
    "10+ Complete Projects",
    "Maintain Quality with speed, Build fast with quality loss",
    "Here to help you even after the launch, Launch day is just the beginning",
    "Help you understand everything even if you are not a technical person",
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Why Choose Me?
        </h2>
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-6">
            {reasons.map((reason, index) => (
              <li key={index} className="flex items-start space-x-4">
                <BsCheckCircleFill className="text-blue-500 text-xl flex-shrink-0 mt-1" />
                <span className="text-gray-300 text-lg">{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default WhyMe;
