"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import type { FormData } from "../solar-planner-dialog"

interface BuildingStepProps {
  formData: FormData
  updateFormData: (updates: Partial<FormData>) => void
}

const buildingTypes = [
  { value: "einfamilienhaus", label: "Einfamilienhaus", icon: "🏠" },
  { value: "mehrfamilienhaus", label: "Mehrfamilienhaus", icon: "🏢" },
  { value: "gewerbe", label: "Gewerbe", icon: "🏭" },
  { value: "sonstiges", label: "Sonstiges", icon: "❓" },
]

const roofTypes = [
  { value: "satteldach", label: "Satteldach", icon: "🔺" },
  { value: "flachdach", label: "Flachdach", icon: "⬜" },
  { value: "walmdach", label: "Walmdach", icon: "⛰️" },
  { value: "sonstige", label: "Sonstige", icon: "❓" },
]

const roofMaterials = [
  { value: "ziegel", label: "Ziegel" },
  { value: "blech", label: "Blech" },
  { value: "bitumen", label: "Bitumen" },
  { value: "sonstiges", label: "Sonstiges" },
]

const roofDirections = [
  { value: "süd", label: "Süd" },
  { value: "west", label: "West" },
  { value: "ost", label: "Ost" },
  { value: "nord", label: "Nord" },
]

export function BuildingStep({ formData, updateFormData }: BuildingStepProps) {
  const handleRoofDirectionChange = (direction: string, checked: boolean) => {
    const currentDirections = formData.roofDirection || []
    if (checked) {
      updateFormData({ roofDirection: [...currentDirections, direction] })
    } else {
      updateFormData({ roofDirection: currentDirections.filter((d) => d !== direction) })
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">🏠 Angaben zum Gebäude</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Gebäudetyp */}
          <div className="space-y-3">
            <Label className="text-base font-medium">Gebäudetyp *</Label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {buildingTypes.map((type) => (
                <Card
                  key={type.value}
                  className={`cursor-pointer transition-all hover:shadow-md ${
                    formData.buildingType === type.value ? "ring-2 ring-primary bg-primary/5" : ""
                  }`}
                  onClick={() => updateFormData({ buildingType: type.value })}
                >
                  <CardContent className="p-4 text-center space-y-2">
                    <div className="text-2xl">{type.icon}</div>
                    <p className="text-sm font-medium">{type.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Baujahr */}
          <div className="space-y-2">
            <Label htmlFor="buildingYear">Baujahr</Label>
            <Input
              id="buildingYear"
              type="number"
              placeholder="z.B. 1995"
              value={formData.buildingYear}
              onChange={(e) => updateFormData({ buildingYear: e.target.value })}
            />
          </div>

          {/* Dachform */}
          <div className="space-y-3">
            <Label className="text-base font-medium">Dachform *</Label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {roofTypes.map((type) => (
                <Card
                  key={type.value}
                  className={`cursor-pointer transition-all hover:shadow-md ${
                    formData.roofType === type.value ? "ring-2 ring-primary bg-primary/5" : ""
                  }`}
                  onClick={() => updateFormData({ roofType: type.value })}
                >
                  <CardContent className="p-4 text-center space-y-2">
                    <div className="text-2xl">{type.icon}</div>
                    <p className="text-sm font-medium">{type.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Dachneigung */}
          <div className="space-y-3">
            <Label className="text-base font-medium">Dachneigung: {formData.roofAngle}°</Label>
            <Slider
              value={[formData.roofAngle]}
              onValueChange={(value) => updateFormData({ roofAngle: value[0] })}
              max={90}
              min={0}
              step={5}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>0°</span>
              <span>45°</span>
              <span>90°</span>
            </div>
          </div>

          {/* Dachausrichtung */}
          <div className="space-y-3">
            <Label className="text-base font-medium">Dachausrichtung (Mehrfachwahl möglich)</Label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {roofDirections.map((direction) => (
                <div key={direction.value} className="flex items-center space-x-2">
                  <Checkbox
                    id={direction.value}
                    checked={formData.roofDirection?.includes(direction.value) || false}
                    onCheckedChange={(checked) => handleRoofDirectionChange(direction.value, checked as boolean)}
                  />
                  <Label htmlFor={direction.value}>{direction.label}</Label>
                </div>
              ))}
            </div>
          </div>

          {/* Dachfläche */}
          <div className="space-y-2">
            <Label htmlFor="roofArea">Verfügbare Dachfläche (m²)</Label>
            <Input
              id="roofArea"
              type="number"
              placeholder="z.B. 100"
              value={formData.roofArea}
              onChange={(e) => updateFormData({ roofArea: e.target.value })}
            />
          </div>

          {/* Dachmaterial */}
          <div className="space-y-3">
            <Label className="text-base font-medium">Dachmaterial *</Label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {roofMaterials.map((material) => (
                <Card
                  key={material.value}
                  className={`cursor-pointer transition-all hover:shadow-md ${
                    formData.roofMaterial === material.value ? "ring-2 ring-primary bg-primary/5" : ""
                  }`}
                  onClick={() => updateFormData({ roofMaterial: material.value })}
                >
                  <CardContent className="p-4 text-center">
                    <p className="text-sm font-medium">{material.label}</p>
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
