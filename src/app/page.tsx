"use client";

import { ShaderAnimation } from "@/components/ui/shader-lines";
import { Header, HeroContent, TrustedByLogos, FeaturesSlider } from "@/components/sections";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* Header */}
      <Header />

      {/* Hero Section with Shader Animation */}
      <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden pt-16 sm:pt-20 md:pt-0">
        {/* Shader Background */}
        <ShaderAnimation />
        
        {/* Hero Content - Centered */}
        <div className="relative z-10 flex items-center justify-center flex-1 w-full">
          <HeroContent />
        </div>
        
        {/* Trusted By Logos - Positioned at bottom */}
        <div className="absolute bottom-[8%] left-0 right-0 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <TrustedByLogos />
          </motion.div>
        </div>
      </section>

      {/* Features Slider Section */}
      <FeaturesSlider />
    </main>
  );
}
