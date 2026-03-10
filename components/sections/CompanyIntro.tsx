"use client"

import {motion} from "framer-motion"
import Link from "next/link"
import {ArrowRight, Users, Lightbulb, Heart} from "lucide-react"
import {Button} from "@/components/ui/button"
import type { CompanyIntroContent } from "@/constants/landing-pages"

type CompanyIntroProps = {
    content: CompanyIntroContent
}

export default function CompanyIntro({content}: CompanyIntroProps) {
    const featureIcons = [Users, Lightbulb, Heart]

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{opacity: 0, x: -30}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{duration: 0.8}}
                        viewport={{once: true}}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{content.heading}</h2>
                        <p className="text-lg text-gray-600 mb-8">
                            {content.description}
                        </p>

                        <div className="space-y-6 mb-8">
                            {content.features.map((feature, index) => {
                                const Icon = featureIcons[index] ?? Heart

                                return (
                                    <div key={feature.title} className="flex items-start space-x-4">
                                        <div
                                            className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Icon className="w-6 h-6 text-primary"/>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                                            <p className="text-gray-600">{feature.description}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        <Button
                            asChild
                            className="bg-primary hover:primary"
                        >
                            <Link href="/about">
                                Mehr über uns erfahren
                                <ArrowRight className="ml-2 w-4 h-4"/>
                            </Link>
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0, x: 30}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{duration: 0.8}}
                        viewport={{once: true}}
                        className="relative"
                    >
                        <img
                            src="/inovation.png"
                            alt={content.imageAlt}
                            className="rounded-lg shadow-2xl"
                        />
                        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                            <div className="text-3xl font-bold text-primary">{content.experienceLabel}</div>
                            <div className="text-gray-600">Erfahrung</div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
