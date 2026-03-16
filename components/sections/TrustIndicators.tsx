"use client"

import {motion} from "framer-motion"
import {Star, Building2, Award, LucideSparkle} from "lucide-react"

const indicators = [
    {
        icon: Star,
        value: "",
        label: "Kundenbewertung",
        description: "Hohe Zufriedenheit bei unseren Kunden.\n(Google-Bewertungen ansehen)",
        link: "https://www.google.com/search?sca_esv=deb7502a4a88900f&rlz=1C1CHBF_deDE1178DE1178&tbm=lcl&sxsrf=AE3TifM1BVFwWlW2kNJdNtA7wL1ftZYAVA:1757144056755&q=Ems+Suntec+GmbH+Reviews&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxI2MrAwNrY0N7Y0MjE0sjQyNTcx38DI-IpR3DW3WCG4NK8kNVnBPTfJQyEotSwztbx4ESsuGQA8M3FNTgAAAA&rldimm=2083397392412925747&hl=en-DE&sa=X&ved=2ahUKEwiXysnaz8OPAxUaRvEDHc9wBfwQ9fQKegQITBAF&biw=1920&bih=911&dpr=1#lkt=LocalPoiReviews",
    },
    {
        icon: Building2,
        value: "",
        label: "Regional",
        description: "Enge Zusammenarbeit mit Partnern aus der Region",
    },
    {
        icon: Award,
        value: "",
        label: "Garantie",
        description: "Wir verwenden nur Qualitätsprodukte mit Leistungsgarantien",
    },
    {
        icon: LucideSparkle,
        value: "",
        label: "Unkompliziert",
        description: "Einfach per WhatsApp erreichbar",
    },
]

type TrustIndicatorsProps = {
    inverted?: boolean
}

export default function TrustIndicators({inverted = false}: TrustIndicatorsProps) {
    const handleClick = (link?: string) => {
        if (link) {
            window.open(link, "_blank")
        }
    }

    return (
        <section className={`py-16 border-b ${inverted ? "bg-primary border-primary/80" : "bg-white border-gray-100"}`}>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {indicators.map((indicator, index) => (
                        <motion.div
                            key={index}
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.6, delay: index * 0.1}}
                            viewport={{once: true}}
                            className={`text-center ${indicator.link ? " decoration-2 cursor-pointer" : ""}`}
                            onClick={() => handleClick(indicator.link)}
                        >
                            <div
                                className={`w-16 h-16 rounded-full flex items-center relative justify-center mx-auto mb-4 ${inverted ? "bg-white" : "bg-accent"}`}>
                                <indicator.icon className="w-8 h-8 text-primary"/>
                                {indicator.link && <img src="./google.webp" alt="google" className="absolute w-[20px] right-0 bottom-0"/>}
                            </div>
                            <div className={`text-2xl md:text-3xl font-bold mb-1 ${inverted ? "text-white" : "text-gray-900"}`}>{indicator.value}</div>
                            <div
                                className={`text-sm font-medium mb-1 ${inverted ? "text-white" : "text-gray-900"}`}
                               >{indicator.label}</div>
                            <div className={`text-xs whitespace-pre-line ${inverted ? "text-blue-50/90" : "text-gray-500"}`}>{indicator.description}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
