import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiEye, FiEyeOff, FiLock, FiMail } from 'react-icons/fi'
import Button from '../components/Button'
import Card from '../components/Card'
import Input from '../components/Input'

function Login() {
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [remember, setRemember] = useState(true)

    return (
        <div className="relative min-h-screen overflow-hidden bg-dark text-text">
            <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
            <div className="pointer-events-none absolute right-0 top-24 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />
            <div className="pointer-events-none absolute left-10 bottom-24 h-64 w-64 rounded-full bg-white/5 blur-3xl" />

            <div className="relative mx-auto flex min-h-screen items-center justify-center px-6 py-20">
                <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="w-full max-w-2xl">
                    <div className="mb-10 text-center">
                        <p className="text-sm uppercase tracking-[0.3em] text-secondary">Welcome back</p>
                        <h1 className="mt-4 text-5xl font-semibold text-white">Login to your account</h1>
                        <p className="mt-4 text-sm text-muted">Securely access your learning dashboard and continue your progress.</p>
                    </div>

                    <Card className="rounded-[2rem] bg-white/5 p-8 backdrop-blur-xl shadow-soft">
                        <div className="grid gap-4 sm:grid-cols-2">
                            {['Continue with Google', 'Continue with Apple', 'Continue with LinkedIn'].map((item) => (
                                <button key={item} className="inline-flex h-14 w-full items-center justify-center gap-3 rounded-3xl border border-white/10 bg-white/5 text-sm text-text transition hover:border-primary/40 hover:bg-white/10">
                                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-3xl bg-white/10">+</span>
                                    {item}
                                </button>
                            ))}
                        </div>
                        <div className="my-8 flex items-center gap-3 text-sm text-muted">
                            <span className="h-px flex-1 bg-white/10" />
                            Or login with email
                            <span className="h-px flex-1 bg-white/10" />
                        </div>
                        <form className="space-y-6">
                            <div className="space-y-3">
                                <label className="block text-sm text-muted">Email</label>
                                <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="hello@example.com" className="bg-white/10 text-white" />
                            </div>
                            <div className="space-y-3">
                                <label className="block text-sm text-muted">Password</label>
                                <div className="relative">
                                    <Input
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="Enter your password"
                                        className="bg-white/10 text-white pr-12"
                                    />
                                    <button type="button" onClick={() => setShowPassword((value) => !value)} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted transition hover:text-white">
                                        {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                <label className="inline-flex items-center gap-3 text-sm text-muted">
                                    <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} className="h-4 w-4 rounded border-white/20 bg-white/5 text-primary focus:ring-primary" />
                                    Remember me
                                </label>
                                <Link to="/forgot-password" className="text-sm text-primary transition hover:text-white">Forgot Password?</Link>
                            </div>
                            <div className="space-y-3">
                                <Button className="w-full py-4 text-base">Sign In</Button>
                                <p className="text-center text-sm text-muted">
                                    Don’t have an account? <Link to="/register" className="text-primary hover:text-white">Register</Link>
                                </p>
                            </div>
                        </form>
                    </Card>
                </motion.div>
            </div>
        </div>
    )
}

export default Login
