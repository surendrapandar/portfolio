"use client";

import {
  MessageCircle,
  Users,
  DollarSign,
  Eye,
  TrendingUp,
  Award,
  Zap,
} from "lucide-react";
import { useEffect, useState, useRef } from "react";
import StatCard from "./StatCard";
import TrustCard from "./TrustCard";

export default function AnalyticsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [startCounting, setStartCounting] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !startCounting) {
          setStartCounting(true);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: "-50px 0px -50px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [startCounting]);

  const stats = [
    {
      icon: Award,
      value: 15,
      label: "Projects Completed",
      description: "Successfully delivered",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      suffix: "+",
    },
    {
      icon: Users,
      value: 10,
      label: "Happy Clients",
      description: "Satisfied customers",
      color: "from-[#16f2b3] to-green-400",
      bgColor: "bg-[#16f2b3]/10",
      borderColor: "border-[#16f2b3]/20",
      suffix: "+",
    },
    {
      icon: TrendingUp,
      value: 20,
      label: "Following On Social Media",
      description: "Active community",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
      suffix: "K+",
    },
    {
      icon: Zap,
      value: 3,
      label: "Years of Experience",
      description: "Professional expertise",
      color: "from-orange-500 to-yellow-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20",
      suffix: "+",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-gray-900 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#16f2b3] rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-800 border border-gray-700 mb-6">
            <TrendingUp className="w-4 h-4 text-[#16f2b3] mr-2" />
            <span className="text-sm text-gray-300 font-medium">
              Live Analytics
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            WHY <span style={{ color: "#16f2b3" }}>US</span>{" "}
          </h2>
          <p className="text-[12px] sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Because we are not just developers, we are your partners in success.
            we have a proven track record of delivering exceptional results for
            our clients.
          </p>
        </div>{" "}
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              stat={stat}
              isVisible={isVisible}
              index={index}
              startCounting={startCounting}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
