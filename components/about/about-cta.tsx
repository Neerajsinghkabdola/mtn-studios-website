"use client"

import { useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/use-in-view"

export function AboutCTA() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.3 })

  return (
    <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={sectionRef}
          className={cn(
            "max-w-4xl mx-auto text-center transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold mb-6 text-balance">
            Ready to Build Your Brand?
          </h2>
          
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            We&apos;d love to hear about your project and explore how we can help you achieve your goals. Let&apos;s start a conversation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              asChild 
              size="lg"
              className="group bg-primary-foreground hover:bg-primary-foreground/90 text-primary px-10 py-7 rounded-full text-lg font-medium transition-all duration-300 hover:shadow-xl"
            >
              <Link href="/contact" className="flex items-center gap-3">
                Start a Project
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline"
              size="lg"
              className="px-10 py-7 rounded-full text-lg font-medium border-2 border-primary-foreground/30 bg-transparent hover:bg-primary-foreground/10 text-primary-foreground transition-all duration-300"
            >
              <Link href="/work">
                View Our Work
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
