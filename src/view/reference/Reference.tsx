import './reference.scss';
import { useReferenceId } from '../../hooks/route';
import { useReference } from '../../hooks/references';
import { useNavigate } from 'react-router-dom';
import Icon from '../../components/shared/icon/Icon';

const Reference = () => {
    const navigate = useNavigate();

    const id = useReferenceId();
    const reference = useReference(id);

    if (!reference) {
        navigate('no_content');

        return null;
    }

    const { title, details, image, location, description } = reference;

    return (
        <div className="reference">
            <div className="reference__image">
                <img src={image} alt={title} />
                <div className="reference__image__location">
                    <Icon icon="fas fa-location-dot" />
                    <div className="reference__image__location__text">{location}</div>
                </div>
            </div>
            <h1>{title}</h1>
            <div className="reference__description">{description}</div>
            <div className="reference__table">
                <table>
                    <tbody>
                    {details.map((detail, index) => (
                        <tr key={index}>
                            <td>{detail.label}</td>
                            <td>{detail.value}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

Reference.displayName = 'Reference';

export default Reference;
