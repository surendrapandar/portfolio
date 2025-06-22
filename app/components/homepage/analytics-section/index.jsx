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
      icon: MessageCircle,
      value: 1866,
      label: "Total Messages",
      description: "Active conversations",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
    },
    {
      icon: Users,
      value: 105,
      label: "Total Users",
      description: "Happy clients served",
      color: "from-[#16f2b3] to-green-400",
      bgColor: "bg-[#16f2b3]/10",
      borderColor: "border-[#16f2b3]/20",
    },
    {
      icon: DollarSign,
      value: 1,
      label: "Total Payments",
      description: "Successful transactions",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
    },
    {
      icon: Eye,
      value: 21560,
      label: "Total Views",
      description: "Project impressions",
      color: "from-orange-500 to-yellow-500",

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
            Trusted by <span style={{ color: "#16f2b3" }}>Businesses</span>{" "}
            Worldwide
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real-time metrics showcasing our commitment to delivering
            exceptional results
          </p>
        </div>        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              stat={stat}
              isVisible={isVisible}
              index={index}
            />
          ))}
        </div>{/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TrustCard 
            Icon={Award}
            title="Quality Assured"
            description="Every project meets our high standards"
            colorClass="bg-[#16f2b3]/10 text-[#16f2b3]"
          />
          <TrustCard 
            Icon={Zap}
            title="Fast Delivery"
            description="Projects completed within timeline"
            colorClass="bg-blue-500/10 text-blue-400"
          />
          <TrustCard 
            Icon={TrendingUp}
            title="Growing Success"
            description="Continuous improvement and growth"
            colorClass="bg-purple-500/10 text-purple-400"
          />
        </div>

        {/* Social Proof */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800/50 rounded-full border border-gray-700">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-[#16f2b3] to-blue-500 border-2 border-gray-800 flex items-center justify-center text-xs font-bold text-gray-900"
                >
                  {i}
                </div>
              ))}
            </div>
            <span className="text-gray-300 ml-2">
              Join 100+ satisfied clients
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
