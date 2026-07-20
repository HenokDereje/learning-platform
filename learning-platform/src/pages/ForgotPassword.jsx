import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Button from '../components/Button'
import Card from '../components/Card'
import Input from '../components/Input'

function ForgotPassword() {
    const [email, setEmail] = useState('')

    return (
        <div className="relative min-h-screen overflow-hidden bg-dark text-text">
            <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
            <div className="pointer-events-none absolute right-8 top-24 h-80 w-80 rounded-full bg-secondary/20 blur-3xl" />
            <div className="pointer-events-none absolute left-10 bottom-24 h-64 w-64 rounded-full bg-white/5 blur-3xl" />

            <div className="relative mx-auto flex min-h-screen items-center justify-center px-6 py-20">
                <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="w-full max-w-xl">
                    <div className="mb-10 text-center">
                        <p className="text-sm uppercase tracking-[0.3em] text-secondary">Need help signing in?</p>
                        <h1 className="mt-4 text-5xl font-semibold text-white">Reset your password</h1>
                        <p className="mt-4 text-sm text-muted">Enter your email and we’ll send you instructions to reset your password.</p>
                    </div>

                    <Card className="rounded-[2rem] bg-white/5 p-8 backdrop-blur-xl shadow-soft">
                        <form className="space-y-6">
                            <div className="space-y-3">
                                <label className="block text-sm text-muted">Email address</label>
                                <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="hello@example.com" className="bg-white/10 text-white" />
                            </div>
                            <div className="space-y-4">
                                <Button className="w-full py-4 text-base">Send reset link</Button>
                                <p className="text-center text-sm text-muted">
                                    Remembered your password? <Link to="/login" className="text-primary hover:text-white">Back to login</Link>
                                </p>
                            </div>
                        </form>
                    </Card>
                </motion.div>
            </div>
        </div>
    )
}

export default ForgotPassword
