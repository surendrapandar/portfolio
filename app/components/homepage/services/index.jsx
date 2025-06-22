import { Cloud, Smartphone, Brain } from "lucide-react";

export default function OurServices() {
  const services = [
    {
      icon: Cloud,
      title: "SaaS Platforms",
      description:
        "Build scalable, user-friendly SaaS solutions tailored to your business needs and drive sustainable growth.",
    },
    {
      icon: Smartphone,
      title: "Mobile & Web Apps",
      description:
        "Create high-performance mobile and web apps designed for exceptional user engagement and success.",
    },
    {
      icon: Brain,
      title: "AI-Powered Apps",
      description:
        "Develop innovative AI applications to automate processes and drive intelligent business transformation.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Our <span style={{ color: "#16f2b3" }}>Services</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          We deliver cutting-edge solutions that transform your business ideas
          into powerful digital experiences
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              {/* Icon */}
              <div className="mb-6">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: "#16f2b3" }}
                >
                  <IconComponent className="w-8 h-8 text-gray-900" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#16f2b3] transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <button
          className="px-8 py-4 rounded-full font-semibold text-gray-900 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          style={{ backgroundColor: "#16f2b3" }}
        >
          Get Started Today
        </button>
      </div>
    </div>
  );
}
