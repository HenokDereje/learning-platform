import { useEffect, useState } from 'react'
import { FiChevronUp } from 'react-icons/fi'
import Button from './Button'

function BackToTop() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 400)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

    if (!visible) return null

    return (
        <Button
            className="fixed bottom-6 right-6 z-50 rounded-full p-4 shadow-soft"
            variant="outline"
            onClick={scrollToTop}
            aria-label="Back to top"
        >
            <FiChevronUp size={20} />
        </Button>
    )
}

export default BackToTop
