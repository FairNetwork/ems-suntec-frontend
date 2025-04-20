// ServiceIcon.tsx
import React from 'react';

export interface ServiceIconProps extends React.SVGProps<SVGSVGElement> {
    size?: number;
    color?: string;
}

const ServiceIcon: React.FC<ServiceIconProps> = ({
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

            {/* Feder-Symbol */}
            <path
                d="M60 140c30-20 80-80 100-100-10 40-60 90-80 100s-10-20 0-30c10-10 40-40 60-60"
                stroke={color}
                strokeWidth="10"
                strokeLinecap="round"
                fill="none"
            />
        </g>
    </svg>
);

export default ServiceIcon;
