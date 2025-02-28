import Link from "next/link";
import { IoLogoGithub } from "react-icons/io";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";
import { BiLogoLinkedin } from "react-icons/bi";
import { Button } from "@/components/ui/button";
import { personalData } from "@/utils/data/personal-data";
import { CalendarRange, Rocket } from "lucide-react";

export default function Footer() {
  return (
    <div className="relative border-t bg-[#0d1224] border-[#353951] text-white">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-16 lg:py-24">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <div className="flex justify-center mb-6">
            <Rocket className="w-12 h-12 text-[#16f2b3] animate-bounce" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Ready to Launch your{" "}
            <span className="text-[#16f2b3] hover:text-[#37e0b0]">AI MVP</span>{" "}
            ?
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Let&apos;s discuss how I can bring your project to life. Let&apos;s
            have a quick 30 minutes call to discuss the details.
          </p>
          <div className="flex justify-center">
            <Button className="bg-[#16f2b3] hover:bg-[#37e0b0] px-10 py-6 rounded-[10px] mt-8 shadow-md transform transition-transform hover:scale-105">
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
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between mt-16">
          <p className="text-sm">
            © 2025{" "}
            <Link href="/" className="text-[#16f2b3]">
              Surendra Pandar
            </Link>
          </p>

          <div className="flex gap-4 mt-4 md:mt-0">
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-full border-white/10 bg-white/5 hover:bg-[#16f2b3] hover:text-white"
              asChild
            >
              <Link href={personalData.github} target="_blank">
                <IoLogoGithub className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-full border-white/10 bg-white/5 hover:bg-[#16f2b3] hover:text-white"
              asChild
            >
              <Link href={personalData.linkedIn} target="_blank">
                <BiLogoLinkedin className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-full border-white/10 bg-white/5 hover:bg-[#16f2b3] hover:text-white"
              asChild
            >
              <Link href={personalData.twitter} target="_blank">
                <FaXTwitter className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-full border-white/10 bg-white/5 hover:bg-[#16f2b3]hover:text-white"
              asChild
            >
              <Link href={personalData.youtube} target="_blank">
                <FaYoutube className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
