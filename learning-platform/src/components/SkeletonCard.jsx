function SkeletonCard({ className = '' }) {
    return (
        <div className={`animate-pulse rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-soft ${className}`}>
            <div className="h-4 w-1/3 rounded-full bg-white/10" />
            <div className="mt-5 grid gap-4">
                <div className="h-40 rounded-[1.5rem] bg-white/10" />
                <div className="h-4 w-2/3 rounded-full bg-white/10" />
                <div className="h-4 w-1/2 rounded-full bg-white/10" />
            </div>
        </div>
    )
}

export default SkeletonCard
