"use client";

import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  return (
    <div id="contact" className="relative py-16 lg:py-24">
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Let&apos;s Connect
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Ready to turn your idea into reality? Let&apos;s build something
            amazing together.
          </p> */}
        </div>

        {/* <div className="mt-16">
          <div className="rounded-2xl bg-white p-8 border w-[800px] h-[400px] border-gray-200 shadow-sm">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                  <MdAlternateEmail className="h-6 w-6 text-black" />
                </div>
                <div className="text-black">
                  <p className="text-sm font-medium">Email</p>
                  <p className="mt-1 text-gray-600">{personalData.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                  <IoMdCall className="h-6 w-6 text-black" />
                </div>
                <div className="text-black">
                  <p className="text-sm font-medium">Phone</p>
                  <p className="mt-1 text-gray-600">{personalData.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                  <CiLocationOn className="h-6 w-6 text-black" />
                </div>
                <div className="text-black">
                  <p className="text-sm font-medium">Location</p>
                  <p className="mt-1 text-gray-600">{personalData.address}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex gap-4 justify-left">
              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 rounded-full border-gray-200 bg-white hover:bg-gray-100 hover:text-black"
                asChild
              >
                <Link href={personalData.github} target="_blank">
                  <IoLogoGithub className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 rounded-full border-gray-200 bg-white hover:bg-gray-100 hover:text-black"
                asChild
              >
                <Link href={personalData.linkedIn} target="_blank">
                  <BiLogoLinkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 rounded-full border-gray-200 bg-white hover:bg-gray-100 hover:text-black"
                asChild
              >
                <Link href={personalData.twitter} target="_blank">
                  <FaXTwitter className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 rounded-full border-gray-200 bg-white hover:bg-gray-100 hover:text-black"
                asChild
              >
                <Link href={personalData.youtube} target="_blank">
                  <FaYoutube className="h-5 w-5" />
                </Link>
              </Button>
            </div>

            <Button className="rounded-full bg-black text-white hover:bg-gray-800 mt-10 shadow-md">
              Add your start
            </Button>
          </div>
        </div> */}
      </div>
    </div>
  );
}
