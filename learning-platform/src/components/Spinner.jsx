function Spinner({ size = 32 }) {
    return (
        <div className="flex items-center justify-center">
            <div
                className="h-8 w-8 animate-spin rounded-full border-4 border-white/10 border-t-primary"
                style={{ width: size, height: size }}
            />
        </div>
    )
}

export default Spinner
