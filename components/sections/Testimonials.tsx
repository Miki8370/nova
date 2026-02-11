"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "Small Business Owner",
    quote:
      "Since integrating this solution into our workflow, we've experienced a significant improvement in efficiency and collaboration.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
  },
  {
    name: "David Patel",
    title: "Project Manager",
    quote:
      "I've tested numerous options in this category, but one stands out for its intuitive design and comprehensive functionality.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
  },
  {
    name: "Emily Carter",
    title: "Operations Manager",
    quote:
      "The tool we've adopted has surpassed our expectations, providing invaluable insights and support as our business continues to grow.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q80",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-background via-[#0a4d4d]/20 to-[#0a4d4d]/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/screenshot-202025-02-18-20at-209.png')] opacity-5 bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d8b8b]/10 via-transparent to-transparent" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">What people say</h2>
          <p className="text-lg text-gray-400">
            Discover what our satisfied customers have to say about their experiences with our solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className={`relative p-8 rounded-2xl bg-card border backdrop-blur-sm hover:bg-card/80 transition-all duration-300 ${
                index % 2 === 0 ? 'border-[#0d8b8b]/40 hover:border-[#0d8b8b]' : 'border-[#d97706]/40 hover:border-[#d97706]'
              }`}>
                <div className="mb-6 flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-gray-800/50">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                    <p className="text-sm text-gray-400">{testimonial.title}</p>
                  </div>
                </div>
                <blockquote className="text-gray-300 leading-relaxed">"{testimonial.quote}"</blockquote>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
