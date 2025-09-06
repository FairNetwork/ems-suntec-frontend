"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { MapPin } from "lucide-react"
import type { FormData } from "../solar-planner-dialog"

interface AddressStepProps {
  formData: FormData
  updateFormData: (updates: Partial<FormData>) => void
}

export function AddressStep({ formData, updateFormData }: AddressStepProps) {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            Adresse des Projekts
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="street" className="text-base font-medium">
              Straße & Hausnummer *
            </Label>
            <Input
              id="street"
              placeholder="z.B. Musterstraße 123"
              value={formData.street}
              onChange={(e) => updateFormData({ street: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="zipCode" className="text-base font-medium">
                Postleitzahl *
              </Label>
              <Input
                id="zipCode"
                placeholder="z.B. 12345"
                value={formData.zipCode}
                onChange={(e) => updateFormData({ zipCode: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="city" className="text-base font-medium">
                Ort *
              </Label>
              <Input
                id="city"
                placeholder="z.B. Musterstadt"
                value={formData.city}
                onChange={(e) => updateFormData({ city: e.target.value })}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
