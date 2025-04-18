import './utilityImpressum.scss';

const UtilityImpressum = () => {
    return (
        <div className="utility-impressum">
            <h1>Impressum</h1>
            <p>
                Ems Suntec UG (haftungsbeschränkt)
                <br />
                Diekstraße 23
                <br />
                48282 Emsdetten
            </p>
            <div>
                Telefon:
                <br />
                <div className='utility-impressum__spacer'/>
                <a href="tel:+491797884043">+49 179 7884043</a>
                <br />
                <div className='utility-impressum__spacer'/>
                <a href="tel:+491622913008">+49 162 2913008</a>
                <br />
                <div className='utility-impressum__spacer'/>
                <a href="mailto:info@ems-suntec.de">info@ems-suntec.de</a>
                <br />
                <div className='utility-impressum__spacer'/>
                <a href="https://www.ems-suntec.de" target="_blank" rel="noopener noreferrer">
                    www.ems-suntec.de
                </a>
            </div>
            <p>
                Amtsgericht Steinfurt HRB 15122
                <br />
                St.-Nr.: 311/5826/1033
            </p>
            <p>Geschäftsführer: Haiko Winter, Thomas Harbering</p>
        </div>
    );
};

UtilityImpressum.displayName = 'UtilityImpressum';

export default UtilityImpressum;
