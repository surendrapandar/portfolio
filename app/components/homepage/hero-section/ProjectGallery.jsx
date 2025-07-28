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
const duplicatedImages = [...images, ...images, ...images];

export default function ProjectGallery() {
  const scrollRef = useRef(null);
  // Initialize windowWidth to 0 for SSR, it will be updated on client mount
  const [windowWidth, setWindowWidth] = useState(0);
  const [isMounted, setIsMounted] = useState(false); // New state to track if component is mounted

  const isMobileImage = useCallback(
    (img) =>
      img.isMobile ||
      img.src === "/image/mobile-black.png" ||
      img.src === "/image/Frame.png",
    []
  );

  useEffect(() => {
    setIsMounted(true); // Component has mounted on the client
    setWindowWidth(window.innerWidth); // Set actual width on client

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      console.log("Window resized to:", window.innerWidth); // Debugging: Check this in your browser console
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
        // Use the actual windowWidth for scroll calculation
        const oneSetWidth =
          images.length *
          (windowWidth < 768
            ? windowWidth < 480
              ? 100 + 8
              : 140 + 8
            : 700 + 12); // Adjusted mobile widths
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

    // Only start scrolling if mounted and windowWidth is known
    if (isMounted && windowWidth > 0) {
      startScrolling();
    }

    const handleMouseEnter = () => {
      stopScrolling();
    };
    const handleMouseLeave = () => {
      startScrolling();
    };

    // Add event listeners only if scrollContainer exists
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
  }, [windowWidth, images.length, isMounted]); // Added isMounted to dependencies

  // If not mounted yet, render a minimal placeholder or nothing to avoid large cards on SSR
  if (!isMounted) {
    return (
      <section className="w-full pt-10 pb-16">
        {/* Optional: Render a skeleton or empty div for SSR */}
        <div className="w-full h-[200px] bg-gray-800 animate-pulse"></div>
      </section>
    );
  }

  return (
    <section className="w-full pt-10 pb-16 ">
      {/* Debugging aid: Display current window width */}
      <div className="fixed top-0 left-0 bg-black text-white p-2 z-50 text-xs"></div>

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
              // Desktop sizes: fixed as per your original request
              minWidth = isMobileImg ? 400 : 700;
              maxWidth = minWidth;
              height = 500;
            } else if (windowWidth < 480) {
              // Extra small mobile phones (e.g., iPhone SE, older Androids)
              minWidth = isMobileImg ? 250 : 260; // Made even smaller
              maxWidth = minWidth;
              height = 180; // Made even smaller
            } else if (windowWidth < 640) {
              // Small mobile phones (e.g., iPhone 15, most Androids)
              minWidth = isMobileImg ? 240 : 280; // Made even smaller
              maxWidth = minWidth;
              height = 200; // Made even smaller
            } else {
              // Medium mobile phones / small tablets (640px to 767px)
              minWidth = isMobileImg ? 180 : 220; // Made even smaller
              maxWidth = minWidth;
              height = 160; // Made even smaller
            }

            // Debugging: Check these values in your browser console for each card
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
                        width={800}
                        height={600}
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
                        width={700}
                        height={400}
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
