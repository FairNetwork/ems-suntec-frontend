import ImpressumPage from "@/components/pages/ImpressumPage"
import { buildPageMetadata } from "@/constants/seo"

export const metadata = buildPageMetadata({
  title: "Impressum | Ems Suntec GmbH",
  description:
    "Impressum der Ems Suntec GmbH mit allen Pflichtangaben, Kontaktdaten, Registereintrag und Angaben gemaeß § 5 TMG.",
  path: "/impressum",
  keywords: [
    "Impressum Ems Suntec",
    "Ems Suntec GmbH Impressum",
    "Photovoltaik Impressum",
    "Anbieterkennzeichnung Ems Suntec",
  ],
  noIndex: true,
})

export default function ImpressumRoute() {
  return <ImpressumPage />
}
