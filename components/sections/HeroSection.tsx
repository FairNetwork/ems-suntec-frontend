"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Zap, Shield, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/header-image.png?height=1080&width=1920)",
          filter: "brightness(0.4)",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ihre Zukunft ist{" "}
            <span className="bg-primary bg-clip-text text-transparent">solar</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Entdecken Sie die Kraft der Sonne und senken Sie Ihre Energiekosten um bis zu 90%. Über 500 zufriedene
            Kunden vertrauen bereits auf unsere Expertise.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-primary hover:primary text-white font-semibold px-8 py-4 text-lg"
            >
              <Link href="/contact">
                Kostenlose Beratung
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-black hover:bg-white hover:text-black px-8 py-4 text-lg"
            >
              <Link href="/projects">Referenzen ansehen</Link>
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="flex items-center justify-center space-x-3">
              <Zap className="w-8 h-8 text-primary" />
              <div className="text-left">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm text-gray-300">Installationen</div>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-3">
              <Shield className="w-8 h-8 text-primary" />
              <div className="text-left">
                <div className="text-2xl font-bold">25 Jahre</div>
                <div className="text-sm text-gray-300">Garantie</div>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-3">
              <Award className="w-8 h-8 text-primary" />
              <div className="text-left">
                <div className="text-2xl font-bold">98%</div>
                <div className="text-sm text-gray-300">Zufriedenheit</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
