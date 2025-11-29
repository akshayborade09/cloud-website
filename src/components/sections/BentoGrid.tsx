"use client";

import Image from "next/image";

const bentoCards = [
  {
    id: 1,
    title: "AI-First Infrastructure",
    description:
      "Purpose-built infrastructure for training, fine-tuning, and deploying AI models at scale with GPU Baremetals and AI Pods.",
    icon: "/home-bento/ai-first-infrastructure.svg",
    size: "large",
  },
  {
    id: 2,
    title: "Sovereign & Compliant",
    description:
      "Data stays in India. ISO 27001/17/18, ISO 20000, SOC 1 & II certified for enterprise peace of mind.",
    icon: "/home-bento/sovereign-compliant.svg",
    size: "large",
  },
  {
    id: 3,
    title: "End-to-End AI Stack",
    description:
      "Purpose-built infrastructure for training, fine-tuning, and deploying AI models at scale with GPU Baremetals and AI Pods.",
    icon: "/home-bento/end-to-end-ai.svg",
    size: "medium",
  },
  {
    id: 4,
    title: "Proven at Scale",
    description:
      "Purpose-built infrastructure for training, fine-tuning, and deploying AI models at scale with GPU Baremetals and AI Pods.",
    icon: "/home-bento/proven-scale.svg",
    size: "medium",
  },
  {
    id: 5,
    title: "India-Native by Design",
    description:
      "Purpose-built infrastructure for training, fine-tuning, and deploying AI models at scale with GPU Baremetals and AI Pods.",
    icon: "/home-bento/Frame 1296741730.svg",
    size: "medium",
  },
];

export default function BentoGrid() {
  return (
    <section
      className="bg-black py-20 sm:py-24 md:py-32 lg:py-40"
      style={{ fontFamily: "'Open Sauce One', sans-serif" }}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-6">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <p className="text-[#10a554] text-sm sm:text-base font-medium mb-3 sm:mb-4">
            Our Unique Edge
          </p>
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            What makes Krutrim Cloud the right choice for
            <br className="hidden sm:block" /> Indian enterprises
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Top Row - 2 Large Cards */}
          {bentoCards.slice(0, 2).map((card) => (
            <div
              key={card.id}
              className="group relative bg-zinc-900/50 border border-zinc-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-zinc-700 transition-all duration-300 overflow-hidden"
            >
              {/* Icon */}
              <div className="mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 relative">
                  <Image
                    src={card.icon}
                    alt={card.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-white text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4">
                {card.title}
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                {card.description}
              </p>

              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#10a554]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl sm:rounded-3xl" />
            </div>
          ))}

          {/* Bottom Row - 3 Medium Cards */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {bentoCards.slice(2).map((card) => (
              <div
                key={card.id}
                className="group relative bg-zinc-900/50 border border-zinc-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-zinc-700 transition-all duration-300 overflow-hidden"
              >
                {/* Icon */}
                <div className="mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 relative">
                    <Image
                      src={card.icon}
                      alt={card.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-white text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4">
                  {card.title}
                </h3>
                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                  {card.description}
                </p>

                {/* Subtle gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#10a554]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl sm:rounded-3xl" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

