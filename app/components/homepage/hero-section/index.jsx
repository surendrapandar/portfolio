"use client";

import { Button } from "@/components/ui/button";
import { CalendarRange } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import ScrollCards from "./scroll-cards";

function HeroSection() {
  const [displayText, setDisplayText] = useState("AI MVP");
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setDisplayText((prev) => (prev === "AI MVP" ? "Product" : "AI MVP"));
        setIsAnimating(false);
      }, 500); // Half the interval for the fade-out part
    }, 3000); // Switch every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-white -m-10 mt-10">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />

      <div className="container mx-auto px-4  relative z-10 ">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Social proof section */}
          <div className="text-center mt-2">
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
                Join 20+ satisfied clients
              </span>
            </div>
          </div>
          {/* Main heading */}
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-semibold text-center leading-tight ">
            Lanuch your{" "}
            <span
              className={`text-[#16f2b3] hover:text-[#37e0b0] inline-block w-[350px] transition-opacity duration-500 ${
                isAnimating ? "opacity-0" : "opacity-100"
              }`}
            >
              {displayText}
            </span>
            <div className="mb-2" />
            in Just{" "}
            <span className="relative inline-block">
              1 Month
              <svg
                className="absolute w-full -bottom-2"
                height="6"
                viewBox="0 0 100 6"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,2 L10,0 L20,4 L30,0 L40,4 L50,0 L60,4 L70,0 L80,4 L90,0 L100,4"
                  fill="none"
                  stroke="#16f2b3"
                  strokeWidth="2"
                />
              </svg>
            </span>
          </h1>

          <div className="flex flex-col items-center  space-y-4 text-lg md:text-xl text-gray-400">
            <p className="text-center text-2xl max-w-lg mx-5">
              Transform your vision into reality with affordable pricing - from
              concept to launch in just 30 days.
            </p>
            {/* <div className="text-xl leading-relaxed justify-center text-center">
              Let&apos;s connect and explore how we can work together.
            </div> */}
          </div>
        </div>
      </div>
      <Button className="bg-[#16f2b3] hover:bg-[#37e0b0]  px-10 py-6 rounded-[10px] mt-8 flex justify-center shadow-md transform transition-transform hover:scale-105">
        <Link
          className="flex items-center gap-3"
          href="https://calendly.com/surendrapandar/30min"
        >
          <CalendarRange className="text-gray-700 text-2xl" />
          <span className="text-gray-700 text-2xl font-semibold">
            Let&apos;s Talk
          </span>
        </Link>
      </Button>

      {/* Scroll Cards Section */}
      <ScrollCards />
    </section>
  );
}

export default HeroSection;
