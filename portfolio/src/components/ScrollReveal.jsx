import { motion } from 'framer-motion'

export function ScrollReveal({ children, delay = 0, className = '' }) {
	return (
		<motion.div
			className={className}
			initial={{ opacity: 0, y: 16 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: false, margin: '-100px' }}
			transition={{ duration: 0.5, delay, ease: 'easeOut' }}
		>
			{children}
		</motion.div>
	)
}