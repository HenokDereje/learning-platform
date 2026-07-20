import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

function Footer() {
    const footerLinks = [
        { title: 'Company', links: ['About Us', 'Careers', 'Partners', 'Press'] },
        { title: 'Quick Links', links: ['Courses', 'Pricing', 'Support', 'Blog'] },
        { title: 'Categories', links: ['Design', 'Development', 'Business', 'Marketing'] },
    ]

    return (
        <footer className="border-t border-white/10 bg-surface py-16 text-muted">
            <div className="container mx-auto grid gap-10 px-6 md:grid-cols-2 xl:grid-cols-4 xl:px-8">
                <div className="space-y-4">
                    <div className="inline-flex items-center gap-3 rounded-3xl bg-primary/10 px-4 py-3 text-primary shadow-glow">
                        <span className="font-semibold">NL</span>
                        <span className="text-sm font-medium">LMS Studio</span>
                    </div>
                    <p className="max-w-sm text-sm leading-7 text-muted">
                        Premium learning systems designed for modern teams and driven by elegant digital experiences.
                    </p>
                    <div className="flex items-center gap-3 text-sm text-text">
                        <a href="#" className="rounded-2xl bg-white/5 px-3 py-2 text-muted transition hover:text-white">Privacy</a>
                        <a href="#" className="rounded-2xl bg-white/5 px-3 py-2 text-muted transition hover:text-white">Terms</a>
                    </div>
                </div>

                {footerLinks.map((group) => (
                    <div key={group.title}>
                        <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.24em] text-muted">{group.title}</h3>
                        <ul className="space-y-3 text-sm">
                            {group.links.map((link) => (
                                <li key={link}>
                                    <a href="#" className="transition hover:text-white">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

                <div className="space-y-4">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-muted">Newsletter</h3>
                    <p className="max-w-sm text-sm leading-7 text-muted">
                        Join our premium newsletter for course drops, community insights, and product updates.
                    </p>
                    <form className="flex flex-col gap-3 sm:flex-row">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-text outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
                        />
                        <button type="submit" className="rounded-2xl bg-secondary px-5 py-3 text-sm font-semibold text-dark transition hover:bg-amber-400">
                            Subscribe
                        </button>
                    </form>
                    <div className="flex items-center gap-3 text-white">
                        <a href="#" className="rounded-full bg-white/5 p-3 transition hover:bg-primary/20">
                            <FaFacebookF size={14} />
                        </a>
                        <a href="#" className="rounded-full bg-white/5 p-3 transition hover:bg-primary/20">
                            <FaTwitter size={14} />
                        </a>
                        <a href="#" className="rounded-full bg-white/5 p-3 transition hover:bg-primary/20">
                            <FaLinkedinIn size={14} />
                        </a>
                        <a href="#" className="rounded-full bg-white/5 p-3 transition hover:bg-primary/20">
                            <FaInstagram size={14} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="mx-auto mt-14 max-w-6xl px-6 text-center text-sm text-muted xl:px-8">
                © 2026 LMS Studio. Crafted for premium education experiences.
            </div>
        </footer>
    )
}

export default Footer
