"use client"

import {useState} from "react"
import {motion, AnimatePresence} from "framer-motion"
import Link from "next/link"
import {usePathname} from "next/navigation"
import {Menu, X, Sun} from "lucide-react"
import {Button} from "@/components/ui/button"
import {SolarPlannerDialog} from "@/components/planner/solar-planner-dialog";

const navigationItems = [
    {href: "/", label: "Home"},
    {href: "/about", label: "Über uns"},
    {href: "/projects", label: "Referenzen"},
    {href: "/contact", label: "Kontakt"},
]

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isDialogOpen, setIsDialogOpen] = useState(false)

    const pathname = usePathname()

    return (
        <motion.header
            initial={{y: -100}}
            animate={{y: 0}}
            transition={{duration: 0.6}}
            className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 w-[100vw]"
        >
            <SolarPlannerDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}/>
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="w-12 h-12  flex items-center justify-center">
                            <img className="w-12 h-12 text-white" src="/emsstec_logo.svg" alt="logo"/>
                        </div>
                        <span className="text-xl font-bold text-gray-900">Ems Suntec</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navigationItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`text-sm font-medium transition-colors hover:text-primary ${
                                    pathname === item.href ? "text-primary" : "text-gray-700"
                                }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Button
                            asChild
                            className="bg-primary hover:primary cursor-pointer"
                        >
                            <div onClick={()=> setIsDialogOpen(true)}>Anlage anfragen</div>
                        </Button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
                        {isMenuOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.nav
                            initial={{opacity: 0, height: 0}}
                            animate={{opacity: 1, height: "auto"}}
                            exit={{opacity: 0, height: 0}}
                            className="md:hidden border-t border-gray-200 py-4 overflow-hidden"
                        >
                            <div className="flex flex-col space-y-4">
                                {navigationItems.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={`text-sm font-medium transition-colors hover:text-primary ${
                                            pathname === item.href ? "text-primary" : "text-gray-700"
                                        }`}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                                <Button
                                    asChild
                                    className="bg-primary hover:primary w-fit"
                                >
                                    <div onClick={() => {
                                        setIsMenuOpen(false);
                                        setIsDialogOpen(true)
                                    }}>
                                        Anlage anfragen
                                    </div>
                                </Button>
                            </div>
                        </motion.nav>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    )
}
