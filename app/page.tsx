"use client"

import Navigation from "@/components/sections/Navigation"
import Hero from "@/components/sections/Hero"
import TrustedBy from "@/components/sections/TrustedBy"
import ServicesPreview from "@/components/sections/Services-Preview"
import Industries from "@/components/sections/Industries"
import Testimonials from "@/components/sections/Testimonials"
import CTA from "@/components/sections/CTA"
import Footer from "@/components/sections/Footer"

export default function Home() {
  return (
    <div>
      <Hero />
      <TrustedBy />
      <ServicesPreview />
      <Industries />
      <Testimonials />
      <CTA />
    </div>
  )
}