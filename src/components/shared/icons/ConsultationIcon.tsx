// ConsultationIcon.tsx
import React from 'react';

export interface ConsultationIconProps extends React.SVGProps<SVGSVGElement> {
    /** Breite & Höhe in Pixeln */
    size?: number;
    /** Akzent‑Farbe */
    color?: string;
}

const ConsultationIcon: React.FC<ConsultationIconProps> = ({
    size = 200,
    color = '#03DAC5',
    ...props
}) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <defs>
            <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
                <feOffset dx="0" dy="4" result="offsetblur" />
                <feFlood floodColor="#000" floodOpacity="0.2" />
                <feComposite in2="offsetblur" operator="in" />
                <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </defs>

        <g filter="url(#shadow)">
            {/* Außenkreis */}
            <circle cx="100" cy="100" r="90" stroke={color} strokeWidth="10" />

            {/* Kopf */}
            <circle cx="100" cy="70" r="20" fill={color} />

            {/* Schultern */}
            <path
                d="M70 140c0-16 14-30 30-30s30 14 30 30"
                stroke={color}
                strokeWidth="10"
                strokeLinecap="round"
            />

            {/* Sprechblase */}
            <rect
                x="115"
                y="60"
                width="50"
                height="30"
                rx="5"
                stroke={color}
                strokeWidth="8"
                fill="none"
            />
            {/* Haken */}
            <path
                d="M130 75l10 10 20-20"
                stroke={color}
                strokeWidth="8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </g>
    </svg>
);

export default ConsultationIcon;
