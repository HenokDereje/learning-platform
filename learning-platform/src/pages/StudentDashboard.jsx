import { motion } from 'framer-motion'
import { FiBarChart2, FiClock, FiDownload, FiStar, FiTrendingUp, FiZap } from 'react-icons/fi'
import { dashboardData } from '../data/student'
import SectionTitle from '../components/SectionTitle'
import Container from '../components/Container'
import Card from '../components/Card'
import Button from '../components/Button'
import ProgressBar from '../components/ProgressBar'

function StudentDashboard() {
    return (
        <div className="bg-dark text-text">
            <section className="border-b border-white/10 py-16">
                <Container>
                    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                        <SectionTitle title="Dashboard" subtitle="Your learning overview and progress at a glance." />
                        <div className="mt-10 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
                            <div className="grid gap-6 md:grid-cols-2">
                                {dashboardData.progressCards.map((card) => (
                                    <Card key={card.label} className="space-y-4">
                                        <div className={`inline-flex items-center gap-2 rounded-3xl px-4 py-2 text-sm font-semibold ${card.accent}`}>{card.label}</div>
                                        <div className="text-3xl font-semibold text-white">{card.value}</div>
                                        <p className="text-sm text-muted">{card.metric}</p>
                                    </Card>
                                ))}
                            </div>
                            <Card className="space-y-6">
                                <div className="flex items-center justify-between gap-4">
                                    <div>
                                        <p className="text-sm uppercase tracking-[0.3em] text-muted">Learning growth</p>
                                        <h2 className="text-2xl font-semibold text-white">Monthly progress</h2>
                                    </div>
                                    <FiTrendingUp size={28} className="text-primary" />
                                </div>
                                <div className="grid gap-4">
                                    <div className="rounded-3xl bg-white/5 p-5">
                                        <div className="flex items-center justify-between text-sm text-muted">
                                            <span>Course completion</span>
                                            <span>72%</span>
                                        </div>
                                        <ProgressBar value={72} />
                                    </div>
                                    <div className="rounded-3xl bg-white/5 p-5">
                                        <div className="flex items-center justify-between text-sm text-muted">
                                            <span>Task completion</span>
                                            <span>84%</span>
                                        </div>
                                        <ProgressBar value={84} />
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </motion.div>
                </Container>
            </section>

            <section className="py-16">
                <Container>
                    <div className="grid gap-6 xl:grid-cols-[1.4fr_0.6fr]">
                        <div className="space-y-6">
                            <Card>
                                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                                    <div>
                                        <p className="text-sm uppercase tracking-[0.3em] text-secondary">Continue learning</p>
                                        <h2 className="mt-4 text-3xl font-semibold text-white">Keep your momentum going.</h2>
                                    </div>
                                    <Button>View All Courses</Button>
                                </div>
                                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                                    {dashboardData.continueLearning.map((item) => (
                                        <div key={item.id} className="rounded-[1.75rem] border border-white/10 bg-surface/80 p-6">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="text-lg font-semibold text-white">{item.title}</p>
                                                    <p className="mt-2 text-sm text-muted">{item.lesson}</p>
                                                </div>
                                                <FiClock size={24} className="text-primary" />
                                            </div>
                                            <div className="mt-6">
                                                <ProgressBar value={item.progress} label={`${item.progress}% complete`} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Card>

                            <Card className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm uppercase tracking-[0.3em] text-muted">Achievements</p>
                                        <h2 className="text-2xl font-semibold text-white">Recent milestones</h2>
                                    </div>
                                    <FiStar size={26} className="text-secondary" />
                                </div>
                                <div className="grid gap-4">
                                    {dashboardData.achievements.map((achievement) => (
                                        <div key={achievement.title} className="rounded-3xl bg-white/5 p-5">
                                            <p className="text-sm text-muted">{achievement.title}</p>
                                            <p className="mt-2 text-lg font-semibold text-white">{achievement.value}</p>
                                        </div>
                                    ))}
                                </div>
                            </Card>
                        </div>

                        <div className="space-y-6">
                            <Card className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm uppercase tracking-[0.3em] text-muted">Recent activity</p>
                                        <h2 className="text-xl font-semibold text-white">What you did recently</h2>
                                    </div>
                                    <FiBarChart2 size={24} className="text-primary" />
                                </div>
                                <div className="space-y-4">
                                    {dashboardData.recentActivity.map((item) => (
                                        <div key={item.time} className="rounded-3xl bg-white/5 p-5">
                                            <p className="font-semibold text-white">{item.label}</p>
                                            <p className="mt-2 text-sm text-muted">{item.action}</p>
                                            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted">{item.time}</p>
                                        </div>
                                    ))}
                                </div>
                            </Card>

                            <Card className="rounded-[2rem] border border-white/10 bg-surface/80 p-6 text-center">
                                <FiZap size={32} className="mx-auto text-primary" />
                                <p className="mt-4 text-sm uppercase tracking-[0.3em] text-secondary">Upgrade your learning</p>
                                <h2 className="mt-4 text-2xl font-semibold text-white">Unlock more premium features.</h2>
                                <p className="mt-3 text-sm leading-7 text-muted">Access personal coaching, certifications, and group workspace tools.</p>
                                <Button className="mt-6 w-full">View Premium</Button>
                            </Card>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    )
}

export default StudentDashboard
