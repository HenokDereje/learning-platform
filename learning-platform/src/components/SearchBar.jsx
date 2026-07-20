function SearchBar({ value, onChange, placeholder = 'Search courses, skills, topics...' }) {
    return (
        <div className="rounded-3xl border border-white/10 bg-white/10 p-3 shadow-soft backdrop-blur-sm">
            <input
                type="search"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                aria-label={placeholder}
                className="w-full bg-transparent border-none text-text outline-none placeholder:text-muted"
            />
        </div>
    )
}

export default SearchBar
