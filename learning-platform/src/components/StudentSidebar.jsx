import { Link } from 'react-router-dom'
import { FiBookmark, FiCheckCircle, FiHome, FiLayers, FiShield } from 'react-icons/fi'
import Badge from './Badge'
import Card from './Card'

const navItems = [
    { label: 'Dashboard', path: '/student/dashboard', icon: FiHome },
    { label: 'My Learning', path: '/student/my-learning', icon: FiLayers },
    { label: 'Bookmarks', path: '/student/bookmarks', icon: FiBookmark },
    { label: 'Certificates', path: '/student/certificates', icon: FiCheckCircle },
    { label: 'Lesson Player', path: '/student/lesson-player', icon: FiLayers },
]

function StudentSidebar() {
    return (
        <aside className="space-y-6">
            <Card className="space-y-4">
                <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-muted">Student profile</p>
                    <div className="mt-5 flex items-center gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-primary/10 text-primary">S</div>
                        <div>
                            <p className="text-lg font-semibold text-white">Sofia Hart</p>
                            <p className="text-sm text-muted">Product design learner</p>
                        </div>
                    </div>
                </div>
                <Badge className="bg-secondary/10 text-secondary">Premium</Badge>
            </Card>

            <Card className="space-y-4">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-muted">Summary</p>
                        <p className="mt-2 text-xl font-semibold text-white">Active goals</p>
                    </div>
                    <FiShield size={22} className="text-primary" />
                </div>
                <div className="space-y-3">
                    {[
                        { label: 'In progress', value: '4 courses' },
                        { label: 'Hours this week', value: '12h' },
                        { label: 'Badges', value: '5 earned' },
                    ].map((item) => (
                        <div key={item.label} className="rounded-3xl bg-white/5 p-4">
                            <p className="text-sm text-muted">{item.label}</p>
                            <p className="mt-2 text-lg font-semibold text-white">{item.value}</p>
                        </div>
                    ))}
                </div>
            </Card>

            <Card>
                <p className="text-sm uppercase tracking-[0.3em] text-muted">Quick links</p>
                <div className="mt-6 space-y-3">
                    {navItems.map((item) => (
                        <Link key={item.path} to={item.path} className="flex items-center gap-3 rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-muted transition hover:bg-white/10 hover:text-white">
                            <item.icon size={18} />
                            {item.label}
                        </Link>
                    ))}
                </div>
            </Card>
        </aside>
    )
}

export default StudentSidebar
