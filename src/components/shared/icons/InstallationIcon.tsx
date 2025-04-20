// InstallationIcon.tsx
import React from 'react';

export interface InstallationIconProps extends React.SVGProps<SVGSVGElement> {
    size?: number;
    color?: string;
}

const InstallationIcon: React.FC<InstallationIconProps> = ({
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

            {/* Haus mit Person */}
            <path
                d="M50 100 L100 60 L150 100 V140 H50 Z"
                stroke={color}
                strokeWidth="10"
                fill="none"
            />
            <circle cx="100" cy="115" r="12" fill={color} />
            <path
                d="M88 140c0-10 12-10 12-10s12 0 12 10"
                stroke={color}
                strokeWidth="8"
                strokeLinecap="round"
            />
        </g>
    </svg>
);

export default InstallationIcon;
