"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Users, Lightbulb, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CompanyIntro() {
  function getYearDifference(date1: Date, date2: Date): number {
    const diffInMs = Math.abs(date2.getTime() - date1.getTime());
    const msInYear = 1000 * 60 * 60 * 24 * 365.25;
    return Math.round(diffInMs / msInYear);
  }

  const years = getYearDifference(new Date('2024-10-01'), new Date())

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Warum Ems Suntec?</h2>
            <p className="text-lg text-gray-600 mb-8">
                Wir sind Ihr Partner für nachhaltige Energielösungen. Unser erfahrenes Team plant und installiert Solaranlagen präzise, zuverlässig und in höchster Qualität.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Erfahrenes Team</h3>
                  <p className="text-gray-600">
                      Ein Team qualifizierter Dachdecker und Elektriker.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovative Lösungen</h3>
                  <p className="text-gray-600">
                    Modernste Technologie und maßgeschneiderte Konzepte für maximale Effizienz.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Persönliche Betreuung</h3>
                  <p className="text-gray-600">Die Solaranlage wird für die Inbetriebnahme fachgerecht gewartet.</p>
                </div>
              </div>
            </div>

            <Button
              asChild
              className="bg-primary hover:primary"
            >
              <Link href="/about">
                Mehr über uns erfahren
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="/placeholder.svg?height=600&width=800"
              alt="SolarTech Team bei der Arbeit"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-bold text-primary">Jahrzehnte</div>
              <div className="text-gray-600">Erfahrung</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
