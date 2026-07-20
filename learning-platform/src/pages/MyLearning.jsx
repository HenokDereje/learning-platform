import { motion } from 'framer-motion'
import { FiCheckCircle, FiClock, FiLayers, FiPlayCircle } from 'react-icons/fi'
import { learningItems } from '../data/student'
import SectionTitle from '../components/SectionTitle'
import Container from '../components/Container'
import Card from '../components/Card'
import ProgressBar from '../components/ProgressBar'

function MyLearning() {
    return (
        <div className="bg-dark text-text">
            <section className="border-b border-white/10 py-16">
                <Container>
                    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                        <SectionTitle title="My Learning" subtitle="Track your courses, progress, and completion status." />
                        <div className="mt-10 grid gap-6 xl:grid-cols-3">
                            {learningItems.map((item) => (
                                <Card key={item.id} className="space-y-5">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-lg font-semibold text-white">{item.title}</p>
                                            <p className="mt-2 text-sm text-muted">{item.instructor}</p>
                                        </div>
                                        <div className="rounded-3xl bg-primary/10 px-3 py-2 text-sm font-semibold text-primary">{item.status}</div>
                                    </div>
                                    <ProgressBar value={item.progress} label={`${item.progress}% complete`} />
                                    <div className="grid gap-3 sm:grid-cols-2">
                                        <div className="rounded-3xl bg-white/5 p-4 text-sm">
                                            <p className="text-muted">Lessons</p>
                                            <p className="mt-2 font-semibold text-white">12</p>
                                        </div>
                                        <div className="rounded-3xl bg-white/5 p-4 text-sm">
                                            <p className="text-muted">Hours</p>
                                            <p className="mt-2 font-semibold text-white">{item.progress > 0 ? '8' : '0'}</p>
                                        </div>
                                    </div>
                                    <div className="grid gap-3 sm:grid-cols-2">
                                        <button className="rounded-3xl bg-primary px-4 py-3 text-sm font-semibold text-dark">Continue</button>
                                        <button className="rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-muted transition hover:border-secondary hover:text-white">View course</button>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </motion.div>
                </Container>
            </section>

            <section className="py-16">
                <Container>
                    <div className="grid gap-6 xl:grid-cols-[1.6fr_0.8fr]">
                        <Card className="space-y-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm uppercase tracking-[0.3em] text-muted">Learning overview</p>
                                    <h2 className="text-2xl font-semibold text-white">Your current activity</h2>
                                </div>
                                <FiLayers size={26} className="text-primary" />
                            </div>
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="rounded-3xl bg-white/5 p-5">
                                    <p className="text-sm text-muted">Completed lessons</p>
                                    <p className="mt-3 text-3xl font-semibold text-white">18</p>
                                </div>
                                <div className="rounded-3xl bg-white/5 p-5">
                                    <p className="text-sm text-muted">Ongoing courses</p>
                                    <p className="mt-3 text-3xl font-semibold text-white">2</p>
                                </div>
                            </div>
                        </Card>
                        <Card className="space-y-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm uppercase tracking-[0.3em] text-muted">Performance</p>
                                    <h2 className="text-2xl font-semibold text-white">Completion status</h2>
                                </div>
                                <FiCheckCircle size={26} className="text-secondary" />
                            </div>
                            <div className="space-y-4">
                                <div className="rounded-3xl bg-white/5 p-5">
                                    <p className="text-sm text-muted">Course mastery</p>
                                    <ProgressBar value={72} />
                                </div>
                                <div className="rounded-3xl bg-white/5 p-5">
                                    <p className="text-sm text-muted">Weekly progress</p>
                                    <ProgressBar value={54} />
                                </div>
                            </div>
                        </Card>
                    </div>
                </Container>
            </section>
        </div>
    )
}

export default MyLearning
