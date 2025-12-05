"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const gpuAllocations = [
  { label: "1/8x", price: 24, gpuMemory: "10GB", vCPUs: 2, ram: "16GB" },
  { label: "1/4x", price: 48, gpuMemory: "20GB", vCPUs: 4, ram: "32GB" },
  { label: "1/2x", price: 96, gpuMemory: "40GB", vCPUs: 8, ram: "64GB" },
  { label: "1x", price: 192, gpuMemory: "80GB", vCPUs: 16, ram: "128GB" },
  { label: "2x", price: 384, gpuMemory: "160GB", vCPUs: 32, ram: "256GB" },
  { label: "4x", price: 768, gpuMemory: "320GB", vCPUs: 64, ram: "512GB" },
  { label: "8x", price: 1536, gpuMemory: "640GB", vCPUs: 128, ram: "1TB" },
];

const includedFeatures = [
  "Jupyter notebook with PyTorch and TensorFlow pre-installed",
  "Auto-scale from idle to peak capacity in seconds",
  "Persistent storage with automatic snapshot backups",
  "Direct integration with object storage for datasets",
];

export default function AIPods() {
  const [selectedIndex, setSelectedIndex] = useState(2); // Default to 1/2x
  const currentAllocation = gpuAllocations[selectedIndex];

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedIndex(parseInt(e.target.value));
  };

  return (
    <section
      className="bg-[#131313] py-16 sm:py-20 md:py-24 lg:py-[127px]"
      style={{ fontFamily: "'Open Sauce One', sans-serif" }}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-6">
        <div className="flex flex-col gap-12 sm:gap-16 md:gap-20">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-3 text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-medium text-white/86 leading-[1.35]">
              AI Pods (Fractional GPUs)
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-[23px] text-neutral-200 leading-[1.45] tracking-[0.23px]">
              Cost-effective GPU access from 1/8x to 8x capacity
            </p>
          </motion.div>

          {/* Configurator Section */}
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 lg:items-stretch">
            {/* Left - Configure Panel */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-1 bg-[#161515] border-[1.5px] border-[#232323] rounded-[20px] p-5 sm:p-6 flex flex-col justify-center"
            >
              <div className="flex flex-col gap-10 sm:gap-[60px]">
                {/* Title */}
                <div className="flex flex-col gap-2 sm:gap-3">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-white leading-[1.5]">
                    Configure your AI Pod
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-300 leading-[1.5]">
                    GPU Allocation
                  </p>
                </div>

                {/* Slider Section */}
                <div className="flex flex-col gap-6 sm:gap-8">
                  {/* Dots Row - using flexbox for perfect alignment */}
                  <div className="relative">
                    {/* Track behind dots */}
                    <div className="absolute top-1/2 -translate-y-1/2 left-2 right-2 h-1 bg-neutral-700 rounded-full" />
                    
                    {/* Filled Track */}
                    <div 
                      className="absolute top-1/2 -translate-y-1/2 left-2 h-1 bg-gradient-to-r from-[#063f20] to-[#10a554] rounded-full transition-all duration-300"
                      style={{ 
                        width: `calc(${(selectedIndex / (gpuAllocations.length - 1)) * 100}% * (100% - 16px) / 100% + 8px - 8px * ${selectedIndex / (gpuAllocations.length - 1)})`
                      }}
                    />
                    
                    {/* Dots Container - flex row */}
                    <div className="relative flex items-center justify-between py-4">
                      {gpuAllocations.map((_, index) => (
                        <div
                          key={index}
                          className="relative flex items-center justify-center z-[2]"
                          onClick={() => setSelectedIndex(index)}
                        >
                          {index === selectedIndex ? (
                            // Handle at selected position
                            <Image
                              src="/ai-cloud/configure-handle.svg"
                              alt="Handle"
                              width={40}
                              height={40}
                              className="w-10 h-10 cursor-pointer"
                            />
                          ) : (
                            // Dot at non-selected positions
                            <Image
                              src={index < selectedIndex ? "/ai-cloud/filled-progress.svg" : "/ai-cloud/empty-progress.svg"}
                              alt=""
                              width={16}
                              height={16}
                              className="w-4 h-4 cursor-pointer"
                            />
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Hidden Range Input for Accessibility */}
                    <input
                      type="range"
                      min={0}
                      max={gpuAllocations.length - 1}
                      value={selectedIndex}
                      onChange={handleSliderChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-[20]"
                    />
                  </div>

                  {/* Labels - using same flex layout */}
                  <div className="flex justify-between text-xs sm:text-sm md:text-base font-medium text-neutral-300 tracking-[-0.32px]">
                    {gpuAllocations.map((alloc, index) => (
                      <span
                        key={alloc.label}
                        className={`transition-colors text-center w-10 ${index === selectedIndex ? 'text-white' : ''}`}
                      >
                        {alloc.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right - Specs Panel */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1 flex flex-col"
            >
              {/* Price Header */}
              <div className="bg-[#141414] border border-[#2f2f2f] border-b-0 rounded-t-[20px] px-5 pt-4 pb-6 flex items-center justify-between">
                <p className="text-sm sm:text-base text-white leading-[1.5]">
                  {currentAllocation.label} GPU Pod
                </p>
                <div className="flex items-baseline">
                  <span className="text-xl sm:text-2xl md:text-[30px] font-bold text-[#10a554] leading-[1.5]">
                    ₹{currentAllocation.price}
                  </span>
                  <span className="text-xs sm:text-sm text-neutral-300">/hour</span>
                </div>
              </div>

              {/* Specs Card */}
              <div className="bg-[#161515] border-[1.5px] border-[#232323] rounded-[20px] p-5 sm:p-6 -mt-4 flex-1 flex flex-col justify-center">
                <div className="flex flex-col gap-4 sm:gap-5">
                  {/* GPU Memory */}
                  <div className="flex items-center justify-between text-sm sm:text-base">
                    <span className="text-neutral-300 leading-[1.5]">GPU Memory</span>
                    <span className="text-white font-medium leading-[1.5]">{currentAllocation.gpuMemory}</span>
                  </div>
                  <div className="h-px bg-[#2f2f2f]" />

                  {/* vCPUs */}
                  <div className="flex items-center justify-between text-sm sm:text-base">
                    <span className="text-neutral-300 leading-[1.5]">vCPUs</span>
                    <span className="text-white font-medium leading-[1.5]">{currentAllocation.vCPUs}</span>
                  </div>
                  <div className="h-px bg-[#2f2f2f]" />

                  {/* RAM */}
                  <div className="flex items-center justify-between text-sm sm:text-base">
                    <span className="text-neutral-300 leading-[1.5]">RAM</span>
                    <span className="text-white font-medium leading-[1.5]">{currentAllocation.ram}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Included Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-8 sm:gap-10 md:gap-[44px]"
          >
            <h4 className="text-base sm:text-lg md:text-xl font-medium text-neutral-400 leading-[1.5]">
              Included features
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {includedFeatures.map((feature, index) => (
                <div key={index} className="flex gap-3 sm:gap-4 items-center">
                  {/* Check Icon */}
                  <div className="bg-[#1d1d1d] p-3 rounded flex-shrink-0 flex items-center justify-center w-[40px] h-[40px] sm:w-[44px] sm:h-[44px]">
                    <Image
                      src="/ai-cloud/green-check.svg"
                      alt="Check"
                      width={20}
                      height={20}
                      className="w-4 h-4 sm:w-5 sm:h-5"
                    />
                  </div>
                  <p className="text-sm sm:text-base font-medium text-white/86 leading-[1.5]">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

