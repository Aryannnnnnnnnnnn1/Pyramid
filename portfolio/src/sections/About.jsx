import { motion } from 'framer-motion'
import { Section } from '../components/Section'

export function About() {
	return (
		<Section id="about" title="About">
			<motion.div
				className="max-w-3xl text-white/80 space-y-4 leading-relaxed"
				initial={{ opacity: 0, y: 16 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: false, margin: '-100px' }}
				transition={{ duration: 0.5, ease: 'easeOut' }}
			>
				<p className="text-black/80 dark:text-white/80">
					This is placeholder content about you. Write a short story, your mission, or values. Keep it authentic and focused.
				</p>
				<p className="text-black/70 dark:text-white/70">
					Highlight your expertise, background, and what drives your work. Replace this text with your own biography later.
				</p>
			</motion.div>
		</Section>
	)
}