import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'
import SectionTitle from '../components/SectionTitle'
import Container from '../components/Container'
import Card from '../components/Card'
import Button from '../components/Button'
import { faqItems } from '../data/site'

function FAQ() {
    const [expanded, setExpanded] = useState(faqItems[0]?.question || '')

    return (
        <div className="relative overflow-hidden bg-dark text-text pb-24">
            <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />

            <section className="relative py-24">
                <Container>
                    <div className="max-w-3xl">
                        <Badge>Help center</Badge>
                        <h1 className="mt-5 text-5xl font-semibold text-white sm:text-6xl">Answers to your most frequently asked questions.</h1>
                        <p className="mt-6 text-lg leading-8 text-muted">Explore our FAQ to learn about plans, learning experience, certification, and team access.</p>
                    </div>
                </Container>
            </section>

            <section className="py-16">
                <Container>
                    <div className="grid gap-10 lg:grid-cols-[0.8fr_0.7fr]">
                        <div className="space-y-4">
                            {faqItems.map((faq) => {
                                const isOpen = faq.question === expanded
                                return (
                                    <motion.div key={faq.question} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="overflow-hidden rounded-[2rem] border border-white/10 bg-surface/80 shadow-soft">
                                        <button onClick={() => setExpanded(isOpen ? '' : faq.question)} className="flex w-full items-center justify-between gap-4 px-6 py-6 text-left">
                                            <div>
                                                <p className="text-lg font-semibold text-white">{faq.question}</p>
                                                <p className="mt-2 text-sm text-muted">Tap to view the answer.</p>
                                            </div>
                                            <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                                                <FiChevronDown size={20} className="text-secondary" />
                                            </motion.span>
                                        </button>
                                        {isOpen && (
                                            <div className="border-t border-white/10 px-6 py-5 text-sm leading-7 text-muted">{faq.answer}</div>
                                        )}
                                    </motion.div>
                                )
                            })}
                        </div>

                        <div className="space-y-6 rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/5 to-surface/80 p-8 shadow-soft">
                            <h2 className="text-3xl font-semibold text-white">Still have questions?</h2>
                            <p className="text-sm leading-7 text-muted">Reach out to our support team anytime and we’ll guide you through plan selection, onboarding, or course recommendations.</p>
                            <Button>Contact support</Button>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    )
}

export default FAQ
