"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const contactInfo = [
  {
    title: "Email",
    description: "Get in touch via email",
    value: "info@novahrsm.com",
    icon: Mail,
    href: "info@novahrsm.com",
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
    value: "Adiss Ababa, Ethiopia",
    icon: MapPin,
    href: "#",
  },
]

export default function Contact() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#020817] via-background to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch With Nova HR</h2>
          <p className="text-lg text-muted-foreground">
            Have questions about our services? We're here to help. Connect with our team to discuss how Nova HR can support your organization's growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <motion.a
                  key={info.title}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative p-8 rounded-lg bg-card hover:bg-card/80 transition-all border hover:border-primary"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{info.description}</p>
                      <p className="text-lg font-medium text-primary">{info.value}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </motion.a>
              )
            })}
          </div>

          {/* Contact Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative rounded-lg overflow-hidden h-96 lg:h-full"
          >
            <Image
              src="/contact-office.jpg"
              alt="Nova HR Office"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl mx-auto bg-card border rounded-lg p-8 md:p-12"
        >
          <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Company</label>
              <input
                type="text"
                placeholder="Your company name"
                className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Subject</label>
              <input
                type="text"
                placeholder="How can we help?"
                className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                placeholder="Tell us more about your inquiry..."
                rows={5}
                className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
              />
            </div>

            <Button size="lg" className="w-full">
              Send Message
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
