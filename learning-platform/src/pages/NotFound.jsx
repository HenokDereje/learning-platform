import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import Container from '../components/Container'
import Button from '../components/Button'

function NotFound() {
    return (
        <div className="relative min-h-screen overflow-hidden bg-dark text-text py-32">
            <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute right-0 top-24 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />
            <Container>
                <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-surface/80 p-12 text-center shadow-soft">
                    <SectionTitle title="404" subtitle="Page not found" />
                    <p className="mt-6 text-base leading-8 text-muted">The page you are looking for doesn’t exist or has been moved. Return to the homepage to continue exploring premium learning.</p>
                    <Link to="/" className="mt-10 inline-flex rounded-full bg-secondary px-8 py-4 text-sm font-semibold text-dark transition hover:bg-amber-400">Go back home</Link>
                </motion.div>
            </Container>
        </div>
    )
}

export default NotFound
