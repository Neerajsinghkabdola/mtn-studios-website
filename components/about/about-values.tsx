"use client"

import { useRef } from "react"
import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/use-in-view"
import { Lightbulb, Users, Handshake, Target } from "lucide-react"

const values = [
  {
    icon: Lightbulb,
    title: "Creativity with Purpose",
    description: "We believe creativity should serve a purpose. Every design decision, every piece of content, every campaign is crafted with your business goals in mind.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Users,
    title: "Transparency & Collaboration",
    description: "Open communication is the foundation of great work. We keep you informed, involved, and empowered throughout the entire creative process.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Handshake,
    title: "Long-term Partnerships",
    description: "We&apos;re not interested in one-off projects. We build lasting relationships with our clients, growing alongside their businesses and celebrating their successes.",
    color: "bg-chart-3/10 text-chart-3",
  },
  {
    icon: Target,
    title: "Results-driven Mindset",
    description: "Beautiful work that doesn&apos;t perform is just decoration. We measure our success by the impact we create for your business—real metrics, real growth.",
    color: "bg-chart-4/10 text-chart-4",
  },
]

export function AboutValues() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.1 })

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div 
          ref={sectionRef}
          className={cn(
            "max-w-3xl mx-auto text-center mb-16 lg:mb-20 transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <span className="inline-block text-sm font-semibold uppercase tracking-wider text-primary mb-4">
            Our Values
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-6 text-balance">
            Principles that guide everything we do
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            These core values shape our culture, inform our decisions, and ensure we deliver exceptional work for every client.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div 
                key={value.title}
                className={cn(
                  "group relative bg-card rounded-2xl border border-border/50 p-8 lg:p-10 transition-all duration-500 hover-lift",
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                {/* Icon */}
                <div className={cn(
                  "w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110",
                  value.color
                )}>
                  <Icon className="w-7 h-7" />
                </div>

                {/* Content */}
                <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
