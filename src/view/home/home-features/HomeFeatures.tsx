import './homeFeatures.scss';
import FeatureSection from '../../../components/shared/feature-section/FeatureSection';
import { useHomeFeatures } from '../../../hooks/home';
import { useMemo } from 'react';

const HomeFeatures = () => {
    const features = useHomeFeatures();

    const content = useMemo(() => {
        return features.map(({ title, imageUrl, description }, index) => (
            <FeatureSection
                key={title}
                title={title}
                description={description}
                imageUrl={imageUrl}
                shouldInvert={index % 2 === 0}
            />
        ));
    }, [features]);

    return (
        <div className="home-features" id="home-features">
            {content}
        </div>
    );
};

HomeFeatures.displayName = 'HomeFeatures';

export default HomeFeatures;
