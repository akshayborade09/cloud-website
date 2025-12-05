"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    title: "Rapid Experimentation",
    description: "Spin up GPU instances in seconds for model prototyping and testing",
    image: "/ai-cloud/rapid-experimentation.png",
  },
  {
    title: "Distributed Training",
    description: "Scale training across multiple VMs with optimized networking",
    image: "/ai-cloud/distributed-training.png",
  },
  {
    title: "Model Serving",
    description: "Deploy production level inference endpoints with load balancing",
    image: "/ai-cloud/model-serving.png",
  },
  {
    title: "Shared GPU Environments",
    description: "Cost-effective development with isolated environments",
    image: "/ai-cloud/shared-gpu.png",
  },
];

export default function GPUVirtualMachines() {
  return (
    <section
      className="bg-[#030405] py-16 sm:py-20 md:py-24 lg:py-[127px]"
      style={{ fontFamily: "'Open Sauce One', sans-serif" }}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-6">
        <div className="flex flex-col gap-12 sm:gap-16 md:gap-20 items-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-3 text-center max-w-[902px]"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-medium text-white/86 leading-[1.35]">
              GPU Virtual Machines
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-[23px] text-neutral-200 leading-[1.45] tracking-[0.23px]">
              Flexible GPU compute for development and production workloads
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 w-full max-w-[902px]">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`
                  flex flex-col gap-5 sm:gap-6 items-center p-5 sm:p-6 md:p-[30px]
                  ${index === 0 ? 'sm:border-b sm:border-r border-[#252f29] sm:rounded-br-[20px]' : ''}
                  ${index === 3 ? 'sm:rounded-tl-[20px] sm:border-t sm:border-l border-[#252f29]' : ''}
                `}
              >
                {/* Image */}
                <div className="relative w-full max-w-[327px] h-[140px] sm:h-[161px] overflow-hidden rounded-lg">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/20" />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2 sm:gap-3 w-full text-left">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white leading-[1.5]">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-white leading-[1.5]">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

