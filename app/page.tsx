import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { ServicesSection } from "@/components/home/services-section"
import { WorkSection } from "@/components/home/work-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { WhySection } from "@/components/home/why-section"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <WorkSection />
        <TestimonialsSection />
        <WhySection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
