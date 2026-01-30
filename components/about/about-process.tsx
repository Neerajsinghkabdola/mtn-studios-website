"use client"

import { useRef } from "react"
import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/use-in-view"
import { Search, Compass, Sparkles, Rocket, ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discover",
    description: "We start by understanding your brand, goals, target audience, and competitive landscape. This deep dive helps us uncover insights that inform every creative decision.",
    details: ["Brand audit & research", "Competitor analysis", "Audience insights", "Goal setting"],
  },
  {
    number: "02",
    icon: Compass,
    title: "Strategize",
    description: "We define the creative direction and growth strategy, ensuring every element serves your business objectives. Strategy before tactics, always.",
    details: ["Creative direction", "Content strategy", "Channel planning", "KPI definition"],
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Create",
    description: "Our team brings the strategy to life with high-quality design, content, and development. Every detail is crafted with purpose and precision.",
    details: ["Design & development", "Content production", "Quality assurance", "Client collaboration"],
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch & Optimize",
    description: "We deliver your project and continue to test, learn, and improve. Our commitment doesn&apos;t end at launch—we optimize for sustained success.",
    details: ["Strategic launch", "Performance monitoring", "A/B testing", "Continuous improvement"],
  },
]

export function AboutProcess() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.1 })

  return (
    <section id="process" className="py-24 lg:py-32 bg-secondary/30 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div 
          ref={sectionRef}
          className={cn(
            "max-w-3xl mb-16 lg:mb-20 transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <span className="inline-block text-sm font-semibold uppercase tracking-wider text-primary mb-4">
            Our Process
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-6 text-balance">
            A proven approach to exceptional work
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our methodology ensures every project is delivered with excellence. We&apos;ve refined this process over hundreds of projects to maximize results.
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div 
                key={step.number}
                className={cn(
                  "group relative transition-all duration-500",
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                <div className="bg-card rounded-2xl border border-border/50 p-6 lg:p-8 hover:shadow-lg transition-shadow duration-300">
                  <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-start">
                    {/* Number & Icon */}
                    <div className="lg:col-span-2 flex items-center gap-4 lg:flex-col lg:items-start">
                      <span className="font-serif text-4xl lg:text-5xl font-bold text-primary/20">
                        {step.number}
                      </span>
                      <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                        <Icon className="w-5 h-5 lg:w-6 lg:h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-5">
                      <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-3">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Details */}
                    <div className="lg:col-span-5">
                      <div className="grid grid-cols-2 gap-3">
                        {step.details.map((detail) => (
                          <div key={detail} className="flex items-center gap-2">
                            <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-sm text-foreground">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
