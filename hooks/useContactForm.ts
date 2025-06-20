"use client"

import { useState } from "react"

interface ContactFormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export function useContactForm() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const submitForm = async (data: ContactFormData) => {
    setLoading(true)
    setError(null)

    try {
      // Simulate API call
      await new Promise((resolve) => resolve)

      // Mock successful submission
      console.log("Form submitted:", data)
      setSuccess(true)

      // Reset success state after 5 seconds
      setTimeout(() => setSuccess(false), 5000)
    } catch (err) {
      setError("Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.")
    } finally {
      setLoading(false)
    }
  }

  return { submitForm, loading, success, error }
}
