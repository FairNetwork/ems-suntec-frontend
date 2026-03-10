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
      "Wir sind Ihr Partner für zukunftsfähige Energielösungen. Unser erfahrenes Team begleitet Sie bei der gesamten Konzeption und Installation. Ihr individuelles Produkt steht bei uns im Mittelpunkt.",
    features: [
      {
        title: "Erfahrenes Team",
        description:
          "Ein Team qualifizierter und erfahrener Dachdecker und Elektriker aus der Region sorgt für einen reibungslosen Ablauf, um Ihr Projekt zuverlässig zu realisieren.",
      },
      {
        title: "Innovative Lösungen",
        description:
          "Wir sind Ansprechpartner für den gesamten Kreis Steinfurt und darüber hinaus. Mit modernsten Technologien und maßgeschneiderten Konzepten aus einer Hand sorgen wir für eine fachgerechte Ausführung in höchster Qualität.",
      },
      {
        title: "Persönliche Betreuung",
        description:
          "Jede Situation ist einzigartig. Deshalb nehmen wir uns Zeit für eine eingehende kostenlose Beratung, um gemeinsam die beste Lösung für Ihr Haus oder Unternehmen zu finden. Auch nach der Inbetriebnahme stehen wir für Wartung und Rückfragen zur Verfügung.",
      },
    ],
    imageAlt: "Ems Suntec Team bei der Arbeit",
    experienceLabel: "Jahrzehnte",
  },
  projectTeaser: {
    heading: "Unsere neuesten Projekte",
    description:
      "Entdecken Sie eine Auswahl unserer erfolgreich realisierten Solarprojekte und lassen Sie sich von der Vielfalt unserer Lösungen inspirieren.",
  },
  contactTeaser: {
    heading: "Bereit für Ihre Solaranlage?",
    description:
      "Lassen Sie uns gemeinsam Ihre Energiezukunft planen. Kontaktieren Sie uns für eine kostenlose und unverbindliche Beratung.",
  },
}

export const localLandingPages = [
  {
    slug: "pv-anlage-steinfurt",
    city: "Steinfurt",
    metadata: {
      title: "PV-Anlage in Steinfurt | Photovoltaik von Ems Suntec",
      description:
        "Photovoltaik in Steinfurt: individuelle Planung, fachgerechte Montage und persönliche Beratung für Ihre PV-Anlage durch Ems Suntec.",
    },
    content: {
      hero: {
        title: "PV-Anlage in Steinfurt",
        highlightedWord: "Steinfurt",
        description:
          "Sie suchen eine PV-Anlage in Steinfurt? Ems Suntec begleitet Ihr Projekt von der ersten Idee bis zur betriebsbereiten Photovoltaikanlage und entwickelt eine Lösung, die zu Dach, Verbrauch und Budget passt.",
      },
      companyIntro: {
        heading: "Photovoltaik für Steinfurt mit klarer Planung",
        description:
          "In Steinfurt betreuen wir Solarprojekte für Eigenheime und kleinere Gewerbebetriebe mit einem durchgängigen Prozess aus Beratung, Auslegung und Montage. So entsteht eine PV-Anlage, die technisch sauber geplant und wirtschaftlich sinnvoll ist.",
        features: [
          {
            title: "Vor-Ort-Blick aufs Dach",
            description:
              "Wir betrachten in Steinfurt nicht nur die Dachfläche, sondern auch Verbrauchsprofil, Ausrichtung und künftige Anforderungen wie Speicher oder Wallbox.",
          },
          {
            title: "Kurze Wege in der Region",
            description:
              "Als regionaler Anbieter können wir Abstimmungen rund um Ihre Photovoltaikanlage in Steinfurt schnell und direkt umsetzen.",
          },
          {
            title: "Saubere Umsetzung",
            description:
              "Von der Unterkonstruktion bis zur elektrischen Einbindung setzen wir Ihre PV-Anlage in Steinfurt fachgerecht und mit festen Ansprechpartnern um.",
          },
        ],
        imageAlt: "Photovoltaik Beratung in Steinfurt",
        experienceLabel: "Regional",
      },
      projectTeaser: {
        heading: "Photovoltaik-Projekte aus dem Kreis Steinfurt",
        description:
          "Unsere Referenzen zeigen, wie unterschiedlich PV-Anlagen in der Region umgesetzt werden können und welche Lösungen sich für verschiedene Dachtypen eignen.",
      },
      contactTeaser: {
        heading: "Jetzt Beratung für Steinfurt anfragen",
        description:
          "Lassen Sie Ihre geplante Photovoltaikanlage in Steinfurt unverbindlich mit uns durchsprechen. Wir beraten praxisnah und transparent.",
      },
    },
  },
  {
    slug: "pv-anlage-greven",
    city: "Greven",
    metadata: {
      title: "PV-Anlage in Greven | Photovoltaik für Haus und Gewerbe",
      description:
        "Photovoltaik in Greven: Ems Suntec plant PV-Anlagen für Wohnhäuser und Unternehmen mit regionaler Betreuung und kostenloser Erstberatung.",
    },
    content: {
      hero: {
        title: "PV-Anlage in Greven",
        highlightedWord: "Greven",
        description:
          "Mit einer PV-Anlage in Greven machen Sie sich unabhängiger von steigenden Strompreisen. Ems Suntec plant Ihre Photovoltaik so, dass Ertrag, Eigenverbrauch und Zukunftssicherheit zusammenpassen.",
      },
      companyIntro: {
        heading: "Photovoltaik in Greven wirtschaftlich gedacht",
        description:
          "Gerade in Greven begleiten wir viele Eigentümer, die Solarstrom langfristig sinnvoll nutzen wollen. Wir achten auf eine belastbare Auslegung der Anlage und auf Komponenten, die zu Ihrem Nutzungsverhalten passen.",
        features: [
          {
            title: "Passend für Wohngebäude",
            description:
              "Wir entwickeln PV-Konzepte für Einfamilienhäuser und Mehrfamilienobjekte in Greven mit Fokus auf Eigenverbrauch und sinnvolle Erweiterbarkeit.",
          },
          {
            title: "Auch für Gewerbe interessant",
            description:
              "Für Betriebe in Greven planen wir Photovoltaik-Lösungen, die Lastprofile, Tagesverbrauch und mögliche Speicherstrategien berücksichtigen.",
          },
          {
            title: "Direkte Ansprechpartner",
            description:
              "Von der Anfrage bis zur Montage Ihrer PV-Anlage in Greven sprechen Sie mit einem Team, das die Region kennt und schnell reagieren kann.",
          },
        ],
        imageAlt: "Photovoltaik für Immobilien in Greven",
        experienceLabel: "Effizient",
      },
      projectTeaser: {
        heading: "Referenzen, die Orientierung geben",
        description:
          "Wer eine PV-Anlage in Greven plant, will reale Beispiele sehen. Unsere Projekte geben einen guten Eindruck von Leistungsklassen und Umsetzungsmöglichkeiten.",
      },
      contactTeaser: {
        heading: "Photovoltaik in Greven unverbindlich anfragen",
        description:
          "Sprechen Sie mit uns über Ihre Dachfläche, Ihren Stromverbrauch und die passende PV-Anlage für Greven. Die Erstberatung ist kostenlos.",
      },
    },
  },
  {
    slug: "pv-anlage-altenberge",
    city: "Altenberge",
    metadata: {
      title: "PV-Anlage in Altenberge | Photovoltaik regional geplant",
      description:
        "Photovoltaik in Altenberge: persönliche Beratung und fachgerechte Umsetzung Ihrer PV-Anlage durch Ems Suntec aus der Region.",
    },
    content: {
      hero: {
        title: "PV-Anlage in Altenberge",
        highlightedWord: "Altenberge",
        description:
          "Wenn Sie in Altenberge eine PV-Anlage planen, kommt es auf eine gute Abstimmung zwischen Dach, Verbrauch und Technik an. Ems Suntec entwickelt daraus eine durchdachte Photovoltaik-Lösung für Ihr Objekt.",
      },
      companyIntro: {
        heading: "Solarlösungen für Altenberge mit persönlicher Beratung",
        description:
          "In Altenberge setzen wir auf eine enge Abstimmung mit unseren Kunden. Statt Standardpaketen erhalten Sie eine Photovoltaikanlage, die auf Ihr Gebäude und Ihren Energiebedarf zugeschnitten ist.",
        features: [
          {
            title: "Individuelle Anlagengröße",
            description:
              "Wir dimensionieren Ihre Photovoltaikanlage in Altenberge nicht pauschal, sondern nach tatsächlichem Strombedarf und sinnvoller Dachnutzung.",
          },
          {
            title: "Technik mit Augenmaß",
            description:
              "Speicher, Wallbox oder spätere Erweiterungen werden in Altenberge früh mitgedacht, damit Ihre PV-Anlage langfristig flexibel bleibt.",
          },
          {
            title: "Betreuung aus der Region",
            description:
              "Kurze Abstimmungswege und ein direkter Kontakt machen die Umsetzung Ihrer Photovoltaik in Altenberge einfacher und verlässlicher.",
          },
        ],
        imageAlt: "Solarberatung für Kunden in Altenberge",
        experienceLabel: "Individuell",
      },
      projectTeaser: {
        heading: "Einblicke in umgesetzte Solarprojekte",
        description:
          "Unsere Referenzen zeigen, wie sich auch bei unterschiedlichen Dachformen wirtschaftliche Photovoltaik-Lösungen realisieren lassen.",
      },
      contactTeaser: {
        heading: "PV-Anlage in Altenberge jetzt anfragen",
        description:
          "Wir beraten Sie kostenlos zur passenden Photovoltaikanlage in Altenberge und klären mit Ihnen die wichtigsten technischen und wirtschaftlichen Fragen.",
      },
    },
  },
  {
    slug: "pv-anlage-nordwalde",
    city: "Nordwalde",
    metadata: {
      title: "PV-Anlage in Nordwalde | Photovoltaik mit regionalem Service",
      description:
        "Photovoltaik in Nordwalde: Ems Suntec plant und installiert PV-Anlagen mit Fokus auf Eigenverbrauch, Qualität und persönliche Betreuung.",
    },
    content: {
      hero: {
        title: "PV-Anlage in Nordwalde",
        highlightedWord: "Nordwalde",
        description:
          "Eine PV-Anlage in Nordwalde lohnt sich besonders dann, wenn Planung und Ausführung sauber zusammenspielen. Genau darauf ist Ems Suntec spezialisiert: regionale Photovoltaik mit klarer Struktur und solider Umsetzung.",
      },
      companyIntro: {
        heading: "Photovoltaik in Nordwalde für langfristige Entlastung",
        description:
          "Wir planen Solarlösungen in Nordwalde für Kunden, die dauerhaft Stromkosten senken und ihre Immobilie energetisch sinnvoll weiterentwickeln wollen.",
        features: [
          {
            title: "Fokus auf Eigenverbrauch",
            description:
              "Bei Ihrer PV-Anlage in Nordwalde betrachten wir, wie viel Solarstrom vor Ort genutzt werden kann und welche Erweiterungen dazu passen.",
          },
          {
            title: "Sorgfältige Auslegung",
            description:
              "Dachneigung, Ausrichtung und Verbrauch werden in Nordwalde gründlich bewertet, damit Ihre Photovoltaikanlage im Alltag überzeugt.",
          },
          {
            title: "Verlässliche Begleitung",
            description:
              "Von der Beratung bis zur Inbetriebnahme erhalten Sie für Ihre Solaranlage in Nordwalde feste Ansprechpartner und klare Rückmeldungen.",
          },
        ],
        imageAlt: "Photovoltaik Planung in Nordwalde",
        experienceLabel: "Verlässlich",
      },
      projectTeaser: {
        heading: "Beispiele für Photovoltaik aus der Umgebung",
        description:
          "Reale Projekte helfen bei der Orientierung. Unsere Referenzen zeigen, wie unterschiedlich Dachflächen und Anforderungen gelöst werden können.",
      },
      contactTeaser: {
        heading: "Unverbindliche Anfrage für Nordwalde",
        description:
          "Wenn Sie eine PV-Anlage in Nordwalde planen, besprechen wir mit Ihnen die passende Lösung unverbindlich und ohne Verkaufsdruck.",
      },
    },
  },
  {
    slug: "pv-anlage-saerbeck",
    city: "Saerbeck",
    metadata: {
      title: "PV-Anlage in Saerbeck | Photovoltaik nachhaltig umgesetzt",
      description:
        "Photovoltaik in Saerbeck: durchdachte PV-Anlagen für Wohnhäuser und Gewerbe. Beratung, Planung und Installation durch Ems Suntec.",
    },
    content: {
      hero: {
        title: "PV-Anlage in Saerbeck",
        highlightedWord: "Saerbeck",
        description:
          "Saerbeck steht für ein starkes Bewusstsein rund um erneuerbare Energien. Mit einer PV-Anlage von Ems Suntec setzen Sie in Saerbeck auf Photovoltaik, die nachhaltig gedacht und technisch sauber umgesetzt ist.",
      },
      companyIntro: {
        heading: "Photovoltaik für Saerbeck mit Blick auf Nachhaltigkeit",
        description:
          "Bei Projekten in Saerbeck stehen für viele Kunden nicht nur Kosten, sondern auch langfristige Energieeffizienz und ein stimmiges Gesamtkonzept im Vordergrund. Genau darauf richten wir unsere Planung aus.",
        features: [
          {
            title: "Nachhaltig geplant",
            description:
              "Wir entwickeln Ihre Photovoltaikanlage in Saerbeck so, dass Eigenversorgung, Zukunftsfähigkeit und technische Qualität sinnvoll zusammenkommen.",
          },
          {
            title: "Saubere Systemintegration",
            description:
              "Speicher, Wallbox oder spätere Erweiterungen lassen sich bei Ihrer PV-Anlage in Saerbeck früh in die Planung einbeziehen.",
          },
          {
            title: "Regional erreichbar",
            description:
              "Als Ansprechpartner aus der Region begleiten wir Ihre Photovoltaik in Saerbeck direkt, persönlich und mit kurzen Reaktionszeiten.",
          },
        ],
        imageAlt: "Nachhaltige Photovoltaik in Saerbeck",
        experienceLabel: "Nachhaltig",
      },
      projectTeaser: {
        heading: "Solarprojekte mit Praxisbezug",
        description:
          "Unsere Referenzen veranschaulichen, wie moderne Photovoltaik-Anlagen im regionalen Umfeld geplant und umgesetzt werden.",
      },
      contactTeaser: {
        heading: "PV-Beratung für Saerbeck sichern",
        description:
          "Wir beraten Sie kostenlos zur passenden Photovoltaikanlage in Saerbeck und zeigen, welche Lösung technisch und wirtschaftlich sinnvoll ist.",
      },
    },
  },
  {
    slug: "pv-anlage-rheine",
    city: "Rheine",
    metadata: {
      title: "PV-Anlage in Rheine | Photovoltaik für private und gewerbliche Dächer",
      description:
        "Photovoltaik in Rheine: Ems Suntec plant PV-Anlagen für Eigenheime, Mehrfamilienhäuser und Unternehmen mit regionaler Betreuung.",
    },
    content: {
      hero: {
        title: "PV-Anlage in Rheine",
        highlightedWord: "Rheine",
        description:
          "In Rheine lohnt sich Photovoltaik für viele Dachflächen und Nutzungsszenarien. Ems Suntec plant Ihre PV-Anlage so, dass Ertrag, Verbrauch und technische Voraussetzungen sinnvoll aufeinander abgestimmt sind.",
      },
      companyIntro: {
        heading: "Photovoltaik in Rheine für verschiedene Objektarten",
        description:
          "Ob Wohnhaus, vermietetes Objekt oder Gewerbefläche: In Rheine setzen wir Photovoltaik-Projekte mit einem klaren Fokus auf Wirtschaftlichkeit, Qualität und belastbare Planung um.",
        features: [
          {
            title: "Geeignet für komplexere Anforderungen",
            description:
              "Auch bei größeren oder gemischt genutzten Immobilien in Rheine planen wir PV-Anlagen strukturiert und nachvollziehbar.",
          },
          {
            title: "Technisch fundierte Umsetzung",
            description:
              "Wir achten in Rheine auf eine fachgerechte Kombination aus Modulen, Wechselrichter, Unterkonstruktion und optionalem Speicher.",
          },
          {
            title: "Regionale Projektbegleitung",
            description:
              "Ihre Photovoltaikanlage in Rheine wird von einem Team betreut, das nah dran ist und Abstimmungen effizient umsetzen kann.",
          },
        ],
        imageAlt: "Photovoltaik für Gebäude in Rheine",
        experienceLabel: "Praxisnah",
      },
      projectTeaser: {
        heading: "Referenzen für Wohnhaus und Gewerbe",
        description:
          "Sehen Sie sich an, wie Ems Suntec unterschiedliche Photovoltaik-Projekte in der Region löst und welche Anlagengrößen bereits realisiert wurden.",
      },
      contactTeaser: {
        heading: "Photovoltaik in Rheine unverbindlich besprechen",
        description:
          "Wenn Sie in Rheine eine PV-Anlage planen, unterstützen wir Sie mit einer kostenlosen Erstberatung und einer realistischen Einschätzung.",
      },
    },
  },
  {
    slug: "pv-anlage-emsdetten",
    city: "Emsdetten",
    metadata: {
      title: "PV-Anlage in Emsdetten | Photovoltaik direkt vom regionalen Fachbetrieb",
      description:
        "Photovoltaik in Emsdetten: Ems Suntec plant und installiert PV-Anlagen mit kurzen Wegen, direkter Betreuung und passender Auslegung.",
    },
    content: {
      hero: {
        title: "PV-Anlage in Emsdetten",
        highlightedWord: "Emsdetten",
        description:
          "Als regionaler Fachbetrieb begleiten wir Photovoltaik-Projekte direkt in Emsdetten. Wenn Sie eine PV-Anlage für Ihr Zuhause oder Ihr Unternehmen planen, erhalten Sie bei uns eine Lösung mit kurzen Wegen und direkter Abstimmung.",
      },
      companyIntro: {
        heading: "Photovoltaik in Emsdetten mit direktem Draht",
        description:
          "Emsdetten ist unser direkter Einzugsbereich. Dadurch können wir Beratungen, Vor-Ort-Termine und die Umsetzung Ihrer PV-Anlage besonders eng und effizient begleiten.",
        features: [
          {
            title: "Schnelle Abstimmung",
            description:
              "Bei Ihrer Photovoltaikanlage in Emsdetten profitieren Sie von kurzen Wegen, zügigen Rückmeldungen und einer direkten Erreichbarkeit.",
          },
          {
            title: "Stark in der Region verankert",
            description:
              "Wir kennen die Anforderungen vieler Immobilien in Emsdetten und planen PV-Anlagen passend für bestehende und neue Gebäudestrukturen.",
          },
          {
            title: "Umsetzung aus einer Hand",
            description:
              "Von der Planung bis zur fertigen Installation erhalten Sie Ihre Solaranlage in Emsdetten mit einem klar geführten Ablauf und festen Kontakten.",
          },
        ],
        imageAlt: "Regionale Photovoltaik in Emsdetten",
        experienceLabel: "Nah dran",
      },
      projectTeaser: {
        heading: "Projekte aus unserem direkten Umfeld",
        description:
          "Unsere Referenzen zeigen Photovoltaik-Lösungen aus der Region und geben eine gute Orientierung für Ihre geplante Anlage in Emsdetten.",
      },
      contactTeaser: {
        heading: "PV-Anlage in Emsdetten jetzt anfragen",
        description:
          "Sie möchten in Emsdetten mit Photovoltaik starten? Wir beraten Sie kostenlos und unverbindlich zu Ihrer passenden Anlagenlösung.",
      },
    },
  },
  {
    slug: "pv-anlage-muenster",
    city: "Münster",
    metadata: {
      title: "PV-Anlage in Münster | Photovoltaik für urbane Dachflächen",
      description:
        "Photovoltaik in Münster: Ems Suntec plant PV-Anlagen für Stadthäuser, Mehrfamilienobjekte und Gewerbeimmobilien mit regionaler Betreuung.",
    },
    content: {
      hero: {
        title: "PV-Anlage in Münster",
        highlightedWord: "Münster",
        description:
          "Auch in Münster wird Photovoltaik für viele Immobilien immer interessanter. Ems Suntec plant Ihre PV-Anlage so, dass urbane Dachflächen, Verbrauch und mögliche Erweiterungen sinnvoll zusammenpassen.",
      },
      companyIntro: {
        heading: "Photovoltaik in Münster für anspruchsvolle Dachsituationen",
        description:
          "In Münster betreuen wir Solarprojekte für Stadtimmobilien, Mehrfamilienhäuser und gewerbliche Objekte. Dabei achten wir besonders auf eine belastbare Planung und eine wirtschaftlich sinnvolle Anlagenkonfiguration.",
        features: [
          {
            title: "Geeignet für Stadtobjekte",
            description:
              "Wir planen Photovoltaikanlagen in Münster auch für komplexere Dachsituationen, unterschiedliche Verbrauchsstrukturen und spätere Erweiterungen.",
          },
          {
            title: "Wirtschaftlich durchdacht",
            description:
              "Bei Ihrer PV-Anlage in Münster betrachten wir Ertrag, Eigenverbrauch und Systemgröße so, dass die Lösung im Alltag überzeugt.",
          },
          {
            title: "Regionale Betreuung trotz Stadtnähe",
            description:
              "Sie erhalten für Ihr Photovoltaik-Projekt in Münster persönliche Ansprechpartner und eine Umsetzung mit kurzen Wegen aus der Region.",
          },
        ],
        imageAlt: "Photovoltaik für Gebäude in Münster",
        experienceLabel: "Durchdacht",
      },
      projectTeaser: {
        heading: "Referenzen für moderne Solarlösungen",
        description:
          "Unsere Projekte zeigen, wie Photovoltaik auf unterschiedlichen Dachflächen wirtschaftlich und technisch sauber umgesetzt werden kann.",
      },
      contactTeaser: {
        heading: "Jetzt Photovoltaik für Münster anfragen",
        description:
          "Wir beraten Sie kostenlos zur passenden PV-Anlage in Münster und besprechen mit Ihnen Ertrag, Anlagengröße und mögliche Erweiterungen.",
      },
    },
  },
  {
    slug: "pv-anlage-wettringen",
    city: "Wettringen",
    metadata: {
      title: "PV-Anlage in Wettringen | Photovoltaik für Eigenheime und Betriebe",
      description:
        "Photovoltaik in Wettringen: regionale Beratung und fachgerechte Installation Ihrer PV-Anlage durch Ems Suntec.",
    },
    content: {
      hero: {
        title: "PV-Anlage in Wettringen",
        highlightedWord: "Wettringen",
        description:
          "Wer in Wettringen eine PV-Anlage plant, sucht meist eine langfristige und unkomplizierte Lösung. Ems Suntec entwickelt Photovoltaik-Systeme, die auf Ihr Dach und Ihren Stromverbrauch abgestimmt sind.",
      },
      companyIntro: {
        heading: "Photovoltaik in Wettringen unkompliziert umgesetzt",
        description:
          "In Wettringen begleiten wir Solarprojekte mit einem klaren, verständlichen Ablauf. So erhalten Sie eine Photovoltaikanlage, die technisch passt und ohne unnötige Komplexität geplant wird.",
        features: [
          {
            title: "Einfacher Projektstart",
            description:
              "Wir klären früh die entscheidenden Punkte für Ihre PV-Anlage in Wettringen und geben eine realistische Einschätzung zu Dach und Ertrag.",
          },
          {
            title: "Sinnvolle Technik",
            description:
              "Ihre Photovoltaikanlage in Wettringen wird nicht überladen geplant, sondern mit den Komponenten, die für Ihren Bedarf wirklich sinnvoll sind.",
          },
          {
            title: "Persönlicher Kontakt",
            description:
              "Von der ersten Anfrage bis zur Umsetzung bleibt Ihre Solaranlage in Wettringen in den Händen eines erreichbaren regionalen Teams.",
          },
        ],
        imageAlt: "Photovoltaik Beratung in Wettringen",
        experienceLabel: "Klar",
      },
      projectTeaser: {
        heading: "Praxisnahe Beispiele aus der Region",
        description:
          "Ein Blick in unsere Referenzen hilft bei der Einschätzung, welche Photovoltaik-Lösung für Ihre Immobilie in Frage kommt.",
      },
      contactTeaser: {
        heading: "Kostenlose PV-Beratung für Wettringen",
        description:
          "Wir unterstützen Sie bei der Planung Ihrer PV-Anlage in Wettringen mit einer unverbindlichen Beratung und einer ehrlichen Einschätzung.",
      },
    },
  },
  {
    slug: "pv-anlage-ochtrup",
    city: "Ochtrup",
    metadata: {
      title: "PV-Anlage in Ochtrup | Photovoltaik effizient geplant",
      description:
        "Photovoltaik in Ochtrup: Ems Suntec plant PV-Anlagen für private und gewerbliche Immobilien mit Fokus auf Effizienz und regionale Betreuung.",
    },
    content: {
      hero: {
        title: "PV-Anlage in Ochtrup",
        highlightedWord: "Ochtrup",
        description:
          "Mit einer PV-Anlage in Ochtrup investieren Sie in dauerhaft niedrigere Energiekosten und mehr Unabhängigkeit. Ems Suntec plant Ihre Photovoltaik mit Blick auf Effizienz, Qualität und langfristige Nutzbarkeit.",
      },
      companyIntro: {
        heading: "Photovoltaik in Ochtrup mit Fokus auf Leistung und Nutzen",
        description:
          "Wir betreuen in Ochtrup Solarprojekte für private und gewerbliche Kunden, die Wert auf eine saubere Auslegung und eine wirtschaftlich nachvollziehbare Lösung legen.",
        features: [
          {
            title: "Effizient dimensioniert",
            description:
              "Ihre PV-Anlage in Ochtrup wird so geplant, dass Leistung, Dachfläche und Verbrauch in einem vernünftigen Verhältnis stehen.",
          },
          {
            title: "Für Haus und Betrieb geeignet",
            description:
              "Wir setzen Photovoltaik in Ochtrup sowohl auf privaten Dächern als auch auf gewerblich genutzten Immobilien strukturiert um.",
          },
          {
            title: "Regional organisiert",
            description:
              "Als Partner aus der Region begleiten wir Ihr Photovoltaik-Projekt in Ochtrup verlässlich und mit festen Ansprechpartnern.",
          },
        ],
        imageAlt: "Photovoltaik Projekt in Ochtrup",
        experienceLabel: "Effektiv",
      },
      projectTeaser: {
        heading: "Referenzen für unterschiedliche Dachtypen",
        description:
          "Unsere Projekte zeigen, wie sich Photovoltaik-Anlagen in der Region auf verschiedenen Gebäuden wirtschaftlich umsetzen lassen.",
      },
      contactTeaser: {
        heading: "PV-Anlage in Ochtrup unverbindlich planen",
        description:
          "Fragen Sie Ihre Photovoltaik-Beratung für Ochtrup jetzt an und erhalten Sie eine fundierte erste Einschätzung für Ihr Vorhaben.",
      },
    },
  },
]

export const localLandingPagesBySlug = Object.fromEntries(
  localLandingPages.map((page) => [page.slug, page]),
) as Record<string, LocalLandingPage>
