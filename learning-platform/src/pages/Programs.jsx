import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import Container from '../components/Container'
import Card from '../components/Card'
import Button from '../components/Button'
import Badge from '../components/Badge'

const programPerks = [
    { title: 'Curated tracks', description: 'Programs built for fast skill growth and career readiness.' },
    { title: 'Live mentorship', description: 'Expert-led sessions and Q&A for real-time learning support.' },
    { title: 'Certification path', description: 'Complete certification sequences for portfolio-ready skills.' },
    { title: 'Team playbooks', description: 'Scalable plans designed for individuals and learning teams.' },
]

const programCards = [
    {
        title: 'Career Accelerator',
        tag: 'Premium',
        summary: 'A complete program for product designers and digital teams.',
        price: '$349',
        features: ['8 courses', 'Weekly workshops', 'Portfolio review'],
    },
    {
        title: 'Growth Studio',
        tag: 'Popular',
        summary: 'A business and marketing program focused on measurable growth.',
        price: '$299',
        features: ['6 courses', 'Strategy sessions', 'Analytics toolkit'],
    },
    {
        title: 'Engineering Launchpad',
        tag: 'New',
        summary: 'A full stack program built for modern product engineering teams.',
        price: '$379',
        features: ['7 courses', 'Code reviews', 'Deployment lab'],
    },
]

function Programs() {
    return (
        <div className="relative overflow-hidden bg-dark text-text pb-24">
            <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />

            <section className="relative py-24">
                <Container>
                    <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                        <motion.div initial={{ opacity: 0, x: -32 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                            <Badge>Programs</Badge>
                            <h1 className="mt-5 max-w-3xl text-5xl font-semibold text-white sm:text-6xl">Find guided, premium programs to accelerate your career.</h1>
                            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">Choose programs that combine courses, coaching, and measurable outcomes in a single path.</p>
                            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                                <Button>Explore programs</Button>
                                <Button variant="outline">Contact sales</Button>
                            </div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: 32 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="grid gap-4 sm:grid-cols-2">
                            {programPerks.map((perk) => (
                                <Card key={perk.title} className="border-white/10 bg-white/5">
                                    <h3 className="text-xl font-semibold text-white">{perk.title}</h3>
                                    <p className="mt-3 text-sm leading-7 text-muted">{perk.description}</p>
                                </Card>
                            ))}
                        </motion.div>
                    </div>
                </Container>
            </section>

            <section className="py-16">
                <Container>
                    <SectionTitle title="Program lineup" subtitle="Flexible paths for designers, marketers, and engineers." />
                    <div className="mt-10 grid gap-6 lg:grid-cols-3">
                        {programCards.map((program, index) => (
                            <motion.div key={program.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1, duration: 0.6 }}>
                                <Card className="rounded-[2rem] p-8 transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-glow">
                                    <div className="flex items-center justify-between gap-4">
                                        <div>
                                            <h3 className="text-2xl font-semibold text-white">{program.title}</h3>
                                            <p className="mt-2 text-sm text-muted">{program.summary}</p>
                                        </div>
                                        <Badge className="bg-secondary/10 text-secondary">{program.tag}</Badge>
                                    </div>
                                    <div className="mt-8 space-y-4">
                                        {program.features.map((feature) => (
                                            <div key={feature} className="flex items-center gap-3 text-sm text-muted">
                                                <span className="h-2 w-2 rounded-full bg-primary" />
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-8 flex items-center justify-between gap-4">
                                        <p className="text-3xl font-semibold text-white">{program.price}</p>
                                        <Button className="py-3">Join now</Button>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </section>
        </div>
    )
}

export default Programs
