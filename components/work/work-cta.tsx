"use client"

import { useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/use-in-view"

export function WorkCTA() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.3 })

  return (
    <section className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={sectionRef}
          className={cn(
            "max-w-4xl mx-auto text-center transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <span className="inline-block text-sm font-semibold uppercase tracking-wider text-primary mb-4">
            Your Project Could Be Next
          </span>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-6 text-balance">
            Ready to create something extraordinary?
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Every project in our portfolio started with a conversation. Let&apos;s discuss your vision and explore how we can bring it to life.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              asChild 
              size="lg"
              className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 rounded-full text-base font-medium transition-all duration-300 hover:shadow-xl hover:shadow-primary/20"
            >
              <Link href="/contact" className="flex items-center gap-2">
                Start Your Project
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline"
              size="lg"
              className="px-8 py-6 rounded-full text-base font-medium border-2 hover:bg-secondary transition-all duration-300 bg-transparent"
            >
              <Link href="/services">
                Explore Our Services
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
