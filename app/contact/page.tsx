import ContactPage from "@/components/pages/ContactPage"
import { buildPageMetadata } from "@/constants/seo"

export const metadata = buildPageMetadata({
  title: "Kontakt | Beratung fuer Ihre PV-Anlage",
  description:
    "Jetzt Kontakt zu Ems Suntec aufnehmen und kostenlose Beratung fuer Ihre Photovoltaik in Steinfurt, Emsdetten, Rheine, Greven, Muenster und Umgebung anfragen.",
  path: "/contact",
  keywords: [
    "Kontakt Photovoltaik",
    "PV Beratung anfragen",
    "Solarberatung Kreis Steinfurt",
    "Photovoltaik Kontakt Emsdetten",
    "PV Angebot Muensterland",
    "Solarfirma kontaktieren",
  ],
})

export default function ContactRoute() {
  return <ContactPage />
}
