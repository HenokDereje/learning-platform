import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { courses } from '../data/courses'
import SectionTitle from '../components/SectionTitle'
import Container from '../components/Container'
import CourseCard from '../components/CourseCard'
import SearchBar from '../components/SearchBar'
import Button from '../components/Button'
import Input from '../components/Input'
import Badge from '../components/Badge'

const sortOptions = [
    { value: 'popular', label: 'Most Popular' },
    { value: 'price-asc', label: 'Price: Low to High' },
    { value: 'price-desc', label: 'Price: High to Low' },
    { value: 'duration', label: 'Duration' },
]

function Courses() {
    const categories = useMemo(() => ['All', ...new Set(courses.map((course) => course.category))], [])
    const difficulties = useMemo(() => ['All', ...new Set(courses.map((course) => course.difficulty))], [])
    const [search, setSearch] = useState('')
    const [category, setCategory] = useState('All')
    const [difficulty, setDifficulty] = useState('All')
    const [sort, setSort] = useState('popular')
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(200)
    const [page, setPage] = useState(1)

    const filteredCourses = useMemo(() => {
        return courses
            .filter((course) => {
                const query = search.trim().toLowerCase()
                const matchesSearch =
                    !query ||
                    course.title.toLowerCase().includes(query) ||
                    course.category.toLowerCase().includes(query) ||
                    course.instructor.name.toLowerCase().includes(query)

                const matchesCategory = category === 'All' || course.category === category
                const matchesDifficulty = difficulty === 'All' || course.difficulty === difficulty
                const matchesPrice = course.price >= minPrice && course.price <= maxPrice

                return matchesSearch && matchesCategory && matchesDifficulty && matchesPrice
            })
            .sort((a, b) => {
                if (sort === 'price-asc') return a.price - b.price
                if (sort === 'price-desc') return b.price - a.price
                if (sort === 'duration') return a.duration.localeCompare(b.duration)
                return b.rating - a.rating
            })
    }, [search, category, difficulty, sort, minPrice, maxPrice])

    const pageSize = 6
    const totalPages = Math.max(1, Math.ceil(filteredCourses.length / pageSize))
    const paginatedCourses = useMemo(() => {
        const start = (page - 1) * pageSize
        return filteredCourses.slice(start, start + pageSize)
    }, [filteredCourses, page])

    useEffect(() => {
        setPage(1)
    }, [search, category, difficulty, sort, minPrice, maxPrice])

    return (
        <div className="bg-dark text-text">
            <section className="border-b border-white/10 py-16">
                <Container>
                    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                        <SectionTitle title="Courses" subtitle="Browse our full course catalog with filters for categories, difficulty, price, and more." />
                        <div className="mt-10 grid gap-6 lg:grid-cols-[1.4fr_0.6fr] xl:grid-cols-[1.6fr_0.4fr]">
                            <div className="space-y-6">
                                <div className="grid gap-4 md:grid-cols-[1fr_auto]">
                                    <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search courses, instructors, or topics" />
                                    <div className="grid gap-3 sm:grid-cols-2">
                                        <Input label="Min price" type="number" value={minPrice} onChange={(e) => setMinPrice(Number(e.target.value))} />
                                        <Input label="Max price" type="number" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} />
                                    </div>
                                </div>
                                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                                    <div className="rounded-[2rem] border border-white/10 bg-surface/80 p-5">
                                        <p className="text-sm uppercase tracking-[0.3em] text-muted">Category</p>
                                        <div className="mt-4 flex flex-wrap gap-3">
                                            {categories.map((item) => (
                                                <button
                                                    key={item}
                                                    onClick={() => setCategory(item)}
                                                    className={`rounded-3xl px-4 py-2 text-sm font-semibold transition ${category === item ? 'bg-primary text-dark' : 'bg-white/5 text-muted hover:bg-white/10'}`}
                                                >
                                                    {item}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="rounded-[2rem] border border-white/10 bg-surface/80 p-5">
                                        <p className="text-sm uppercase tracking-[0.3em] text-muted">Difficulty</p>
                                        <div className="mt-4 flex flex-wrap gap-3">
                                            {difficulties.map((item) => (
                                                <button
                                                    key={item}
                                                    onClick={() => setDifficulty(item)}
                                                    className={`rounded-3xl px-4 py-2 text-sm font-semibold transition ${difficulty === item ? 'bg-secondary text-dark' : 'bg-white/5 text-muted hover:bg-white/10'}`}
                                                >
                                                    {item}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="rounded-[2rem] border border-white/10 bg-surface/80 p-5">
                                        <p className="text-sm uppercase tracking-[0.3em] text-muted">Sort</p>
                                        <select value={sort} onChange={(e) => setSort(e.target.value)} className="mt-4 w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20">
                                            {sortOptions.map((option) => (
                                                <option key={option.value} value={option.value} className="bg-slate-950">
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="rounded-[2rem] border border-white/10 bg-surface/80 p-5">
                                        <p className="text-sm uppercase tracking-[0.3em] text-muted">Stats</p>
                                        <div className="mt-4 space-y-4">
                                            <div className="rounded-3xl bg-white/5 p-4">
                                                <p className="text-3xl font-semibold text-white">{filteredCourses.length}</p>
                                                <p className="text-sm text-muted">Courses found</p>
                                            </div>
                                            <div className="rounded-3xl bg-white/5 p-4">
                                                <p className="text-3xl font-semibold text-white">{categories.length - 1}</p>
                                                <p className="text-sm text-muted">Categories</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </Container>
            </section>

            <section className="py-16">
                <Container>
                    <div className="grid gap-6 lg:grid-cols-3">
                        <div className="lg:col-span-2">
                            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                                    {paginatedCourses.map((course) => (
                                        <CourseCard key={course.id} course={course} />
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                        <div className="rounded-[2rem] border border-white/10 bg-surface/80 p-6 shadow-soft">
                            <p className="text-sm uppercase tracking-[0.3em] text-muted">Current filters</p>
                            <div className="mt-6 space-y-4">
                                <div className="rounded-3xl bg-white/5 p-4">
                                    <p className="text-sm text-muted">Category</p>
                                    <p className="mt-2 text-white">{category}</p>
                                </div>
                                <div className="rounded-3xl bg-white/5 p-4">
                                    <p className="text-sm text-muted">Difficulty</p>
                                    <p className="mt-2 text-white">{difficulty}</p>
                                </div>
                                <div className="rounded-3xl bg-white/5 p-4">
                                    <p className="text-sm text-muted">Price</p>
                                    <p className="mt-2 text-white">${minPrice} - ${maxPrice}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-[2rem] border border-white/10 bg-surface/80 p-6 text-sm text-muted sm:flex-row">
                        <p>{filteredCourses.length} courses available</p>
                        <div className="flex flex-wrap items-center gap-2">
                            {Array.from({ length: totalPages }, (_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setPage(index + 1)}
                                    className={`min-w-[2.5rem] rounded-3xl px-4 py-2 text-sm font-semibold transition ${page === index + 1 ? 'bg-primary text-dark' : 'bg-white/5 text-muted hover:bg-white/10'}`}
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    )
}

export default Courses
