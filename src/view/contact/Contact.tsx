import './contact.scss';
import Input from '../../components/shared/input/Input';
import {useMemo, useState} from 'react';
import TextArea from '../../components/shared/textarea/Textarea';
import Button from '../../components/shared/button/Button';
import {sendMail} from "../../utils/mail";

const Contact = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');

    const handleClick = () => {
        void sendMail({
            message,lastName,firstName,email
        })
    }

    const isDisabled = useMemo(() => {
        return !firstName || !lastName || !email || !message;
    }, [firstName, lastName, email, message]);


    return (
        <div className="contact">
            <h1>Kontaktieren Sie uns</h1>
            <div className="contact__text">
                Sie haben Fragen oder wünschen ein unverbindliches Angebot? Füllen Sie einfach das
                Formular aus – wir melden uns schnellstmöglich bei Ihnen zurück.
            </div>
            <div className="contact__form">
                <Input
                    placeholder="Vorname"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <Input
                    placeholder="Nachname"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                /><Input
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextArea
                    placeholder="Ihre Nachricht"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <div className="contact__form__button">
                    <Button onClick={handleClick} isDisabled={isDisabled}>Senden</Button>
                </div>
            </div>
        </div>
    );
};

Contact.displayName = 'Contact';

export default Contact;
