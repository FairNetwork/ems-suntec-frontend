import { EMAIL_TEMPLATE } from '../constants/emailTemplate';

interface SendMailPayload {
    firstName: string;
    lastName: string;
    message: string;
    email: string;
}

export const sendMail = async ({ firstName, lastName, email, message }: SendMailPayload) => {
    const apiKey = process.env.REACT_APP_BREVO_API_KEY;

    if (!apiKey) {
        return undefined;
    }

    const body = {
        sender: { name: 'Ems Suntec', email: 'michael.gese44@gmail.com' },
        to: [{ email: 'michael.gese44@gmail.com' }],
        subject: 'Ems Suntec - Kontaktformular',
        htmlContent: EMAIL_TEMPLATE.replace('{{firstName}}', firstName)
            .replace('{{lastName}}', lastName)
            .replace('{{email}}', email)
            .replace('{{message}}', message)
    };

    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'api-key': apiKey
        },
        body: JSON.stringify(body)
    });

    if (!response.ok) {
        throw new Error('E-Mail konnte nicht gesendet werden');
    }

    return response.json();
};
