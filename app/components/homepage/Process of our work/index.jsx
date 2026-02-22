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
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-white"></div>

      <div className="max-w-4xl mx-auto relative z-10 sm:mt-0 -mt-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 border border-gray-200 mb-6">
            <CheckCircle className="w-4 h-4 text-black mr-2" />
            <span className="text-sm text-gray-600 font-medium">
              Our Process
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-black mb-6">
            How It <span className="text-black">Works</span>
          </h2>
          <p className="text-[16px] sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Our proven 5-step process ensures your project is delivered on time,
            within budget, and exceeds expectations
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-8 top-16 bottom-16 w-0.5 bg-gray-200 hidden md:block"></div>

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
                    <div className="w-16 h-16 rounded-2xl bg-white border border-gray-200 flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300">
                      <IconComponent className="w-8 h-8 text-black" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center">
                      <span className="text-xs font-bold text-black">
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div
                    className={`flex-1 group ${isEven ? "md:text-right" : ""}`}
                  >
                    <div className="bg-white backdrop-blur-sm rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-all duration-500 hover:transform hover:scale-[1.02] hover:shadow-lg">
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className={`px-3 py-1 rounded-full bg-gray-100 border border-gray-200 ${
                            isEven ? "md:order-2" : ""
                          }`}
                        >
                          <span className="text-sm font-semibold text-black">
                            Step {step.number}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-gray-700 transition-colors duration-300">
                        {step.title}
                      </h3>

                      <p className="text-gray-600 leading-relaxed text-lg">
                        {step.description}
                      </p>

                      {/* Progress Indicator */}
                      <div className="mt-6 flex items-center gap-2">
                        <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-black rounded-full transition-all duration-1000 ease-out"
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
                    <ArrowDown className="w-6 h-6 text-gray-400 animate-bounce" />
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
