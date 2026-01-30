"use client"

import { useRef } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/use-in-view"

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "40+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "10+", label: "Team Members" },
]

export function AboutStory() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.1 })

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div 
            ref={sectionRef}
            className={cn(
              "relative transition-all duration-700",
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            )}
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=1000&fit=crop"
                alt="MTN Studios team collaborating"
                fill
                className="object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -right-8 bg-card rounded-2xl shadow-2xl p-6 border border-border/50 max-w-xs hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                {stats.slice(0, 2).map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="font-serif text-3xl font-bold text-primary">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className={cn(
            "transition-all duration-700 delay-200",
            isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          )}>
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-primary mb-4">
              Our Story
            </span>
            
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-6 text-balance">
              We combine cinematic storytelling with strategic thinking
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                MTN Studios was founded with a simple belief: great creative work should drive real business results. We&apos;ve built our studio around this principle, assembling a team of strategists, designers, filmmakers, and developers who share this vision.
              </p>
              <p>
                We combine cinematic storytelling, strategic thinking, and performance-driven execution to deliver work that doesn&apos;t just look good — it performs. Every project we take on is an opportunity to create something meaningful that moves audiences and drives measurable outcomes.
              </p>
              <p>
                Our approach is collaborative and transparent. We believe the best work comes from true partnership with our clients, where ideas flow freely and goals are shared. This philosophy has helped us build lasting relationships with brands across industries.
              </p>
            </div>

            {/* Mobile Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:hidden">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-4 bg-secondary/50 rounded-xl">
                  <div className="font-serif text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
