"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import type { FormData } from "../solar-planner-dialog"

interface EnergyStepProps {
  formData: FormData
  updateFormData: (updates: Partial<FormData>) => void
}

const pvOptions = [
  { value: "ja", label: "Ja", icon: "✅", color: "text-green-600" },
  { value: "nein", label: "Nein", icon: "❌", color: "text-red-600" },
]

export function EnergyStep({ formData, updateFormData }: EnergyStepProps) {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">⚡ Aktuelle Energieversorgung</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Stromverbrauch */}
          <div className="space-y-2">
            <Label htmlFor="currentConsumption" className="text-base font-medium">
              Aktueller Stromverbrauch (kWh/Jahr) *
            </Label>
            <Input
              id="currentConsumption"
              type="number"
              placeholder="z.B. 4500"
              value={formData.currentConsumption}
              onChange={(e) => updateFormData({ currentConsumption: e.target.value })}
            />
            <p className="text-sm text-muted-foreground">Den Verbrauch finden Sie auf Ihrer letzten Stromrechnung</p>
          </div>

          {/* Bestehende PV-Anlage */}
          <div className="space-y-3">
            <Label className="text-base font-medium">Bestehende PV-Anlage vorhanden? *</Label>
            <div className="grid grid-cols-2 gap-4">
              {pvOptions.map((option) => (
                <Card
                  key={option.value}
                  className={`cursor-pointer transition-all hover:shadow-md ${
                    formData.existingPV === option.value ? "ring-2 ring-primary bg-primary/5" : ""
                  }`}
                  onClick={() => updateFormData({ existingPV: option.value })}
                >
                  <CardContent className="p-6 text-center space-y-3">
                    <div className="text-4xl">{option.icon}</div>
                    <p className="text-lg font-medium">{option.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
