import './footer.scss';
import {useMemo} from 'react';
import {useNavigate} from 'react-router-dom';
import {FOOTER} from '../../../constants/footer';
import agbPdf from '../../../assets/AGB.pdf'

const Footer = () => {
    const navigate = useNavigate();

    const year = new Date().getFullYear();

    const content = useMemo(() => {
        return FOOTER.map(({text, route}) => {
            return (
                <div className="footer__items__item" onClick={() => navigate(route)}>
                    {text}
                </div>
            );
        });
    }, []);

    const handleAGBDownload = () => {
        window.open(agbPdf, '_blank');
    }

    return <div className="footer">
        <div className="footer__items">{content}
            <div className="footer__items__item" onClick={handleAGBDownload}>
                AGB
            </div>
        </div>
        <div>© {year} Ems Suntec UG (haftungsbeschränkt)</div>
    </div>;
};

Footer.displayName = 'Footer';

export default Footer;
