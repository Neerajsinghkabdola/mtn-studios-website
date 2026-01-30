"use client"

import { useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/use-in-view"
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    quote: "MTN Studios elevated our brand and delivered measurable growth. Their strategic approach transformed how our customers perceive us.",
    author: "Sophie Chen",
    role: "Creative Lead",
    company: "Luxe Beauty Co.",
    rating: 5,
  },
  {
    id: 2,
    quote: "A true creative partner for content and digital experiences. They understood our vision from day one and exceeded every expectation.",
    author: "Derek Williams",
    role: "Head of Marketing",
    company: "TechFlow Inc.",
    rating: 5,
  },
  {
    id: 3,
    quote: "Strategic, cinematic, and results-driven at every step. The team's attention to detail and commitment to excellence is unmatched.",
    author: "Priya Sharma",
    role: "Brand Manager",
    company: "Artisan Coffee",
    rating: 5,
  },
]

const brands = [
  "Luxe Beauty",
  "TechFlow",
  "Artisan Coffee",
  "Fitness Revolution",
  "Nordic Design",
  "Urban Eats",
]

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.1 })
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 lg:py-32 bg-primary text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div 
          ref={sectionRef}
          className={cn(
            "text-center mb-16 transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <span className="inline-block text-sm font-semibold uppercase tracking-wider text-primary-foreground/70 mb-4">
            Trusted by Partners
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 text-balance">
            Premium brands & growing businesses
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className={cn(
          "max-w-4xl mx-auto transition-all duration-700 delay-200",
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}>
          <div className="relative bg-primary-foreground/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12">
            {/* Quote Icon */}
            <Quote className="w-12 h-12 text-primary-foreground/20 mb-6" />

            {/* Testimonial Content */}
            <div className="min-h-[200px] flex flex-col justify-between">
              <div className="relative">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className={cn(
                      "transition-all duration-500 absolute inset-0",
                      index === activeIndex 
                        ? "opacity-100 translate-x-0" 
                        : index < activeIndex 
                          ? "opacity-0 -translate-x-8" 
                          : "opacity-0 translate-x-8"
                    )}
                    aria-hidden={index !== activeIndex}
                  >
                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current text-accent" />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-xl lg:text-2xl font-medium leading-relaxed mb-8">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                        <span className="text-lg font-semibold">
                          {testimonial.author.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.author}</div>
                        <div className="text-sm text-primary-foreground/70">
                          {testimonial.role}, {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Static content for layout */}
                <div className="invisible">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5" />
                    ))}
                  </div>
                  <blockquote className="text-xl lg:text-2xl font-medium leading-relaxed mb-8">
                    &ldquo;{testimonials[0].quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full" />
                    <div>
                      <div className="font-semibold">{testimonials[0].author}</div>
                      <div className="text-sm">{testimonials[0].role}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-primary-foreground/10">
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all duration-300",
                      index === activeIndex 
                        ? "w-8 bg-primary-foreground" 
                        : "bg-primary-foreground/30 hover:bg-primary-foreground/50"
                    )}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={prevTestimonial}
                  className="rounded-full hover:bg-primary-foreground/10 text-primary-foreground"
                >
                  <ChevronLeft className="w-5 h-5" />
                  <span className="sr-only">Previous testimonial</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={nextTestimonial}
                  className="rounded-full hover:bg-primary-foreground/10 text-primary-foreground"
                >
                  <ChevronRight className="w-5 h-5" />
                  <span className="sr-only">Next testimonial</span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Brands Marquee */}
        <div className={cn(
          "mt-20 transition-all duration-700 delay-300",
          isInView ? "opacity-100" : "opacity-0"
        )}>
          <div className="text-center mb-8">
            <span className="text-sm text-primary-foreground/50 uppercase tracking-wider">
              Brands we&apos;ve worked with
            </span>
          </div>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap">
              {[...brands, ...brands].map((brand, index) => (
                <span
                  key={index}
                  className="mx-8 text-2xl lg:text-3xl font-serif font-semibold text-primary-foreground/30"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
