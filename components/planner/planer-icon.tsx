import { forwardRef } from "react"

type SolarPanelIconProps = React.SVGProps<SVGSVGElement> & {
    size?: number | string
    color?: string
}

export const SolarPanelIcon = forwardRef<SVGSVGElement, SolarPanelIconProps>(
    ({ size = 24, color = "currentColor", ...props }, ref) => (
        <svg
            ref={ref}
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            {/* Sonne */}
            <circle cx="6" cy="6" r="2" />
            <line x1="6" y1="1" x2="6" y2="3" />
            <line x1="6" y1="9" x2="6" y2="11" />
            <line x1="1" y1="6" x2="3" y2="6" />
            <line x1="9" y1="6" x2="11" y2="6" />
            <line x1="3.5" y1="3.5" x2="4.8" y2="4.8" />
            <line x1="7.2" y1="7.2" x2="8.5" y2="8.5" />
            <line x1="3.5" y1="8.5" x2="4.8" y2="7.2" />
            <line x1="7.2" y1="4.8" x2="8.5" y2="3.5" />

            {/* Solarpanel */}
            <rect x="9" y="12" width="12" height="7" rx="1" />
            <line x1="9" y1="15.5" x2="21" y2="15.5" />
            <line x1="13.5" y1="12" x2="13.5" y2="19" />
            <line x1="17.5" y1="12" x2="17.5" y2="19" />

            {/* Bodenstütze */}
            <line x1="12" y1="19" x2="11" y2="22" />
            <line x1="18" y1="19" x2="19" y2="22" />
        </svg>
    )
)

SolarPanelIcon.displayName = "SolarPanelIcon"
