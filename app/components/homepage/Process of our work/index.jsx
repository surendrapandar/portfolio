"use client";

import {
  Phone,
  Palette,
  Code,
  TestTube,
  Rocket,
  ArrowDown,
  CheckCircle,
} from "lucide-react";

export default function ProcessSteps() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Planning",
      description:
        "Understanding your requirements and planning the app architecture",
      icon: Phone,
      delay: "0ms",
    },
    {
      number: "02",
      title: "UI/UX Design",
      description: "Creating intuitive and engaging user interfaces",
      icon: Palette,
      delay: "100ms",
    },
    {
      number: "03",
      title: "Development",
      description: "Building your app with modern mobile technologies",
      icon: Code,
      delay: "200ms",
    },
    {
      number: "04",
      title: "Testing & QA",
      description: "Rigorous testing across multiple devices and platforms",
      icon: TestTube,
      delay: "300ms",
    },
    {
      number: "05",
      title: "Deployment",
      description: "Launch your app on the App Store and Google Play",
      icon: Rocket,
      delay: "400ms",
    },
  ];

  return (
    <section className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#16f2b3] rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-800 border border-gray-700 mb-6">
            <CheckCircle className="w-4 h-4 text-[#16f2b3] mr-2" />
            <span className="text-sm text-gray-300 font-medium">
              Our Process
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            How It <span style={{ color: "#16f2b3" }}>Works</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Our proven 5-step process ensures your project is delivered on time,
            within budget, and exceeds expectations
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-8 top-16 bottom-16 w-0.5 bg-gradient-to-b from-[#16f2b3] via-blue-500 to-[#16f2b3] opacity-30 hidden md:block"></div>

          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isEven = index % 2 === 1;

            return (
              <div
                key={index}
                className={`relative mb-16 last:mb-0 animate-fade-in-up`}
                style={{ animationDelay: step.delay }}
              >
                <div
                  className={`flex flex-col md:flex-row items-start gap-8 ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Step Number & Icon */}
                  <div className="flex-shrink-0 relative">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#16f2b3] to-blue-500 flex items-center justify-center shadow-lg shadow-[#16f2b3]/25 group-hover:shadow-[#16f2b3]/40 transition-all duration-300">
                      <IconComponent className="w-8 h-8 text-gray-900" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gray-800 border-2 border-[#16f2b3] flex items-center justify-center">
                      <span className="text-xs font-bold text-[#16f2b3]">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div
                    className={`flex-1 group ${isEven ? "md:text-right" : ""}`}
                  >
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-[#16f2b3]/30 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-xl hover:shadow-[#16f2b3]/10">
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className={`px-3 py-1 rounded-full bg-[#16f2b3]/10 border border-[#16f2b3]/20 ${
                            isEven ? "md:order-2" : ""
                          }`}
                        >
                          <span className="text-sm font-semibold text-[#16f2b3]">
                            Step {step.number}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#16f2b3] transition-colors duration-300">
                        {step.title}
                      </h3>

                      <p className="text-gray-400 leading-relaxed text-lg">
                        {step.description}
                      </p>

                      {/* Progress Indicator */}
                      <div className="mt-6 flex items-center gap-2">
                        <div className="flex-1 h-1 bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-[#16f2b3] to-blue-500 rounded-full transition-all duration-1000 ease-out"
                            style={{
                              width: `${((index + 1) / steps.length) * 100}%`,
                            }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-500 font-medium">
                          {Math.round(((index + 1) / steps.length) * 100)}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Arrow Connector */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center mt-8 md:hidden">
                    <ArrowDown className="w-6 h-6 text-[#16f2b3] animate-bounce" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
