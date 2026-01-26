"use client"

import Navigation from "@/components/sections/Navigation"
import Hero from "@/components/sections/Hero"
import TrustedBy from "@/components/sections/TrustedBy"
import ServicesPreview from "@/components/sections/Services-Preview"
import Industries from "@/components/sections/Industries"
import Testimonials from "@/components/sections/Testimonials"
import CTA from "@/components/sections/CTA"
import ContactPreview from "@/components/sections/Contact-Preview"
import AboutSection from "@/components/sections/about-section"
import ComplianceBenefits from "@/components/sections/compliance-benefits"
import ImpactAreas from "@/components/sections/impact-areas"
import StrategicApproach from "@/components/sections/strategic-approach"
export default function Home() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <TrustedBy />
      <ServicesPreview />
      <ComplianceBenefits />
      <ImpactAreas />
      <StrategicApproach />
      <Industries />

      <Testimonials />
      <ContactPreview />

      <CTA />
    </div>
  )
}