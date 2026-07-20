import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowLeft, FiArrowRight, FiClock, FiDownload, FiMessageCircle, FiPieChart, FiPlay } from 'react-icons/fi'
import { lessons } from '../data/student'
import SectionTitle from '../components/SectionTitle'
import Container from '../components/Container'
import Card from '../components/Card'
import Button from '../components/Button'
import ProgressBar from '../components/ProgressBar'

function LessonPlayer() {
    const [activeLessonIndex, setActiveLessonIndex] = useState(1)
    const activeLesson = useMemo(() => lessons[activeLessonIndex], [activeLessonIndex])

    return (
        <div className="bg-dark text-text">
            <section className="border-b border-white/10 py-16">
                <Container>
                    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                        <SectionTitle title="Lesson Player" subtitle="Watch lessons, track progress, and take notes." />
                        <div className="mt-10 grid gap-6 xl:grid-cols-[1.6fr_0.9fr]">
                            <div className="space-y-6">
                                <Card>
                                    <div className="rounded-[2rem] bg-slate-950 p-6 text-white shadow-soft">
                                        <div className="flex items-center gap-4">
                                            <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-primary/20 text-primary">
                                                <FiPlay size={28} />
                                            </div>
                                            <div>
                                                <p className="text-sm uppercase tracking-[0.3em] text-muted">Now playing</p>
                                                <h2 className="mt-3 text-3xl font-semibold">{activeLesson.title}</h2>
                                            </div>
                                        </div>
                                        <div className="mt-8 h-72 rounded-[2rem] bg-white/5 p-6">
                                            <div className="flex h-full flex-col items-center justify-center rounded-[1.75rem] border border-white/10 bg-white/5">
                                                <FiPlay size={48} className="text-white/60" />
                                                <p className="mt-4 text-sm text-muted">Video placeholder</p>
                                            </div>
                                        </div>
                                        <div className="mt-6 grid gap-4 sm:grid-cols-3">
                                            <div className="rounded-3xl bg-white/5 p-4 text-center">
                                                <p className="text-xs uppercase tracking-[0.3em] text-muted">Duration</p>
                                                <p className="mt-2 text-lg font-semibold text-white">{activeLesson.duration}</p>
                                            </div>
                                            <div className="rounded-3xl bg-white/5 p-4 text-center">
                                                <p className="text-xs uppercase tracking-[0.3em] text-muted">Type</p>
                                                <p className="mt-2 text-lg font-semibold text-white">{activeLesson.type}</p>
                                            </div>
                                            <div className="rounded-3xl bg-white/5 p-4 text-center">
                                                <p className="text-xs uppercase tracking-[0.3em] text-muted">Progress</p>
                                                <p className="mt-2 text-lg font-semibold text-white">{activeLesson.progress}%</p>
                                            </div>
                                        </div>
                                    </div>
                                </Card>

                                <Card className="space-y-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm uppercase tracking-[0.3em] text-muted">Notes</p>
                                            <h2 className="text-2xl font-semibold text-white">Lesson notes</h2>
                                        </div>
                                        <FiDownload size={24} className="text-primary" />
                                    </div>
                                    <div className="space-y-4">
                                        {activeLesson.notes.length ? (
                                            activeLesson.notes.map((note) => (
                                                <div key={note} className="rounded-3xl bg-white/5 p-4 text-sm text-muted">
                                                    {note}
                                                </div>
                                            ))
                                        ) : (
                                            <p className="text-sm text-muted">No notes yet. Add your thoughts as you watch.</p>
                                        )}
                                    </div>
                                    <textarea className="h-32 w-full resize-none rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-text outline-none" placeholder="Write your notes here..." />
                                </Card>

                                <Card className="space-y-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm uppercase tracking-[0.3em] text-muted">Discussion</p>
                                            <h2 className="text-2xl font-semibold text-white">Class chat</h2>
                                        </div>
                                        <FiMessageCircle size={24} className="text-secondary" />
                                    </div>
                                    <div className="space-y-4">
                                        {activeLesson.discussion.length ? (
                                            activeLesson.discussion.map((item) => (
                                                <div key={item.comment} className="rounded-3xl bg-white/5 p-4">
                                                    <p className="text-sm font-semibold text-white">{item.author}</p>
                                                    <p className="mt-2 text-sm text-muted">{item.comment}</p>
                                                    <p className="mt-3 text-xs uppercase tracking-[0.2em] text-muted">{item.time}</p>
                                                </div>
                                            ))
                                        ) : (
                                            <p className="text-sm text-muted">No discussion yet for this lesson.</p>
                                        )}
                                    </div>
                                </Card>
                            </div>

                            <div className="space-y-6">
                                <Card className="space-y-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm uppercase tracking-[0.3em] text-muted">Lessons</p>
                                            <h2 className="text-2xl font-semibold text-white">Lesson list</h2>
                                        </div>
                                        <FiPlayCircle size={24} className="text-primary" />
                                    </div>
                                    <div className="space-y-3">
                                        {lessons.map((lesson, index) => (
                                            <button key={lesson.id} onClick={() => setActiveLessonIndex(index)} className={`flex w-full items-center justify-between rounded-3xl border border-white/10 p-4 text-left transition ${activeLessonIndex === index ? 'bg-primary/10 text-white' : 'bg-white/5 text-muted hover:bg-white/10'}`}>
                                                <div>
                                                    <p className="font-semibold">{lesson.title}</p>
                                                    <p className="mt-1 text-sm text-muted">{lesson.duration}</p>
                                                </div>
                                                <span className="rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-white">{lesson.progress}%</span>
                                            </button>
                                        ))}
                                    </div>
                                </Card>

                                <Card className="space-y-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-sm uppercase tracking-[0.3em] text-muted">Progress tracker</p>
                                            <h2 className="text-2xl font-semibold text-white">Your session</h2>
                                        </div>
                                        <FiPieChart size={24} className="text-secondary" />
                                    </div>
                                    <ProgressBar value={activeLesson.progress} label={`Lesson completion: ${activeLesson.progress}%`} />
                                    <div className="grid gap-4 sm:grid-cols-2">
                                        <Button className="w-full">Previous</Button>
                                        <Button className="w-full">Next</Button>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </motion.div>
                </Container>
            </section>
        </div>
    )
}

export default LessonPlayer
