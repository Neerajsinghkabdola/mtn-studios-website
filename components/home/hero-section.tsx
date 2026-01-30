"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return
      const { clientX, clientY } = e
      const { left, top, width, height } = heroRef.current.getBoundingClientRect()
      const x = (clientX - left) / width - 0.5
      const y = (clientY - top) / height - 0.5
      
      heroRef.current.style.setProperty('--mouse-x', `${x * 20}px`)
      heroRef.current.style.setProperty('--mouse-y', `${y * 20}px`)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl transition-transform duration-1000"
          style={{ transform: 'translate(var(--mouse-x, 0), var(--mouse-y, 0))' }}
        />
        <div 
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl transition-transform duration-1000"
          style={{ transform: 'translate(calc(var(--mouse-x, 0) * -1), calc(var(--mouse-y, 0) * -1))' }}
        />
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_40%,transparent_100%)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 border border-border/50 mb-8 opacity-0 animate-fade-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm font-medium text-muted-foreground">
              Now accepting new projects for 2026
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-[1.1] tracking-tight mb-6 opacity-0 animate-fade-up animation-delay-100">
            <span className="block">Designing Brands.</span>
            <span className="block text-gradient">Crafting Stories.</span>
            <span className="block">Driving Growth.</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-up animation-delay-200 text-balance">
            We help brands scale through cinematic content, strategic design, and high-performance digital experiences.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up animation-delay-300">
            <Button 
              asChild 
              size="lg"
              className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 rounded-full text-base font-medium transition-all duration-300 hover:shadow-xl hover:shadow-primary/20"
            >
              <Link href="/contact" className="flex items-center gap-2">
                Start a Project
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline"
              size="lg"
              className="group px-8 py-6 rounded-full text-base font-medium border-2 hover:bg-secondary/50 transition-all duration-300 bg-transparent"
            >
              <Link href="/work" className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-foreground/5 flex items-center justify-center group-hover:bg-foreground/10 transition-colors duration-300">
                  <Play className="w-3 h-3 fill-current" />
                </div>
                View Our Work
              </Link>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animation-delay-600">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-muted-foreground">Scroll</span>
            <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
              <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
