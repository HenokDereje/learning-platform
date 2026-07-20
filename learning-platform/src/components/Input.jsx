function Input({ label, className = '', ...props }) {
    return (
        <label className="space-y-2 text-sm text-muted">
            {label && <span className="block text-sm text-muted">{label}</span>}
            <input
                className={`w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 ${className}`}
                {...props}
            />
        </label>
    )
}

export default Input
