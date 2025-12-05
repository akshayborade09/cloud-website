"use client";

import { motion } from "framer-motion";
import Card from "@/components/ui/Card";

const features = [
  {
    title: "Lightning Fast",
    description: "Built with Next.js 16 and React 19 for optimal performance.",
    icon: "⚡",
  },
  {
    title: "Modern Design",
    description: "Beautiful UI with Tailwind CSS 4 and smooth animations.",
    icon: "🎨",
  },
  {
    title: "TypeScript",
    description: "Fully typed for better developer experience and fewer bugs.",
    icon: "📝",
  },
  {
    title: "Interactive",
    description: "Engaging animations with Framer Motion for delightful UX.",
    icon: "✨",
  },
  {
    title: "Responsive",
    description: "Perfect on all devices from mobile to desktop.",
    icon: "📱",
  },
  {
    title: "Dark Mode",
    description: "Automatic dark mode support for comfortable viewing.",
    icon: "🌙",
  },
];

export default function Features() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
            Features
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Everything you need to build modern, interactive websites.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-zinc-900 dark:text-zinc-100">
                  {feature.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}










