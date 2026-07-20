import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowRight, FiAward, FiBookOpen, FiClock, FiGlobe, FiHeart, FiShield, FiStar, FiUsers } from 'react-icons/fi'
import { FaApple, FaGoogle, FaMicrosoft, FaShopify, FaSlack } from 'react-icons/fa'
import SectionTitle from '../components/SectionTitle'
import Container from '../components/Container'
import Card from '../components/Card'
import Button from '../components/Button'
import Badge from '../components/Badge'
import SearchBar from '../components/SearchBar'
import Input from '../components/Input'

const logoItems = [FaGoogle, FaMicrosoft, FaSlack, FaShopify, FaApple]

const categories = [
    { title: 'UI/UX Design', count: '128 Courses', accent: 'from-blue-500 to-cyan-400' },
    { title: 'Web Development', count: '214 Courses', accent: 'from-violet-500 to-fuchsia-500' },
    { title: 'Data Science', count: '98 Courses', accent: 'from-amber-400 to-orange-500' },
    { title: 'Business Growth', count: '76 Courses', accent: 'from-sky-500 to-blue-500' },
    { title: 'Marketing', count: '62 Courses', accent: 'from-lime-400 to-emerald-500' },
    { title: 'Productivity', count: '51 Courses', accent: 'from-pink-500 to-rose-500' },
    { title: 'AI & ML', count: '34 Courses', accent: 'from-cyan-400 to-sky-500' },
    { title: 'Creative Writing', count: '42 Courses', accent: 'from-orange-400 to-amber-500' },
]

const featuredCourses = [
    {
        title: 'Advanced Product Design',
        tag: 'Design',
        rating: 4.9,
        students: '18.4k',
        duration: '8h 20m',
        price: '$129',
        instructor: 'Maya Lee',
        accent: 'from-blue-500 to-indigo-500',
    },
    {
        title: 'Full-stack Web Development',
        tag: 'Development',
        rating: 4.8,
        students: '23.1k',
        duration: '12h 15m',
        price: '$149',
        instructor: 'Aiden Cole',
        accent: 'from-sky-500 to-cyan-500',
    },
    {
        title: 'Growth Marketing Strategy',
        tag: 'Marketing',
        rating: 4.7,
        students: '14.8k',
        duration: '6h 45m',
        price: '$99',
        instructor: 'Nina Patel',
        accent: 'from-amber-400 to-orange-500',
    },
]

const reasons = [
    { icon: FiShield, title: 'Secure Learning', description: 'Encrypted content delivery and verified instructor credentials.' },
    { icon: FiAward, title: 'Expert Mentors', description: 'Carefully selected professionals teaching practical skills.' },
    { icon: FiClock, title: 'Fast Results', description: 'Optimized course paths built for quick progress.' },
    { icon: FiHeart, title: 'Student Success', description: 'High satisfaction and repeat enrollment rates.' },
]

const processSteps = [
    { step: '01', title: 'Choose a path', description: 'Pick a specialty and align your goals with premium plans.' },
    { step: '02', title: 'Join a cohort', description: 'Start with expert guidance and structured classroom sessions.' },
    { step: '03', title: 'Complete challenges', description: 'Practice with real projects and measurable milestones.' },
    { step: '04', title: 'Launch your career', description: 'Graduate with portfolio-ready skills and placement support.' },
]

const instructors = [
    { name: 'Elena Kim', title: 'Senior UX Coach', rating: 4.9, courses: 12 },
    { name: 'Jason Cruz', title: 'Software Architect', rating: 4.8, courses: 18 },
    { name: 'Priya Singh', title: 'Marketing Strategist', rating: 4.9, courses: 14 },
]

const testimonials = [
    {
        quote: 'The LMS experience elevated our team’s training and made learning feel premium at every step.',
        name: 'Caleb Morris',
        title: 'Product Lead, NovaTech',
    },
    {
        quote: 'Structured courses, beautiful interaction, and measurable student outcomes — absolutely top tier.',
        name: 'Lina Ortiz',
        title: 'Growth Manager, Cascade',
    },
    {
        quote: 'The platform is polished and intuitive. It made our onboarding and upskilling effortless.',
        name: 'Noah Bennett',
        title: 'Operations Head, Wave.',
    },
]

const pricingPlans = [
    {
        name: 'Starter',
        price: '$29',
        frequency: 'per month',
        features: ['12 courses', 'Community access', 'Basic support'],
        highlight: false,
    },
    {
        name: 'Pro',
        price: '$69',
        frequency: 'per month',
        features: ['Unlimited courses', 'Live workshops', 'Mentor support'],
        highlight: true,
    },
    {
        name: 'Elite',
        price: '$129',
        frequency: 'per month',
        features: ['Course bundles', 'Personal coaching', 'Certification path'],
        highlight: false,
    },
]

const faqs = [
    { question: 'Can I try the platform before committing?', answer: 'Yes. We offer a 14-day premium trial for all new users to experience the full ecosystem.' },
    { question: 'Do I get a certificate after finishing a course?', answer: 'Absolutely. Every completed course includes a professional certificate for your portfolio.' },
    { question: 'Can teams purchase group access?', answer: 'Yes. Team and enterprise packages are available with dedicated onboarding and analytics.' },
    { question: 'How often are new courses added?', answer: 'We publish fresh courses every month with the latest industry trends and tools.' },
]

const sectionVariant = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0 },
}

function Home() {
    const [testimonialIndex, setTestimonialIndex] = useState(0)
    const [faqIndex, setFaqIndex] = useState(0)

    const activeTestimonial = useMemo(() => testimonials[testimonialIndex], [testimonialIndex])

    return (
        <div className="relative overflow-hidden bg-dark text-text">
            <div className="absolute inset-0 overflow-hidden">
                <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
                <div className="pointer-events-none absolute top-20 right-0 h-56 w-56 rounded-full bg-secondary/20 blur-3xl" />
                <div className="pointer-events-none absolute bottom-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
            </div>

            <section className="relative overflow-hidden py-24 sm:py-32">
                <Container className="relative z-10">
                    <motion.div initial="hidden" animate="visible" variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}>
                        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                            <div className="space-y-8">
                                <Badge>Industry-leading LMS</Badge>
                                <div className="space-y-6">
                                    <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-[-0.06em] text-white sm:text-6xl">
                                        Create memorable learning journeys for every learner.
                                    </h1>
                                    <p className="max-w-2xl text-lg leading-8 text-muted">
                                        Empower teams with premium course experiences, polished delivery, and beautifully crafted content.
                                    </p>
                                </div>
                                <div className="grid gap-4 sm:grid-cols-[auto_auto]">
                                    <Button className="w-full sm:w-auto">Start Learning</Button>
                                    <Button variant="outline" className="w-full sm:w-auto">View Curriculum</Button>
                                </div>
                                <div className="rounded-3xl border border-white/10 bg-surface/70 p-4 shadow-soft backdrop-blur-sm">
                                    <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-center">
                                        <div>
                                            <p className="text-sm uppercase tracking-[0.3em] text-muted">Search courses</p>
                                            <h2 className="text-2xl font-semibold text-white">Find the right path for your career.</h2>
                                        </div>
                                        <Button variant="secondary">Browse</Button>
                                    </div>
                                    <div className="mt-4">
                                        <SearchBar />
                                    </div>
                                </div>
                                <div className="grid gap-4 sm:grid-cols-3">
                                    {[
                                        { label: 'Courses', value: '1.2k+' },
                                        { label: 'Active Students', value: '34k+' },
                                        { label: 'Certifications', value: '540+' },
                                    ].map((stat) => (
                                        <motion.div key={stat.label} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.75 }} className="rounded-3xl bg-white/5 p-5 text-center shadow-soft">
                                            <p className="text-3xl font-semibold text-white">{stat.value}</p>
                                            <p className="text-sm text-muted">{stat.label}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            <motion.div initial={{ opacity: 0, x: 48 }} animate={{ opacity: 1, x: 0, transition: { duration: 0.9 } }} className="relative mx-auto max-w-lg">
                                <div className="absolute -right-12 top-10 h-24 w-24 rounded-full bg-primary/20 blur-2xl" />
                                <div className="absolute -left-10 top-28 h-32 w-32 rounded-full bg-secondary/20 blur-2xl" />
                                <div className="rounded-[2rem] border border-white/10 bg-surface/80 p-6 shadow-soft backdrop-blur-sm">
                                    <div className="space-y-5">
                                        <div className="rounded-[2rem] bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-600 p-8 text-white shadow-glow">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="text-sm uppercase tracking-[0.28em] text-white/75">Learning Hub</p>
                                                    <h2 className="mt-4 text-3xl font-semibold">The future of study.</h2>
                                                </div>
                                                <div className="rounded-3xl bg-white/10 px-4 py-3 text-sm">New</div>
                                            </div>
                                            <div className="mt-8 grid gap-4 sm:grid-cols-2">
                                                {['Interactive courses', 'Live sessions', 'Progress tracker', 'Certifications'].map((feature) => (
                                                    <div key={feature} className="rounded-3xl bg-white/10 p-4 text-sm">{feature}</div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="grid gap-4 sm:grid-cols-2">
                                            <div className="rounded-3xl bg-white/5 p-5">
                                                <p className="text-xs uppercase tracking-[0.3em] text-muted">Supported</p>
                                                <div className="mt-3 flex items-center gap-2 text-white">
                                                    <FiBookOpen size={20} />
                                                    <span>320+ Modules</span>
                                                </div>
                                            </div>
                                            <div className="rounded-3xl bg-white/5 p-5">
                                                <p className="text-xs uppercase tracking-[0.3em] text-muted">Community</p>
                                                <div className="mt-3 flex items-center gap-2 text-white">
                                                    <FiUsers size={20} />
                                                    <span>12k Members</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </Container>

                <div className="absolute bottom-12 left-1/2 z-10 -translate-x-1/2 text-center text-sm text-muted">
                    <div className="mb-3 flex items-center justify-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        <span>Scroll to explore</span>
                    </div>
                    <div className="h-20 w-1 rounded-full bg-white/10" />
                </div>
            </section>

            <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariant} className="border-t border-white/10 py-16">
                <Container>
                    <SectionTitle title="Trusted by" subtitle="Leading teams trust our learning platform." />
                    <div className="mt-10 overflow-hidden rounded-[2rem] border border-white/10 bg-surface/80 px-4 py-5 shadow-soft">
                        <motion.div animate={{ x: ['0%', '-35%'] }} transition={{ repeat: Infinity, duration: 20, ease: 'linear' }} className="flex min-w-[200%] items-center gap-10">
                            {[...logoItems, ...logoItems].map((Logo, index) => (
                                <div key={`${Logo.name}-${index}`} className="flex h-16 w-36 items-center justify-center rounded-3xl bg-white/5 text-white shadow-soft">
                                    <Logo size={24} />
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </Container>
            </motion.section>

            <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariant} className="py-16">
                <Container>
                    <SectionTitle title="Popular categories" subtitle="Explore top training areas designed to accelerate your growth." />
                    <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                        {categories.map((category, index) => (
                            <motion.div key={category.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08, duration: 0.6 }} className="overflow-hidden rounded-[2rem] border border-white/10 bg-surface/80 p-6 shadow-soft">
                                <div className={`mb-6 h-2 w-16 rounded-full bg-gradient-to-r ${category.accent}`} />
                                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                                <p className="mt-3 text-sm text-muted">{category.count}</p>
                                <Button variant="outline" className="mt-6 text-sm">View Courses</Button>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </motion.section>

            <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariant} className="border-t border-white/10 py-16">
                <Container>
                    <SectionTitle title="Featured courses" subtitle="Handpicked programs for ambitious learners." />
                    <div className="mt-10 grid gap-6 xl:grid-cols-3">
                        {featuredCourses.map((course, index) => (
                            <motion.div key={course.title} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1, duration: 0.6 }} className="group overflow-hidden rounded-[2rem] border border-white/10 bg-surface/80 shadow-soft">
                                <div className={`h-56 rounded-t-[2rem] bg-gradient-to-br ${course.accent} p-6`}>
                                    <div className="flex items-center justify-between">
                                        <Badge className="bg-white/10 text-white">{course.tag}</Badge>
                                        <div className="rounded-3xl bg-white/10 px-3 py-2 text-xs uppercase tracking-[0.24em] text-white/70">Top</div>
                                    </div>
                                    <div className="mt-10 space-y-3 text-white">
                                        <h3 className="text-2xl font-semibold">{course.title}</h3>
                                        <p className="text-sm text-white/80">{course.duration} · {course.students} students</p>
                                    </div>
                                </div>
                                <div className="space-y-5 p-6">
                                    <div className="flex items-center justify-between text-sm text-muted">
                                        <span>Rating</span>
                                        <span className="inline-flex items-center gap-2 text-white"><FiStar /> {course.rating}</span>
                                    </div>
                                    <div className="flex items-center justify-between text-sm text-muted">
                                        <span>Instructor</span>
                                        <span className="text-white">{course.instructor}</span>
                                    </div>
                                    <div className="flex items-center justify-between text-sm text-muted">
                                        <span>Price</span>
                                        <span className="text-white font-semibold">{course.price}</span>
                                    </div>
                                    <Button className="w-full">Enroll Now</Button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </motion.section>

            <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariant} className="py-16">
                <Container>
                    <SectionTitle title="Why choose us" subtitle="Premium features that keep learners engaged." />
                    <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                        {reasons.map((item, index) => (
                            <motion.div key={item.title} initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08, duration: 0.55 }} className="rounded-[2rem] border border-white/10 bg-surface/80 p-6 shadow-soft">
                                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-primary/10 text-primary">
                                    <item.icon size={22} />
                                </div>
                                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </motion.section>

            <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariant} className="border-t border-white/10 py-16">
                <Container>
                    <SectionTitle title="Learning process" subtitle="A clear path from onboarding to mastery." />
                    <div className="mt-12 grid gap-6 lg:grid-cols-4">
                        {processSteps.map((step, index) => (
                            <motion.div key={step.step} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08, duration: 0.55 }} className="rounded-[2rem] border border-white/10 bg-surface/80 p-6 shadow-soft">
                                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary text-lg font-semibold">{step.step}</div>
                                <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                                <p className="mt-3 text-sm leading-7 text-muted">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </motion.section>

            <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariant} className="py-16">
                <Container>
                    <SectionTitle title="Top instructors" subtitle="Mentors who bring real-world experience." />
                    <div className="mt-10 grid gap-6 md:grid-cols-3">
                        {instructors.map((instructor, index) => (
                            <motion.div key={instructor.name} initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08, duration: 0.55 }} className="rounded-[2rem] border border-white/10 bg-surface/80 p-6 text-center shadow-soft">
                                <div className="mx-auto mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-white/5 text-4xl text-primary">{instructor.name.split(' ').map((part) => part[0]).join('')}</div>
                                <h3 className="text-xl font-semibold text-white">{instructor.name}</h3>
                                <p className="mt-2 text-sm text-muted">{instructor.title}</p>
                                <div className="mt-6 space-y-3 text-left text-sm text-muted">
                                    <div className="flex items-center justify-between rounded-3xl bg-white/5 px-4 py-3">
                                        <span>Rating</span>
                                        <span>{instructor.rating}</span>
                                    </div>
                                    <div className="flex items-center justify-between rounded-3xl bg-white/5 px-4 py-3">
                                        <span>Courses</span>
                                        <span>{instructor.courses}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </motion.section>

            <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariant} className="border-t border-white/10 py-16">
                <Container>
                    <SectionTitle title="Student testimonials" subtitle="Hear from learners who advanced with our platform." />
                    <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_0.45fr]">
                        <div className="space-y-6 rounded-[2rem] border border-white/10 bg-surface/80 p-8 shadow-soft">
                            <AnimatePresence mode="wait">
                                <motion.div key={activeTestimonial.name} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -24 }} transition={{ duration: 0.45 }} className="space-y-6">
                                    <div className="rounded-[2rem] bg-white/5 p-8 text-white">
                                        <p className="text-xl leading-9">“{activeTestimonial.quote}”</p>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-white">{activeTestimonial.name}</p>
                                        <p className="text-sm text-muted">{activeTestimonial.title}</p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                            <div className="flex items-center gap-4">
                                <button onClick={() => setTestimonialIndex((value) => (value - 1 + testimonials.length) % testimonials.length)} className="h-12 w-12 rounded-3xl border border-white/10 bg-white/5 text-white transition hover:border-primary">
                                    <FiArrowRight className="rotate-180" />
                                </button>
                                <button onClick={() => setTestimonialIndex((value) => (value + 1) % testimonials.length)} className="h-12 w-12 rounded-3xl border border-white/10 bg-white/5 text-white transition hover:border-primary">
                                    <FiArrowRight />
                                </button>
                                <div className="ml-auto flex items-center gap-3 text-sm text-muted">
                                    {testimonials.map((item, idx) => (
                                        <button key={item.name} onClick={() => setTestimonialIndex(idx)} className={`h-3 w-3 rounded-full ${idx === testimonialIndex ? 'bg-primary' : 'bg-white/20'}`} />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="grid gap-6">
                            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-primary/90 to-blue-500 p-8 text-white shadow-glow">
                                <p className="text-sm uppercase tracking-[0.28em] text-white/70">Success insight</p>
                                <h3 className="mt-4 text-3xl font-semibold">98% learner satisfaction</h3>
                                <p className="mt-4 text-sm leading-7 text-white/80">Our learners recommend the experience for career-focused training and premium support.</p>
                            </div>
                            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
                                {[
                                    { label: 'Live Workshops', value: '24+' },
                                    { label: 'Expert Mentors', value: '34+' },
                                ].map((item) => (
                                    <div key={item.label} className="rounded-[2rem] bg-surface/80 p-6 text-center">
                                        <p className="text-3xl font-semibold text-white">{item.value}</p>
                                        <p className="mt-2 text-sm text-muted">{item.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>
            </motion.section>

            <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariant} className="py-16">
                <Container>
                    <SectionTitle title="Pricing plans" subtitle="Choose the right membership for your learners." />
                    <div className="mt-10 grid gap-6 xl:grid-cols-3">
                        {pricingPlans.map((plan, index) => (
                            <motion.div key={plan.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08, duration: 0.55 }} className={`rounded-[2rem] border border-white/10 p-8 shadow-soft ${plan.highlight ? 'bg-gradient-to-br from-primary to-blue-600 text-white' : 'bg-surface/80 text-text'}`}>
                                <p className="text-sm uppercase tracking-[0.28em] text-secondary">{plan.name}</p>
                                <div className="mt-6 flex items-end gap-2">
                                    <span className="text-4xl font-semibold">{plan.price}</span>
                                    <span className="text-sm text-muted">{plan.frequency}</span>
                                </div>
                                <ul className="mt-8 space-y-3 text-sm leading-7">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-3">
                                            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-secondary" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <Button className="mt-10 w-full">Choose Plan</Button>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </motion.section>

            <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariant} className="border-t border-white/10 py-16">
                <Container>
                    <SectionTitle title="Frequently asked questions" subtitle="Answers to the most popular questions." />
                    <div className="mt-10 grid gap-4">
                        {faqs.map((item, index) => (
                            <div key={item.question} className="overflow-hidden rounded-[2rem] border border-white/10 bg-surface/80 p-6 shadow-soft">
                                <button onClick={() => setFaqIndex(index === faqIndex ? -1 : index)} className="flex w-full items-center justify-between text-left text-white">
                                    <span className="text-lg font-semibold">{item.question}</span>
                                    <span className="text-3xl text-secondary">{index === faqIndex ? '−' : '+'}</span>
                                </button>
                                <AnimatePresence>
                                    {faqIndex === index && (
                                        <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35 }} className="mt-4 overflow-hidden text-sm leading-7 text-muted">
                                            {item.answer}
                                        </motion.p>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </Container>
            </motion.section>

            <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariant} className="py-20">
                <Container>
                    <div className="rounded-[2rem] border border-white/10 bg-gradient-to-r from-slate-950 to-slate-900 p-10 shadow-soft">
                        <div className="grid gap-8 lg:grid-cols-[1fr_380px] lg:items-center">
                            <div className="space-y-4">
                                <p className="text-sm uppercase tracking-[0.28em] text-secondary">Stay informed</p>
                                <h2 className="text-4xl font-semibold text-white sm:text-5xl">Get premium updates every month.</h2>
                                <p className="max-w-2xl text-base leading-7 text-muted">Subscribe to receive launch notifications, course highlights, and design-led education insights.</p>
                            </div>
                            <form className="grid gap-4 sm:grid-cols-[1fr_auto]">
                                <Input placeholder="Enter your email" className="bg-white/5 text-white placeholder:text-muted" />
                                <Button type="submit" className="w-full text-sm">Subscribe Now</Button>
                            </form>
                        </div>
                    </div>
                </Container>
            </motion.section>
        </div>
    )
}

export default Home
