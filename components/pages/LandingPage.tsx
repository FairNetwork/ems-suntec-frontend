"use client"

import { motion } from "framer-motion"
import HeroSection from "@/components/sections/HeroSection"
import CompanyIntro from "@/components/sections/CompanyIntro"
import ProjectTeaser from "@/components/sections/ProjectTeaser"
import ContactTeaser from "@/components/sections/ContactTeaser"
import TrustIndicators from "@/components/sections/TrustIndicators"
import type { LandingPageContent } from "@/constants/landing-pages"

type LandingPageProps = {
  content: LandingPageContent
  pageKey: string
  projectFilterKey?: string
}

export default function LandingPage({ content, pageKey, projectFilterKey }: LandingPageProps) {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen"
      key={pageKey}
    >
      <HeroSection content={content.hero} />
      <TrustIndicators />
      <CompanyIntro content={content.companyIntro} />
      <ProjectTeaser content={content.projectTeaser} projectFilterKey={projectFilterKey} />
      <ContactTeaser content={content.contactTeaser} />
    </motion.main>
  )
}
