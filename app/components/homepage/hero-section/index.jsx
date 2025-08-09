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
  const [displayText, setDisplayText] = useState("AI MVP");
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  useEffect(() => {
    const services = ["AI MVP", "Product"];
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

      {/* Floating Elements */}
      <div className="absolute inset-0 -z-5">
        <div className="absolute top-20 left-20 w-20 h-20 bg-[#16f2b3]/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

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
            <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-center leading-tight">
              Launch your{" "}
              <span
                className={`text-[#16f2b3] inline-block min-w-[180px] sm:min-w-[350px] transition-all duration-500 ${
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
                  <span className="relative z-10">30 Days</span>
                  <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-[#16f2b3]/20 to-blue-500/20 blur-lg rounded-lg"></div>
                  <svg
                    className="absolute w-full -bottom-1 sm:-bottom-2 z-10"
                    height="8"
                    viewBox="0 0 100 8"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,4 Q25,0 50,4 T100,4"
                      fill="none"
                      stroke="#16f2b3"
                      strokeWidth="3"
                      className="animate-pulse"
                    />
                  </svg>
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
              <p className=" text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-2">
                From concept to launch in{" "}
                <span className="text-[#16f2b3] font-semibold">30 days</span> or
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
                    className="flex items-center gap-3 bg-gray-800/30 backdrop-blur-sm px-4 py-3 rounded-lg border border-gray-700/50"
                  >
                    <benefit.icon className="w-5 h-5 text-[#16f2b3]" />
                    <div className="text-left">
                      <div className="text-white font-medium text-sm">
                        {benefit.text}
                      </div>
                      <div className="text-gray-400 text-xs">
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
            <div className="flex flex-row gap-3 sm:gap-4 justify-center items-center w-full">
              <Link
                className="flex items-center gap-3"
                href="https://calendly.com/surendrapandar/30min"
              >
                <Button className="bg-[#16f2b3] hover:bg-[#37e0b0] px-6 py-4 sm:px-8 sm:py-6 rounded-xl shadow-2xl transform transition-all hover:scale-105 hover:shadow-[#16f2b3]/25 group min-w-[100px] sm:min-w-[180px]">
                  <CalendarRange className="text-gray-800 text-base sm:text-xl" />
                  <span className="text-gray-800 text-xs font-bold sm:text-xl">
                    <span className="block sm:hidden">Let&apos;s Talk</span>
                    <span className="hidden sm:block">
                      Let&apos;s Talk &amp; Build
                    </span>
                  </span>
                  <ArrowRight className="text-gray-800 text-base sm:text-xl group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <Link href="#ourwork">
                <Button
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:text-white hover:border-[#16f2b3] px-4 py-3 sm:px-6 sm:py-4 rounded-xl transition-all hover:scale-105 min-w-[140px]"
                >
                  <span className="text-base sm:text-xl font-medium">
                    View Past Work
                  </span>
                </Button>
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
