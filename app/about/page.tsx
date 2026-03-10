import AboutPage from "@/components/pages/AboutPage"
import { buildPageMetadata } from "@/constants/seo"

export const metadata = buildPageMetadata({
  title: "Über Ems Suntec | Photovoltaik-Experten aus Emsdetten",
  description:
    "Lernen Sie Ems Suntec kennen: Ihr regionaler Fachbetrieb fuer Photovoltaik, PV-Anlagen und nachhaltige Energielösungen im Kreis Steinfurt und in Muenster.",
  path: "/about",
  keywords: [
    "ueber Ems Suntec",
    "Photovoltaik Unternehmen Emsdetten",
    "Solarfirma Kreis Steinfurt",
    "PV Experten Muensterland",
    "Photovoltaik Fachbetrieb",
    "Solarteur Emsdetten",
  ],
})

export default function AboutRoute() {
  return <AboutPage />
}
