import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import Button from '../components/Button'
import Card from '../components/Card'
import Input from '../components/Input'

function ResetPassword() {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirm, setShowConfirm] = useState(false)
    const [form, setForm] = useState({ password: '', confirm: '' })

    const handleChange = (field) => (event) => {
        setForm((prev) => ({ ...prev, [field]: event.target.value }))
    }

    return (
        <div className="relative min-h-screen overflow-hidden bg-dark text-text">
            <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-secondary/20 blur-3xl" />
            <div className="pointer-events-none absolute right-8 top-24 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
            <div className="pointer-events-none absolute left-10 bottom-24 h-64 w-64 rounded-full bg-white/5 blur-3xl" />

            <div className="relative mx-auto flex min-h-screen items-center justify-center px-6 py-20">
                <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="w-full max-w-xl">
                    <div className="mb-10 text-center">
                        <p className="text-sm uppercase tracking-[0.3em] text-secondary">Secure your account</p>
                        <h1 className="mt-4 text-5xl font-semibold text-white">Create a new password</h1>
                        <p className="mt-4 text-sm text-muted">Use a strong password to keep your learning progress protected.</p>
                    </div>

                    <Card className="rounded-[2rem] bg-white/5 p-8 backdrop-blur-xl shadow-soft">
                        <form className="space-y-6">
                            <div className="space-y-3 relative">
                                <label className="block text-sm text-muted">New password</label>
                                <Input
                                    value={form.password}
                                    onChange={handleChange('password')}
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="New password"
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
                                    placeholder="Confirm new password"
                                    className="bg-white/10 text-white pr-12"
                                />
                                <button type="button" onClick={() => setShowConfirm((value) => !value)} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted transition hover:text-white">
                                    {showConfirm ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                                </button>
                            </div>
                            <div className="space-y-4">
                                <Button className="w-full py-4 text-base">Reset password</Button>
                                <p className="text-center text-sm text-muted">
                                    Return to <Link to="/login" className="text-primary hover:text-white">Login</Link>
                                </p>
                            </div>
                        </form>
                    </Card>
                </motion.div>
            </div>
        </div>
    )
}

export default ResetPassword
