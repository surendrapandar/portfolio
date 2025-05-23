"use client";

import { Button } from "@/components/ui/button";
import { CalendarRange } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaCode, FaServer } from "react-icons/fa";

export default function WebHeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-white -m-10">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto space-y-12">
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-semibold text-center leading-tight">
            Transform Your <div className="mb-2" />
            <span className="text-[#16f2b3] hover:text-[#37e0b0] inline-block transition-opacity duration-500">
              Ideas
            </span>{" "}
            Into{" "}
            <span className="relative inline-block">
              Reality
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

          <div className="flex flex-col items-center space-y-4 text-lg md:text-xl text-gray-400">
            <p className="text-center text-2xl max-w-lg mx-5">
              Specialized in creating powerful, scalable web applications. So
              let&apos;s build your next big thing together.
            </p>
          </div>
        </div>
      </div>
      <Button className="bg-[#16f2b3] hover:bg-[#37e0b0] px-10 py-6 rounded-[10px] mt-8 flex justify-center shadow-md transform transition-transform hover:scale-105">
        <Link
          className="flex items-center gap-3"
          href="https://calendly.com/surendrapandar/30min"
        >
          <CalendarRange className="text-gray-700 text-2xl" />
          <span className="text-gray-700 text-2xl font-semibold">
            Start Your Project
          </span>
        </Link>
      </Button>
    </section>
  );
}
