import './home.scss';
import HomeFeatures from './home-features/HomeFeatures';
import HomeIntro from "./home-intro/HomeIntro";

const Home = () => {
    return (
        <div className="home" id="home">
            <HomeIntro/>
            <div className="home__section">
                <h1>Ihre Experten vor Ort für Photovoltaikanlagen</h1>
                <p>
                    Bei uns stehen Sie im Mittelpunkt. Wir begleiten Sie Schritt für Schritt bei der
                    Planung und Installation Ihrer Photovoltaikanlage. Jede Situation ist
                    einzigartig, deshalb nehmen wir uns Zeit, um gemeinsam die beste Lösung für Ihr
                    Haus oder Ihr Unternehmen zu finden. Ob in Steinfurt, Emsdetten, Ibbenbüren oder
                    Rheine, wir sind Ihr Ansprechpartner für den gesamten Kreis Steinfurt. Mit
                    erfahrenen Dachdeckern und qualifizierten Elektrikern in unserem Team sorgen wir
                    für eine fachgerechte Ausführung – alles aus einer Hand und in höchster
                    Qualität.
                </p>
            </div>
            <HomeFeatures />
        </div>
    );
};

Home.displayName = 'Home';

export default Home;
