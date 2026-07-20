import { useMemo, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowRight, FiCheck, FiClock, FiStar, FiUsers } from 'react-icons/fi'
import { courses } from '../data/courses'
import SectionTitle from '../components/SectionTitle'
import Container from '../components/Container'
import Button from '../components/Button'
import Badge from '../components/Badge'
import Card from '../components/Card'

function CourseDetails() {
    const { courseId } = useParams()
    const navigate = useNavigate()
    const course = useMemo(() => courses.find((item) => item.id === courseId), [courseId])
    const [activeCurriculum, setActiveCurriculum] = useState(0)

    if (!course) {
        return (
            <Container className="py-20">
                <div className="rounded-[2rem] border border-white/10 bg-surface/80 p-8 text-center">
                    <p className="text-xl text-white">Course not found.</p>
                    <Button className="mt-6" onClick={() => navigate('/courses')}>
                        Back to Courses
                    </Button>
                </div>
            </Container>
        )
    }

    const relatedCourses = courses.filter((item) => course.related.includes(item.id))

    return (
        <div className="bg-dark text-text">
            <section className="relative overflow-hidden border-b border-white/10 py-20">
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute -left-32 top-20 h-48 w-48 rounded-full bg-primary/20 blur-3xl" />
                    <div className="absolute right-10 top-10 h-56 w-56 rounded-full bg-secondary/20 blur-3xl" />
                </div>
                <Container className="relative z-10">
                    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }}>
                        <div className="grid gap-10 xl:grid-cols-[1.9fr_0.95fr] xl:items-start">
                            <div className="space-y-6">
                                <div className="inline-flex items-center gap-3 rounded-full bg-secondary/10 px-4 py-2 text-sm font-semibold text-secondary">Course Details</div>
                                <h1 className="text-5xl font-semibold tracking-[-0.06em] text-white sm:text-6xl">{course.title}</h1>
                                <p className="max-w-3xl text-lg leading-8 text-muted">{course.description}</p>
                                <div className="grid gap-4 sm:grid-cols-3">
                                    <div className="rounded-3xl bg-white/5 p-5 text-center">
                                        <p className="text-3xl font-semibold text-white">{course.rating}</p>
                                        <p className="text-sm text-muted">Average rating</p>
                                    </div>
                                    <div className="rounded-3xl bg-white/5 p-5 text-center">
                                        <p className="text-3xl font-semibold text-white">{course.students}</p>
                                        <p className="text-sm text-muted">Students enrolled</p>
                                    </div>
                                    <div className="rounded-3xl bg-white/5 p-5 text-center">
                                        <p className="text-3xl font-semibold text-white">{course.duration}</p>
                                        <p className="text-sm text-muted">Total duration</p>
                                    </div>
                                </div>
                                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-surface/80 p-8 shadow-soft">
                                    <div className="absolute right-6 top-6 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
                                    <div className="h-72 w-full rounded-[1.75rem] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 text-white shadow-soft">
                                        <div className="flex h-full flex-col justify-between">
                                            <div>
                                                <p className="text-sm uppercase tracking-[0.24em] text-secondary">Video Preview</p>
                                                <div className="mt-10 flex h-40 items-center justify-center rounded-[1.5rem] bg-white/5 text-2xl text-white/60">
                                                    Video Preview Placeholder
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-between rounded-3xl bg-white/5 px-5 py-4">
                                                <div>
                                                    <p className="text-sm text-muted">Instructor</p>
                                                    <p className="text-base font-semibold text-white">{course.instructor.name}</p>
                                                </div>
                                                <Badge>{course.category}</Badge>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <Card className="space-y-6">
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between gap-4">
                                            <div>
                                                <p className="text-sm uppercase tracking-[0.24em] text-muted">Price</p>
                                                <p className="mt-2 text-4xl font-semibold text-white">{course.priceLabel}</p>
                                            </div>
                                            <Badge className="bg-secondary/10 text-secondary">{course.difficulty}</Badge>
                                        </div>
                                        <div className="grid gap-4 rounded-3xl bg-white/5 p-4">
                                            <div className="flex items-center gap-3 text-sm text-muted">
                                                <FiClock />
                                                <span>{course.duration}</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-sm text-muted">
                                                <FiUsers />
                                                <span>{course.students} students</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-sm text-muted">
                                                <FiStar />
                                                <span>{course.rating} rating</span>
                                            </div>
                                        </div>
                                        <Button className="w-full">Enroll Now</Button>
                                    </div>
                                </Card>
                                <Card>
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <h2 className="text-lg font-semibold text-white">Instructor</h2>
                                            <Badge>{course.instructor.title}</Badge>
                                        </div>
                                        <div className="space-y-3 text-sm text-muted">
                                            <p>{course.instructor.bio}</p>
                                            <p className="text-white">{course.instructor.name}</p>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </motion.div>
                </Container>
            </section>

            <section className="py-16">
                <Container>
                    <SectionTitle title="Course overview" subtitle="Everything you need to know before enrolling." />
                    <div className="mt-10 grid gap-8 xl:grid-cols-[1.8fr_0.95fr]">
                        <div className="space-y-8">
                            <Card>
                                <div className="space-y-6">
                                    <p className="text-lg leading-8 text-muted">{course.summary}</p>
                                    <div className="space-y-4">
                                        {course.curriculum.map((section, index) => (
                                            <div key={section.title} className="rounded-[2rem] border border-white/10 bg-surface/80">
                                                <button
                                                    onClick={() => setActiveCurriculum(index)}
                                                    className="flex w-full items-center justify-between px-6 py-5 text-left text-white"
                                                >
                                                    <div>
                                                        <p className="text-lg font-semibold">{section.title}</p>
                                                        <p className="mt-2 text-sm text-muted">{section.lessons.length} lessons</p>
                                                    </div>
                                                    <span className="text-2xl text-secondary">{activeCurriculum === index ? '−' : '+'}</span>
                                                </button>
                                                <AnimatePresence>
                                                    {activeCurriculum === index && (
                                                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35 }} className="overflow-hidden px-6 pb-5">
                                                            <ul className="space-y-3 text-sm text-muted">
                                                                {section.lessons.map((lesson) => (
                                                                    <li key={lesson} className="flex items-center gap-3">
                                                                        <FiCheck className="text-secondary" />
                                                                        <span>{lesson}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Card>

                            <Card>
                                <div className="space-y-6">
                                    <h3 className="text-xl font-semibold text-white">Requirements</h3>
                                    <ul className="space-y-3 text-sm text-muted">
                                        {course.requirements.map((item) => (
                                            <li key={item} className="flex items-center gap-3">
                                                <FiCheck className="text-secondary" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Card>

                            <Card>
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-xl font-semibold text-white">Reviews</h3>
                                        <Badge>{course.reviews.length} reviews</Badge>
                                    </div>
                                    <div className="space-y-4">
                                        {course.reviews.map((review) => (
                                            <div key={review.name} className="rounded-3xl bg-white/5 p-5">
                                                <div className="flex items-center justify-between text-sm text-muted">
                                                    <span>{review.name}</span>
                                                    <span>{review.rating} ★</span>
                                                </div>
                                                <p className="mt-3 text-sm leading-7 text-muted">{review.comment}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Card>
                        </div>

                        <div className="space-y-6">
                            <Card className="space-y-6">
                                <div className="space-y-4">
                                    <h3 className="text-xl font-semibold text-white">Related courses</h3>
                                    <div className="space-y-4">
                                        {relatedCourses.map((item) => (
                                            <Link key={item.id} to={`/courses/${item.id}`} className="block rounded-3xl bg-white/5 px-5 py-4 transition hover:bg-white/10">
                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <p className="font-semibold text-white">{item.title}</p>
                                                        <p className="text-sm text-muted">{item.category}</p>
                                                    </div>
                                                    <p className="text-sm font-semibold text-white">{item.priceLabel}</p>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </Card>
                            <Card>
                                <div className="space-y-4">
                                    <h3 className="text-xl font-semibold text-white">Enrollment</h3>
                                    <p className="text-sm leading-7 text-muted">Secure your spot with a single click and start learning immediately.</p>
                                    <div className="rounded-3xl bg-white/5 p-5 text-sm text-muted">
                                        <div className="flex items-center justify-between">
                                            <span>Price</span>
                                            <span className="text-white font-semibold">{course.priceLabel}</span>
                                        </div>
                                        <div className="mt-4 flex items-center justify-between">
                                            <span>Start date</span>
                                            <span className="text-white">Flexible</span>
                                        </div>
                                    </div>
                                    <Button className="w-full">Enroll Today</Button>
                                </div>
                            </Card>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="border-t border-white/10 py-20">
                <Container>
                    <div className="rounded-[2rem] border border-white/10 bg-surface/80 p-10 shadow-soft">
                        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                            <div>
                                <h2 className="text-3xl font-semibold text-white">Ready to take the next step?</h2>
                                <p className="mt-4 text-sm leading-7 text-muted">Join this course and start building a more confident, capable learning career.</p>
                            </div>
                            <Button className="w-full lg:w-auto">Enroll Now</Button>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    )
}

export default CourseDetails
