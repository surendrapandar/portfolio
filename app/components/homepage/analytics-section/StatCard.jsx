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

const StatCard = ({ stat, isVisible, index, startCounting }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!startCounting) return;

    const duration = 2000; // 2 seconds
    const steps = 60; // 60 steps for smooth animation
    const increment = stat.value / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const currentValue = Math.min(increment * currentStep, stat.value);
      setDisplayValue(Math.round(currentValue));

      if (currentStep >= steps) {
        clearInterval(timer);
        setDisplayValue(stat.value); // Ensure we end with exact value
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [startCounting, stat.value]);

  const IconComponent = stat.icon;

  return (
    <div
      className={`relative group transform transition-all duration-700 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div
        className={`relative p-6 rounded-2xl ${stat.bgColor} border ${stat.borderColor} backdrop-blur-sm hover:scale-105 transition-transform duration-300`}
      >
        {/* Icon */}
        <div
          className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${stat.color} mb-4`}
        >
          <IconComponent className="w-6 h-6 text-white" />
        </div>

        {/* Value */}
        <div className="mb-2">
          <span className="text-3xl font-bold text-white">
            {displayValue}
            {startCounting && displayValue > 0 ? stat.suffix : ""}
          </span>
        </div>

        {/* Label */}
        <h3 className="text-lg font-semibold text-white mb-1">{stat.label}</h3>

        {/* Description */}
        <p className="text-sm text-gray-400">{stat.description}</p>

        {/* Hover effect */}
        <div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
        ></div>
      </div>
    </div>
  );
};

export default StatCard;
