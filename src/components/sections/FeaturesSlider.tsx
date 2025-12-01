"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    title: "AI-Ready Infrastructure",
    description: "Train, fine-tune, deploy on GPU Baremetals, GPU VMs, AI Pods.",
    image: "/homepage-slider/ai-infrastructure.png",
  },
  {
    id: 2,
    title: "Green Cloud",
    description: "Sustainable cloud infrastructure powered by renewable energy.",
    image: "/homepage-slider/green-cloud.png",
  },
  {
    id: 3,
    title: "AI Studio",
    description: "Complete AI development environment for building intelligent applications.",
    image: "/homepage-slider/ai-studio.png",
  },
  {
    id: 4,
    title: "Enterprise AI Solutions",
    description: "Bhashik, Document Intelligence, Indic Speech APIs.",
    image: "/homepage-slider/enterprise-ai.png",
  },
];

export default function FeaturesSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Auto-slide: image stays for 5 seconds after slide-in completes
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 5300); // 300ms slide-in + 5000ms display time

    return () => clearInterval(interval);
  }, []);

  // Scroll active tab into view within the container only
  useEffect(() => {
    const activeTab = tabRefs.current[activeIndex];
    const scrollContainer = scrollContainerRef.current;
    
    if (activeTab && scrollContainer) {
      const tabLeft = activeTab.offsetLeft;
      const tabWidth = activeTab.offsetWidth;
      const containerWidth = scrollContainer.offsetWidth;
      const scrollLeft = tabLeft - (containerWidth / 2) + (tabWidth / 2);
      
      scrollContainer.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      });
    }
  }, [activeIndex]);

  // Helper functions to get adjacent indices
  const getPrevIndex = () => (activeIndex - 1 + slides.length) % slides.length;
  const getNextIndex = () => (activeIndex + 1) % slides.length;

  return (
    <section
      className="bg-black py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden"
      style={{ fontFamily: "'Open Sauce One', sans-serif" }}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-6 overflow-hidden">
        <div className="flex flex-col gap-6 sm:gap-8 md:gap-20 items-center w-full">
          {/* Tabs */}
          <div ref={scrollContainerRef} className="w-full overflow-x-auto overflow-y-visible scrollbar-hide rounded-xl flex justify-center">
            <div className="bg-neutral-900 rounded-2xl p-1.5 sm:p-2 inline-flex gap-1.5 sm:gap-2 md:gap-4 min-w-min">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  ref={(el) => { tabRefs.current[index] = el; }}
                  onClick={() => setActiveIndex(index)}
                  className={`
                    relative px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 md:py-4 rounded-xl transition-all duration-300 whitespace-nowrap text-xs sm:text-sm md:text-base font-medium flex-shrink-0
                    ${
                      activeIndex === index
                        ? "bg-gradient-to-b from-black to-[#181818] border border-[#353535] text-[#f8f8f8]"
                        : "text-white/86 hover:text-white"
                    }
                  `}
                >
                  {slide.title}
                  {activeIndex === index && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-2"
                      style={{
                        background:
                          "radial-gradient(ellipse at center, rgba(16, 165, 84, 0.8) 0%, transparent 70%)",
                        filter: "blur(4px)",
                      }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Slider Container - 3 Image Carousel */}
          <div className="relative w-full h-[400px] sm:h-[520px] md:h-[580px] lg:h-[650px] overflow-hidden">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[90%] sm:w-[85%] md:w-[80%] lg:w-[80%] h-full">
              <AnimatePresence initial={false} mode="sync">
                {/* Left Image (Previous) - Same size, partially visible */}
                <motion.div
                  key={`prev-${getPrevIndex()}`}
                  initial={{ x: "0%", opacity: 1 }}
                animate={{ x: "-103%", opacity: 1 }}
                exit={{ x: "-206%", opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                  className="absolute left-0 top-0 w-full h-full rounded-2xl sm:rounded-3xl border border-[#414141] overflow-hidden"
                >
                  <Image
                    src={slides[getPrevIndex()].image}
                    alt={slides[getPrevIndex()].title}
                    fill
                    className="object-cover"
                  />
                </motion.div>

                {/* Center Image (Current) - Same size, fully visible */}
                <motion.div
                  key={`current-${activeIndex}`}
                  initial={{ x: "103%", opacity: 0.4 }}
                  animate={{ x: "0%", opacity: 1 }}
                  exit={{ x: "-103%", opacity: 0.4 }}
                  transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                  className="absolute left-0 top-0 w-full h-full rounded-2xl sm:rounded-3xl border border-[#414141] overflow-hidden"
                >
                  {/* Image */}
                  <Image
                    src={slides[activeIndex].image}
                    alt={slides[activeIndex].title}
                    fill
                    className="object-cover"
                    priority
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-y-0 left-0 w-[70%] bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

                  {/* Content */}
                  <div className="absolute left-6 sm:left-10 md:left-12 lg:left-16 top-1/2 -translate-y-1/2 w-[280px] sm:w-[280px] md:w-[320px] lg:w-[320px] xl:w-[320px] z-10">                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                      className="text-white font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl leading-tight mb-2 sm:mb-3"
                    >
                      {slides[activeIndex].title}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.4 }}
                      className="text-white/90 text-xs sm:text-sm md:text-base lg:text-lg font-light leading-relaxed"
                    >
                      {slides[activeIndex].description}
                    </motion.p>
                  </div>
                </motion.div>

                {/* Right Image (Next) - Same size, partially visible */}
                <motion.div
                  key={`next-${getNextIndex()}`}
                  initial={{ x: "206%", opacity: 0 }}
                  animate={{ x: "103%", opacity: 1 }}
                  exit={{ x: "0%", opacity: 1 }}
                  transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                  className="absolute left-0 top-0 w-full h-full rounded-2xl sm:rounded-3xl border border-[#414141] overflow-hidden"
                >
                  <Image
                    src={slides[getNextIndex()].image}
                    alt={slides[getNextIndex()].title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Left Gradient Strip - Fade to black */}
            <div className="absolute left-0 top-0 h-full w-[10%] bg-gradient-to-r from-black to-transparent pointer-events-none z-10" />
            
            {/* Right Gradient Strip - Fade to black */}
            <div className="absolute right-0 top-0 h-full w-[10%] bg-gradient-to-l from-black to-transparent pointer-events-none z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}

