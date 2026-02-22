"use client";

import { Button } from "@/components/ui/button";
import {
  CalendarRange,
  ArrowRight,
  Zap,
  Clock,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

import ProjectGallery from "./ProjectGallery";
import SlotAvailability from "./slot";

function HeroSection() {
  const [displayText, setDisplayText] = useState("Product");
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  useEffect(() => {
    const services = ["Product", "Startup"];
    setIsVisible(true);

    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentServiceIndex((prev) => (prev + 1) % services.length);
        setDisplayText(services[(currentServiceIndex + 1) % services.length]);
        setIsAnimating(false);
      }, 500); // Even faster animation
    }, 1000); // Even faster switch

    return () => clearInterval(interval);
  }, [currentServiceIndex]);

  return (
    <div className="mt-5 px-2 sm:px-4 ">
      {/* Background Elements */}

      <div className="container mx-auto px-2 sm:px-4 relative z-10 ">
        {/* Slot Availability at the top */}
        <SlotAvailability />

        <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12 mt-8 sm:mt-12">
          {/* Main Heading */}
          <div
            className={`transition-all duration-300 delay-50 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-center leading-tight tracking-tight text-black">
              Launch your{" "}
              <span
                className={`inline-block min-w-[180px] sm:min-w-[350px] transition-all duration-500 ${
                  isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
                }`}
              >
                {displayText}
              </span>
              {/* Mobile: single row, Desktop: original design */}
              <span className="block sm:hidden text-md mt-2">
                in just 21 days
              </span>
              <span className="hidden sm:inline">
                <div className="mb-2" />
                in Just{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">21 Days.</span>
                </span>
              </span>
            </h1>
          </div>

          {/* Value Proposition */}
          <div
            className={`transition-all duration-300 delay-80 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center space-y-4 sm:space-y-6">
              <p className=" text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto leading-relaxed px-2">
                From concept to launch in{" "}
                <span className="text-black font-semibold">21 days</span> or
                less. Get a professional, scalable product that drives results.
              </p>

              {/* <div className="flex flex-wrap justify-center gap-6 mt-8">
                {[
                  {
                    icon: Zap,
                    text: "Fast Delivery",
                    desc: "30-day guarantee",
                  },
                  {
                    icon: CheckCircle,
                    text: "Quality Assured",
                    desc: "100% satisfaction",
                  },
                  {
                    icon: Clock,
                    text: "Fully Secure",
                    desc: "Security always in mind",
                  },
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-white px-4 py-3 rounded-lg border border-gray-200 shadow-sm"
                  >
                    <benefit.icon className="w-5 h-5 text-black" />
                    <div className="text-left">
                      <div className="text-black font-medium text-sm">
                        {benefit.title}
                      </div>
                      <div className="text-gray-500 text-xs">
                        {benefit.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div> */}
            </div>
          </div>

          {/* CTAs */}
          <div
            className={`transition-all duration-300 delay-120 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex flex-row gap-6 sm:gap-8 justify-center items-center w-full mt-8">
              <Link
                className="flex items-center gap-3"
                href="https://calendly.com/surendrapandar/30min"
              >
                <Button className="bg-black hover:bg-gray-800 text-white px-6 py-4 sm:px-8 sm:py-6 rounded-full shadow-md transform transition-all hover:scale-105 group min-w-[100px] sm:min-w-[180px]">
                  <span className="text-white text-sm font-medium sm:text-lg">
                    <span className="block sm:hidden">Let&apos;s Talk</span>
                    <span className="hidden sm:block">
                      Let&apos;s Talk &amp; Build
                    </span>
                  </span>
                  <ArrowRight className="text-white text-base sm:text-xl group-hover:translate-x-1 transition-transform -rotate-45" />
                </Button>
              </Link>

              <Link href="#ourwork" className="group flex items-center gap-2">
                <span className="text-base sm:text-lg font-medium text-gray-600 hover:text-black transition-colors">
                  View Past Work
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <ProjectGallery />
      </div>
    </div>
  );
}

export default HeroSection;
