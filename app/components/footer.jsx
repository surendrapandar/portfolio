import Link from "next/link";
import { IoLogoGithub } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaYoutube } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { personalData } from "@/utils/data/personal-data";

export default function Footer() {
  return (
    <div className="relative border-t bg-[#0d1224] border-[#353951] text-white">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-16 lg:py-24">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Ready to take <span className="text-violet-500">your digital</span>{" "}
            presence to the next level?
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Reach out to me today and let's discuss how I can help your achieve
            your goals.
          </p>
          <Button className="mt-8 rounded-full bg-white/5 border border-white/10 hover:bg-[#16f2b3] hover:text-white">
            Let's get in touch
          </Button>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between mt-16">
          <p className="text-sm">
            © 2025{" "}
            <Link href="/" className="text-[#16f2b3]">
              Surendra Pandar
            </Link>
            {" | "}
            <Link
              href="https://github.com/yourusername"
              className="hover:text-[#16f2b3]"
            >
              Source Code
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
