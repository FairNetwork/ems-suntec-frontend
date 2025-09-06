import { EMAIL_TEMPLATE, EMAIL_PLANNER_TEMPLATE } from '@/constants/email';
import {FormData} from '@/components/planner/solar-planner-dialog'
import emailjs from '@emailjs/browser';

const EMAIL = 'info@ems-suntec.de'

export interface ContactFormData {
    name: string
    email: string
    phone?: string
    subject?: string
    message: string
}

export const sendMail = async ({ subject,phone,name, email, message }: ContactFormData) => {
    const html = EMAIL_TEMPLATE.replace('{{name}}', name)
        .replace('{{phone}}', phone ?? '-')
        .replace('{{email}}', email)
        .replace('{{message}}', message);

    const customTemplateParams = {
        from_name: "contact@ems-suntec.de",
        from_email: "contact@ems-suntec.de",
        to_name: EMAIL,
        to_email: EMAIL,
        subject: `Ems Suntec - Kontaktformular ${subject ? `- ${subject}` : ''}`,
        html_message: html
    };

    const serviceId = process.env.NEXT_PUBLIC_MAIL_SERVICE_ID ?? '';
    const templateId = process.env.NEXT_PUBLIC_MAIL_TEMPLATE_ID ?? '';
    const publicKey = process.env.NEXT_PUBLIC_MAIL_KEY;

    const result = await emailjs.send(serviceId, templateId, customTemplateParams, publicKey)

    return result.status
};

export const sendPlannerMail = async (formData: FormData) => {
    let html = EMAIL_PLANNER_TEMPLATE
    for (const [key, value] of Object.entries(formData)) {
        const regex = new RegExp(`{{${key}}}`, "g")
        html = html.replace(
            regex,
            Array.isArray(value) ? value.join(", ") : String(value ?? "")
        )
    }

    html = html
        .replace(/{{privacyAccepted}}/g, formData.privacyAccepted ? "Ja" : "Nein")
        .replace(/{{contactConsent}}/g, formData.contactConsent ? "Ja" : "Nein")

    const customTemplateParams = {
        from_name: "contact@ems-suntec.de",
        from_email: "contact@ems-suntec.de",
        to_name: EMAIL,
        to_email: EMAIL,
        subject: "Ems Suntec - Solarplanner",
        html_message: html,
    }

    const serviceId = process.env.NEXT_PUBLIC_MAIL_SERVICE_ID ?? ""
    const templateId = process.env.NEXT_PUBLIC_MAIL_TEMPLATE_ID ?? ""
    const publicKey = process.env.NEXT_PUBLIC_MAIL_KEY

    const result = await emailjs.send(
        serviceId,
        templateId,
        customTemplateParams,
        publicKey
    )

    return result.status
}