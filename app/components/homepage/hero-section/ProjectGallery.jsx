"use client";
import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";

const images = [
  { src: "/image/laptop.png", alt: "Dashboard Analytics View" },
  { src: "/image/emoji.png", alt: "Emoji Reactions" },
  { src: "/image/Frame.png", alt: "Dashboard Design", isMobile: true },
  { src: "/image/kashish.png", alt: "Portfolio Showcase" },
  { src: "/image/feedback.png", alt: "Analytics Dashboard" },
  { src: "/image/fortiche.png", alt: "Screenshot 1" },
  { src: "/image/inventory.png", alt: "Screenshot 2" },
];

// Duplicate images for seamless infinite scroll
const duplicatedImages = [...images, ...images, images];

export default function ProjectGallery() {
  const scrollRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  const isMobileImage = useCallback(
    (img) =>
      img.isMobile ||
      img.src === "/image/mobile-black.png" ||
      img.src === "/image/Frame.png",
    []
  );

  // Function to calculate the width of one set of images for scrolling
  const calculateOneSetWidth = useCallback(
    (currentWindowWidth, imagesArray, isMobileImageFunc) => {
      let totalWidth = 0;
      const gap = currentWindowWidth >= 768 ? 12 : 8; // Gap between cards

      imagesArray.forEach((img) => {
        const isMobileImg = isMobileImageFunc(img);
        let cardWidth;

        if (currentWindowWidth >= 768) {
          cardWidth = isMobileImg ? 400 : 700;
        } else if (currentWindowWidth < 480) {
          cardWidth = isMobileImg ? 250 : 260; // User's desired increased width
        } else if (currentWindowWidth < 640) {
          cardWidth = isMobileImg ? 240 : 280; // User's desired increased width
        } else {
          // windowWidth < 768
          cardWidth = isMobileImg ? 180 : 220; // User's desired increased width
        }
        totalWidth += cardWidth + gap;
      });
      return totalWidth;
    },
    []
  );

  useEffect(() => {
    setIsMounted(true);
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      console.log("Window resized to:", window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollStep = 5;
    const scrollDelay = 20;
    let intervalId = null;

    const autoScroll = () => {
      if (scrollContainer) {
        scrollAmount += scrollStep;
        // Use the accurate calculation for oneSetWidth
        const oneSetWidth = calculateOneSetWidth(
          windowWidth,
          images,
          isMobileImage
        );
        if (scrollAmount >= oneSetWidth) {
          scrollAmount = 0;
        }
        scrollContainer.scrollLeft = scrollAmount;
      }
    };

    const startScrolling = () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
      intervalId = window.setInterval(autoScroll, scrollDelay);
    };

    const stopScrolling = () => {
      if (intervalId) {
        window.clearInterval(intervalId);
        intervalId = null;
      }
    };

    if (isMounted && windowWidth > 0) {
      startScrolling();
    }

    const handleMouseEnter = () => {
      stopScrolling();
    };
    const handleMouseLeave = () => {
      startScrolling();
    };

    if (scrollContainer) {
      scrollContainer.addEventListener("mouseenter", handleMouseEnter);
      scrollContainer.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      stopScrolling();
      if (scrollContainer) {
        scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
        scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth, images, isMounted, calculateOneSetWidth, isMobileImage]); // Added images and isMobileImage to dependencies

  if (!isMounted) {
    return (
      <section className="w-full pt-10 pb-16">
        <div className="w-full h-[200px] bg-gray-800 animate-pulse"></div>
      </section>
    );
  }

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
            const isMobileImg = isMobileImage(img);

            let minWidth, maxWidth, height;
            if (windowWidth >= 768) {
              minWidth = isMobileImg ? 400 : 700;
              maxWidth = minWidth;
              height = 500;
            } else if (windowWidth < 480) {
              minWidth = isMobileImg ? 250 : 260; // User's desired increased width
              maxWidth = minWidth;
              height = 180; // Adjusted height for increased width
            } else if (windowWidth < 640) {
              minWidth = isMobileImg ? 240 : 280; // User's desired increased width
              maxWidth = minWidth;
              height = 200; // Adjusted height for increased width
            } else {
              // windowWidth < 768
              minWidth = isMobileImg ? 180 : 220; // User's desired increased width
              maxWidth = minWidth;
              height = 160; // Adjusted height for increased width
            }

            console.log(
              `Card ${idx}: windowWidth=${windowWidth}, isMobileImg=${isMobileImg}, minWidth=${minWidth}, height=${height}`
            );

            return (
              <div
                key={idx}
                className={
                  isMobileImg
                    ? "flex-shrink-0 flex items-center justify-center bg-transparent"
                    : "flex-shrink-0 rounded-3xl overflow-hidden relative group hover:scale-105 transition-all duration-300 shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-[#16f2b3]/20 backdrop-blur-sm"
                }
                style={{
                  minWidth,
                  maxWidth,
                  height,
                  background: isMobileImg ? "transparent" : undefined,
                }}
              >
                <div
                  className={
                    isMobileImg
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
                        width={minWidth} // Dynamic width
                        height={height} // Dynamic height
                        style={{
                          width: "100%",
                          height: "100%",
                          maxWidth: "100%",
                          maxHeight: "100%",
                          display: "block",
                          margin: 0,
                          borderRadius: isMobileImg ? "0" : "1rem",
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
                        background: isMobileImg ? "transparent" : "#18181b",
                        padding: 0,
                      }}
                    >
                      <Image
                        src={img.src || "/placeholder.svg"}
                        alt={img.alt}
                        width={minWidth} // Dynamic width
                        height={height} // Dynamic height
                        className={
                          isMobileImg
                            ? "object-contain w-full h-full"
                            : "object-cover w-full h-full rounded-2xl"
                        }
                        style={{
                          width: "100%",
                          height: "100%",
                          display: "block",
                          margin: 0,
                          borderRadius: isMobileImg ? "0" : "1rem",
                          objectFit: isMobileImg ? "contain" : "cover",
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
