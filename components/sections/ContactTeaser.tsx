"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import {WhatsApp} from "@/components/ui/whatsapp-icon";

export default function ContactTeaser() {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Bereit für Ihre Solaranlage?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam Ihre Energiezukunft planen. Kontaktieren Sie uns für eine kostenlose und
            unverbindliche Beratung.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button asChild size="lg" className="bg-primary text-white hover:bg-primary font-semibold px-8 py-4">
              <Link href="/contact">
                Kostenlose Beratung
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-black hover:bg-white hover:text-black px-8 py-4"
            >
              <Link href="tel:+491797884043">
                <WhatsApp className="mr-2 w-4 h-4" />
                Haiko Winter
              </Link>
            </Button><Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-black hover:bg-white hover:text-black px-8 py-4"
            >
              <Link href="tel:+491797884043">
                <WhatsApp className="mr-2 w-4 h-4" />
                  Thomas Harbering
              </Link>
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm">
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>info@ems-suntec.de</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
