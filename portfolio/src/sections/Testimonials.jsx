import { motion } from 'framer-motion'
import { Section } from '../components/Section'

const testimonials = Array.from({ length: 3 }).map((_, i) => ({
	name: `Person ${i + 1}`,
	title: 'Role, Company',
	quote: '“This is a placeholder quote about how great you are to work with.”',
	avatar: `https://i.pravatar.cc/150?img=${i + 10}`,
}))

export function Testimonials() {
	return (
		<Section id="testimonials" title="Testimonials">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				{testimonials.map((t, idx) => (
					<motion.div
						key={t.name}
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: false, margin: '-100px' }}
						transition={{ duration: 0.4, delay: idx * 0.05, ease: 'easeOut' }}
						className="rounded-xl border border-white/10 bg-card p-6 shadow-soft"
					>
						<div className="flex items-center gap-3">
							<img src={t.avatar} alt="Avatar" className="h-10 w-10 rounded-full object-cover" />
							<div>
								<div className="font-semibold">{t.name}</div>
								<div className="text-xs text-black/60 dark:text-white/60">{t.title}</div>
							</div>
						</div>
						<p className="mt-4 text-black/80 dark:text-white/80">{t.quote}</p>
					</motion.div>
				))}
			</div>
		</Section>
	)
}