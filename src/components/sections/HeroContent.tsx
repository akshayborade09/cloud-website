"use client";

import { motion } from "framer-motion";

export default function HeroContent() {
  return (
    <div className="flex flex-col items-center gap-8 sm:gap-8 md:gap-10 px-4 sm:px-6 max-w-[1280px] mx-auto pt-5">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col items-center w-full"
      >
        <h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white text-center leading-[1.4] mb-2"
          style={{ fontFamily: "'Open Sauce One', sans-serif" }}
        >
          India's AI-First Cloud. Built to Scale.
        </h1>
        <h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center leading-[1.4]"
          style={{ 
            fontFamily: "'Open Sauce One', sans-serif",
            color: '#21cd6f'
          }}
        >
          Trusted at National Scale.
        </h1>
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[23px] text-[#f3f4f5] text-center leading-[1.45] tracking-[0.01em] max-w-4xl px-4"
        style={{ fontFamily: "'Open Sauce One', sans-serif" }}
      >
        Krutrim Cloud powers the entire AI lifecycle, from training and fine-tuning to deployment and scale—on sovereign infrastructure designed for India.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto px-4 sm:px-0"
      >
        {/* Get Started Button */}
        <button
          className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-gradient-to-b from-[#06120b] via-[#0a562d] to-[#21cd6f] border border-[#1f1f1f] text-base sm:text-lg text-white/86 font-bold hover:opacity-90 transition-opacity"
          style={{ fontFamily: "'Open Sauce One', sans-serif" }}
        >
          Get Started
        </button>

        {/* Contact Sales Button */}
        <button
          className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-black border border-[#353535] text-base sm:text-lg text-white/86 font-bold hover:border-[#454545] transition-colors"
          style={{ fontFamily: "'Open Sauce One', sans-serif" }}
        >
          Contact Sales
        </button>
      </motion.div>
    </div>
  );
}

