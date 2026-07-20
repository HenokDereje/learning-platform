import { memo } from 'react'
import { motion } from 'framer-motion'

const pageVariants = {
    hidden: { opacity: 0, y: 24 },
    enter: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -24 },
}

const PageWrapper = memo(({ children }) => (
    <motion.div
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={pageVariants}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="min-h-screen"
    >
        {children}
    </motion.div>
))

export default PageWrapper
