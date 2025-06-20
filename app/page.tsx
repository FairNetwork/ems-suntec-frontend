"use client"

import { motion } from "framer-motion"
import HeroSection from "@/components/sections/HeroSection"
import CompanyIntro from "@/components/sections/CompanyIntro"
import ProjectTeaser from "@/components/sections/ProjectTeaser"
import ContactTeaser from "@/components/sections/ContactTeaser"
import TrustIndicators from "@/components/sections/TrustIndicators"

export default function HomePage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen"
      key='home'
    >
      <HeroSection />
      <TrustIndicators />
      <CompanyIntro />
      <ProjectTeaser />
      <ContactTeaser />
    </motion.main>
  )
}
