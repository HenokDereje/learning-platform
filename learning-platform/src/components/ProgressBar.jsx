function ProgressBar({ value = 0, label }) {
    return (
        <div className="space-y-2">
            {label && <p className="text-sm text-muted">{label}</p>}
            <div className="h-3 rounded-full bg-white/10">
                <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${Math.min(100, Math.max(0, value))}%` }} />
            </div>
        </div>
    )
}

export default ProgressBar
