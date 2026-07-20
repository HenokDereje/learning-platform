import { motion } from 'framer-motion'
import { FiAward, FiUsers } from 'react-icons/fi'
import SectionTitle from '../components/SectionTitle'
import Container from '../components/Container'
import Card from '../components/Card'
import Badge from '../components/Badge'
import Button from '../components/Button'
import { instructors } from '../data/site'

function Instructors() {
    return (
        <div className="relative overflow-hidden bg-dark text-text pb-24">
            <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />

            <section className="relative py-24">
                <Container>
                    <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                        <motion.div initial={{ opacity: 0, x: -32 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                            <Badge>Our mentors</Badge>
                            <h1 className="mt-5 max-w-3xl text-5xl font-semibold text-white sm:text-6xl">Learn from instructors who shape modern products and teams.</h1>
                            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">Our instructors combine industry leadership with a premium teaching approach to make learning practical and inspiring.</p>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: 32 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="grid gap-4 sm:grid-cols-2">
                            <Card className="border-white/10 bg-white/5">
                                <div className="flex items-center gap-3 text-primary">
                                    <FiAward size={22} />
                                    <div>
                                        <p className="text-sm uppercase tracking-[0.28em] text-muted">Expert team</p>
                                        <p className="mt-2 text-xl font-semibold text-white">Curated mentors from top companies.</p>
                                    </div>
                                </div>
                            </Card>
                            <Card className="border-white/10 bg-white/5">
                                <div className="flex items-center gap-3 text-secondary">
                                    <FiUsers size={22} />
                                    <div>
                                        <p className="text-sm uppercase tracking-[0.28em] text-muted">Student success</p>
                                        <p className="mt-2 text-xl font-semibold text-white">Guidance for your next career milestone.</p>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    </div>
                </Container>
            </section>

            <section className="py-16">
                <Container>
                    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                        {instructors.map((teacher) => (
                            <motion.div key={teacher.id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                                <Card className="border-white/10 bg-surface/80">
                                    <div className="space-y-4">
                                        <div className="rounded-3xl bg-white/5 p-6 text-center shadow-soft">
                                            <p className="text-3xl font-semibold text-white">{teacher.name.charAt(0)}</p>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-white">{teacher.name}</h3>
                                            <p className="mt-1 text-sm text-muted">{teacher.title}</p>
                                        </div>
                                        <p className="text-sm leading-7 text-muted">{teacher.bio}</p>
                                        <div className="flex flex-wrap gap-2 text-sm text-muted">
                                            <Badge>{teacher.rating} ★</Badge>
                                            <Badge>{teacher.courses} courses</Badge>
                                            <Badge>{teacher.students} students</Badge>
                                        </div>
                                        <Button className="w-full py-3">View profile</Button>
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

export default Instructors
