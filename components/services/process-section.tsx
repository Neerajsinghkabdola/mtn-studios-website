"use client"

import { useRef } from "react"
import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/use-in-view"
import { Search, Compass, Sparkles, Rocket } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discover",
    description: "We dive deep into understanding your brand, goals, target audience, and competitive landscape to build a solid foundation.",
  },
  {
    number: "02",
    icon: Compass,
    title: "Strategize",
    description: "We define the creative direction and growth strategy, ensuring every decision aligns with your business objectives.",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Create",
    description: "Our team brings the strategy to life with high-quality design, content, and development that exceeds expectations.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch & Optimize",
    description: "We deliver, test, and continuously improve to ensure your project achieves maximum impact and sustainable results.",
  },
]

export function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.1 })

  return (
    <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div 
          ref={sectionRef}
          className={cn(
            "max-w-3xl mx-auto text-center mb-16 lg:mb-20 transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <span className="inline-block text-sm font-semibold uppercase tracking-wider text-primary-foreground/70 mb-4">
            Our Process
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-balance">
            How we bring your vision to life
          </h2>
          <p className="text-lg text-primary-foreground/80 leading-relaxed">
            A proven methodology that ensures every project is delivered with excellence, on time, and within budget.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div 
                key={step.number}
                className={cn(
                  "relative group transition-all duration-500",
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                )}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-primary-foreground/20 z-0" />
                )}

                {/* Card */}
                <div className="relative bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10 h-full hover:bg-primary-foreground/10 transition-colors duration-300">
                  {/* Number */}
                  <span className="absolute top-4 right-4 text-5xl font-serif font-bold text-primary-foreground/10">
                    {step.number}
                  </span>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-primary-foreground text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3">
                    {step.title}
                  </h3>
                  <p className="text-primary-foreground/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
