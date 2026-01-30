import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WorkHero } from "@/components/work/work-hero"
import { WorkGrid } from "@/components/work/work-grid"
import { WorkCTA } from "@/components/work/work-cta"

export const metadata: Metadata = {
  title: "Our Work | MTN Studios",
  description: "A curated selection of projects across branding, content, and digital experiences.",
}

export default function WorkPage() {
  return (
    <>
      <Navigation />
      <main>
        <WorkHero />
        <WorkGrid />
        <WorkCTA />
      </main>
      <Footer />
    </>
  )
}
