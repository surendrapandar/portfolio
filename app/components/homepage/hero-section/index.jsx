// @flow strict

import { personalData } from "@/utils/data/personal-data";
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
            Get your AI MVP built
            <br />
            in 1 Month
          </h1>

          <div className="flex flex-col items-center space-y-4 text-lg md:text-xl text-gray-400">
            <ul className="space-y-3 list-none text-center">
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full inline-block"></span>
                <span>Bring your idea to life within 1 month</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full inline-block"></span>
                <span>Affordable Pricing & clear communication</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full inline-block"></span>
                <span>No extra effort</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full inline-block"></span>
                <span>Modern technology for the best experience</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
