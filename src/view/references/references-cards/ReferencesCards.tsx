import './referencesCards.scss';
import { useMemo } from 'react';
import ReferenceCard from './reference-card/ReferenceCard';
import {useReferences} from "../../../hooks/references";

const ReferencesCards = () => {
    const references = useReferences()


    const content = useMemo(() => {
        return references.map(({ id }) => {
            return (
                    <ReferenceCard key={`reference--${id}`} id={id} />
            );
        });
    }, [references]);

    return <div className="references-cards">{content}</div>;
};

ReferencesCards.displayName = 'ReferencesCards';

export default ReferencesCards;
