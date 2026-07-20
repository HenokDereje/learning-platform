import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import ScrollProgress from '../components/ScrollProgress'
import BackToTop from '../components/BackToTop'

function AppLayout() {
    return (
        <div className="min-h-screen text-text bg-dark">
            <ScrollProgress />
            <ScrollToTop />
            <Navbar />
            <main className="relative overflow-hidden">
                <Outlet />
            </main>
            <Footer />
            <BackToTop />
        </div>
    )
}

export default AppLayout
