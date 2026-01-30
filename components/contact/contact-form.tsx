"use client"

import React from "react"

import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/use-in-view"
import { Mail, MapPin, Phone, Send, CheckCircle, ArrowRight } from "lucide-react"

const services = [
  "Content Creation",
  "Video Production",
  "Brand & Design",
  "Web Design",
  "Growth & Ads",
  "Not Sure Yet",
]

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@mtnstudios.com",
    href: "mailto:hello@mtnstudios.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Los Angeles, CA",
    href: null,
  },
]

export function ContactForm() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { threshold: 0.1 })
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [isSubmitted, setIsSubmitted] = useState(false)

  const toggleService = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service)
        : [...prev, service]
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-background pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-foreground mb-6">
              Thank You!
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We&apos;ve received your message and will get back to you within 24 hours. 
              In the meantime, feel free to explore our work.
            </p>
            <Button 
              asChild 
              className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 rounded-full"
            >
              <a href="/work" className="flex items-center gap-2">
                View Our Work
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-32 lg:py-40 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={sectionRef}
          className="grid lg:grid-cols-2 gap-16 lg:gap-24"
        >
          {/* Left Column - Info */}
          <div className={cn(
            "transition-all duration-700",
            isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          )}>
            <span className="inline-block text-sm font-semibold uppercase tracking-wider text-primary mb-6">
              Start a Project
            </span>
            
            <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-foreground leading-tight mb-6 text-balance">
              Let&apos;s create something <span className="text-gradient">extraordinary</span>
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Ready to elevate your brand? We&apos;d love to hear about your project. Fill out the form and we&apos;ll get back to you within 24 hours.
            </p>

            {/* Contact Info */}
            <div className="space-y-6 mb-12">
              {contactInfo.map((item) => {
                const Icon = item.icon
                const content = (
                  <div key={item.label} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                      <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{item.label}</div>
                      <div className="font-medium text-foreground">{item.value}</div>
                    </div>
                  </div>
                )

                return item.href ? (
                  <a key={item.label} href={item.href} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                )
              })}
            </div>

            {/* Availability Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-3 bg-primary/5 rounded-full">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-foreground">
                Currently accepting new projects
              </span>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className={cn(
            "transition-all duration-700 delay-200",
            isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
          )}>
            <form onSubmit={handleSubmit} className="bg-card rounded-3xl border border-border/50 p-8 lg:p-10">
              <div className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input 
                      id="firstName" 
                      placeholder="John" 
                      required 
                      className="h-12 rounded-xl bg-secondary/50 border-border/50 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Doe" 
                      required 
                      className="h-12 rounded-xl bg-secondary/50 border-border/50 focus:border-primary"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@company.com" 
                    required 
                    className="h-12 rounded-xl bg-secondary/50 border-border/50 focus:border-primary"
                  />
                </div>

                {/* Company */}
                <div className="space-y-2">
                  <Label htmlFor="company">Company / Organization</Label>
                  <Input 
                    id="company" 
                    placeholder="Your Company" 
                    className="h-12 rounded-xl bg-secondary/50 border-border/50 focus:border-primary"
                  />
                </div>

                {/* Services */}
                <div className="space-y-3">
                  <Label>What services are you interested in?</Label>
                  <div className="flex flex-wrap gap-2">
                    {services.map((service) => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => toggleService(service)}
                        className={cn(
                          "px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300",
                          selectedServices.includes(service)
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-secondary/50 text-foreground border-border/50 hover:border-primary/50"
                        )}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message">Tell us about your project</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Share your goals, timeline, budget, or any other details that would help us understand your needs..."
                    required 
                    rows={5}
                    className="rounded-xl bg-secondary/50 border-border/50 focus:border-primary resize-none"
                  />
                </div>

                {/* Submit */}
                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full group bg-primary hover:bg-primary/90 text-primary-foreground py-6 rounded-full text-base font-medium transition-all duration-300"
                >
                  <span className="flex items-center gap-2">
                    Send Message
                    <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  We&apos;ll get back to you within 24 hours. No spam, ever.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
