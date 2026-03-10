import LandingPage from "@/components/pages/LandingPage"
import { defaultLandingPageContent } from "@/constants/landing-pages"
import { buildPageMetadata } from "@/constants/seo"

export const metadata = buildPageMetadata({
  title: "Photovoltaik im Kreis Steinfurt | PV-Anlagen von Ems Suntec",
  description:
    "Ems Suntec plant und installiert Photovoltaik und PV-Anlagen im Kreis Steinfurt und in Muenster. Jetzt kostenlose Beratung fuer Ihre Solaranlage anfragen.",
  path: "/",
  keywords: [
    "Photovoltaik Kreis Steinfurt",
    "PV Anlage Kreis Steinfurt",
    "Solaranlage Emsdetten",
    "Photovoltaik Muenster",
    "Solarteur Rheine",
    "PV Beratung Greven",
    "Photovoltaik Steinfurt",
  ],
})

export default function HomePage() {
  return <LandingPage content={defaultLandingPageContent} pageKey="home" />
}
