"use client"

import { useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageSquare } from "lucide-react"
import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/use-in-view"

export function ServicesCTA() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.3 })

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={sectionRef}
          className={cn(
            "max-w-4xl mx-auto transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div className="relative bg-secondary/50 rounded-3xl p-8 lg:p-16 border border-border/50 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.02)_25%,rgba(0,0,0,0.02)_50%,transparent_50%,transparent_75%,rgba(0,0,0,0.02)_75%)] bg-[length:20px_20px]" />
            
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-8">
                <MessageSquare className="w-8 h-8 text-primary" />
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-6 text-balance">
                Not sure which service you need?
              </h2>
              
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
                Let&apos;s talk about your goals and we&apos;ll recommend the perfect combination of services to achieve them. No obligation, just a friendly conversation.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  asChild 
                  size="lg"
                  className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 rounded-full text-base font-medium transition-all duration-300 hover:shadow-xl hover:shadow-primary/20"
                >
                  <Link href="/contact" className="flex items-center gap-2">
                    Schedule a Free Consultation
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline"
                  size="lg"
                  className="px-8 py-6 rounded-full text-base font-medium border-2 hover:bg-secondary transition-all duration-300 bg-transparent"
                >
                  <Link href="/work">
                    View Our Work First
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
