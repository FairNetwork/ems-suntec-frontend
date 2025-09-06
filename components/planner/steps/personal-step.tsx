"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { User } from "lucide-react"
import type { FormData } from "../solar-planner-dialog"

interface PersonalStepProps {
  formData: FormData
  updateFormData: (updates: Partial<FormData>) => void
}

export function PersonalStep({ formData, updateFormData }: PersonalStepProps) {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="w-5 h-5" />
            Persönliche Daten
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-base font-medium">
                Vorname *
              </Label>
              <Input
                id="firstName"
                placeholder="z.B. Max"
                value={formData.firstName}
                onChange={(e) => updateFormData({ firstName: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-base font-medium">
                Nachname *
              </Label>
              <Input
                id="lastName"
                placeholder="z.B. Mustermann"
                value={formData.lastName}
                onChange={(e) => updateFormData({ lastName: e.target.value })}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-base font-medium">
              Telefonnummer *
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="z.B. +49 123 456789"
              value={formData.phone}
              onChange={(e) => updateFormData({ phone: e.target.value })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-base font-medium">
              E-Mail-Adresse *
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="z.B. max.mustermann@email.de"
              value={formData.email}
              onChange={(e) => updateFormData({ email: e.target.value })}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
