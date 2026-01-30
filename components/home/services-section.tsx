"use client"

import { useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Video, Palette, Globe, TrendingUp, Film } from "lucide-react"
import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/use-in-view"

const services = [
  {
    icon: Video,
    title: "Content Creation",
    description: "High-impact content designed for modern platforms. From short-form reels to brand storytelling.",
    items: ["Short-form content (Reels, Shorts)", "Long-form video content", "Social media content strategy", "Brand storytelling"],
    color: "bg-primary/10 text-primary",
    href: "/services#content",
  },
  {
    icon: Film,
    title: "Video Production & Editing",
    description: "Commercial-grade video production from concept to final cut with cinematic quality.",
    items: ["Commercial video production", "Product & brand films", "Video editing & motion graphics", "YouTube & campaign videos"],
    color: "bg-accent/10 text-accent",
    href: "/services#video",
  },
  {
    icon: Palette,
    title: "Brand & Design",
    description: "Strategic brand identity systems that make your business unforgettable.",
    items: ["Brand identity & logo design", "Visual systems & brand guidelines", "Graphic design & creatives", "Campaign design assets"],
    color: "bg-chart-3/10 text-chart-3",
    href: "/services#brand",
  },
  {
    icon: Globe,
    title: "Web & Digital Experiences",
    description: "Custom websites and digital products that convert visitors into customers.",
    items: ["Custom web design", "WordPress websites", "Webflow development", "Framer websites", "UI/UX design"],
    color: "bg-chart-4/10 text-chart-4",
    href: "/services#web",
  },
  {
    icon: TrendingUp,
    title: "Growth & Performance",
    description: "Data-driven marketing strategies that deliver measurable business results.",
    items: ["Meta (Facebook & Instagram) ads", "Creative strategy for ads", "Funnel & landing page design", "Conversion optimization"],
    color: "bg-chart-5/10 text-chart-5",
    href: "/services#growth",
  },
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { threshold: 0.2 })
  const Icon = service.icon

  return (
    <div 
      ref={cardRef}
      className={cn(
        "group relative bg-card rounded-2xl border border-border/50 p-6 lg:p-8 transition-all duration-500 hover-lift",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Icon */}
      <div className={cn(
        "w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110",
        service.color
      )}>
        <Icon className="w-6 h-6" />
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
        {service.title}
      </h3>
      <p className="text-muted-foreground mb-6 leading-relaxed">
        {service.description}
      </p>

      {/* Items */}
      <ul className="space-y-2 mb-6">
        {service.items.map((item) => (
          <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
            {item}
          </li>
        ))}
      </ul>

      {/* Link */}
      <Link 
        href={service.href}
        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors duration-300"
      >
        Learn more
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>

      {/* Hover Glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  )
}

export function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.1 })

  return (
    <section className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div 
          ref={sectionRef}
          className={cn(
            "max-w-3xl mx-auto text-center mb-16 transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <span className="inline-block text-sm font-semibold uppercase tracking-wider text-primary mb-4">
            What We Do
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-6 text-balance">
            End-to-end creative and digital solutions
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            MTN Studios delivers end-to-end creative and digital solutions — from concept to conversion.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {services.slice(0, 3).map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {services.slice(3).map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index + 3} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button 
            asChild 
            size="lg"
            variant="outline"
            className="group px-8 py-6 rounded-full text-base font-medium border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 bg-transparent"
          >
            <Link href="/services" className="flex items-center gap-2">
              View All Services
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
