"use client"

import { useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/use-in-view"

export function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.3 })

  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          ref={sectionRef}
          className={cn(
            "max-w-4xl mx-auto text-center transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-border" />
            <div className="w-2 h-2 rounded-full bg-primary" />
            <div className="w-12 h-px bg-border" />
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground mb-6 text-balance">
            Let&apos;s Build Something <br className="hidden sm:block" />
            <span className="text-gradient">That Performs</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Cinematic design. Real outcomes. Ready to create work that moves your audience and drives results?
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              asChild 
              size="lg"
              className="group bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-7 rounded-full text-lg font-medium transition-all duration-300 hover:shadow-xl hover:shadow-primary/20"
            >
              <Link href="/contact" className="flex items-center gap-3">
                Start a Project
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
            <span className="text-muted-foreground">or</span>
            <Button 
              asChild 
              variant="link"
              size="lg"
              className="text-lg font-medium text-foreground hover:text-primary transition-colors duration-300"
            >
              <Link href="/work">
                View our portfolio first
              </Link>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className={cn(
            "mt-16 pt-12 border-t border-border transition-all duration-700 delay-300",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <div className="flex flex-wrap items-center justify-center gap-8 text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-sm">Available for new projects</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-sm">Typically respond within 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm">Free project consultation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
