import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/about-hero"
import { AboutStory } from "@/components/about/about-story"
import { AboutProcess } from "@/components/about/about-process"
import { AboutValues } from "@/components/about/about-values"
import { AboutCTA } from "@/components/about/about-cta"

export const metadata: Metadata = {
  title: "About Us | MTN Studios",
  description: "MTN Studios is a creative and digital studio focused on helping brands stand out in a crowded digital world.",
}

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main>
        <AboutHero />
        <AboutStory />
        <AboutProcess />
        <AboutValues />
        <AboutCTA />
      </main>
      <Footer />
    </>
  )
}
