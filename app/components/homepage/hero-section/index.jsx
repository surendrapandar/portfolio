// @flow strict

import { Button } from "@/components/ui/button";
import { personalData } from "@/utils/data/personal-data";
import { CalendarFoldIcon, CalendarRange } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { MdDownload, MdHandshake } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";

function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-white ">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />

      <div className="container mx-auto px-4  relative z-10">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-semibold text-center leading-tight">
            Lanuch your AI MVP
            <br />
            in Just 1 Month
          </h1>

          <div className="flex flex-col items-center space-y-4 text-lg md:text-xl text-gray-400">
            <p className="text-center max-w-lg">
              With a budget-friendly and amzing tech, we'll craft, build, and
              bring your idea to life within 1 month.
            </p>
          </div>
        </div>
      </div>
      <Button className="bg-[#16f2b3] hover:bg-[#37e0b0]  px-10 py-6 rounded-[10px] mt-8 flex justify-center shadow-md transform transition-transform hover:scale-105">
        <Link className="flex items-center gap-3" href="/contact">
          <CalendarRange className="text-gray-700 text-2xl" />
          <span className="text-gray-700 text-2xl font-semibold">
            Book a free call
          </span>
        </Link>
      </Button>
    </section>
  );
}

export default HeroSection;
