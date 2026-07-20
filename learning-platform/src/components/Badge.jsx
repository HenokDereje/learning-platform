function Badge({ children, className = '' }) {
    return (
        <span className={`inline-flex rounded-full bg-secondary/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-secondary ${className}`}>
            {children}
        </span>
    )
}

export default Badge
