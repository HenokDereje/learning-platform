function Container({ children, className = '' }) {
    return <div className={`container mx-auto px-6 py-12 lg:px-8 ${className}`}>{children}</div>
}

export default Container
