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
    const [scrollRatio, setScrollRatio] = useState(0)

    useEffect(() => {
        const onScroll = () => {
            const y = window.scrollY
            setIsSticky(y > 24)
            setScrollRatio(Math.min(1, y / 320))
        }

        window.addEventListener('scroll', onScroll, { passive: true })
        onScroll()
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const headerStyle = scrollRatio
        ? {
            background: `linear-gradient(90deg, rgba(79, 70, 229, ${0.92 * scrollRatio}) 0%, rgba(139, 92, 246, ${0.88 * scrollRatio}) 50%, rgba(6, 182, 212, ${0.84 * scrollRatio}) 100%)`,
            boxShadow: `0 36px 80px rgba(79, 70, 229, ${0.12 * scrollRatio})`,
            borderBottom: `1px solid rgba(255, 255, 255, ${0.12 * scrollRatio})`,
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
        }
        : { background: 'transparent' }

    return (
        <header className="fixed inset-x-0 z-40 transition-all duration-300 ease-out" style={headerStyle}>
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
                                `text-sm font-medium transition duration-300 ${isActive ? 'text-white' : 'text-muted hover:text-white'}`
                            }
                        >
                            <motion.span whileHover={{ y: -2 }}>{item.label}</motion.span>
                        </NavLink>
                    ))}
                </nav>

                <div className="hidden items-center gap-3 md:flex">
                    <button type="button" className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl border transition ${scrollRatio > 0.1 ? 'border-white/25 bg-white/15 text-white' : 'border-white/10 bg-white/5 text-muted'} hover:border-white/30 hover:bg-white/15 hover:text-white`}>
                        <FiSearch size={18} />
                    </button>
                    <button type="button" className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl border transition ${scrollRatio > 0.1 ? 'border-white/25 bg-white/15 text-white' : 'border-white/10 bg-white/5 text-muted'} hover:border-white/30 hover:bg-white/15 hover:text-white`}>
                        <FiBell size={18} />
                    </button>
                    <NavLink to="/login" className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20">
                        Login
                    </NavLink>
                    <NavLink to="/register" className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
                        Register
                    </NavLink>
                </div>

                <button type="button" className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-muted md:hidden" onClick={() => setIsOpen((value) => !value)}>
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
                                    `text-sm font-semibold transition ${isActive ? 'text-white' : 'text-muted hover:text-white'}`
                                }
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </div>
                    <div className="mt-6 flex flex-col gap-3">
                        <NavLink to="/login" className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-dark text-center">
                            Login
                        </NavLink>
                        <NavLink to="/register" className="rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-dark text-center">
                            Register
                        </NavLink>
                    </div>
                </motion.div>
            )}
        </header>
    )
}

export default Navbar
