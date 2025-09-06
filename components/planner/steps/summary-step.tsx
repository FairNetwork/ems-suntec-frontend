"use client"

import {useState} from "react"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {Button} from "@/components/ui/button"
import {Badge} from "@/components/ui/badge"
import {Separator} from "@/components/ui/separator"
import {CheckCircle, Send, RotateCcw} from "lucide-react"
import type {FormData} from "../solar-planner-dialog"
import {sendPlannerMail} from "@/utils/email";

interface SummaryStepProps {
    formData: FormData
    onReset: () => void
}

export function SummaryStep({formData, onReset}: SummaryStepProps) {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [error, setError] = useState(false)

    const handleSubmit = async () => {
        setIsSubmitting(true)
        setError(false)

        const result = await sendPlannerMail(formData);

        if (result === 200) {
            setIsSubmitted(true)
        } else {
            setError(true)
        }

        setIsSubmitting(false)
    }

    if (isSubmitted) {
        return (
            <div className="text-center space-y-6">
                <div className="space-y-4">
                    <CheckCircle className="w-16 h-16 text-green-600 mx-auto"/>
                    <h2 className="text-2xl font-bold text-green-600">Vielen Dank!</h2>
                    <p className="text-muted-foreground max-w-md mx-auto">
                        Ihre Solaranlagen-Planung wurde erfolgreich übermittelt. Wir werden uns in Kürze bei Ihnen
                        melden.
                    </p>
                </div>
                <Button onClick={onReset} variant="outline">
                    <RotateCcw className="w-4 h-4 mr-2"/>
                    Neue Planung starten
                </Button>
            </div>
        )
    }

    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Zusammenfassung Ihrer Solaranlagen-Planung</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    {/* Gebäude */}
                    <div className="space-y-3">
                        <h3 className="font-semibold text-lg">Gebäude</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            <div>
                                <span className="font-medium">Gebäudetyp:</span> {formData.buildingType}
                            </div>
                            {formData.buildingYear && (
                                <div>
                                    <span className="font-medium">Baujahr:</span> {formData.buildingYear}
                                </div>
                            )}
                            <div>
                                <span className="font-medium">Dachform:</span> {formData.roofType}
                            </div>
                            <div>
                                <span className="font-medium">Dachneigung:</span> {formData.roofAngle}°
                            </div>
                            {formData.roofDirection.length > 0 && (
                                <div>
                                    <span className="font-medium">Dachausrichtung:</span>{" "}
                                    {formData.roofDirection.map((dir) => (
                                        <Badge key={dir} variant="secondary" className="ml-1">
                                            {dir}
                                        </Badge>
                                    ))}
                                </div>
                            )}
                            {formData.roofArea && (
                                <div>
                                    <span className="font-medium">Dachfläche:</span> {formData.roofArea} m²
                                </div>
                            )}
                            <div>
                                <span className="font-medium">Dachmaterial:</span> {formData.roofMaterial}
                            </div>
                        </div>
                    </div>

                    <Separator/>

                    {/* Energie */}
                    <div className="space-y-3">
                        <h3 className="font-semibold text-lg">Energieversorgung</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            <div>
                                <span
                                    className="font-medium">Stromverbrauch:</span> {formData.currentConsumption} kWh/Jahr
                            </div>
                            <div>
                                <span className="font-medium">Bestehende PV-Anlage:</span> {formData.existingPV}
                            </div>
                        </div>
                    </div>

                    <Separator/>

                    {/* Wünsche */}
                    <div className="space-y-3">
                        <h3 className="font-semibold text-lg">Wünsche & Optionen</h3>
                        <div className="space-y-2 text-sm">
                            {formData.additionalComponents.length > 0 && (
                                <div>
                                    <span className="font-medium">Zusatzkomponenten:</span>{" "}
                                    {formData.additionalComponents.map((comp) => (
                                        <Badge key={comp} variant="secondary" className="ml-1">
                                            {comp}
                                        </Badge>
                                    ))}
                                </div>
                            )}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                    <span className="font-medium">Stromspeicher:</span> {formData.storage}
                                </div>
                                <div>
                                    <span className="font-medium">Wallbox:</span> {formData.wallbox}
                                </div>
                                <div>
                                    <span className="font-medium">Notstrom:</span> {formData.emergencyPower}
                                </div>
                            </div>
                            <div>
                                <span className="font-medium">Starttermin:</span> {formData.startDate}
                            </div>
                            {formData.budget && (
                                <div>
                                    <span className="font-medium">Budget:</span> {formData.budget}
                                </div>
                            )}
                            {formData.additionalWishes && (
                                <div>
                                    <span className="font-medium">Sonstige Wünsche:</span>
                                    <p className="mt-1 p-2 bg-muted rounded text-xs">{formData.additionalWishes}</p>
                                </div>
                            )}
                        </div>
                    </div>

                    <Separator/>

                    {/* Kontakt */}
                    <div className="space-y-3">
                        <h3 className="font-semibold text-lg">Kontaktdaten</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            <div>
                                <span className="font-medium">Name:</span> {formData.firstName} {formData.lastName}
                            </div>
                            <div>
                                <span className="font-medium">Telefon:</span> {formData.phone}
                            </div>
                            <div>
                                <span className="font-medium">E-Mail:</span> {formData.email}
                            </div>
                            <div>
                                <span
                                    className="font-medium">Adresse:</span> {formData.street}, {formData.zipCode} {formData.city}
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <div className="flex justify-center">
                <Button onClick={handleSubmit} disabled={isSubmitting} size="lg" className="px-8">
                    {isSubmitting ? (
                        <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"/>
                            Wird gesendet...
                        </>
                    ) : (
                        <>
                            <Send className="w-4 h-4 mr-2"/>
                            Planung absenden
                        </>
                    )}
                </Button>
            </div>
        </div>
    )
}
