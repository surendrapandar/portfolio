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
import { useEffect, useState } from "react";
import StatCard from "./StatCard";
import TrustCard from "./TrustCard";

export default function AnalyticsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    {
      icon: Award,
      value: 11,
      label: "Projects Completed",
      description: "Successfully delivered",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
    },
    {
      icon: Users,
      value: 8,
      label: "Happy Clients",
      description: "Satisfied customers",
      color: "from-[#16f2b3] to-green-400",
      bgColor: "bg-[#16f2b3]/10",
      borderColor: "border-[#16f2b3]/20",
    },
    {
      icon: TrendingUp,
      value: 20,
      label: "Following On Social Media",
      description: "Active community",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
    },
    {
      icon: Zap,
      value: 3,
      label: "Years of Experience",
      description: "Professional expertise",
      color: "from-orange-500 to-yellow-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20",
    },
  ];

  return (
    <section className="relative bg-gray-900 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
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
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
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
            />
          ))}
        </div>
      </div>
    </section>
  );
}
