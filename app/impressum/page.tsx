"use client"

import {motion} from "framer-motion"

export default function Impressum() {
    return (
        <motion.main
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
            className="min-h-screen pt-20"
        >
            <div className="max-w-4xl mx-auto p-6 text-black">
                <h1 className="text-3xl font-bold mb-4">Impressum</h1>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold">Angaben gemäß § 5 TMG</h2>
                    <p>Ems Suntec UG (haftungsbeschränkt)</p>
                    <p>Diekstraße 23</p>
                    <p>48282 Emsdetten</p>
                    <p>Deutschland</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold">Vertreten durch</h2>
                    <p>Thomas Harbering & Haiko Winter (Geschäftsführer)</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold">Kontakt</h2>
                    <p>Telefon: +49 179 7884043</p>
                    <p>E-Mail: info@ems-suntec.de</p>
                    <p>Website: <a href="https://ems-suntec.de"
                                   className="text-[#03DAC5] underline">https://ems-suntec.de</a></p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold">Registereintrag</h2>
                    <p>Eintragung im Handelsregister.</p>
                    <p>Registergericht: Amtsgericht Steinfurt</p>
                    <p>Handelsregisternummer: HRB 15122</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold">Umsatzsteuer-ID</h2>
                    <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:</p>
                    <p>311/5826/1033</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold">Berufshaftpflichtversicherung</h2>
                    <p>Name und Anschrift der Versicherung</p>
                    <p>Geltungsraum der Versicherung: Deutschland</p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
                    <p>Thomas Harbering</p>
                    <p>Adresse wie oben</p>
                </section>
            </div>
        </motion.main>
    )
}
