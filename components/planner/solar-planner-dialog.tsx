"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { BuildingStep } from "./steps/building-step"
import { EnergyStep } from "./steps/energy-step"
import { WishesStep } from "./steps/wishes-step"
import { AddressStep } from "./steps/address-step"
import { PersonalStep } from "./steps/personal-step"
import { PrivacyStep } from "./steps/privacy-step"
import { SummaryStep } from "./steps/summary-step"

export interface FormData {
  // Gebäude
  buildingType: string
  buildingYear: string
  roofType: string
  roofAngle: number
  roofDirection: string[]
  roofArea: string
  roofMaterial: string

  // Energie
  currentConsumption: string
  existingPV: string

  // Wünsche
  additionalComponents: string[]
  storage: string
  wallbox: string
  emergencyPower: string
  startDate: string
  budget: string
  additionalWishes: string

  // Adresse
  street: string
  zipCode: string
  city: string

  // Personal
  firstName: string
  lastName: string
  phone: string
  email: string

  // Privacy
  privacyAccepted: boolean
  contactConsent: boolean
}

const initialFormData: FormData = {
  buildingType: "",
  buildingYear: "",
  roofType: "",
  roofAngle: 0,
  roofDirection: [],
  roofArea: "",
  roofMaterial: "",
  currentConsumption: "",
  existingPV: "",
  additionalComponents: [],
  storage: "",
  wallbox: "",
  emergencyPower: "",
  startDate: "",
  budget: "",
  additionalWishes: "",
  street: "",
  zipCode: "",
  city: "",
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  privacyAccepted: false,
  contactConsent: false,
}

const steps = [
  { id: 1, title: "Gebäude", component: BuildingStep },
  { id: 2, title: "Energie", component: EnergyStep },
  { id: 3, title: "Wünsche", component: WishesStep },
  { id: 4, title: "Adresse", component: AddressStep },
  { id: 5, title: "Persönlich", component: PersonalStep },
  { id: 6, title: "Datenschutz", component: PrivacyStep },
  { id: 7, title: "Zusammenfassung", component: SummaryStep },
]

interface SolarPlannerDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SolarPlannerDialog({ open, onOpenChange }: SolarPlannerDialogProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [completedSteps, setCompletedSteps] = useState<number[]>([])

  const updateFormData = (updates: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...updates }))
  }

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        return !!(formData.buildingType && formData.roofType && formData.roofMaterial)
      case 2:
        return !!(formData.currentConsumption && formData.existingPV)
      case 3:
        return !!(formData.storage && formData.wallbox && formData.emergencyPower && formData.startDate)
      case 4:
        return !!(formData.street && formData.zipCode && formData.city)
      case 5:
        return !!(formData.firstName && formData.lastName && formData.phone && formData.email)
      case 6:
        return formData.privacyAccepted && formData.contactConsent
      default:
        return true
    }
  }

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (!completedSteps.includes(currentStep)) {
        setCompletedSteps((prev) => [...prev, currentStep])
      }
      if (currentStep < steps.length) {
        setCurrentStep(currentStep + 1)
      }
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleStepClick = (stepId: number) => {
    if (stepId <= currentStep || completedSteps.includes(stepId - 1)) {
      setCurrentStep(stepId)
    }
  }

  const handleReset = () => {
    setCurrentStep(1)
    setFormData(initialFormData)
    setCompletedSteps([])
  }

  const CurrentStepComponent = steps[currentStep - 1]?.component

  const progress = ((currentStep - 1) / (steps.length - 1)) * 100

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[90vw] sm:w-[80vw] h-[70vh] overflow-hidden flex flex-col p-0">
        <DialogHeader className="sticky top-0 z-10 bg-background border-b space-y-4 flex-shrink-0 p-4 sm:p-6">
          <DialogTitle className="text-xl sm:text-2xl font-bold text-center text-balance">
            Solaranlagen Planer
          </DialogTitle>

          {/* Progress Bar */}
          <div className="space-y-2">
            <Progress value={progress} className="h-2" />
            <div className="flex justify-between text-xs sm:text-sm text-muted-foreground">
              <span>
                Schritt {currentStep} von {steps.length}
              </span>
              <span>{Math.round(progress)}% abgeschlossen</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-1 sm:gap-2 justify-center max-w-full">
            {steps.map((step) => (
              <Button
                key={step.id}
                variant={
                  currentStep === step.id ? "default" : completedSteps.includes(step.id) ? "secondary" : "outline"
                }
                size="sm"
                onClick={() => handleStepClick(step.id)}
                disabled={step.id > currentStep && !completedSteps.includes(step.id - 1)}
                className="text-xs px-2 py-1 sm:px-3 sm:py-2 min-w-0 flex-shrink-0 whitespace-nowrap"
              >
                <span className="hidden sm:inline">
                  {step.id}. {step.title}
                </span>
                <span className="sm:hidden">{step.id}</span>
              </Button>
            ))}
          </div>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          <div className="max-w-full">
            {CurrentStepComponent && (
              <CurrentStepComponent
                formData={formData}
                updateFormData={updateFormData}
                onNext={handleNext}
                onReset={handleReset}
              />
            )}
          </div>
        </div>

        {currentStep < steps.length && (
          <div className="sticky bottom-0 z-10 bg-background border-t flex justify-between p-4 sm:p-6 flex-shrink-0 gap-2">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className="text-sm px-3 py-2 bg-background"
            >
              <span className="hidden sm:inline">← Zurück</span>
              <span className="sm:hidden">←</span>
            </Button>

            <Button onClick={handleNext} disabled={!validateStep(currentStep)} className="text-sm px-3 py-2">
              <span className="hidden sm:inline">
                {currentStep === steps.length - 1 ? "Zur Zusammenfassung" : "Weiter →"}
              </span>
              <span className="sm:hidden">→</span>
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
