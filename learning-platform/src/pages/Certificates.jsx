import { motion } from 'framer-motion'
import { FiAward, FiCheckCircle } from 'react-icons/fi'
import { certificates } from '../data/student'
import SectionTitle from '../components/SectionTitle'
import Container from '../components/Container'
import Card from '../components/Card'
import Badge from '../components/Badge'

function Certificates() {
    return (
        <div className="bg-dark text-text">
            <section className="py-16">
                <Container>
                    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                        <SectionTitle title="Certificates" subtitle="Your verified course credentials and awards." />
                        <div className="mt-10 grid gap-6 lg:grid-cols-3">
                            {certificates.map((certificate) => (
                                <Card key={certificate.id} className="space-y-6">
                                    <div className="flex items-center gap-3 rounded-3xl bg-white/5 p-5">
                                        <FiAward size={24} className="text-secondary" />
                                        <div>
                                            <p className="text-lg font-semibold text-white">{certificate.name}</p>
                                            <p className="text-sm text-muted">Issued {certificate.issued}</p>
                                        </div>
                                    </div>
                                    <div className="rounded-3xl bg-surface/80 p-5 text-sm text-muted">
                                        <p>Status</p>
                                        <p className="mt-2 font-semibold text-white">{certificate.status}</p>
                                    </div>
                                    <Badge className="bg-secondary/10 text-secondary">Verified</Badge>
                                </Card>
                            ))}
                        </div>
                    </motion.div>
                </Container>
            </section>
        </div>
    )
}

export default Certificates
