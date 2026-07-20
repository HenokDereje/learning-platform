import { motion } from 'framer-motion'
import { FiBookmark, FiHeart, FiSearch } from 'react-icons/fi'
import { bookmarks } from '../data/student'
import SectionTitle from '../components/SectionTitle'
import Container from '../components/Container'
import Card from '../components/Card'
import Button from '../components/Button'

function Bookmarks() {
    return (
        <div className="bg-dark text-text">
            <section className="py-16">
                <Container>
                    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                        <SectionTitle title="Bookmarks" subtitle="Save lessons and courses to revisit later." />
                        <div className="mt-10 grid gap-6 lg:grid-cols-3">
                            {bookmarks.map((bookmark) => (
                                <Card key={bookmark.id} className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-lg font-semibold text-white">{bookmark.title}</p>
                                            <p className="mt-2 text-sm text-muted">{bookmark.category}</p>
                                        </div>
                                        <FiBookmark size={24} className="text-secondary" />
                                    </div>
                                    <p className="text-sm leading-7 text-muted">{bookmark.note}</p>
                                    <div className="flex items-center justify-between gap-3">
                                        <Button className="w-full text-sm">View</Button>
                                        <button className="inline-flex h-12 items-center justify-center rounded-3xl border border-white/10 bg-white/5 px-5 text-sm text-muted transition hover:border-secondary hover:text-white">
                                            <FiHeart />
                                        </button>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </motion.div>
                </Container>
            </section>
        </div>
    )
}

export default Bookmarks
