import { motion } from 'framer-motion'
import { FiAward, FiClock, FiGlobe, FiUsers } from 'react-icons/fi'
import SectionTitle from '../components/SectionTitle'
import Container from '../components/Container'
import Card from '../components/Card'
import Badge from '../components/Badge'
import Button from '../components/Button'
import { siteStats, aboutHighlights, instructors } from '../data/site'

const heroFeatures = [
    { icon: FiAward, label: 'Certified curriculum' },
    { icon: FiGlobe, label: 'Global student network' },
    { icon: FiClock, label: 'On-demand learning' },
]

const values = [
    { title: 'Built for impact', description: 'Courses that help learners launch careers and drive business results.' },
    { title: 'Elegant delivery', description: 'Premium UI, motion, and interaction design tailored for modern learners.' },
    { title: 'Expert guidance', description: 'High-touch teaching from instructors with real industry experience.' },
]

function About() {
    return (
        <div className="relative overflow-hidden bg-dark text-text pb-24">
            <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />

            <section className="relative py-24">
                <Container>
                    <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                        <motion.div initial={{ opacity: 0, x: -32 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                            <Badge>About LMS Studio</Badge>
                            <h1 className="mt-5 max-w-3xl text-5xl font-semibold text-white sm:text-6xl">A premium learning platform made for modern teams and ambitious learners.</h1>
                            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">We design elegant course journeys, live mentoring, and measurable learning outcomes for anyone who wants to grow faster than the industry standard.</p>
                            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                                <Button>Explore courses</Button>
                                <Button variant="outline">Meet instructors</Button>
                            </div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: 32 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="grid gap-4 sm:grid-cols-2">
                            {heroFeatures.map((feature) => (
                                <Card key={feature.label} className="border-white/10 bg-white/5">
                                    <div className="flex items-center gap-3 text-primary">
                                        <feature.icon size={24} />
                                        <h3 className="text-lg font-semibold text-white">{feature.label}</h3>
                                    </div>
                                    <p className="mt-4 text-sm text-muted">Premium programs, tailored learning playlists, and verified outcomes for every path.</p>
                                </Card>
                            ))}
                        </motion.div>
                    </div>
                </Container>
            </section>

            <section className="py-16">
                <Container>
                    <SectionTitle title="Our impact" subtitle="We help learners move faster, with clarity and confidence." />
                    <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                        {siteStats.map((item) => (
                            <motion.div key={item.label} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-3xl border border-white/10 bg-surface/80 p-8 text-center shadow-soft">
                                <p className="text-4xl font-semibold text-white">{item.value}</p>
                                <p className="mt-3 text-sm text-muted">{item.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </section>

            <section className="py-16">
                <Container>
                    <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                        <div>
                            <SectionTitle title="Why choose us" subtitle="A premium ecosystem for learners and teams." />
                            <div className="mt-10 space-y-4">
                                {aboutHighlights.map((item) => (
                                    <motion.div key={item.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-3xl border border-white/10 bg-surface/80 p-6 shadow-soft">
                                        <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                                        <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2">
                            {values.map((item) => (
                                <motion.div key={item.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-[2rem] bg-gradient-to-br from-white/5 to-surface/40 p-8 shadow-soft">
                                    <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                                    <p className="mt-4 text-sm leading-7 text-muted">{item.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            <section className="py-16">
                <Container>
                    <SectionTitle title="Featured instructors" subtitle="Learn from instructors with proven expertise." />
                    <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                        {instructors.map((teacher) => (
                            <motion.div key={teacher.id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-[2rem] border border-white/10 bg-surface/80 p-6 shadow-soft">
                                <div className="flex items-center justify-between gap-4">
                                    <div>
                                        <p className="text-xl font-semibold text-white">{teacher.name}</p>
                                        <p className="mt-1 text-sm text-muted">{teacher.title}</p>
                                    </div>
                                    <div className="rounded-3xl bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.28em] text-secondary">Top</div>
                                </div>
                                <div className="mt-6 space-y-3 text-sm text-muted">
                                    <p>{teacher.bio}</p>
                                    <p><span className="text-white">{teacher.rating} ★</span> · {teacher.courses} courses · {teacher.students} students</p>
                                </div>
                                <div className="mt-6 flex flex-wrap gap-2">
                                    {teacher.expertise.map((skill) => (
                                        <Badge key={skill}>{skill}</Badge>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </section>
        </div>
    )
}

export default About
