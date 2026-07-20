import { motion } from 'framer-motion'
import { FiCheckCircle, FiTrendingUp } from 'react-icons/fi'
import SectionTitle from '../components/SectionTitle'
import Container from '../components/Container'
import Card from '../components/Card'
import Button from '../components/Button'
import Badge from '../components/Badge'
import { pricingPlans, faqItems } from '../data/site'

function Pricing() {
    return (
        <div className="relative overflow-hidden bg-dark text-text pb-24">
            <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />

            <section className="relative py-24">
                <Container>
                    <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
                        <motion.div initial={{ opacity: 0, x: -32 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                            <Badge>Pricing plans</Badge>
                            <h1 className="mt-5 max-w-3xl text-5xl font-semibold text-white sm:text-6xl">Flexible plans for teams, individuals, and enterprise learning.</h1>
                            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">Pick the plan that fits your ambitions. Every plan includes premium support, progress tracking, and a polished learning experience.</p>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: 32 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="space-y-5">
                            <Card className="border-white/10 bg-white/5">
                                <div className="flex items-center gap-3 text-primary">
                                    <FiTrendingUp size={22} />
                                    <div>
                                        <p className="text-sm uppercase tracking-[0.28em] text-muted">Team value</p>
                                        <p className="mt-2 text-xl font-semibold text-white">Enjoy dedicated onboarding and support for your team.</p>
                                    </div>
                                </div>
                            </Card>
                            <Card className="border-white/10 bg-white/5">
                                <p className="text-sm uppercase tracking-[0.28em] text-muted">Included with every plan</p>
                                <ul className="mt-6 space-y-3 text-sm text-muted">
                                    {['Curated course tracks', 'Live sessions', 'Certificates', 'Community access'].map((feature) => (
                                        <li key={feature} className="flex items-center gap-3">
                                            <FiCheckCircle className="text-primary" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        </motion.div>
                    </div>
                </Container>
            </section>

            <section className="py-16">
                <Container>
                    <div className="grid gap-8 lg:grid-cols-3">
                        {pricingPlans.map((plan) => (
                            <motion.div key={plan.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                                <Card className={`${plan.highlight ? 'border-primary/40 bg-gradient-to-br from-primary/20 to-surface/80 shadow-glow' : 'border-white/10 bg-surface/80'}`}>
                                    <div className="flex items-center justify-between gap-3">
                                        <div>
                                            <h3 className="text-2xl font-semibold text-white">{plan.name}</h3>
                                            <p className="mt-2 text-sm text-muted">{plan.frequency}</p>
                                        </div>
                                        {plan.highlight && <Badge className="bg-primary/15 text-primary">Popular</Badge>}
                                    </div>
                                    <div className="mt-8">
                                        <p className="text-5xl font-semibold text-white">{plan.price}</p>
                                        <p className="mt-3 text-sm leading-7 text-muted">{plan.description}</p>
                                    </div>
                                    <ul className="mt-8 space-y-3 text-sm text-muted">
                                        {plan.features.map((feature) => (
                                            <li key={feature} className="flex items-center gap-3">
                                                <FiCheckCircle className="text-primary" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <Button className="mt-8 w-full py-4">Choose plan</Button>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="py-16">
                <Container>
                    <SectionTitle title="Common questions" subtitle="Everything you need to know before choosing a plan." />
                    <div className="mt-10 grid gap-6 sm:grid-cols-2">
                        {faqItems.slice(0, 4).map((faq) => (
                            <motion.div key={faq.question} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-3xl border border-white/10 bg-surface/80 p-6 shadow-soft">
                                <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                                <p className="mt-3 text-sm leading-7 text-muted">{faq.answer}</p>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </section>
        </div>
    )
}

export default Pricing
