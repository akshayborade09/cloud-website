"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface CardProps extends Omit<HTMLMotionProps<"div">, "ref"> {
  hover?: boolean;
}

export default function Card({
  className,
  hover = true,
  children,
  ...props
}: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -8, scale: 1.02 } : {}}
      transition={{ duration: 0.3 }}
      className={cn(
        "rounded-2xl bg-white p-6 shadow-lg dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}

