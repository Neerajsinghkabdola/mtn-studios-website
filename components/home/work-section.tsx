"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/use-in-view"

const projects = [
  {
    id: 1,
    title: "Luxe Beauty Brand",
    category: "Branding",
    description: "Complete brand identity redesign resulting in 150% increase in brand recognition",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=600&fit=crop",
    href: "/work/luxe-beauty",
  },
  {
    id: 2,
    title: "TechFlow App",
    category: "Web Design",
    description: "Modern SaaS dashboard design that improved user retention by 40%",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    href: "/work/techflow",
  },
  {
    id: 3,
    title: "Artisan Coffee",
    category: "Content",
    description: "Cinematic brand film and social content driving 2M+ organic impressions",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop",
    href: "/work/artisan-coffee",
  },
  {
    id: 4,
    title: "Fitness Revolution",
    category: "Ads",
    description: "Performance marketing campaign achieving 5x ROAS within 3 months",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
    href: "/work/fitness-revolution",
  },
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { threshold: 0.2 })

  return (
    <div
      ref={cardRef}
      className={cn(
        "group relative transition-all duration-700",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <Link href={project.href} className="block">
        {/* Image Container */}
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-5">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-500" />
          
          {/* View Project Button */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-background text-foreground px-6 py-3 rounded-full flex items-center gap-2 font-medium shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              View Project
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1.5 bg-background/90 backdrop-blur-sm rounded-full text-xs font-medium text-foreground">
              {project.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {project.description}
        </p>
      </Link>
    </div>
  )
}

export function WorkSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.1 })

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div 
          ref={sectionRef}
          className={cn(
            "flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div className="max-w-2xl">
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-primary mb-4">
              Featured Work
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-4 text-balance">
              Explore how we help brands stand out
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Explore how we help brands stand out, engage audiences, and drive measurable results.
            </p>
          </div>
          <Button 
            asChild 
            variant="outline"
            size="lg"
            className="group self-start md:self-auto px-6 py-5 rounded-full font-medium border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 bg-transparent"
          >
            <Link href="/work" className="flex items-center gap-2">
              View All Projects
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
