"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"
import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card"

interface TestimonialsSectionProps {
  title: string
  description?: string
  testimonials: Array<{
    author: TestimonialAuthor
    text: string
    href?: string
  }>
  className?: string
}

export default function TestimonialsSection({ 
  title,
  description,
  testimonials,
  className 
}: TestimonialsSectionProps) {
  const scrollerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scroller = scrollerRef.current
    if (!scroller) return

    // Duplicate content multiple times for seamless loop
    const scrollerContent = Array.from(scroller.children)
    
    // Clone 3 times to ensure continuous loop
    for (let i = 0; i < 3; i++) {
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true) as HTMLElement
        scroller.appendChild(duplicatedItem)
      })
    }
  }, [testimonials])

  return (
    <section 
      className={cn(
        "bg-black text-white",
        "py-20 sm:py-24 md:py-32 lg:py-40",
        className
      )}
      style={{ fontFamily: "'Open Sauce One', sans-serif" }}
    >
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-8 sm:gap-12 lg:gap-16">
        <div className="flex flex-col items-center gap-3 sm:gap-4 px-4 sm:px-6 lg:px-6">
          <h2 className="max-w-[720px] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center leading-tight">
            {title}
          </h2>
          {description && (
            <p className="text-base sm:text-lg max-w-[600px] text-zinc-400 text-center">
              {description}
            </p>
          )}
        </div>
        
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <div className="group flex w-full overflow-hidden p-2">
            <div 
              ref={scrollerRef}
              className="flex gap-6 animate-infinite-scroll-continuous group-hover:[animation-play-state:paused]"
            >
              {testimonials.map((testimonial, i) => (
                <TestimonialCard 
                  key={`original-${i}`}
                  {...testimonial}
                />
              ))}
            </div>
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/12 sm:w-1/6 bg-gradient-to-r from-black" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/12 sm:w-1/6 bg-gradient-to-l from-black" />
        </div>
      </div>
    </section>
  )
}
