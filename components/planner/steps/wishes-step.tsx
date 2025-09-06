"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Battery, Car, Shield, X, Calendar, Euro } from "lucide-react"
import type { FormData } from "../solar-planner-dialog"

interface WishesStepProps {
  formData: FormData
  updateFormData: (updates: Partial<FormData>) => void
}

const additionalComponents = [
  { value: "stromspeicher", label: "Stromspeicher", icon: Battery },
  { value: "wallbox", label: "Wallbox (E-Auto-Ladestation)", icon: Car },
  { value: "notstrom", label: "Notstromfunktion", icon: Shield },
]

const binaryOptions = [
  { value: "ja", label: "Ja", color: "bg-green-100 text-green-800 border-green-300" },
  { value: "nein", label: "Nein", color: "bg-red-100 text-red-800 border-red-300" },
  { value: "unentschieden", label: "Unentschieden", color: "bg-gray-100 text-gray-800 border-gray-300" },
]

const startDates = [
  { value: "sofort", label: "Sofort" },
  { value: "3-6-monate", label: "In 3-6 Monaten" },
  { value: "später", label: "Später" },
]

export function WishesStep({ formData, updateFormData }: WishesStepProps) {
  const handleComponentChange = (component: string, checked: boolean) => {
    const currentComponents = formData.additionalComponents || []
    if (checked) {
      updateFormData({ additionalComponents: [...currentComponents, component] })
    } else {
      updateFormData({ additionalComponents: currentComponents.filter((c) => c !== component) })
    }
  }

  const handleWithoutOptions = (checked: boolean) => {
    if (checked) {
      updateFormData({
        additionalComponents: [],
        storage: "nein",
        wallbox: "nein",
        emergencyPower: "nein",
      })
    }
  }

  const withoutOptionsSelected =
    formData.additionalComponents?.length === 0 &&
    formData.storage === "nein" &&
    formData.wallbox === "nein" &&
    formData.emergencyPower === "nein"

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Battery className="w-5 h-5" />
            Wünsche & Optionen
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Zusatzkomponenten */}
          <div className="space-y-3">
            <Label className="text-base font-medium">Geplante Zusatzkomponenten *</Label>
            <div className="space-y-3">
              {additionalComponents.map((component) => {
                const Icon = component.icon
                return (
                  <div key={component.value} className="flex items-center space-x-3 p-3 border rounded-lg">
                    <Checkbox
                      id={component.value}
                      checked={formData.additionalComponents?.includes(component.value) || false}
                      onCheckedChange={(checked) => handleComponentChange(component.value, checked as boolean)}
                      disabled={withoutOptionsSelected}
                    />
                    <Icon className="w-5 h-5 text-primary" />
                    <Label htmlFor={component.value} className="flex-1 cursor-pointer">
                      {component.label}
                    </Label>
                  </div>
                )
              })}

              <div className="flex items-center space-x-3 p-3 border rounded-lg bg-muted/50">
                <Checkbox
                  id="without-options"
                  checked={withoutOptionsSelected}
                  onCheckedChange={handleWithoutOptions}
                />
                <X className="w-5 h-5 text-muted-foreground" />
                <Label htmlFor="without-options" className="flex-1 cursor-pointer">
                  Ohne Zusatzoptionen
                </Label>
              </div>
            </div>
          </div>

          {/* Stromspeicher */}
          <div className="space-y-3">
            <Label className="text-base font-medium">Stromspeicher *</Label>
            <div className="grid grid-cols-3 gap-3">
              {binaryOptions.map((option) => (
                <Card
                  key={option.value}
                  className={`cursor-pointer transition-all hover:shadow-md ${
                    formData.storage === option.value ? "ring-2 ring-primary" : ""
                  }`}
                  onClick={() => updateFormData({ storage: option.value })}
                >
                  <CardContent className="p-3 text-center">
                    <p className={`text-sm font-medium px-2 py-1 rounded truncate ${option.color}`}>{option.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Wallbox */}
          <div className="space-y-3">
            <Label className="text-base font-medium">Wallbox (E-Auto-Ladestation) *</Label>
            <div className="grid grid-cols-3 gap-3">
              {binaryOptions.map((option) => (
                <Card
                  key={option.value}
                  className={`cursor-pointer transition-all hover:shadow-md ${
                    formData.wallbox === option.value ? "ring-2 ring-primary" : ""
                  }`}
                  onClick={() => updateFormData({ wallbox: option.value })}
                >
                  <CardContent className="p-3 text-center">
                    <p className={`text-sm font-medium px-2 py-1 rounded truncate ${option.color}`}>{option.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Notstromfunktion */}
          <div className="space-y-3">
            <Label className="text-base font-medium">Notstromfunktion *</Label>
            <div className="grid grid-cols-3 gap-3">
              {binaryOptions.map((option) => (
                <Card
                  key={option.value}
                  className={`cursor-pointer transition-all hover:shadow-md ${
                    formData.emergencyPower === option.value ? "ring-2 ring-primary" : ""
                  }`}
                  onClick={() => updateFormData({ emergencyPower: option.value })}
                >
                  <CardContent className="p-3 text-center">
                    <p className={`text-sm font-medium px-2 py-1 rounded truncate ${option.color}`}>{option.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Starttermin */}
          <div className="space-y-3">
            <Label className="text-base font-medium">Geplanter Starttermin *</Label>
            <div className="grid grid-cols-3 gap-3">
              {startDates.map((date) => (
                <Card
                  key={date.value}
                  className={`cursor-pointer transition-all hover:shadow-md ${
                    formData.startDate === date.value ? "ring-2 ring-primary bg-primary/5" : ""
                  }`}
                  onClick={() => updateFormData({ startDate: date.value })}
                >
                  <CardContent className="p-4 text-center space-y-2">
                    <Calendar className="w-6 h-6 mx-auto text-primary" />
                    <p className="text-sm font-medium">{date.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Budget */}
          <div className="space-y-2">
            <Label htmlFor="budget" className="text-base font-medium flex items-center gap-2">
              <Euro className="w-4 h-4" />
              Budgetrahmen (optional)
            </Label>
            <Input
              id="budget"
              placeholder="z.B. 15.000 - 25.000 €"
              value={formData.budget}
              onChange={(e) => updateFormData({ budget: e.target.value })}
            />
          </div>

          {/* Sonstige Wünsche */}
          <div className="space-y-2">
            <Label htmlFor="additionalWishes" className="text-base font-medium">
              Sonstige Wünsche
            </Label>
            <Textarea
              id="additionalWishes"
              placeholder="Teilen Sie uns weitere Wünsche oder Besonderheiten mit..."
              value={formData.additionalWishes}
              onChange={(e) => updateFormData({ additionalWishes: e.target.value })}
              rows={4}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
