import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact/contact-form"

export const metadata: Metadata = {
  title: "Start a Project | MTN Studios",
  description: "Ready to build something exceptional? Let's discuss your project and explore how we can help you achieve your goals.",
}

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main>
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
