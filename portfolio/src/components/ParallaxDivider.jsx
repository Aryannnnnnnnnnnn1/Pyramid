import { motion, useScroll, useTransform } from 'framer-motion'

export function ParallaxDivider() {
	const { scrollY } = useScroll()
	const x1 = useTransform(scrollY, [0, 500], [0, -40])
	const x2 = useTransform(scrollY, [0, 500], [0, 40])
	return (
		<div className="relative h-24 overflow-hidden">
			<motion.div className="absolute left-10 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full bg-accent/10 blur" style={{ x: x1 }} />
			<motion.div className="absolute right-16 top-1/2 h-20 w-20 -translate-y-1/2 rounded-full bg-white/5 blur" style={{ x: x2 }} />
		</div>
	)
}