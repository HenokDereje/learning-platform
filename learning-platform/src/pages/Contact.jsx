import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import SectionTitle from '../components/SectionTitle'
import Container from '../components/Container'
import Card from '../components/Card'
import Button from '../components/Button'
import Input from '../components/Input'
import { contactCards } from '../data/site'

const iconMap = {
    mail: FiMail,
    building: FiMapPin,
    phone: FiPhone,
}

function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' })

    const handleChange = (field) => (event) => {
        setForm((prev) => ({ ...prev, [field]: event.target.value }))
    }

    return (
        <div className="relative overflow-hidden bg-dark text-text pb-24">
            <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute right-0 top-28 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />

            <section className="relative py-24">
                <Container>
                    <div className="grid gap-12 lg:grid-cols-[0.95fr_0.95fr] lg:items-center">
                        <motion.div initial={{ opacity: 0, x: -28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                            <Badge>Get in touch</Badge>
                            <h1 className="mt-5 max-w-3xl text-5xl font-semibold text-white sm:text-6xl">Contact our support and enrollment team.</h1>
                            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">We’re ready to answer questions, guide your team plan, and help you choose the right courses for your goals.</p>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                            <div className="grid gap-4 sm:grid-cols-2">
                                {contactCards.map((card) => {
                                    const Icon = iconMap[card.icon]
                                    return (
                                        <Card key={card.title} className="border-white/10 bg-white/5">
                                            <div className="flex items-center gap-3 text-primary">
                                                <Icon size={22} />
                                                <div>
                                                    <p className="text-sm uppercase tracking-[0.28em] text-muted">{card.title}</p>
                                                    <p className="mt-2 text-base text-white">{card.detail}</p>
                                                </div>
                                            </div>
                                        </Card>
                                    )
                                })}
                            </div>
                        </motion.div>
                    </div>
                </Container>
            </section>

            <section className="py-16">
                <Container>
                    <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
                        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                            <SectionTitle title="Send a message" subtitle="We’re here to support your learning needs." />
                            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">Share your project goals, team size, or questions about membership and we’ll respond quickly.</p>
                            <Card className="mt-10 border-white/10 bg-white/5">
                                <form className="space-y-6">
                                    <Input label="Your name" value={form.name} onChange={handleChange('name')} placeholder="Enter your name" />
                                    <Input label="Email address" type="email" value={form.email} onChange={handleChange('email')} placeholder="hello@example.com" />
                                    <label className="space-y-2 text-sm text-muted">
                                        Message
                                        <textarea value={form.message} onChange={handleChange('message')} placeholder="Describe your request" className="min-h-[160px] w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" />
                                    </label>
                                    <Button className="w-full py-4">Send message</Button>
                                </form>
                            </Card>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="rounded-[2rem] border border-white/10 bg-surface/80 p-8 shadow-soft">
                            <h2 className="text-3xl font-semibold text-white">Office hours</h2>
                            <p className="mt-4 text-sm leading-7 text-muted">Our team is available Monday through Friday, 8am to 6pm. We reply to inquiries within one business day.</p>
                            <div className="mt-10 grid gap-4">
                                <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                                    <p className="text-sm uppercase tracking-[0.28em] text-muted">Customer support</p>
                                    <p className="mt-3 text-xl font-semibold text-white">support@lmsstudio.com</p>
                                </div>
                                <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                                    <p className="text-sm uppercase tracking-[0.28em] text-muted">Sales inquiries</p>
                                    <p className="mt-3 text-xl font-semibold text-white">sales@lmsstudio.com</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </Container>
            </section>
        </div>
    )
}

export default Contact
