import './referenceCard.scss';
import { FC } from 'react';
import Icon from '../../../../components/shared/icon/Icon';
import { useReference } from '../../../../hooks/references';
import { motion } from 'framer-motion';
import {useNavigate} from "react-router-dom";

interface ReferenceCardProps {
    id: string;
}

const ReferenceCard: FC<ReferenceCardProps> = ({id }) => {
    const navigate = useNavigate();

    const reference = useReference(id)

    if(!reference){
        return null;
    }

    const {title, power, image} = reference

    return (
        <motion.div className="reference-card" whileHover={{scale: 1.03}} onClick={()=> navigate(`/references/${id}`)}>
            <img src={image} alt={`${title} image`} />
            <div className="reference-card__content">
                <div className="reference-card__content__title">
                    {title}
                </div>
                <div className="reference-card__content__power">
                    <Icon icon="fas fa-seedling" style={{ width: '20px', textAlign: 'center' }} />{' '}
                    {power}
                </div>
            </div>
        </motion.div>
    );
};

ReferenceCard.displayName = 'ReferenceCard';

export default ReferenceCard;
