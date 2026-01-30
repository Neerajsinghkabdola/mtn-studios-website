"use client"

import { useRef } from "react"
import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/use-in-view"

export function AboutHero() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.3 })

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-background overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_40%,transparent_100%)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          ref={sectionRef}
          className="max-w-4xl mx-auto text-center"
        >
          <span className={cn(
            "inline-block text-sm font-semibold uppercase tracking-wider text-primary mb-6 transition-all duration-500",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            About Us
          </span>
          
          <h1 className={cn(
            "font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground leading-tight mb-6 transition-all duration-500 delay-100 text-balance",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Built for Brands <br className="hidden sm:block" />
            <span className="text-gradient">That Want to Grow</span>
          </h1>
          
          <p className={cn(
            "text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed transition-all duration-500 delay-200",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            MTN Studios is a creative and digital studio focused on helping brands stand out in a crowded digital world.
          </p>
        </div>
      </div>
    </section>
  )
}
