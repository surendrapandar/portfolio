"use client";

import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function WhyMe() {
  const statsData = [
    { value: 15, suffix: "+", label: "Projects Completed" },
    { value: 10, suffix: "+", label: "Happy Clients" },
    { value: 20, suffix: "K+", label: "Following On Social Media" },
    { value: 3, suffix: "+", label: "Years of Experience" },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true, // Animate only once
    threshold: 0.1, // Trigger when 10% of the element is in view
  });

  return (
    <section id="whyus" className="py-16 md:py-20 bg-[#1a1a2e]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          WHY US
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 md:mb-16">
          Because we are not just developers, we are your partners in success.
          we have a proven track record of delivering exceptional results for
          our clients.
        </p>

        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">
                {inView ? (
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2.5}
                    suffix={stat.suffix}
                  />
                ) : (
                  `0${stat.suffix}`
                )}
              </div>
              <p className="text-sm md:text-base text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyMe;
