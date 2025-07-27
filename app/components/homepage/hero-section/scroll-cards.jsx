"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const ScrollCards = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 2;
      }
    };

    const interval = setInterval(scroll, 50);

    return () => clearInterval(interval);
  }, []);

  const projects = [
    {
      id: 1,
      image: "/image/portfolio.gif",
    },
    {
      id: 2,
      image: "/image/Frame.png",
    },
    {
      id: 3,
      image: "/image/writeons.png",
    },
    {
      id: 4,
      image: "/image/feedback.png",
    },
    {
      id: 5,
      image: "/image/ayla.jpg",
    },
    {
      id: 6,
      image: "/image/screen.png",
    },
  ];

  // Duplicate projects for seamless scrolling
  const duplicatedProjects = [...projects, ...projects];

  return (
    <div className="relative w-full px-4 py-16">
      <div className="relative overflow-hidden w-full">
        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute top-0 left-0 bottom-0 w-20 bg-gradient-to-r from-black/20 to-transparent z-10"></div>
        <div className="absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-l from-black/20 to-transparent z-10"></div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide py-4 w-full"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {duplicatedProjects.map((project, index) =>
            project.id === 2 ? (
              // Render just the image without card styling for Frame image
              <div
                key={`${project.id}-${index}`}
                className="relative flex-shrink-0 w-[20rem] h-96"
              >
                <Image
                  src={project.image}
                  alt={`Project ${project.id}`}
                  fill
                  className="object-contain"
                />
              </div>
            ) : (
              // Regular card styling for other projects
              <div
                key={`${project.id}-${index}`}
                className={`group relative flex-shrink-0 ${
                  project.id === 3 ? "w-[50rem]" : "w-[35rem]"
                } h-96 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden hover:border-[#16f2b3]/50 transition-all duration-300 hover:scale-105`}
              >
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`Project ${project.id}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent"></div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#16f2b3]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            )
          )}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default ScrollCards;
