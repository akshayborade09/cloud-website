"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AICloudHero() {
  return (
    <section
      className="relative w-full bg-[#020103] overflow-hidden pt-32 sm:pt-28 md:pt-32 lg:pt-96 pb-16 sm:pb-20 md:pb-24 lg:pb-96"
      style={{ fontFamily: "'Open Sauce One', sans-serif" }}
    >
      {/* Hero Image - Right Side (hidden on mobile, visible on tablet+) */}
      <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[55%] lg:w-[50%] h-[80%]">
        <div className="relative w-full h-full">
          <Image
            src="/ai-cloud/hero-ai-cloud.png"
            alt="AI Cloud Infrastructure"
            fill
            className="object-contain object-right"
            priority
          />
        </div>
      </div>

      {/* Mobile Hero Image */}
      <div className="md:hidden relative w-full h-[250px] sm:h-[300px] mb-8">
        <Image
          src="/ai-cloud/hero-ai-cloud.png"
          alt="AI Cloud Infrastructure"
          fill
          className="object-contain object-center"
          priority
        />
      </div>

      {/* Gradient Overlays for depth effect */}
      <div className="hidden md:block absolute left-0 top-[10%] w-[70%] h-[60%] bg-gradient-to-r from-black via-black/90 to-transparent blur-[100px]" />
      <div className="hidden md:block absolute left-[40%] top-[20%] w-[50%] h-[15%] bg-gradient-to-r from-black via-black/80 to-transparent blur-[50px]" />
      <div className="hidden md:block absolute left-[50%] bottom-[15%] w-[50%] h-[15%] bg-gradient-to-r from-black via-black/80 to-transparent blur-[50px]" />
      <div className="hidden md:block absolute left-0 bottom-[10%] w-[70%] h-[60%] bg-gradient-to-r from-black via-black/90 to-transparent blur-[100px]" />

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-6">
        <div className="max-w-full md:max-w-[60%] lg:max-w-[55%]">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-semibold text-white/86 leading-[1.4] mb-4 sm:mb-6 text-center md:text-left"
          >
            Accelerated Compute for AI Workloads of Any Scale
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-sm sm:text-base md:text-lg lg:text-[23px] text-neutral-200 leading-[1.45] tracking-[0.23px] mb-8 sm:mb-10 md:mb-12 text-center md:text-left"
          >
            Run training, simulation, embeddings, and inference with performance, flexibility and predictable cost
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center md:items-start gap-4 sm:gap-6"
          >
            {/* Get Started Button */}
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 md:py-5 rounded-xl sm:rounded-2xl bg-gradient-to-b from-[#21CD6F] to-[#13452A] text-base sm:text-lg text-white font-medium hover:opacity-90 transition-opacity">
              Get Started
            </button>

            {/* Contact Sales Button */}
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 md:py-5 rounded-xl sm:rounded-2xl bg-black border-[1.5px] border-white/20 text-base sm:text-lg text-white font-medium hover:border-white/40 transition-colors">
              Contact Sales
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
