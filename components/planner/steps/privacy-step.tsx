"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Shield } from "lucide-react"
import type { FormData } from "../solar-planner-dialog"

interface PrivacyStepProps {
  formData: FormData
  updateFormData: (updates: Partial<FormData>) => void
}

export function PrivacyStep({ formData, updateFormData }: PrivacyStepProps) {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="w-5 h-5" />
            Datenschutz & Einverständnis
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-start space-x-3 p-4 border rounded-lg">
              <Checkbox
                id="privacy"
                checked={formData.privacyAccepted}
                onCheckedChange={(checked) => updateFormData({ privacyAccepted: checked as boolean })}
              />
              <div className="space-y-2">
                <Label htmlFor="privacy" className="text-base font-medium cursor-pointer">
                  Datenschutzbestimmungen gelesen & akzeptiert *
                </Label>
                <p className="text-sm text-muted-foreground">
                  Ich habe die{" "}
                  <a href="#" className="text-primary hover:underline">
                    Datenschutzbestimmungen
                  </a>{" "}
                  gelesen und akzeptiere diese. Ich bin damit einverstanden, dass meine Daten zur Bearbeitung meiner
                  Anfrage gespeichert und verarbeitet werden.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 border rounded-lg">
              <Checkbox
                id="contact"
                checked={formData.contactConsent}
                onCheckedChange={(checked) => updateFormData({ contactConsent: checked as boolean })}
              />
              <div className="space-y-2">
                <Label htmlFor="contact" className="text-base font-medium cursor-pointer">
                  Zustimmung zur Kontaktaufnahme *
                </Label>
                <p className="text-sm text-muted-foreground">
                  Ich bin damit einverstanden, dass mich das Unternehmen bezüglich meiner Solaranlagen-Anfrage per
                  Telefon oder E-Mail kontaktiert. Diese Einwilligung kann ich jederzeit widerrufen.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
