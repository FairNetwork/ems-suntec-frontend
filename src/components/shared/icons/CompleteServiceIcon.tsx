// CompleteServiceIcon.tsx
import React from 'react';

export interface CompleteServiceIconProps extends React.SVGProps<SVGSVGElement> {
    size?: number;
    color?: string;
}

const CompleteServiceIcon: React.FC<CompleteServiceIconProps> = ({
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
        {...props}
    >
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

            {/* Handschlag */}
            <path
                d="M60 110 L90 80 L110 100 L130 80 L140 90 L120 120 L100 100"
                stroke={color}
                strokeWidth="10"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M80 120 L95 105"
                stroke={color}
                strokeWidth="8"
                strokeLinecap="round"
            />
        </g>
    </svg>
);

export default CompleteServiceIcon;
