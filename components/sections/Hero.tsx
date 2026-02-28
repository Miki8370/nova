'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { ChevronDown, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = useState(false)
  const inView = useInView(contentRef, { once: false, amount: 0.3 })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Text animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: i * 0.05,
        type: 'spring',
        stiffness: 100,
        damping: 8,
      },
    }),
  }

  const renderAnimatedText = (text: string) => {
    return text.split('').map((char, i) => (
      <motion.span
        key={i}
        custom={i}
        variants={letterVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="inline-block"
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    ))
  }

  // Generate deterministic particle positions
  const particles = Array.from({ length: 5 }, (_, i) => ({
    // Use deterministic values based on index instead of Math.random()
    x: (i * 20.5) % 100, // This will always be the same on server and client
    y: (i * 13.7) % 100,
    duration: 8 + i * 2,
    delay: i * 0.5,
  }))

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <motion.div
        style={isMounted ? { opacity, scale } : {}}
        className="absolute inset-0 w-full h-full"
      >
        <Image
          src="/hero-bg.jpg"
          alt="Professional HR consulting background"
          fill
          className="object-cover object-center"
          priority
          quality={85}
        />
        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </motion.div>

      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-br from-teal-400 to-cyan-600 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        ref={contentRef}
        style={isMounted ? { opacity, scale, y } : {}}
        className="relative z-10 container mx-auto px-4 pt-32 pb-16 h-full flex items-center justify-center"
      >
        <div className="max-w-5xl mx-auto text-center w-full">
          {/* Badge with pulse animation */}
          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="inline-block mb-8"
          >
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 0 0 rgba(34, 197, 94, 0.7)',
                  '0 0 0 30px rgba(34, 197, 94, 0)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-emerald-600/20 to-teal-600/20 border-2 border-emerald-500/60 text-emerald-300 font-bold text-sm md:text-base tracking-widest uppercase backdrop-blur-sm"
            >
              Nova HR Supply & Management PLC
            </motion.div>
          </motion.div>

          {/* Main heading with letter animation */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight text-balance"
          >
            {renderAnimatedText('Transform Your')}
            <br />
            <motion.span
              className="bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent"
              style={{
                backgroundSize: '200% 200%',
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {renderAnimatedText('Workforce')}
            </motion.span>
          </motion.h1>

          {/* Subtitle with stagger effect */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="mb-8"
          >
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed text-balance"
            >
              Professional HR consulting, recruitment, training, and workforce solutions tailored for your business success in Ethiopia.
            </motion.p>
          </motion.div>

          {/* CTA Buttons with hover effects */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-600 hover:to-teal-600 shadow-lg hover:shadow-2xl px-8 py-6 text-lg font-bold rounded-xl transition-all duration-300"
                asChild
              >
                <Link href="#services" className="flex items-center gap-2">
                  Explore Our Services
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.span>
                </Link>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
             {/* 
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-cyan-400 text-cyan-300 hover:bg-cyan-500/20 backdrop-blur-sm px-8 py-6 text-lg font-bold rounded-xl transition-all duration-300"
              >
                View Case Studies
              </Button>
              */}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator with animation */}
      <motion.div
        className="absolute bottom-8 left-0 right-0 text-center z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="inline-block">
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-white text-sm font-semibold">Scroll to explore</span>
            <ChevronDown className="w-6 h-6 text-cyan-400" />
          </motion.div>
        </div>
      </motion.div>

      {/* Floating particles effect - FIXED with deterministic values */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{
              x: `${particle.x}%`,
              y: `${particle.y}%`,
              opacity: 0.1,
            }}
            animate={{
              y: [0, -100, -200],
              opacity: [0.1, 0.5, 0],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Alternative: Only render particles on client */}
      {/* {isMounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              initial={{
                x: Math.random() * 100 + '%',
                y: Math.random() * 100 + '%',
                opacity: 0.1,
              }}
              animate={{
                y: [0, -100, -200],
                opacity: [0.1, 0.5, 0],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          ))}
        </div>
      )} */}
    </section>
  )
}