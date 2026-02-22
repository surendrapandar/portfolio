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
      },
    );

    const refNode = sectionRef.current;
    if (refNode) {
      observer.observe(refNode);
    }

    return () => {
      if (refNode) {
        observer.unobserve(refNode);
      }
    };
  }, [startCounting]);

  const stats = [
    {
      icon: Award,
      value: 15,
      label: "Projects Completed",
      description: "Successfully delivered",
      color: "from-gray-800 to-black",
      bgColor: "bg-gray-100",
      borderColor: "border-gray-200",
      suffix: "+",
    },
    {
      icon: Users,
      value: 10,
      label: "Happy Clients",
      description: "Satisfied customers",
      color: "from-gray-800 to-black",
      bgColor: "bg-gray-100",
      borderColor: "border-gray-200",
      suffix: "+",
    },
    {
      icon: TrendingUp,
      value: 20,
      label: "Following On Social Media",
      description: "Active community",
      color: "from-gray-800 to-black",
      bgColor: "bg-gray-100",
      borderColor: "border-gray-200",
      suffix: "K+",
    },
    {
      icon: Zap,
      value: 6,
      label: "Years of Experience",
      description: "Professional expertise",
      color: "from-gray-800 to-black",
      bgColor: "bg-gray-100",
      borderColor: "border-gray-200",
      suffix: "+",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-white"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            WHY <span className="text-black">US</span>{" "}
          </h2>
          <p className="text-[16px] sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Experience + Proven Track Record + Client Satisfaction = Success
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
