"use client"

import { useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/use-in-view"
import { 
  Video, 
  Film, 
  Palette, 
  Globe, 
  TrendingUp, 
  ArrowRight,
  Check
} from "lucide-react"

const services = [
  {
    id: "content",
    icon: Video,
    title: "Content Creation",
    description: "High-impact content designed for modern platforms. We create scroll-stopping content that engages your audience and tells your brand story.",
    deliverables: [
      "Short-form content (Reels, Shorts, TikToks)",
      "Long-form video content",
      "Social media content strategy",
      "Brand storytelling & narratives",
      "Photography & visual content",
    ],
    idealFor: "Brands looking to build authentic connections and grow their social presence with content that converts.",
    color: "bg-primary/10 text-primary border-primary/20",
    accent: "bg-primary",
  },
  {
    id: "video",
    icon: Film,
    title: "Video Production & Editing",
    description: "Commercial-grade video production from concept to final cut. We craft cinematic experiences that capture attention and drive action.",
    deliverables: [
      "Commercial video production",
      "Product & brand films",
      "Video editing & post-production",
      "Motion graphics & animation",
      "YouTube & campaign videos",
    ],
    idealFor: "Companies seeking premium video content that elevates their brand and communicates complex messages effectively.",
    color: "bg-accent/10 text-accent border-accent/20",
    accent: "bg-accent",
  },
  {
    id: "brand",
    icon: Palette,
    title: "Brand & Design",
    description: "Strategic brand identity systems that make your business unforgettable. We create visual languages that resonate with your target audience.",
    deliverables: [
      "Brand identity & logo design",
      "Visual systems & brand guidelines",
      "Graphic design & creatives",
      "Campaign design assets",
      "Packaging & print design",
    ],
    idealFor: "New ventures launching their brand or established businesses ready for a strategic rebrand that drives recognition.",
    color: "bg-chart-3/10 text-chart-3 border-chart-3/20",
    accent: "bg-chart-3",
  },
  {
    id: "web",
    icon: Globe,
    title: "Web & Digital Experiences",
    description: "Custom websites and digital products that convert visitors into customers. We build fast, beautiful, and user-centric digital experiences.",
    deliverables: [
      "Custom web design & development",
      "WordPress websites",
      "Webflow development",
      "Framer websites",
      "UI/UX design",
    ],
    idealFor: "Businesses that need a digital presence that works as hard as they do—converting visitors and showcasing their value.",
    color: "bg-chart-4/10 text-chart-4 border-chart-4/20",
    accent: "bg-chart-4",
  },
  {
    id: "growth",
    icon: TrendingUp,
    title: "Growth & Performance",
    description: "Data-driven marketing strategies that deliver measurable business results. We turn your ad spend into predictable, scalable growth.",
    deliverables: [
      "Meta (Facebook & Instagram) ads",
      "Creative strategy for ads",
      "Funnel & landing page design",
      "Conversion optimization",
      "Analytics & reporting",
    ],
    idealFor: "Growth-focused brands ready to scale their customer acquisition with proven, performance-driven strategies.",
    color: "bg-chart-5/10 text-chart-5 border-chart-5/20",
    accent: "bg-chart-5",
  },
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { threshold: 0.2 })
  const Icon = service.icon
  const isEven = index % 2 === 0

  return (
    <div 
      id={service.id}
      ref={cardRef}
      className={cn(
        "scroll-mt-32 transition-all duration-700",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      )}
    >
      <div className={cn(
        "grid lg:grid-cols-2 gap-8 lg:gap-16 items-center",
        !isEven && "lg:grid-flow-dense"
      )}>
        {/* Content Side */}
        <div className={cn(!isEven && "lg:col-start-2")}>
          <div className={cn(
            "inline-flex items-center gap-3 px-4 py-2 rounded-full border mb-6",
            service.color
          )}>
            <Icon className="w-5 h-5" />
            <span className="text-sm font-medium">Service {String(index + 1).padStart(2, '0')}</span>
          </div>

          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-foreground mb-4">
            {service.title}
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            {service.description}
          </p>

          <div className="mb-8">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
              Deliverables
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.deliverables.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className={cn("w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5", service.accent)}>
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-foreground text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 bg-secondary/50 rounded-xl border border-border/50 mb-8">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">
              Ideal For
            </h3>
            <p className="text-foreground leading-relaxed">
              {service.idealFor}
            </p>
          </div>

          <Button 
            asChild
            className="group bg-primary hover:bg-primary/90 text-primary-foreground px-6 rounded-full transition-all duration-300"
          >
            <Link href="/contact" className="flex items-center gap-2">
              Get {service.title.split(' ')[0]} Support
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        {/* Visual Side */}
        <div className={cn(
          "relative",
          !isEven && "lg:col-start-1 lg:row-start-1"
        )}>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-secondary">
            {/* Decorative Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.02)_25%,rgba(0,0,0,0.02)_50%,transparent_50%,transparent_75%,rgba(0,0,0,0.02)_75%)] bg-[length:20px_20px]" />
            
            {/* Icon Display */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className={cn(
                "w-32 h-32 rounded-3xl flex items-center justify-center shadow-2xl",
                service.accent
              )}>
                <Icon className="w-16 h-16 text-white" />
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-8 left-8 w-16 h-16 rounded-xl bg-card border border-border/50 shadow-lg flex items-center justify-center opacity-80">
              <div className="w-8 h-1 rounded-full bg-primary/50" />
            </div>
            <div className="absolute bottom-8 right-8 w-20 h-20 rounded-2xl bg-card border border-border/50 shadow-lg flex flex-col items-center justify-center gap-1 opacity-80">
              <div className="w-10 h-1 rounded-full bg-accent/50" />
              <div className="w-8 h-1 rounded-full bg-accent/30" />
              <div className="w-6 h-1 rounded-full bg-accent/20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ServicesList() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24 lg:space-y-32">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
