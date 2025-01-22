import Image from "next/image"
import Link from "next/link"
import { HeroSection } from "./components/HeroSection"
import { AboutSection } from "./components/AboutSection"
import { AcceleratorSection } from "./components/AcceleratorSection"
import { NewsletterSection } from "./components/NewsletterSection"
import { CareersSection } from "./components/CareersSection"
import { Footer } from "./components/Footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <AcceleratorSection />
        <NewsletterSection />
        <CareersSection />
      </main>
      <Footer />
    </div>
  )
}

