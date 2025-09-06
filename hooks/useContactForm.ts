"use client"

import {useState} from "react"
import {ContactFormData, sendMail} from "@/utils/email";

export function useContactForm() {
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const submitForm = async (data: ContactFormData) => {
        setLoading(true)
        setSuccess(false)
        setError(null)

        const result = await sendMail(data)

        if(result === 200){
            setLoading(false)
            setSuccess(true)
        } else {
            setLoading(false)
            setError("Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.")
        }
    }

    return {submitForm, loading, success, error}
}
