import feature1 from "../assets/icons/feature-section-1.png"
import feature2 from "../assets/icons/feature-section-2.png"
import feature3 from "../assets/icons/feature-section-3.png"
import feature4 from "../assets/icons/feature-section-4.png"

export const useHomeFeatures = () => {
    return [
        {
            title: 'Persönliche Beratung vor Ort',
            description: 'Wir prüfen Ihren Bedarf, die verfügbare Dachfläche und Ihre Stromkosten und erstellen ein individuelles Angebot.',
            imageUrl: feature1
        },{
            title: 'Rundum-Sorglos-Service',
            description: 'Wir wählen die optimalen Komponenten für Ihre Photovoltaikanlage aus und planen die bestmögliche Ausrichtung.',
            imageUrl: feature2
        },{
            title: 'Professionelle Installation',
            description: 'Unsere Experten installieren Ihre Photovoltaikanlage fachgerecht und nach höchsten Standards.',
            imageUrl: feature3
        },{
            title: 'Alles aus einer Hand',
            description: 'Wir übernehmen für Sie die Anmeldung bei Ihrem Netzbetreiber und Energieversorger.',
            imageUrl: feature4
        },
    ]
}
