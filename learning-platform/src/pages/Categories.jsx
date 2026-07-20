import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import Container from '../components/Container'
import Card from '../components/Card'
import Badge from '../components/Badge'
import Button from '../components/Button'
import { categories } from '../data/site'

function Categories() {
    return (
        <div className="relative overflow-hidden bg-dark text-text pb-24">
            <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />

            <section className="relative py-24">
                <Container>
                    <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                        <motion.div initial={{ opacity: 0, x: -32 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                            <Badge>Top categories</Badge>
                            <h1 className="mt-5 max-w-3xl text-5xl font-semibold text-white sm:text-6xl">Browse course categories built for modern career growth.</h1>
                            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">Discover the most valuable learning categories and filter courses by your interest.</p>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 32 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                            <Card className="border-white/10 bg-white/5">
                                <p className="text-sm uppercase tracking-[0.28em] text-muted">Popular demand</p>
                                <h2 className="mt-4 text-3xl font-semibold text-white">Stay ahead with skills that matter.</h2>
                                <p className="mt-4 text-sm leading-7 text-muted">Every category features structured content, practical projects, and expert instructors.</p>
                                <Button className="mt-8 w-full py-4">View all courses</Button>
                            </Card>
                        </motion.div>
                    </div>
                </Container>
            </section>

            <section className="py-16">
                <Container>
                    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                        {categories.map((category) => (
                            <motion.div key={category.id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                                <Card className="border-white/10 bg-surface/80">
                                    <div className={`rounded-3xl bg-gradient-to-br ${category.accent} p-6 text-white shadow-glow`}>
                                        <p className="text-sm uppercase tracking-[0.28em] text-white/75">{category.count}</p>
                                        <h3 className="mt-4 text-2xl font-semibold">{category.title}</h3>
                                        <p className="mt-4 text-sm leading-7 text-white/80">{category.description}</p>
                                    </div>
                                    <div className="mt-6 flex items-center justify-between gap-4">
                                        <Badge>Explore</Badge>
                                        <Button variant="outline">View category</Button>
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

export default Categories
