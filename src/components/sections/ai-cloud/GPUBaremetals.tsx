"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  "Enterprise-Grade NVIDIA H100 and A100 GPUs with NVLink",
  "Optimized for LLM training, multi-modal models, and batch inference",
  "Direct bare-metal access with no virtualisation overhead",
  "High-bandwidth storage integration for dataset streaming",
];

const gpuCards = [
  {
    name: "NVIDIA A100",
    specs: [
      { label: "GPU Memory", value: "80GB HBM2e" },
      { label: "GPUs per Node", value: "8x" },
      { label: "Interconnect", value: "NVLink 600GB/s" },
      { label: "CPU Cores", value: "128 cores" },
    ],
    model: "A100 80GB x 8 Baremetal",
    price: "₹105",
  },
  {
    name: "NVIDIA H100",
    specs: [
      { label: "GPU Memory", value: "80GB HBM3" },
      { label: "GPUs per Node", value: "8x" },
      { label: "Interconnect", value: "NVLink 900GB/s" },
      { label: "CPU Cores", value: "112 cores" },
    ],
    model: "H100 80GB x 8 Baremetal",
    price: "₹165",
  },
];

export default function GPUBaremetals() {
  return (
    <section
      className="bg-[#131313] py-16 sm:py-20 md:py-24 lg:py-20"
      style={{ fontFamily: "'Open Sauce One', sans-serif" }}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-6">
        <div className="flex flex-col gap-16 sm:gap-20 md:gap-24 lg:gap-[120px]">
          {/* Header Section */}
          <div className="flex flex-col gap-8 sm:gap-10 md:gap-[44px] items-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2"
            >
              <Image
                src="/ai-cloud/title-design.svg"
                alt=""
                width={58}
                height={13}
                className="w-[40px] sm:w-[58px] h-[10px] sm:h-[13px] hidden sm:block"
              />
              <div className="bg-[#1d1d1d] px-3 sm:px-4 py-2 sm:py-3 rounded-full">
                <p className="text-[#dedede] text-xs sm:text-sm text-center whitespace-nowrap">
                  Enterprise-Grade Infrastructure
                </p>
              </div>
              <Image
                src="/ai-cloud/title-design.svg"
                alt=""
                width={58}
                height={13}
                className="w-[40px] sm:w-[58px] h-[10px] sm:h-[13px] rotate-180 hidden sm:block"
              />
            </motion.div>

            {/* Title & Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col gap-3 text-center"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-medium text-white/86 leading-[1.35]">
                GPU Baremetals
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-[23px] text-neutral-200 leading-[1.45] tracking-[0.23px]">
                Dedicated GPU servers for maximum performance
              </p>
            </motion.div>
          </div>

          {/* Image + Features Section */}
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-12 items-center">
            {/* GPU Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-[48%] h-[200px] sm:h-[250px] md:h-[286px] relative"
            >
              <Image
                src="/ai-cloud/gpu-barmetals.png"
                alt="GPU Baremetals"
                fill
                className="object-contain object-center lg:object-left"
              />
            </motion.div>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full lg:w-[52%] flex flex-col gap-5 sm:gap-6"
            >
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 items-center">
                  {/* Green Check Icon */}
                  <div className="bg-[#1d1d1d] p-3 rounded flex-shrink-0 flex items-center justify-center w-[44px] h-[44px]">
                    <Image
                      src="/ai-cloud/green-check.svg"
                      alt="Check"
                      width={20}
                      height={20}
                    />
                  </div>
                  <p className="text-base sm:text-lg text-white/86 leading-[1.5] font-medium">
                    {feature}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* GPU Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {gpuCards.map((card, index) => (
              <motion.div
                key={card.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#161616] border border-[#252f29] rounded-2xl sm:rounded-[20px] p-5 sm:p-6 flex flex-col justify-between min-h-[380px] sm:min-h-[421px]"
              >
                {/* Card Header */}
                <p className="text-white text-sm leading-[1.5]">{card.name}</p>

                {/* Specs List */}
                <div className="flex flex-col gap-4">
                  {card.specs.map((spec, specIndex) => (
                    <div key={spec.label}>
                      <div className="flex items-center justify-between">
                        <p className="text-neutral-300 text-sm sm:text-base leading-[1.5]">
                          {spec.label}
                        </p>
                        <p className="text-white text-base sm:text-lg font-medium leading-[1.5]">
                          {spec.value}
                        </p>
                      </div>
                      {specIndex < card.specs.length - 1 && (
                        <div className="h-px bg-[#252f29] mt-4" />
                      )}
                    </div>
                  ))}
                </div>

                {/* Card Footer */}
                <div className="flex items-center justify-between">
                  <p className="text-white text-sm sm:text-base leading-[1.5]">
                    {card.model}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-neutral-300 text-sm leading-[1.5]">
                      Starts at
                    </span>
                    <span className="text-[#10a554] text-2xl sm:text-[30px] font-bold leading-[1.5]">
                      {card.price}
                    </span>
                    <span className="text-neutral-300 text-sm leading-[1.5]">
                      /hr
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

