function SectionTitle({ title, subtitle, className = '' }) {
    return (
        <div className={`space-y-3 ${className}`}>
            <p className="text-sm uppercase tracking-[0.3em] text-secondary">{title}</p>
            <h2 className="max-w-2xl text-3xl font-semibold text-white sm:text-4xl">{subtitle}</h2>
        </div>
    )
}

export default SectionTitle
