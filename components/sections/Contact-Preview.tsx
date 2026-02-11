"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const contactMethods = [
  {
    title: "Email",
    description: "Get in touch via email",
    value: "contact@novahr.com",
    icon: Mail,
    href: "mailto:contact@novahr.com",
  },
  {
    title: "Phone",
    description: "Call us during business hours",
    value: "+234 (0) 123 456 7890",
    icon: Phone,
    href: "tel:+2341234567890",
  },
  {
    title: "Office Location",
    description: "Visit us at our headquarters",
    value: "Lagos, Nigeria",
    icon: MapPin,
    href: "#",
  },
]

export default function ContactPreview() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Let's Connect
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Connect with entrepreneurs, build your network, make great business
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, index) => {
            const Icon = method.icon
            return (
              <motion.a
                key={method.title}
                href={method.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative p-6 rounded-lg bg-card border transition-all ${
                  index % 2 === 0
                    ? 'border-[#0d8b8b]/30 hover:border-[#0d8b8b] hover:bg-card/80'
                    : 'border-[#d97706]/30 hover:border-[#d97706] hover:bg-card/80'
                }`}
              >
                <div className={`mb-4 inline-block p-2 rounded-lg ${
                  index % 2 === 0 ? 'bg-[#0d8b8b]/10' : 'bg-[#d97706]/10'
                }`}>
                  <Icon className={`w-6 h-6 ${index % 2 === 0 ? 'text-[#0d8b8b]' : 'text-[#d97706]'}`} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{method.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                <p className={`text-sm font-medium ${index % 2 === 0 ? 'text-[#0d8b8b]' : 'text-[#d97706]'}`}>{method.value}</p>
                <ArrowRight className={`w-4 h-4 absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity ${index % 2 === 0 ? 'text-[#0d8b8b]' : 'text-[#d97706]'}`} />
              </motion.a>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center"
        >
          <Link href="/contact">
            <Button size="lg" className="group bg-[#d97706] hover:bg-[#f59e0b] text-white">
              Send us a Message
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
