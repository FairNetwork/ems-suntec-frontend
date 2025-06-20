"use client"

import { motion } from "framer-motion"
import PageHeader from "@/components/ui/PageHeader"
import TeamSection from "@/components/sections/TeamSection"
import ValuesSection from "@/components/sections/ValuesSection"
import CompanyStory from "@/components/sections/CompanyStory"
import ContactTeaser from "@/components/sections/ContactTeaser"

export default function AboutPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen pt-20"
    >
      <PageHeader title="Über Ems Suntec" subtitle="Ihre Experten für nachhaltige Energielösungen seit 2024" />
      <CompanyStory />
      <ValuesSection />
      <TeamSection />
      <ContactTeaser />
    </motion.main>
  )
}
