import SubHeading from './sub-heading/SubHeading';
import SidebarItem from './sidebar-item/SidebarItem';
import Logo from './logo/Logo';
import logo from '../../../assets/logo.png';
import './sidebar.scss';
import { useSidebarProvider } from './SidebarProvider';
import { CSSProperties, useEffect, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';

const Sidebar = () => {
    const { isOpen, updateIsOpen, width } = useSidebarProvider();
    const isMobile = true;

    const ref = useRef<HTMLDivElement>(null);

    const handleWindowClick = (event: MouseEvent) => {
        const toggleButton = document.getElementById('sidebar-toggle');

        if (
            ref.current &&
            !ref.current.contains(event.target as Node) &&
            toggleButton &&
            !toggleButton.contains(event.target as Node) &&
            typeof updateIsOpen === 'function'
        ) {
            updateIsOpen(false);
        }
    };

    useEffect(() => {
        if (!isMobile || !isOpen) {
            return () => {
                document.removeEventListener('click', handleWindowClick);
            };
        }

        document.addEventListener('click', handleWindowClick);

        return () => {
            document.removeEventListener('click', handleWindowClick);
        };
    }, [handleWindowClick, isMobile, isOpen]);

    const styles: CSSProperties | undefined = useMemo(() => {
        if (!isMobile) {
            return undefined;
        }

        return {
            position: 'absolute',
            zIndex: 100
        };
    }, [isMobile]);

    return (
        <>
            <motion.div
                className="sidebar"
                ref={ref}
                style={styles}
                initial={isMobile ? { left: `-${width}` } : {}}
                exit={isMobile ? { left: `-${width}` } : {}}
                animate={isMobile ? { left: isOpen ? '0' : `-${width}` } : {}}>
                <Logo src={logo}>
                    <div className="sidebar__logo">EMS SUNTEC</div>
                </Logo>
                <SubHeading>
                    <SidebarItem text="Home" icon="fas fa-house" route="/" />
                    <SidebarItem text="Referenzen" icon="fas fa-star" route="/references" />
                    <SidebarItem text="Kontakt" icon="fas fa-envelope-open-text" route="/contact" />
                </SubHeading>
            </motion.div>
            {isMobile && isOpen && (
                <motion.div
                    className="blur"
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                />
            )}
        </>
    );
};

Sidebar.displayName = 'Sidebar';

export default Sidebar;
