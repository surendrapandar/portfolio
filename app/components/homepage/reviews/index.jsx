"use client";

import React, { useEffect } from "react";
import Image from "next/image";

function Reviews() {
  useEffect(() => {
    // Initialize widget when component mounts
    const loadSenja = () => {
      if (window.Senja) {
        window.Senja.reInit();
      } else {
        // If Senja isn't loaded yet, try again in 1 second
        setTimeout(loadSenja, 1000);
      }
    };

    loadSenja();
  }, []);

  return (
    <section className="relative z-50 border-t my-12 lg:my-24 border-[#25213b] ">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-24 mt-10">
          People Love Working With US
        </h2>
        <div className="max-w-6xl mx-auto ">
          <div
            className="senja-embed"
            data-id="73033569-988a-46f5-820f-b7f180948ba0"
            data-mode="shadow"
            data-lazyload="false"
          />
        </div>
      </div>
    </section>
  );
}

export default Reviews;
