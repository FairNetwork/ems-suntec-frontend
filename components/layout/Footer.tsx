"use client"

import Link from "next/link"
import {Sun, Phone, Mail, MapPin, Facebook, Instagram, Linkedin} from "lucide-react"
import {WhatsApp} from "@/components/ui/whatsapp-icon";

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
                        <ul className="text-gray-400 text-sm list-disc list-inside">
                            <li><a href='/pv-anlage-altenberge' className="text-gray-400 hover:text-white transition-colors">Altenberge</a></li>
                            <li><a href='/pv-anlage-emsdetten' className="text-gray-400 hover:text-white transition-colors">Emsdetten</a></li>
                            <li><a href='/pv-anlage-greven' className="text-gray-400 hover:text-white transition-colors">Greven</a></li>
                            <li><a href='/pv-anlage-muenster' className="text-gray-400 hover:text-white transition-colors">Münster</a></li>
                            <li><a href='/pv-anlage-neuenkirchen' className="text-gray-400 hover:text-white transition-colors">Neuenkirchen</a></li>
                            <li><a href='/pv-anlage-nordwalde' className="text-gray-400 hover:text-white transition-colors">Nordwalde</a></li>
                            <li><a href='/pv-anlage-ochtrup' className="text-gray-400 hover:text-white transition-colors">Ochtrup</a></li>
                            <li><a href='/pv-anlage-rheine' className="text-gray-400 hover:text-white transition-colors">Rheine</a></li>
                            <li><a href='/pv-anlage-saerbeck' className="text-gray-400 hover:text-white transition-colors">Saerbeck</a></li>
                            <li><a href='/pv-anlage-steinfurt' className="text-gray-400 hover:text-white transition-colors">Steinfurt</a></li>
                            <li><a href='/pv-anlage-wettringen' className="text-gray-400 hover:text-white transition-colors">Wettringen</a></li>
                        </ul>
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
                                <WhatsApp className="w-4 h-4 fill-primary"/>
                                <span className="text-gray-400 text-sm"><span>Haiko Winter&nbsp;</span><span onClick={()=> window.open("tel:+491797884043")} className="cursor-pointer">+49 179 7884043</span></span>
                            </div><div className="flex items-center space-x-3">
                            <WhatsApp className="w-4 h-4 fill-primary"/>
                                <span className="text-gray-400 text-sm"><span>Thomas Harbering&nbsp;</span><span onClick={()=> window.open("tel:+491622913008")} className="cursor-pointer">+49 162 2913008</span></span>
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
                    <div className="flex flex-col h-full space-y-4">
                        <h3 className="text-lg font-semibold">Folgen Sie uns</h3>

                        <div className="flex space-x-4">
                            <a
                                href="https://www.facebook.com/people/Ems-Suntec-GmbH/61580646570250/"
                                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                            >
                                <Facebook className="w-5 h-5"/>
                            </a>
                            <a
                                href="https://www.instagram.com/ems.suntec?igsh=MTMzMTBvZThpcGRqbA=="
                                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                            >
                                <Instagram className="w-5 h-5"/>
                            </a>
                        </div>

                        <div className="flex-1"></div>

                        <div className="flex flex-col gap-4">
                            <a href="https://www.e3dc.com/" target="_blank" rel="noopener noreferrer" className="w-[100px] self-end">
                                <img src="/e3dc_Siegel_PARTNER_RGB.png" alt="E3DC zertifizierter Partner" className="w-[100px] self-end" />
                            </a>
                            <div className="self-end text-[#66FF06]">
                                powered by
                            </div>
                            <div className="flex flex-col items-end gap-4">
                                <a href="https://elektro-harbering.de/" target="_blank" rel="noopener noreferrer" className="w-[160px]">
                                    <img src="/eh_logo.png" alt="Elektro Harbering Logo" className="w-[160px]" />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} Ems Suntec GmbH. Alle Rechte vorbehalten.
                    </p>
                </div>
            </div>
        </footer>
    )
}
