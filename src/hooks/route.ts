import { useLocation } from 'react-router-dom';
import {useMemo} from "react";

export const useIsCurrentRoute = (route: string) => {
    const location = useLocation();

    return location.pathname === route;
};

export function useReferenceId(): string {
    return useMemo(() => {
        const match = window.location.pathname.match(/^\/references\/([^/]+)$/);
        return match ? match[1] : '';
    }, []);
}
