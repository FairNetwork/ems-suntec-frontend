import React from 'react';
import './featureSection.scss';
import { motion } from 'framer-motion';

interface FeatureSectionProps {
    title: string;
    description: string;
    imageUrl: string;
    shouldInvert?: boolean;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
    title,
    description,
    imageUrl,
    shouldInvert = false
}) => {
    return (
        <motion.section
            className={`feature-section ${shouldInvert ? 'reverse' : ''}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}>
            <div className="image-wrapper">
                <img src={imageUrl} alt={title} />
            </div>
            <div className="text-wrapper">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </motion.section>
    );
};

export default FeatureSection;
