import type { Metadata } from "next"
import type { LocalLandingPage } from "@/constants/landing-pages"

const siteUrl = "https://ems-suntec.de"
const defaultImage = "/header-image.png"

export const siteConfig = {
  siteName: "Ems Suntec",
  companyName: "Ems Suntec GmbH",
  url: siteUrl,
  defaultTitle: "Photovoltaik im Kreis Steinfurt",
  defaultDescription:
    "Ems Suntec ist Ihr Partner fuer Photovoltaik, PV-Anlagen und Solarberatung im Kreis Steinfurt und in Muenster.",
  locale: "de_DE",
  serviceArea:
    "Kreis Steinfurt, Steinfurt, Greven, Altenberge, Nordwalde, Saerbeck, Rheine, Emsdetten, Muenster, Wettringen, Ochtrup",
} as const

const sharedKeywords = [
  "Photovoltaik",
  "PV-Anlage",
  "Solaranlage",
  "Solarteur",
  "Photovoltaik Kreis Steinfurt",
  "Photovoltaik Muensterland",
  "Photovoltaik Beratung",
  "PV Montage",
  "Solarstrom",
  "Energieberatung",
  "Ems Suntec",
]

type BuildPageMetadataInput = {
  title: string
  description: string
  path: string
  keywords?: string[]
  image?: string
  noIndex?: boolean
  type?: "website" | "article"
}

export function buildPageMetadata({
  title,
  description,
  path,
  keywords = [],
  image = defaultImage,
  noIndex = false,
  type = "website",
}: BuildPageMetadataInput): Metadata {
  const canonicalUrl = new URL(path, siteUrl).toString()
  const imageUrl = new URL(image, siteUrl).toString()
  const mergedKeywords = Array.from(new Set([...sharedKeywords, ...keywords]))

  return {
    title,
    description,
    applicationName: siteConfig.siteName,
    keywords: mergedKeywords,
    category: "renewable energy",
    alternates: {
      canonical: path,
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
          nocache: true,
          googleBot: {
            index: false,
            follow: false,
            noimageindex: true,
            "max-image-preview": "none",
            "max-snippet": -1,
          },
        }
      : {
          index: true,
          follow: true,
          nocache: false,
          googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: siteConfig.siteName,
      locale: siteConfig.locale,
      type,
      images: [
        {
          url: imageUrl,
          width: 1920,
          height: 1080,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    other: {
      "geo.region": "DE-NW",
      "geo.placename": "Emsdetten",
      "format-detection": "telephone=yes",
    },
  }
}

export function buildLocalLandingMetadata(page: LocalLandingPage): Metadata {
  const cityKeywords = [
    `Photovoltaik ${page.city}`,
    `PV-Anlage ${page.city}`,
    `Solaranlage ${page.city}`,
    `Solarteur ${page.city}`,
    `Photovoltaik Beratung ${page.city}`,
    `Photovoltaik Installation ${page.city}`,
    `Solarfirma ${page.city}`,
    `${page.city} Photovoltaik`,
  ]

  return buildPageMetadata({
    title: page.metadata.title,
    description: page.metadata.description,
    path: `/${page.slug}`,
    keywords: cityKeywords,
  })
}
