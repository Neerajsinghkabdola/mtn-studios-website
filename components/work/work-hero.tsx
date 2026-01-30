"use client"

import { useRef } from "react"
import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/use-in-view"

export function WorkHero() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.3 })

  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-background overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          ref={sectionRef}
          className="max-w-4xl"
        >
          <span className={cn(
            "inline-block text-sm font-semibold uppercase tracking-wider text-primary mb-6 transition-all duration-500",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Our Work
          </span>
          
          <h1 className={cn(
            "font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6 transition-all duration-500 delay-100",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Featured Projects
          </h1>
          
          <p className={cn(
            "text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed transition-all duration-500 delay-200",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            A curated selection of projects across branding, content, and digital experiences. Each project represents our commitment to excellence and measurable results.
          </p>
        </div>
      </div>
    </section>
  )
}
