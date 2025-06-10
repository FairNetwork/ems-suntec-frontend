import { EMAIL_TEMPLATE } from '../constants/emailTemplate';
import emailjs from '@emailjs/browser';

interface SendMailPayload {
    firstName: string;
    lastName: string;
    message: string;
    email: string;
}

export const sendMail = async ({ firstName, lastName, email, message }: SendMailPayload) => {
    const html = EMAIL_TEMPLATE.replace('{{firstName}}', firstName)
        .replace('{{lastName}}', lastName)
        .replace('{{email}}', email)
        .replace('{{message}}', message);

    const customTemplateParams = {
        from_name: "contact@ems-suntec.de",
        from_email: "contact@ems-suntec.de",
        to_name: "info@ems-suntec.de",
        to_email: "info@ems-suntec.de",
        subject: "Ems Suntec - Kontaktformular",
        html_message: html
    };

    const serviceId = process.env.REACT_APP_MAIL_SERVICE_ID ?? '';
    const templateId = process.env.REACT_APP_MAIL_TEMPLATE_ID ?? '';
    const publicKey = process.env.REACT_APP_MAIL_KEY;

    const result = await emailjs.send(serviceId, templateId, customTemplateParams, publicKey)

    return result.status
};
