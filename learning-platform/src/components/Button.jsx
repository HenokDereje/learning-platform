import { motion } from 'framer-motion'

function Button({ variant = 'primary', className = '', children, ...props }) {
    const base = 'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-4 focus:ring-primary/20'
    const variants = {
        primary: 'bg-primary text-white shadow-glow hover:bg-blue-500',
        secondary: 'bg-secondary text-dark hover:bg-amber-400',
        outline: 'border border-white/10 bg-white/5 text-text hover:border-primary hover:text-white',
    }

    return (
        <motion.button whileTap={{ scale: 0.98 }} className={`${base} ${variants[variant] ?? variants.primary} ${className}`} {...props}>
            {children}
        </motion.button>
    )
}

export default Button
