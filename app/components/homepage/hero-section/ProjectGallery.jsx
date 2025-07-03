"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

const images = [
  {
    src: "/image/laptop.png",
    alt: "Dashboard Analytics View",
  },

  {
    src: "/image/laptop (1).png",
    alt: "Dashboard Interface",
  },
  {
    src: "/image/feedback.png",
    alt: "Analytics Dashboard",
  },
  {
    src: "/image/Frame.png",
    alt: "Dashboard Design",
  },

  {
    src: "/image/Recording 2025-07-02 at 17.43.31.gif",
    alt: "Project Demo Recording",
    isGif: true,
  },
  {
    src: "/image/mobile-black.png",
    alt: "Dashboard Design",
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
    const scrollStep = 1.5; // pixels per step
    const scrollDelay = 20; // milliseconds between steps
    let intervalId;

    const autoScroll = () => {
      if (scrollContainer) {
        scrollAmount += scrollStep;

        // Get one set width (original images length * (card width + gap))
        const oneSetWidth = images.length * (700 + 8); // 700px card + 8px gap

        // Reset to start when one complete set has scrolled
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

    // Start initial scrolling
    startScrolling();

    // Pause scrolling on hover
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
    <section className="w-full pt-10 pb-16 px-2">
      <div ref={scrollRef} className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 min-w-max pb-2">
          {duplicatedImages.map((img, idx) => (
            <div
              key={idx}
              className={
                img.src === "/image/mobile-black.png" ||
                img.src === "/image/Frame.png"
                  ? "flex-shrink-0 flex items-center justify-center bg-transparent rounded-3xl"
                  : "flex-shrink-0 rounded-3xl overflow-hidden relative group hover:scale-105 transition-all duration-300 shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-[#16f2b3]/20 backdrop-blur-sm"
              }
              style={{
                minWidth:
                  img.src === "/image/mobile-black.png" ||
                  img.src === "/image/Frame.png"
                    ? 400
                    : 700,
                maxWidth:
                  img.src === "/image/mobile-black.png" ||
                  img.src === "/image/Frame.png"
                    ? 400
                    : 700,
                height:
                  img.src === "/image/mobile-black.png" ||
                  img.src === "/image/Frame.png"
                    ? 500
                    : 500,
                background:
                  img.src === "/image/mobile-black.png" ||
                  img.src === "/image/Frame.png"
                    ? "transparent"
                    : "linear-gradient(145deg, #1a1a1a 0%, rgba(22, 242, 179, 0.05) 100%)",
              }}
            >
              <div
                className={
                  img.src === "/image/mobile-black.png" ||
                  img.src === "/image/Frame.png"
                    ? "w-full h-full flex items-center justify-center"
                    : "p-4 w-full h-full"
                }
              >
                {img.isGif ? (
                  <img
                    src={img.src}
                    alt={img.alt}
                    className={
                      img.src === "/image/mobile-black.png" ||
                      img.src === "/image/Frame.png"
                        ? "object-contain w-full h-full max-h-[500px]"
                        : "object-cover w-full h-full rounded-2xl"
                    }
                    style={{
                      objectFit:
                        img.src === "/image/mobile-black.png" ||
                        img.src === "/image/Frame.png"
                          ? "contain"
                          : "cover",
                      height:
                        img.src === "/image/mobile-black.png" ||
                        img.src === "/image/Frame.png"
                          ? "500px"
                          : "100%",
                    }}
                  />
                ) : (
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={700}
                    height={400}
                    className={
                      img.src === "/image/mobile-black.png" ||
                      img.src === "/image/Frame.png"
                        ? "object-contain w-full h-full max-h-[500px]"
                        : "object-cover w-full h-full rounded-2xl"
                    }
                    style={{
                      objectFit:
                        img.src === "/image/mobile-black.png" ||
                        img.src === "/image/Frame.png"
                          ? "contain"
                          : "cover",
                      height:
                        img.src === "/image/mobile-black.png" ||
                        img.src === "/image/Frame.png"
                          ? "500px"
                          : "100%",
                    }}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
