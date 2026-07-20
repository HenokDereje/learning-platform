function Card({ children, className = '' }) {
    return (
        <div className={`rounded-3xl border border-white/10 bg-surface/80 p-6 shadow-soft backdrop-blur-sm ${className}`}>
            {children}
        </div>
    )
}

export default Card
