"use client"

import {motion} from "framer-motion"
import {Mail, Phone} from "lucide-react"

const teamMembers = [
    {
        name: "Thomas Harbering",
        position: "Geschäftsführer & Mitgründer",
        image: "/persons/Thomas.jpg",
        description: "Als staatlich geprüfter Techniker im Fach Elektrotechnik und Inhaber des Unternehmens Elektro Harbering bringe ich meine gesamte Erfahrung auf dem Gebiet bei der Ems Suntec ein und sorge für die reibungslose Umsetzung Ihres individuellen Projekts.",
        phone: "tel:+491622913008",
        email: "thomas@ems-suntec.de"
    },
    {
        name: "Haiko Winter",
        position: "Geschäftsführer & Mitgründer",
        image: "/persons/Haiko.jpg",
        description: "Ich unterstütze Sie bei der Planung und Konzeption Ihrer persönlichen Photovoltaik-Anlage. Das technische Know-how bringe ich als staatlich geprüfter Techniker im Bereich Konstruktionstechnik mit. Durch meine jahrelange Erfahrung im Projektgeschäft mit viel Kundenkontakt helfe ich Ihnen die ideale Lösung für Ihr Vorhaben zu finden.",
        phone: "tel:+491797884043",
        email: "haiko@ems-suntec.de"
    }
]


export default function TeamSection() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.8}}
                    viewport={{once: true}}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ems Suntec</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Lernen Sie die Experten kennen, die Ihre Solaranlage planen und installieren.
                    </p>
                </motion.div>

                <div className="grid gap-8
                grid-cols-1
                sm:grid-cols-[repeat(auto-fit,minmax(250px,350px))]
                justify-center">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{opacity: 0, y: 30}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.8, delay: index * 0.2}}
                            viewport={{once: true}}
                            className="bg-white rounded-lg shadow-lg overflow-hidden text-center flex flex-col"
                        >
                            <img
                                src={member.image || "/placeholder.svg"}
                                alt={member.name}
                                className="w-full aspect-[4/5] object-cover object-top"
                            />
                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                                <p className="text-primary font-medium mb-3">{member.position}</p>
                                <p className="text-gray-600 mb-4">{member.description}</p>

                                <div className="flex justify-center space-x-4 mt-auto">
                                    <a
                                        href={member.phone}
                                        className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                                    >
                                        <Phone className="w-5 h-5"/>
                                    </a>
                                    <a
                                        href={`mailto:${member.email}`}
                                        className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                                    >
                                        <Mail className="w-5 h-5"/>
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                    ))}
                </div>
            </div>
        </section>
    )
}
