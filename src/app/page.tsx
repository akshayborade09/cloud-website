"use client";

import { useState, useEffect } from "react";
import { ShaderAnimation } from "@/components/ui/shader-lines";
import { Header, HeroContent, TrustedByLogos, FeaturesSlider, BentoGrid, Testimonials, Footer } from "@/components/sections";
import { motion } from "framer-motion";

const testimonials = [
  {
    author: {
      name: "CTO",
      handle: "Zupaloop",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    text: "Krutrim arrived at the perfect time. We needed sovereign AI infrastructure and they delivered exactly what we needed.",
  },
  {
    author: {
      name: "CTO",
      handle: "Zupaloop",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "Krutrim arrived at the perfect time. We needed sovereign AI infrastructure and they delivered exactly what we needed.",
  },
  {
    author: {
      name: "CTO",
      handle: "Zupaloop",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    text: "Krutrim arrived at the perfect time. We needed sovereign AI infrastructure and they delivered exactly what we needed.",
  },
  {
    author: {
      name: "CTO",
      handle: "Zupaloop",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    text: "Krutrim arrived at the perfect time. We needed sovereign AI infrastructure and they delivered exactly what we needed.",
  },
];

export default function Home() {
  const [scrollBlur, setScrollBlur] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 600; // Maximum scroll distance for blur effect
      const blurAmount = Math.min((scrollY / maxScroll) * 10, 10); // Max blur 10px
      setScrollBlur(blurAmount);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-black relative">
      {/* Header */}
      <Header />

      {/* Hero Section with Shader Animation - Fixed */}
      <section 
        className="sticky top-0 flex min-h-screen w-full flex-col items-center justify-center overflow-hidden pt-16 sm:pt-20 md:pt-0 z-0"
        style={{
          filter: `blur(${scrollBlur}px)`,
          transition: 'filter 0.1s ease-out'
        }}
      >
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

      {/* Scrollable Content Container - Scrolls over hero */}
      <div className="relative z-10 bg-black">
      {/* Features Slider Section */}
      <FeaturesSlider />

      {/* Bento Grid Section */}
      <BentoGrid />

      {/* Testimonials Section */}
      <Testimonials 
        title="What our customers Say"
        testimonials={testimonials}
      />

        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
}
