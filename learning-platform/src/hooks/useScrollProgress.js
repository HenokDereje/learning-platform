import { useEffect, useState } from 'react'

function useScrollProgress() {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const updateProgress = () => {
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
            const scrolled = height > 0 ? (window.scrollY / height) * 100 : 0
            setProgress(Math.min(100, Math.max(0, scrolled)))
        }

        updateProgress()
        window.addEventListener('scroll', updateProgress, { passive: true })
        return () => window.removeEventListener('scroll', updateProgress)
    }, [])

    return progress
}

export default useScrollProgress
