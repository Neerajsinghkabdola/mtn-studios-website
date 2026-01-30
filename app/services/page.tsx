import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ServicesHero } from "@/components/services/services-hero"
import { ServicesList } from "@/components/services/services-list"
import { ProcessSection } from "@/components/services/process-section"
import { ServicesCTA } from "@/components/services/services-cta"

export const metadata: Metadata = {
  title: "Our Services | MTN Studios",
  description: "From brand identity to performance marketing, MTN Studios delivers integrated solutions that help brands scale.",
}

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      <main>
        <ServicesHero />
        <ServicesList />
        <ProcessSection />
        <ServicesCTA />
      </main>
      <Footer />
    </>
  )
}
