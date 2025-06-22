"use client";

import { useEffect, useState } from "react";

const CountUpAnimation = ({ end, duration = 2000, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [end, duration, isVisible]);

  return count.toLocaleString();
};

const StatCard = ({ stat, isVisible, index }) => {
  const IconComponent = stat.icon;

  return (
    <div
      className={`relative group transform transition-all duration-500 hover:scale-105 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div
        className={`relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border ${stat.borderColor} hover:border-opacity-50 transition-all duration-300`}
      >
        <div
          className={`w-16 h-16 rounded-xl ${stat.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
        >
          <IconComponent className="w-8 h-8 text-white" />
        </div>
        <div className="mb-2">
          <span className="text-4xl font-bold text-white">
            <CountUpAnimation end={stat.value} isVisible={isVisible} />
          </span>
          {stat.value > 1000 && (
            <span className="text-2xl text-[#16f2b3] ml-1">+</span>
          )}
        </div>{" "}
        <h3 className="text-lg font-semibold text-gray-300 mb-1">
          {stat.label}
        </h3>
        <p className="text-sm text-gray-500">{stat.description}</p>
      </div>
    </div>
  );
};

export default StatCard;
