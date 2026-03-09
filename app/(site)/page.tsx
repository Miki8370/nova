
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
import EventsPreview from "@/components/sections/event-preview"
import AboutUsPreview from "@/components/sections/about-preview"
import PackagesPreview from "@/components/sections/packages-preview"
import Team from "@/components/sections/Team"


export default function Home() {
  return (
    <div>
      <Hero />
      <AboutUsPreview />
      {/* 
      <TrustedBy />
      <Testimonials />
      <Industries />
      <EventsPreview />
      <CTA />
      <StrategicApproach />
       */}
      
      
      <ServicesPreview />
      <PackagesPreview />
      <ComplianceBenefits />
      <ImpactAreas />
      <Team />
      
      

      
      <ContactPreview />

      
    </div>
  )
}