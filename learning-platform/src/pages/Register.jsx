import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import Button from '../components/Button'
import Card from '../components/Card'
import Input from '../components/Input'

function Register() {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirm, setShowConfirm] = useState(false)
    const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' })

    const handleChange = (field) => (event) => {
        setForm((prev) => ({ ...prev, [field]: event.target.value }))
    }

    return (
        <div className="relative min-h-screen overflow-hidden bg-dark text-text">
            <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-secondary/20 blur-3xl" />
            <div className="pointer-events-none absolute right-8 top-28 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
            <div className="pointer-events-none absolute left-10 bottom-24 h-64 w-64 rounded-full bg-white/5 blur-3xl" />

            <div className="relative mx-auto flex min-h-screen items-center justify-center px-6 py-20">
                <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="w-full max-w-2xl">
                    <div className="mb-10 text-center">
                        <p className="text-sm uppercase tracking-[0.3em] text-secondary">Start learning</p>
                        <h1 className="mt-4 text-5xl font-semibold text-white">Create your account</h1>
                        <p className="mt-4 text-sm text-muted">Join the premium learning experience and get instant access to curated courses.</p>
                    </div>

                    <Card className="rounded-[2rem] bg-white/5 p-8 backdrop-blur-xl shadow-soft">
                        <div className="grid gap-4 sm:grid-cols-2">
                            {['Sign up with Google', 'Sign up with Apple'].map((label) => (
                                <button key={label} className="inline-flex h-14 w-full items-center justify-center gap-3 rounded-3xl border border-white/10 bg-white/5 text-sm text-text transition hover:border-secondary/40 hover:bg-white/10">
                                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-3xl bg-white/10">+</span>
                                    {label}
                                </button>
                            ))}
                        </div>
                        <div className="my-8 flex items-center gap-3 text-sm text-muted">
                            <span className="h-px flex-1 bg-white/10" />
                            Or register with email
                            <span className="h-px flex-1 bg-white/10" />
                        </div>
                        <form className="space-y-6">
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="space-y-3">
                                    <label className="block text-sm text-muted">Full name</label>
                                    <Input value={form.name} onChange={handleChange('name')} placeholder="Your name" className="bg-white/10 text-white" />
                                </div>
                                <div className="space-y-3">
                                    <label className="block text-sm text-muted">Email address</label>
                                    <Input value={form.email} onChange={handleChange('email')} type="email" placeholder="hello@example.com" className="bg-white/10 text-white" />
                                </div>
                            </div>
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="space-y-3 relative">
                                    <label className="block text-sm text-muted">Password</label>
                                    <Input
                                        value={form.password}
                                        onChange={handleChange('password')}
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="Create password"
                                        className="bg-white/10 text-white pr-12"
                                    />
                                    <button type="button" onClick={() => setShowPassword((value) => !value)} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted transition hover:text-white">
                                        {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                                    </button>
                                </div>
                                <div className="space-y-3 relative">
                                    <label className="block text-sm text-muted">Confirm password</label>
                                    <Input
                                        value={form.confirm}
                                        onChange={handleChange('confirm')}
                                        type={showConfirm ? 'text' : 'password'}
                                        placeholder="Confirm password"
                                        className="bg-white/10 text-white pr-12"
                                    />
                                    <button type="button" onClick={() => setShowConfirm((value) => !value)} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted transition hover:text-white">
                                        {showConfirm ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                                    </button>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <Button className="w-full py-4 text-base">Create account</Button>
                                <p className="text-center text-sm text-muted">
                                    Already have an account? <Link to="/login" className="text-primary hover:text-white">Sign in</Link>
                                </p>
                            </div>
                        </form>
                    </Card>
                </motion.div>
            </div>
        </div>
    )
}

export default Register
