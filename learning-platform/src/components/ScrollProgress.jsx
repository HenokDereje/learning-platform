import useScrollProgress from '../hooks/useScrollProgress'

function ScrollProgress() {
    const progress = useScrollProgress()

    return (
        <div className="pointer-events-none fixed inset-x-0 top-0 z-50 h-1 bg-transparent">
            <div className="h-full rounded-full bg-gradient-to-r from-primary to-secondary shadow-glow transition-all duration-200 ease-out" style={{ width: `${progress}%` }} />
        </div>
    )
}

export default ScrollProgress
