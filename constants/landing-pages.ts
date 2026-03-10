export type HeroContent = {
  title: string
  highlightedWord?: string
  description: string
}

export type CompanyFeature = {
  title: string
  description: string
}

export type CompanyIntroContent = {
  heading: string
  description: string
  features: CompanyFeature[]
  imageAlt: string
  experienceLabel: string
}

export type ProjectTeaserContent = {
  heading: string
  description: string
}

export type ContactTeaserContent = {
  heading: string
  description: string
}

export type LandingPageContent = {
  hero: HeroContent
  companyIntro: CompanyIntroContent
  projectTeaser: ProjectTeaserContent
  contactTeaser: ContactTeaserContent
}

export type LocalLandingPage = {
  slug: string
  city: string
  metadata: {
    title: string
    description: string
  }
  content: LandingPageContent
}

const companyFeatures = (city: string): CompanyFeature[] => [
  {
    title: "Erfahrenes Team",
    description:
      `Ein Team qualifizierter und erfahrener Dachdecker und Elektriker aus der Region realisiert Ihr PV-Projekt in ${city} zuverlaessig und sauber aus einer Hand.`,
  },
  {
    title: "Innovative Loesungen",
    description:
      `Wir planen Photovoltaikanlagen fuer Privat- und Gewerbeobjekte in ${city} mit modernen Komponenten, kurzen Wegen und einer fachgerechten Umsetzung.`,
  },
  {
    title: "Persoenliche Betreuung",
    description:
      `Jede Immobilie ist anders. Deshalb beraten wir Sie in ${city} individuell, kostenlos und unverbindlich und bleiben auch nach der Inbetriebnahme Ihr Ansprechpartner.`,
  },
]

export const defaultLandingPageContent: LandingPageContent = {
  hero: {
    title: "Ihre Zukunft ist solar",
    highlightedWord: "solar",
    description:
      "Entdecken Sie die Kraft der Sonne und nutzen Sie nachhaltige Stromerzeugung, um Ihre Energiekosten dauerhaft zu senken. Eine stetig wachsende Zahl zufriedener Kunden vertraut bereits auf unsere Expertise.",
  },
  companyIntro: {
    heading: "Warum Ems Suntec?",
    description:
      "Wir sind Ihr Partner fuer zukunftsfaehige Energielösungen. Unser erfahrenes Team begleitet Sie bei der gesamten Konzeption und Installation. Ihr individuelles Produkt steht bei uns im Mittelpunkt.",
    features: [
      {
        title: "Erfahrenes Team",
        description:
          "Ein Team qualifizierter und erfahrener Dachdecker und Elektriker aus der Region sorgt fuer einen reibungslosen Ablauf, um Ihr Projekt zuverlaessig zu realisieren.",
      },
      {
        title: "Innovative Loesungen",
        description:
          "Wir sind Ansprechpartner fuer den gesamten Kreis Steinfurt und darueber hinaus. Mit modernsten Technologien und massgeschneiderten Konzepten aus einer Hand sorgen wir fuer eine fachgerechte Ausfuehrung in hoechster Qualitaet.",
      },
      {
        title: "Persoenliche Betreuung",
        description:
          "Jede Situation ist einzigartig. Deshalb nehmen wir uns Zeit fuer eine eingehende kostenlose Beratung, um gemeinsam die beste Loesung fuer Ihr Haus oder Unternehmen zu finden. Auch nach der Inbetriebnahme stehen wir fuer Wartung und Rueckfragen zur Verfuegung.",
      },
    ],
    imageAlt: "Ems Suntec Team bei der Arbeit",
    experienceLabel: "Jahrzehnte",
  },
  projectTeaser: {
    heading: "Unsere neuesten Projekte",
    description:
      "Entdecken Sie eine Auswahl unserer erfolgreich realisierten Solarprojekte und lassen Sie sich von der Vielfalt unserer Loesungen inspirieren.",
  },
  contactTeaser: {
    heading: "Bereit fuer Ihre Solaranlage?",
    description:
      "Lassen Sie uns gemeinsam Ihre Energiezukunft planen. Kontaktieren Sie uns fuer eine kostenlose und unverbindliche Beratung.",
  },
}

const createLocalLandingPage = (city: string, slugCity = city): LocalLandingPage => ({
  slug: `pv-anlage-${slugCity.toLowerCase()}`,
  city,
  metadata: {
    title: `PV-Anlage in ${city} | Photovoltaik von Ems Suntec`,
    description:
      `Photovoltaik in ${city}: Beratung, Planung und Installation Ihrer PV-Anlage durch Ems Suntec. Jetzt kostenlos und unverbindlich anfragen.`,
  },
  content: {
    hero: {
      title: `PV-Anlage in ${city}`,
      highlightedWord: city,
      description:
        `Ems Suntec plant und installiert Ihre Photovoltaikanlage in ${city}. Senken Sie dauerhaft Ihre Stromkosten und setzen Sie auf eine nachhaltige Energieversorgung mit einem regionalen Fachbetrieb.`,
    },
    companyIntro: {
      heading: `Photovoltaik fuer ${city} mit regionalem Fokus`,
      description:
        `Wir begleiten Ihr Solarprojekt in ${city} von der ersten Beratung ueber die Planung bis zur fachgerechten Montage. Sie erhalten eine individuelle Loesung, abgestimmt auf Gebaeude, Verbrauch und Zukunftsplaene.`,
      features: companyFeatures(city),
      imageAlt: `Photovoltaik-Beratung fuer Kunden in ${city}`,
      experienceLabel: "Regional",
    },
    projectTeaser: {
      heading: `Solarprojekte aus der Region`,
      description:
        `Sehen Sie sich realisierte Photovoltaik-Projekte von Ems Suntec an und verschaffen Sie sich einen Eindruck, wie wir Anlagen in ${city} und Umgebung umsetzen.`,
    },
    contactTeaser: {
      heading: `Jetzt PV-Beratung fuer ${city} anfragen`,
      description:
        `Wir beraten Sie kostenlos und unverbindlich zu Ihrer PV-Anlage in ${city}. Gemeinsam finden wir die passende Loesung fuer Ihr Dach, Ihren Strombedarf und Ihr Budget.`,
    },
  },
})

export const localLandingPages = [
  createLocalLandingPage("Steinfurt"),
  createLocalLandingPage("Greven"),
  createLocalLandingPage("Altenberge"),
  createLocalLandingPage("Nordwalde"),
  createLocalLandingPage("Saerbeck"),
  createLocalLandingPage("Rheine"),
  createLocalLandingPage("Emsdetten"),
  createLocalLandingPage("Münster", "muenster"),
  createLocalLandingPage("Wettringen"),
  createLocalLandingPage("Ochtrup"),
]

export const localLandingPagesBySlug = Object.fromEntries(
  localLandingPages.map((page) => [page.slug, page]),
) as Record<string, LocalLandingPage>
