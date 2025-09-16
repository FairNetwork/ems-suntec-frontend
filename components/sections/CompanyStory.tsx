"use client"

import {motion} from "framer-motion"

export default function CompanyStory() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{opacity: 0, x: -30}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{duration: 0.8}}
                        viewport={{once: true}}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Unsere Geschichte</h2>
                        <div className="space-y-4 text-gray-600">
                            <p>
                                Ems Suntec wurde 2024 von Thomas Harbering und Haiko Winter gegründet – mit dem Ziel,
                                das Münsterland mit hochwertigen Photovoltaiklösungen zu versorgen und aktiv zur
                                Energiewende beizutragen. Aus einer regionalen Idee ist ein moderner Dienstleister für
                                Solartechnik entstanden.
                            </p>
                            <p>
                                Seitdem konnten wir zahlreiche Projekte erfolgreich umsetzen. Qualität, Verlässlichkeit
                                und eine ehrliche Beratung stehen dabei immer im Mittelpunkt.
                            </p>
                            <p>
                                Mit einem engagierten Team begleiten wir unsere Kundinnen und Kunden von der ersten
                                Planung bis zur Inbetriebnahme – und schaffen so Schritt für Schritt mehr
                                Energieunabhängigkeit und eine nachhaltige Zukunft.
                            </p>

                        </div>
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0, x: 30}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{duration: 0.8}}
                        viewport={{once: true}}
                        className="relative"
                    >
                        <img
                            src="/persons/Team.jpg"
                            alt="SolarTech Solutions Firmengebäude"
                            className="rounded-lg shadow-2xl"
                        />
                        {/*<div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-lg shadow-lg">*/}
                        {/*  <div className="text-3xl font-bold">500+</div>*/}
                        {/*  <div className="text-sm">Projekte realisiert</div>*/}
                        {/*</div>*/}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
