"use client"

import { motion } from "framer-motion"
import PageHeader from "@/components/ui/PageHeader"
import ContactForm from "@/components/forms/ContactForm"
import ContactInfo from "@/components/sections/ContactInfo"

export default function ContactPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen pt-20"
    >
      <PageHeader title="Kontakt" subtitle="Lassen Sie uns gemeinsam Ihre Energiezukunft planen" />

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          <ContactForm />
          <div className="space-y-8">
            <ContactInfo />
          </div>
        </div>
      </div>
    </motion.main>
  )
}
