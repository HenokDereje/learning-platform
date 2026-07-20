import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { FiSearch, FiBell, FiMenu, FiX } from 'react-icons/fi'
import { motion } from 'framer-motion'

const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Courses', path: '/courses' },
    { label: 'Programs', path: '/programs' },
    { label: 'About', path: '/about' },
]

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [isSticky, setIsSticky] = useState(false)

    useEffect(() => {
        const onScroll = () => setIsSticky(window.scrollY > 24)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <header className={`fixed inset-x-0 z-40 transition-all duration-500 ${isSticky ? 'bg-surface/95 backdrop-blur-xl shadow-soft' : 'bg-transparent'}`}>
            <div className="container mx-auto flex items-center justify-between gap-6 px-6 py-4 lg:px-8">
                <div className="flex items-center gap-4">
                    <div className="rounded-2xl bg-primary/10 px-3 py-2 text-primary shadow-glow">
                        <span className="font-semibold">NL</span>
                    </div>
                    <div>
                        <p className="text-xs text-muted uppercase tracking-[0.24em]">Next Level</p>
                        <h1 className="text-lg font-semibold text-text">LMS Studio</h1>
                    </div>
                </div>

                <nav className="hidden items-center gap-6 md:flex">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                `text-sm font-medium transition duration-300 ${isActive ? 'text-white' : 'text-muted hover:text-white'
                                }`
                            }
                        >
                            <motion.span whileHover={{ y: -2 }}>
                                {item.label}
                            </motion.span>
                        </NavLink>
                    ))}
                </nav>

                <div className="hidden items-center gap-3 md:flex">
                    <button className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-muted transition hover:border-primary/50 hover:text-primary">
                        <FiSearch size={18} />
                    </button>
                    <button className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-muted transition hover:border-secondary/50 hover:text-secondary">
                        <FiBell size={18} />
                    </button>
                    <button className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-dark transition hover:bg-surface">Login</button>
                    <button className="rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-dark transition hover:bg-amber-400">Register</button>
                </div>

                <button className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-muted md:hidden" onClick={() => setIsOpen((value) => !value)}>
                    {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
                </button>
            </div>

            {isOpen && (
                <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} className="border-t border-white/10 bg-surface/95 px-6 py-5 shadow-soft backdrop-blur-xl md:hidden">
                    <div className="flex flex-col gap-4">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    `text-sm font-semibold transition ${isActive ? 'text-white' : 'text-muted hover:text-white'
                                    }`
                                }
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </div>
                    <div className="mt-6 flex flex-col gap-3">
                        <button className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-dark">Login</button>
                        <button className="rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-dark">Register</button>
                    </div>
                </motion.div>
            )}
        </header>
    )
}

export default Navbar
