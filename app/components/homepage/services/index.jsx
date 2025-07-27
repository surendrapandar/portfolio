"use client";
import {
  Cloud,
  Smartphone,
  Brain,
  Rocket,
  ShieldCheck,
  Users,
  Code2,
  Sparkles,
  Database,
} from "lucide-react";

export default function OurServices() {
  const services = [
    {
      icon: Cloud,
      title: "SaaS Platforms",
      description:
        "We create powerful SaaS solution that grows with your company and helps you succeed in the long run.",
      color: "from-[#16f2b3] to-blue-500",
    },
    {
      icon: Smartphone,
      title: "Mobile & Web Apps",
      description:
        "We build fast and smooth apps for phones and websites that your users will love to use every day.",
      color: "from-pink-400 to-[#16f2b3]",
    },
    {
      icon: Brain,
      title: "AI-Powered Apps",
      description:
        "We make smart apps using AI technology that handle boring tasks automatically and make your business smarter.",
      color: "from-yellow-400 to-pink-500",
    },
  ];

  return (
    <section className="relative bg-gray-900 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative Backgrounds */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#16f2b3] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-800 border border-gray-700 mb-6">
            <Cloud className="w-4 h-4 text-[#16f2b3] mr-2" />
            <span className="text-sm text-gray-300 font-medium">
              Our Services
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            What We <span style={{ color: "#16f2b3" }}>Offer</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            We deliver cutting-edge solutions that transform your business ideas
            into powerful digital experiences.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="relative group bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-3xl p-10 border border-gray-700/60 hover:border-[#16f2b3]/40 shadow-lg shadow-[#16f2b3]/10 hover:shadow-xl hover:shadow-[#16f2b3]/20 transition-all duration-500 hover:scale-[1.03]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon with Gradient Glow */}
                <div className={`mb-8 flex items-left justify-left`}>
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg shadow-[#16f2b3]/25 group-hover:shadow-[#16f2b3]/40 transition-all duration-300 animate-fade-in-up`}
                  >
                    <IconComponent className="w-8 h-8 text-gray-900" />
                  </div>
                </div>
                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#16f2b3] transition-colors duration-300">
                  {service.title}
                </h3>
                {/* Description */}
                <p className="text-gray-400 leading-relaxed text-lg">
                  {service.description}
                </p>
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
          animation: fade-in-up 0.7s cubic-bezier(0.23, 1, 0.32, 1) forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
