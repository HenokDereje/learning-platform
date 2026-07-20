import { motion, AnimatePresence } from 'framer-motion'

function Modal({ open, onClose, title, children }) {
    return (
        <AnimatePresence>
            {open && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-dark/80 p-4 backdrop-blur-sm">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.96, y: 16 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.96, y: 16 }}
                        className="w-full max-w-2xl rounded-[2rem] border border-white/10 bg-surface p-8 shadow-soft"
                    >
                        <div className="mb-6 flex items-center justify-between gap-4">
                            <div>
                                <p className="text-sm uppercase tracking-[0.28em] text-secondary">{title}</p>
                            </div>
                            <button onClick={onClose} className="text-muted transition hover:text-white">
                                Close
                            </button>
                        </div>
                        <div>{children}</div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}

export default Modal
