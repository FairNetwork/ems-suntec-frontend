"use client"

import Link from "next/link"
import {Sun, Phone, Mail, MapPin, Facebook, Instagram, Linkedin} from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                                <Sun className="w-5 h-5 text-white"/>
                            </div>
                            <span className="text-xl font-bold">Ems Suntec</span>
                        </div>
                        <p className="text-gray-400 text-sm">
                            Photovoltaik im Kreis Steinfurt
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Navigation</h3>
                        <div className="space-y-2">
                            <Link href="/" className="block text-gray-400 hover:text-white transition-colors text-sm">
                                Home
                            </Link>
                            <Link href="/about"
                                  className="block text-gray-400 hover:text-white transition-colors text-sm">
                                Über uns
                            </Link>
                            <Link href="/projects"
                                  className="block text-gray-400 hover:text-white transition-colors text-sm">
                                Referenzen
                            </Link>
                            <Link href="/contact"
                                  className="block text-gray-400 hover:text-white transition-colors text-sm">
                                Kontakt
                            </Link>
                            <Link href="/impressum"
                                  className="block text-gray-400 hover:text-white transition-colors text-sm">
                                Impressum
                            </Link>
                            <Link href="/documents/AGB.pdf"
                                  className="block text-gray-400 hover:text-white transition-colors text-sm">
                                AGBs
                            </Link>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Kontakt</h3>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <Phone className="w-4 h-4 text-primary"/>
                                <span className="text-gray-400 text-sm">+49 179 7884043</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Mail className="w-4 h-4 text-primary"/>
                                <span className="text-gray-400 text-sm">info@ems-suntec.de</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <MapPin className="w-4 h-4 text-primary"/>
                                <span className="text-gray-400 text-sm">Diekstraße 23, 48282 Emsdetten</span>
                            </div>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Folgen Sie uns</h3>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                            >
                                <Facebook className="w-5 h-5"/>
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                            >
                                <Instagram className="w-5 h-5"/>
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                            >
                                <Linkedin className="w-5 h-5"/>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} Ems Suntec UG. Alle Rechte vorbehalten.
                    </p>
                </div>
            </div>
        </footer>
    )
}
