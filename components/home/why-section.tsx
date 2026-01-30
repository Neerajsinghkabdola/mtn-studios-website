"use client"

import { useRef } from "react"
import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/use-in-view"
import { Target, Users, Lightbulb, TrendingUp, Check } from "lucide-react"

const features = [
  {
    icon: Target,
    title: "Strategy-first creative execution",
    description: "Every project starts with understanding your goals and crafting a strategic approach.",
  },
  {
    icon: Users,
    title: "In-house design, content & development",
    description: "Our integrated team ensures seamless collaboration and consistent quality.",
  },
  {
    icon: Lightbulb,
    title: "Business-driven creative decisions",
    description: "We make creative choices that serve your business objectives, not just aesthetics.",
  },
  {
    icon: TrendingUp,
    title: "Focus on results, not just deliverables",
    description: "We measure success by the impact on your business, not the number of assets.",
  },
]

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "40+", label: "Happy Clients" },
  { value: "5x", label: "Avg. ROAS" },
  { value: "98%", label: "Client Satisfaction" },
]

export function WhySection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.1 })

  return (
    <section className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column */}
          <div 
            ref={sectionRef}
            className={cn(
              "transition-all duration-700",
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            )}
          >
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-primary mb-4">
              Why MTN Studios?
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-6 text-balance">
              We&apos;re not just a creative agency — we&apos;re a growth partner
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Our approach blends cinematic storytelling with strategic execution. Every project is built on collaboration, transparency, and outcomes that matter.
            </p>

            {/* Features List */}
            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div 
                    key={feature.title}
                    className={cn(
                      "flex gap-4 transition-all duration-500",
                      isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                    )}
                    style={{ transitionDelay: `${(index + 1) * 150}ms` }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Column - Stats & Visual */}
          <div className={cn(
            "transition-all duration-700 delay-200",
            isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          )}>
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className={cn(
                    "bg-card rounded-2xl p-6 border border-border/50 text-center hover-lift transition-all duration-500",
                    isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  )}
                  style={{ transitionDelay: `${(index + 2) * 100}ms` }}
                >
                  <div className="font-serif text-4xl lg:text-5xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Partnership Card */}
            <div className="bg-foreground text-background rounded-2xl p-8">
              <h3 className="font-semibold text-xl mb-4">
                Long-term brand partnerships
              </h3>
              <p className="text-background/70 mb-6 leading-relaxed">
                We build lasting relationships with our clients, growing alongside their businesses and adapting to their evolving needs.
              </p>
              <ul className="space-y-3">
                {[
                  "Dedicated account management",
                  "Flexible engagement models",
                  "Transparent communication",
                  "Results-driven mindset",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary-foreground" />
                    </div>
                    <span className="text-background/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
