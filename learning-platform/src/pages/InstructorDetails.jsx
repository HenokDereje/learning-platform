import { useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiChevronLeft, FiStar } from 'react-icons/fi'
import SectionTitle from '../components/SectionTitle'
import Container from '../components/Container'
import Card from '../components/Card'
import Button from '../components/Button'
import { instructors } from '../data/site'

function InstructorDetails() {
    const { instructorId } = useParams()
    const instructor = useMemo(() => instructors.find((item) => item.id === instructorId), [instructorId])

    if (!instructor) {
        return (
            <div className="min-h-screen bg-dark text-text py-24">
                <Container>
                    <Card className="text-center">
                        <p className="text-lg text-muted">Instructor not found.</p>
                        <Link to="/instructors" className="mt-6 inline-flex rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-dark transition hover:bg-amber-400">Back to instructors</Link>
                    </Card>
                </Container>
            </div>
        )
    }

    return (
        <div className="relative overflow-hidden bg-dark text-text pb-24">
            <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />

            <section className="relative py-24">
                <Container>
                    <div className="space-y-8">
                        <Button variant="outline" className="inline-flex items-center gap-2">
                            <FiChevronLeft /> Back to instructors
                        </Button>
                        <div className="grid gap-10 lg:grid-cols-[0.9fr_0.8fr] lg:items-center">
                            <motion.div initial={{ opacity: 0, x: -28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                                <SectionTitle title="Instructor details" subtitle={instructor.name} />
                                <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">{instructor.bio}</p>
                                <div className="mt-10 flex flex-wrap gap-4">
                                    <Badge>{instructor.rating} ★ Rating</Badge>
                                    <Badge>{instructor.courses} courses</Badge>
                                    <Badge>{instructor.students} students</Badge>
                                </div>
                            </motion.div>

                            <motion.div initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                                <Card className="border-white/10 bg-white/5">
                                    <div className="space-y-4">
                                        <h3 className="text-xl font-semibold text-white">Expertise</h3>
                                        <div className="space-y-2 text-sm text-muted">
                                            {instructor.expertise.map((skill) => (
                                                <div key={skill} className="rounded-3xl bg-surface/80 p-4">{skill}</div>
                                            ))}
                                        </div>
                                        <Button className="w-full py-4">View courses</Button>
                                    </div>
                                </Card>
                            </motion.div>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    )
}

export default InstructorDetails
