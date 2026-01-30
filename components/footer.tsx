import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, Mail, Instagram } from "lucide-react"

const footerLinks = {
  studio: [
    { label: "About Us", href: "/about" },
    { label: "Our Services", href: "/services" },
    { label: "Our Work", href: "/work" },
  ],
  expertise: [
    { label: "Content Creation", href: "/services#content" },
    { label: "Brand Design", href: "/services#brand" },
    { label: "Web Design", href: "/services#web" },
  ],
  insights: [
    { label: "Case Studies", href: "/work" },
    { label: "Blog", href: "/blog" },
    { label: "Process", href: "/about#process" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo.png"
                alt="MTN Studios"
                width={160}
                height={60}
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-background/70 text-lg leading-relaxed max-w-md mb-8">
              We help brands scale through cinematic content, strategic design, and high-performance digital experiences.
            </p>
            
            {/* Contact */}
            <div className="space-y-3">
              <a 
                href="mailto:hello@mtnstudios.com" 
                className="group flex items-center gap-3 text-background/80 hover:text-background transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center group-hover:bg-background/20 transition-colors duration-300">
                  <Mail className="w-4 h-4" />
                </div>
                <span>hello@mtnstudios.com</span>
              </a>
              <a 
                href="https://instagram.com/mtnstudios" 
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-background/80 hover:text-background transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center group-hover:bg-background/20 transition-colors duration-300">
                  <Instagram className="w-4 h-4" />
                </div>
                <span>@mtnstudios</span>
              </a>
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
              {/* Studio */}
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-background/50 mb-6">
                  Studio
                </h4>
                <ul className="space-y-4">
                  {footerLinks.studio.map((link) => (
                    <li key={link.href}>
                      <Link 
                        href={link.href}
                        className="group inline-flex items-center gap-1 text-background/80 hover:text-background transition-colors duration-300"
                      >
                        <span>{link.label}</span>
                        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Expertise */}
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-background/50 mb-6">
                  Expertise
                </h4>
                <ul className="space-y-4">
                  {footerLinks.expertise.map((link) => (
                    <li key={link.href}>
                      <Link 
                        href={link.href}
                        className="group inline-flex items-center gap-1 text-background/80 hover:text-background transition-colors duration-300"
                      >
                        <span>{link.label}</span>
                        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Insights */}
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-background/50 mb-6">
                  Insights
                </h4>
                <ul className="space-y-4">
                  {footerLinks.insights.map((link) => (
                    <li key={link.href}>
                      <Link 
                        href={link.href}
                        className="group inline-flex items-center gap-1 text-background/80 hover:text-background transition-colors duration-300"
                      >
                        <span>{link.label}</span>
                        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-background/50">
              © {new Date().getFullYear()} MTN Studios. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-sm text-background/50 hover:text-background transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-background/50 hover:text-background transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
