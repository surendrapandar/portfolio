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
      icon: Code2,
      title: "AI Solutions",
      description:
        "AI solutions that can actually understand and solve problems.",
      color: "from-slate-100 to-white",
    },
    {
      icon: Database,
      title: "SaaS Platforms",
      description:
        "We create scalable SaaS solutions that grow with your company.",
      color: "from-slate-100 to-white",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description:
        "We design and develop smooth custom mobile and web experiences.",
      color: "from-slate-100 to-white",
    },
  ];

  return (
    <section className="relative bg-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden ">
      {/* Decorative Backgrounds */}
      <div className="absolute inset-0 bg-white"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 border border-gray-200 mb-6 ">
            <Cloud className="w-4 h-4 text-black mr-2" />
            <span className="text-sm text-gray-600 font-medium">
              Our Services
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-bold text-black mb-6">
            What We <span className="text-black">Offer</span>
          </h2>
          <p className="sm:text-xl text-[16px] text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We only focus on offering services that we can deliver exceptionally
            well.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="relative group bg-white rounded-3xl p-10 border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-lg transition-all duration-500 hover:scale-[1.03]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon with Gradient Glow */}
                <div
                  className={`mb-8 sm:flex sm:items-left sm:justify-left items-center justify-center flex`}
                >
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gray-100 border border-gray-200 flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300 animate-fade-in-up`}
                  >
                    <IconComponent className="w-8 h-8 text-black" />
                  </div>
                </div>
                {/* Title */}
                <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-gray-700 transition-colors duration-300 items-center flex justify-center">
                  {service.title}
                </h3>
                {/* Description */}
                <p className="text-gray-600 leading-relaxed sm:text-lg text-[14px] text-center">
                  {/* Responsive 3-line clamp for mobile, limit max width and increase font size */}
                  <span className="block text-center text-gray-600 leading-relaxed text-base sm:text-lg mx-auto max-w-[250px] sm:max-w-full line-clamp-3">
                    {service.description}
                  </span>
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
