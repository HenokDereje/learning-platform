import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

function AppLayout() {
    return (
        <div className="min-h-screen text-text bg-dark">
            <ScrollToTop />
            <Navbar />
            <main className="relative overflow-hidden">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default AppLayout
