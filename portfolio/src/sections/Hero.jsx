import { motion, useScroll, useTransform } from 'framer-motion'

export function Hero() {
	const { scrollY } = useScroll()
	const yHero = useTransform(scrollY, [0, 300], [0, -50])
	const yBlob = useTransform(scrollY, [0, 400], [0, 60])

	return (
		<section data-id="hero" id="hero" className="relative overflow-hidden">
			{/* Animated background blobs */}
			<motion.div
				aria-hidden
				className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full blur-3xl"
				style={{ y: yBlob }}
				initial={{ opacity: 0, scale: 0.9 }}
				animate={{ opacity: 0.6, scale: 1 }}
				transition={{ duration: 1.2, ease: 'easeOut' }}
			>
				<div className="h-full w-full bg-gradient-to-br from-accent/40 to-white/10 rounded-full" />
			</motion.div>
			<motion.div
				aria-hidden
				className="pointer-events-none absolute top-24 -left-24 h-[30rem] w-[30rem] rounded-full blur-3xl"
				style={{ y: yBlob }}
				initial={{ opacity: 0, scale: 0.9 }}
				animate={{ opacity: 0.5, scale: 1 }}
				transition={{ duration: 1.4, ease: 'easeOut', delay: 0.1 }}
			>
				<div className="h-full w-full bg-gradient-to-tr from-white/10 to-accent/30 rounded-full" />
			</motion.div>

			<div className="container mx-auto px-6 pt-24 pb-24 sm:pt-32 sm:pb-32">
				<motion.div
					style={{ y: yHero }}
					className="max-w-3xl"
					initial={{ opacity: 0, y: 24 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: 'easeOut' }}
				>
					<p className="text-sm uppercase tracking-[0.2em] text-black/60 dark:text-white/60">Minimal Portfolio</p>
					<h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-display font-bold">
						Your Name — Placeholder Headline
					</h1>
					<p className="mt-6 max-w-xl text-black/70 dark:text-white/70">
						Short introduction goes here. Replace this text with your personal pitch. Keep it concise and clear.
					</p>
					<div className="mt-8 flex items-center gap-4">
						<motion.a
							href="#projects"
							className="ripple inline-flex items-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white shadow-soft hover:bg-accent-muted transition-colors"
							animate={{ y: [0, -4, 0] }}
							transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
						>
							See Projects
						</motion.a>
						<a href="#contact" className="inline-flex items-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white/90 hover:text-white hover:border-white/25 transition-colors">
							Contact
						</a>
					</div>
				</motion.div>
			</div>
		</section>
	)
}