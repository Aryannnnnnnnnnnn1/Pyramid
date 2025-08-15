import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Section } from '../components/Section'
import { attachCardPointerEffect } from '../components/CardTilt'

const skills = Array.from({ length: 9 }).map((_, i) => ({
	name: `Skill ${i + 1}`,
	desc: 'Short placeholder description for this skill.'
}))

const list = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: { staggerChildren: 0.08 }
	},
}
const item = {
	hidden: { opacity: 0, y: 16 },
	show: { opacity: 1, y: 0 },
}

export function Skills() {
	useEffect(() => {
		attachCardPointerEffect()
	}, [])
	return (
		<Section id="skills" title="Skills">
			<motion.ul
				variants={list}
				initial="hidden"
				whileInView="show"
				viewport={{ once: false, margin: '-100px' }}
				className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
			>
				{skills.map((s) => (
					<motion.li key={s.name} variants={item}>
						<div data-tilt-card className="group relative rounded-xl border border-white/10 bg-card p-5 shadow-soft transition-transform [transform-style:preserve-3d] hover:[transform:rotateX(3deg)_rotateY(-3deg)]">
							<div className="mb-2 font-semibold">{s.name}</div>
							<div className="text-sm text-white/70">{s.desc}</div>
							<div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity group-hover:opacity-100" style={{ background: 'radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(124,138,255,0.08), transparent 40%)' }} />
						</div>
					</motion.li>
				))}
			</motion.ul>
		</Section>
	)
}