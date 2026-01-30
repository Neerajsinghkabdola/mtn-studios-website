"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/use-in-view"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const categories = [
  { id: "all", label: "All Work" },
  { id: "branding", label: "Branding" },
  { id: "content", label: "Content" },
  { id: "web", label: "Web Design" },
  { id: "ads", label: "Ads" },
]

const projects = [
  {
    id: 1,
    title: "Luxe Beauty Brand",
    category: "branding",
    categoryLabel: "Branding",
    description: "Complete brand identity redesign for a premium beauty company, resulting in 150% increase in brand recognition and a cohesive visual presence across all touchpoints.",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=600&fit=crop",
    href: "/work/luxe-beauty",
    featured: true,
  },
  {
    id: 2,
    title: "TechFlow Dashboard",
    category: "web",
    categoryLabel: "Web Design",
    description: "Modern SaaS dashboard design that improved user retention by 40% through intuitive UX and streamlined workflows.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    href: "/work/techflow",
    featured: true,
  },
  {
    id: 3,
    title: "Artisan Coffee Campaign",
    category: "content",
    categoryLabel: "Content",
    description: "Cinematic brand film and social content driving 2M+ organic impressions and establishing a distinctive voice in a competitive market.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop",
    href: "/work/artisan-coffee",
    featured: false,
  },
  {
    id: 4,
    title: "Fitness Revolution",
    category: "ads",
    categoryLabel: "Ads",
    description: "Performance marketing campaign achieving 5x ROAS within 3 months through strategic creative testing and audience optimization.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
    href: "/work/fitness-revolution",
    featured: false,
  },
  {
    id: 5,
    title: "Nordic Design Studio",
    category: "branding",
    categoryLabel: "Branding",
    description: "Minimalist brand identity for a Scandinavian design firm, capturing their philosophy of simplicity and functionality.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop",
    href: "/work/nordic-design",
    featured: false,
  },
  {
    id: 6,
    title: "Urban Eats Delivery",
    category: "web",
    categoryLabel: "Web Design",
    description: "E-commerce platform for a food delivery startup with seamless ordering experience and 60% conversion improvement.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop",
    href: "/work/urban-eats",
    featured: false,
  },
  {
    id: 7,
    title: "Wellness Retreat",
    category: "content",
    categoryLabel: "Content",
    description: "Documentary-style brand content capturing the essence of a luxury wellness retreat, driving 300% increase in bookings.",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&h=600&fit=crop",
    href: "/work/wellness-retreat",
    featured: false,
  },
  {
    id: 8,
    title: "FinTech Startup Launch",
    category: "ads",
    categoryLabel: "Ads",
    description: "Go-to-market campaign for a fintech startup, generating 10,000+ qualified leads in the first quarter.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
    href: "/work/fintech-launch",
    featured: false,
  },
]

function ProjectCard({ project, index, isLarge = false }: { 
  project: typeof projects[0]
  index: number
  isLarge?: boolean 
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { threshold: 0.2 })

  return (
    <div
      ref={cardRef}
      className={cn(
        "group relative transition-all duration-700",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
        isLarge && "md:col-span-2"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Link href={project.href} className="block">
        {/* Image Container */}
        <div className={cn(
          "relative rounded-2xl overflow-hidden mb-5",
          isLarge ? "aspect-[16/9]" : "aspect-[4/3]"
        )}>
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* View Project Button */}
          <div className="absolute inset-0 flex items-end justify-between p-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="text-white">
              <span className="text-sm font-medium opacity-80">{project.categoryLabel}</span>
            </div>
            <div className="bg-background text-foreground w-12 h-12 rounded-full flex items-center justify-center shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>

          {/* Category Badge - Mobile */}
          <div className="absolute top-4 left-4 md:hidden">
            <span className="px-3 py-1.5 bg-background/90 backdrop-blur-sm rounded-full text-xs font-medium text-foreground">
              {project.categoryLabel}
            </span>
          </div>
        </div>

        {/* Content */}
        <div>
          <div className="hidden md:block mb-2">
            <span className="text-sm text-primary font-medium">
              {project.categoryLabel}
            </span>
          </div>
          <h3 className={cn(
            "font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300",
            isLarge ? "text-2xl lg:text-3xl" : "text-xl"
          )}>
            {project.title}
          </h3>
          <p className={cn(
            "text-muted-foreground leading-relaxed",
            isLarge ? "text-base lg:text-lg" : "text-sm line-clamp-2"
          )}>
            {project.description}
          </p>
        </div>
      </Link>
    </div>
  )
}

export function WorkGrid() {
  const [activeFilter, setActiveFilter] = useState("all")
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.1 })

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(p => p.category === activeFilter)

  return (
    <section className="py-8 lg:py-12 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Tabs */}
        <div 
          ref={sectionRef}
          className={cn(
            "flex flex-wrap gap-2 mb-12 transition-all duration-500",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeFilter === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(category.id)}
              className={cn(
                "rounded-full px-5 transition-all duration-300",
                activeFilter === category.id 
                  ? "bg-primary text-primary-foreground" 
                  : "hover:bg-secondary"
              )}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
              isLarge={index < 2 && activeFilter === "all"}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
