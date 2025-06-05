import { useLocation } from 'react-router-dom';
import { useMemo } from 'react';
import Home from '../view/home/Home';
import NoContent from '../view/no-content/NoContent';
import Utility from '../view/utility/Utility';
import References from '../view/references/References';
import Reference from '../view/reference/Reference';

export const useContent = () => {
    const location = useLocation();

    return useMemo(() => {
        const path = location.pathname;

        if (path === '/') return <Home />;

        if (path === '/references') return <References />;

        if (/^\/references\/[^/]+$/.test(path)) return <Reference />;

        if (path.startsWith('/utility')) return <Utility />;

        // if (path === '/contact') return <Contact />;

        return <NoContent />;
    }, [location.pathname]);
};
