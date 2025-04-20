import Button from '../../../components/shared/button/Button';
import image from "../../../assets/intro-image.png"
import './homeIntro.scss';

const HomeIntro = () => {
    const handleClick = () => {};

    return (
        <div className="home-intro" style={{backgroundImage: `url(${image})`}}>
            <div className="home-intro__content">
                <h1>Photovoltaik im Kreis Steinfurt</h1>
                <p>
                    Nutzen Sie die nachhaltige Möglichkeit der Stromerzeugung durch eine
                    Photovoltaikanlage auf Ihrem Dach – wir unterstützen Sie bei der kompletten Planung
                    und Installation. Als erfahrene Photovoltaik-Experten aus dem Kreis Steinfurt
                    erstellen wir Ihnen gerne ein unverbindliches Angebot.
                </p>
                <Button onClick={handleClick}>Kontakt</Button>
            </div>
        </div>
    );
};

HomeIntro.displayName = 'HomeIntro';

export default HomeIntro;
