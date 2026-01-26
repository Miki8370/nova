"use client"

import Image from "next/image"

const companies = [
  { name: "Afrinvest", logo: "/logos/afrinvest.svg" },
  { name: "GTBank", logo: "/logos/gtbank.svg" },
  { name: "Access Bank", logo: "/logos/access-bank.svg" },
  { name: "Dangote", logo: "/logos/dangote.svg" },
  { name: "Paystack", logo: "/logos/paystack.svg" },
  { name: "PiggyVest", logo: "/logos/piggyvest.svg" },
]

export default function TrustedBy() {
  return (
    <section className="py-16 bg-gradient-to-b from-background via-background/50 to-[#020817]/50 relative overflow-hidden">
      <div className="container mx-auto">
        <h2 className="text-center text-lg font-medium text-muted-foreground mb-12 px-4">
          Trusted by Leading Nigerian Companies
        </h2>
        <div className="relative w-full overflow-hidden gradient-mask">
          <div className="flex space-x-16 animate-scroll">
            {[...companies, ...companies].map((company, index) => (
              <div key={`${company.name}-${index}`} className="flex items-center justify-center min-w-[160px] group">
                <div className="relative w-32 h-12 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                  <Image
                    src={company.logo || "/placeholder.svg"}
                    alt={company.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
