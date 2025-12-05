"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const storageFeatures = [
  {
    icon: "/ai-cloud/datasets.svg",
    title: "Datasets",
    description: "High-throughput parallel access for training data with automatic caching and prefetching.",
  },
  {
    icon: "/ai-cloud/embeddings.svg",
    title: "Embeddings & RAG",
    description: "Low-latency vector storage optimized for retrieval-augmented generation workflows.",
  },
  {
    icon: "/ai-cloud/model-checkpoints.svg",
    title: "Model Checkpoints",
    description: "Versioned storage for model weights with instant rollback and snapshot capabilities.",
  },
  {
    icon: "/ai-cloud/vector-corpora.svg",
    title: "Vector Corpora",
    description: "Scalable storage for large-scale embeddings with built-in similarity search support.",
  },
];

const performanceSpecs = [
  { value: "100GB/s+", label: "Sequential read throughput" },
  { value: "<5ms", label: "Median latency" },
  { value: "Unlimited", label: "Concurrent connections" },
];

export default function ObjectStorage() {
  return (
    <section
      className="relative bg-[#030405] py-16 sm:py-20 md:py-24 lg:py-[100px] overflow-hidden"
      style={{ fontFamily: "'Open Sauce One', sans-serif" }}
    >
      {/* Background Image - Top Right */}
      <div className="absolute top-0 right-0 w-[300px] sm:w-[400px] lg:w-[473px] h-[300px] sm:h-[350px] lg:h-[408px] overflow-hidden opacity-50 hidden md:block">
        <Image
          src="/ai-cloud/object-storage.png"
          alt=""
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-6">
        <div className="flex flex-col gap-12 sm:gap-16 md:gap-20">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6 sm:gap-8"
          >
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-medium text-white/86 leading-[1.35]">
                High-Speed Object Storage
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-[23px] text-[#f3f4f5] leading-[1.45] tracking-[0.23px] max-w-3xl">
                Purpose-built storage with parallel, I/O optimized for GPU workloads
              </p>
            </div>

            {/* Feature Badge */}
            <div className="inline-flex items-center gap-3 bg-[#0a2715] px-4 py-3 sm:py-4 rounded-full w-fit">
              <div className="w-3 h-3 rounded-full bg-[#10a554]" />
              <span className="text-sm sm:text-base md:text-xl font-medium text-white/86">
                Parallel, low-latency I/O optimized for GPU workloads
              </span>
            </div>
          </motion.div>

          {/* Feature Cards Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6"
          >
            {storageFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-gradient-to-b from-[#0f0f0f] to-[#030405] border-[1.5px] border-[#1e1e1e] rounded-[20px] p-5 sm:p-6 flex flex-col gap-5 sm:gap-6"
              >
                {/* Icon */}
                <div className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px]">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={50}
                    height={50}
                    className="w-full h-full"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2 sm:gap-3">
                  <h3 className="text-base sm:text-lg font-bold text-white leading-[1.5]">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-white leading-[1.5]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Performance Specifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-8 sm:gap-10"
          >
            <h4 className="text-base sm:text-lg md:text-xl font-medium text-neutral-400 leading-[1.5] uppercase tracking-wide">
              Performance Specifications
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 lg:gap-10">
              {performanceSpecs.map((spec, index) => (
                <div key={spec.label} className="flex items-start gap-4 sm:gap-6">
                  {/* Vertical Line */}
                  <div className="w-[3px] h-[80px] sm:h-[100px] bg-gradient-to-b from-[#10a554] to-transparent rounded-full flex-shrink-0" />
                  
                  {/* Content */}
                  <div className="flex flex-col gap-1 sm:gap-2">
                    <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white/86 leading-[1.5]">
                      {spec.value}
                    </span>
                    <span className="text-sm sm:text-base md:text-lg text-neutral-200 leading-[1.5]">
                      {spec.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

