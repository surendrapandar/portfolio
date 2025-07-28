"use client";
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

  useEffect(() => {
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
          images.length * (window.innerWidth < 768 ? 280 + 8 : 700 + 12);

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
    };
  }, []);

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

            return (
              <div
                key={idx}
                className={
                  isMobileImage
                    ? "flex-shrink-0 flex items-center justify-center bg-transparent"
                    : "flex-shrink-0 rounded-3xl overflow-hidden relative group hover:scale-105 transition-all duration-300 shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-[#16f2b3]/20 backdrop-blur-sm"
                }
                style={{
                  minWidth: isMobileImage
                    ? window.innerWidth < 768
                      ? 200
                      : 400
                    : window.innerWidth < 768
                    ? 280
                    : 700,
                  maxWidth: isMobileImage
                    ? window.innerWidth < 768
                      ? 200
                      : 400
                    : window.innerWidth < 768
                    ? 280
                    : 700,
                  height:
                    window.innerWidth < 768 ? 200 : isMobileImage ? 500 : 500,
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
                      <img
                        src={img.src || "/placeholder.svg"}
                        alt={img.alt}
                        style={{
                          width: "100%",
                          height: "100%",
                          maxWidth: "100%",
                          maxHeight: "100%",
                          objectFit: "cover",
                          display: "block",
                          margin: 0,
                          borderRadius: isMobileImage ? "0" : "1rem",
                          boxShadow: "0 0 0 0 transparent",
                        }}
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
                          objectFit: isMobileImage ? "contain" : "cover",
                          width: "100%",
                          height: "100%",
                          display: "block",
                          margin: 0,
                          borderRadius: isMobileImage ? "0" : "1rem",
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
