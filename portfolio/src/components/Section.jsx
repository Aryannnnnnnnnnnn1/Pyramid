import { motion, useScroll, useTransform } from 'framer-motion'

export function Section({ id, title, children }) {
	const { scrollYProgress } = useScroll({
		target: undefined,
		offset: ['start end', 'end start'],
	})
	const y = useTransform(scrollYProgress, [0, 1], [0, 60])
	return (
		<section data-id={id} id={id} className="relative">
			<div className="absolute inset-0 -z-10">
				<div className="h-24 bg-gradient-to-b from-transparent via-white/5 to-transparent" />
			</div>
			<div className="container mx-auto px-6 py-20 sm:py-28">
				{title && (
					<motion.h2
						style={{ y }}
						className="text-2xl sm:text-3xl md:text-4xl font-display mb-10"
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: false, margin: '-100px' }}
						transition={{ duration: 0.5, ease: 'easeOut' }}
					>
						{title}
					</motion.h2>
				)}
				{children}
			</div>
		</section>
	)
}