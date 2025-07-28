"use client";
import React from "react";
import Image from "next/image";
import { useEffect, useRef } from "react";

const images = [
  {
    src: "/image/laptop.png",
    alt: "Dashboard Analytics View",
  },
  {
    src: "/image/emoji.png",
    alt: "Emoji Reactions",
  },
  {
    src: "/image/Frame.png",
    alt: "Dashboard Design",
    isMobile: true,
  },
  {
    src: "/image/kashish.png",
    alt: "Portfolio Showcase",
  },
  {
    src: "/image/feedback.png",
    alt: "Analytics Dashboard",
  },
  {
    src: "/image/fortiche.png",
    alt: "Screenshot 1",
  },
  {
    src: "/image/inventory.png",
    alt: "Screenshot 2",
  },
];

// Duplicate images for seamless infinite scroll
const duplicatedImages = [...images, ...images, ...images];

export default function ProjectGallery() {
  const scrollRef = useRef(null);

  // Set SSR default width to desktop for consistent desktop card size on refresh
  const [windowWidth, setWindowWidth] = React.useState(
    typeof window !== "undefined" ? window.innerWidth : 1440
  );

  useEffect(() => {
    // Only run on client
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollStep = 5;
    const scrollDelay = 20;
    let intervalId;

    const autoScroll = () => {
      if (scrollContainer) {
        scrollAmount += scrollStep;
        // Get one set width (original images length * (card width + gap))
        const oneSetWidth =
          images.length * (windowWidth < 768 ? 280 + 8 : 700 + 12);

        if (scrollAmount >= oneSetWidth) {
          scrollAmount = 0;
        }
        scrollContainer.scrollLeft = scrollAmount;
      }
    };

    const startScrolling = () => {
      intervalId = setInterval(autoScroll, scrollDelay);
    };

    const stopScrolling = () => {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }
    };

    startScrolling();

    const handleMouseEnter = () => {
      stopScrolling();
    };

    const handleMouseLeave = () => {
      startScrolling();
    };

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      stopScrolling();
      if (scrollContainer) {
        scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
        scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  return (
    <section className="w-full pt-10 pb-16 ">
      <div
        ref={scrollRef}
        className="scrollbar-hide w-full"
        style={{
          width: "100vw",
          marginLeft: "calc(-50vw + 50%)",
          overflow: "hidden",
        }}
      >
        <div className="flex gap-2 md:gap-3 pb-2 pl-4 md:pl-8">
          {duplicatedImages.map((img, idx) => {
            const isMobileImage =
              img.isMobile ||
              img.src === "/image/mobile-black.png" ||
              img.src === "/image/Frame.png";

            // Use windowWidth for sizing, fallback to default for SSR
            // Make mobile cards much smaller
            // Slightly increase mobile card size
            let minWidth, maxWidth, height;
            // Always use large size for desktop (width >= 1024)
            if (windowWidth >= 1024) {
              minWidth = isMobileImage ? 600 : 700;
              maxWidth = minWidth;
              height = 500;
            } else if (windowWidth < 480) {
              minWidth = isMobileImage ? 200 : 240;
              maxWidth = minWidth;
              height = 180;
            } else if (windowWidth < 768) {
              minWidth = isMobileImage ? 160 : 220;
              maxWidth = minWidth;
              height = 160;
            } else {
              minWidth = isMobileImage ? 600 : 700;
              maxWidth = minWidth;
              height = 500;
            }

            return (
              <div
                key={idx}
                className={
                  isMobileImage
                    ? "flex-shrink-0 flex items-center justify-center bg-transparent"
                    : "flex-shrink-0 rounded-3xl overflow-hidden relative group hover:scale-105 transition-all duration-300 shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-[#16f2b3]/20 backdrop-blur-sm"
                }
                style={{
                  minWidth,
                  maxWidth,
                  height,
                  background: isMobileImage ? "transparent" : undefined,
                }}
              >
                <div
                  className={
                    isMobileImage
                      ? "w-full h-full flex items-center justify-center"
                      : "p-2 md:p-4 w-full h-full"
                  }
                >
                  {img.src === "/image/kashish.gif" ? (
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "stretch",
                        justifyContent: "center",
                        overflow: "hidden",
                        background: "#18181b",
                        padding: 0,
                      }}
                    >
                      <Image
                        src={img.src || "/placeholder.svg"}
                        alt={img.alt}
                        width={800}
                        height={600}
                        style={{
                          width: "100%",
                          height: "100%",
                          maxWidth: "100%",
                          maxHeight: "100%",
                          display: "block",
                          margin: 0,
                          borderRadius: isMobileImage ? "0" : "1rem",
                          boxShadow: "0 0 0 0 transparent",
                          objectFit: "cover",
                        }}
                        priority={true}
                      />
                    </div>
                  ) : (
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden",
                        background: isMobileImage ? "transparent" : "#18181b",
                        padding: 0,
                      }}
                    >
                      <Image
                        src={img.src || "/placeholder.svg"}
                        alt={img.alt}
                        width={700}
                        height={400}
                        className={
                          isMobileImage
                            ? "object-contain w-full h-full"
                            : "object-cover w-full h-full rounded-2xl"
                        }
                        style={{
                          width: "100%",
                          height: "100%",
                          display: "block",
                          margin: 0,
                          borderRadius: isMobileImage ? "0" : "1rem",
                          objectFit: isMobileImage ? "contain" : "cover",
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <style jsx global>{`
        .scrollbar-hide {
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
          width: 0;
          height: 0;
        }

        /* Prevent horizontal scroll on body */
        body {
          overflow-x: hidden;
        }

        /* Ensure no horizontal scroll on any parent containers */
        html,
        body {
          max-width: 100vw;
          overflow-x: hidden;
        }
      `}</style>
    </section>
  );
}
