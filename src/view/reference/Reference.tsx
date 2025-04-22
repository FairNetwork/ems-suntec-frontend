import './reference.scss';
import { useReferenceId } from '../../hooks/route';
import { useReference } from '../../hooks/references';
import { useNavigate } from 'react-router-dom';

const Reference = () => {
    const navigate = useNavigate();

    const id = useReferenceId();
    const reference = useReference(id);

    if (!reference) {
        navigate('no_content');
    }

    return <div className="reference">TEST</div>;
};

Reference.displayName = 'Reference';

export default Reference;
