import React from 'react';
import ReferencesCards from "./references-cards/ReferencesCards";
import './references.scss';

const References = () => {
    return (
        <div className="references">
            <h1>Photovoltaik Anlagen für Privatkunden</h1>
            <p>Die nachfolgenden Referenzen sind nur ein Auszug unseres Portfolios. Weitere Referenzen und Objekte geben wir Ihnen gerne auf Nachfrage bekannt.</p>
            <ReferencesCards/>
        </div>
    );
};

References.displayName = 'References';

export default References;
