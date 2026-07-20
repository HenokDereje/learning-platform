import { Link } from 'react-router-dom'
import { FiStar, FiUsers, FiClock, FiArrowRight } from 'react-icons/fi'
import Card from './Card'
import Badge from './Badge'

function CourseCard({ course }) {
    return (
        <Card className="group overflow-hidden transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-glow">
            <div className="rounded-[1.75rem] bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-6 text-white">
                <div className="flex items-center justify-between">
                    <span className="rounded-3xl bg-white/10 px-3 py-2 text-xs uppercase tracking-[0.24em] text-white/70">{course.category}</span>
                    <Badge className="bg-white/10 text-white">{course.difficulty}</Badge>
                </div>
                <div className="mt-8 space-y-3">
                    <h3 className="text-2xl font-semibold">{course.title}</h3>
                    <p className="text-sm text-white/70">{course.duration}</p>
                </div>
            </div>
            <div className="mt-6 space-y-4 px-6 pb-6">
                <div className="flex items-center justify-between text-sm text-muted">
                    <div className="inline-flex items-center gap-2">
                        <FiStar /> <span>{course.rating}</span>
                    </div>
                    <div className="inline-flex items-center gap-2">
                        <FiUsers /> <span>{course.students}</span>
                    </div>
                </div>
                <div className="flex items-center justify-between text-sm text-muted">
                    <span>{course.instructor.name}</span>
                    <span className="font-semibold text-text">{course.priceLabel}</span>
                </div>
                <Link to={`/courses/${course.id}`} className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-500">
                    View Details <FiArrowRight size={18} />
                </Link>
            </div>
        </Card>
    )
}

export default CourseCard
