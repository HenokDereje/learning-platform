import { Outlet } from 'react-router-dom'
import StudentSidebar from '../components/StudentSidebar'
import Container from '../components/Container'
import ScrollProgress from '../components/ScrollProgress'
import BackToTop from '../components/BackToTop'

function StudentLayout() {
    return (
        <div className="bg-dark min-h-screen text-text">
            <ScrollProgress />
            <Container className="py-16">
                <div className="grid gap-10 xl:grid-cols-[320px_1fr]">
                    <StudentSidebar />
                    <div className="space-y-10">
                        <Outlet />
                    </div>
                </div>
            </Container>
            <BackToTop />
        </div>
    )
}

export default StudentLayout
