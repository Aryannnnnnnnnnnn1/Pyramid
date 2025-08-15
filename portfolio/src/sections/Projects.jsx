import { motion } from 'framer-motion'
import { Section } from '../components/Section'

const projects = Array.from({ length: 6 }).map((_, i) => ({
	name: `Project ${i + 1}`,
	desc: 'Brief placeholder description of the project. Replace later.',
	image: `https://picsum.photos/seed/p${i + 1}/800/600`,
	link: '#'
}))

const list = {
	hidden: { opacity: 0 },
	show: { opacity: 1, transition: { staggerChildren: 0.08 } }
}
const item = {
	hidden: { opacity: 0, y: 16 },
	show: { opacity: 1, y: 0 }
}

export function Projects() {
	return (
		<Section id="projects" title="Projects">
			<motion.ul
				variants={list}
				initial="hidden"
				whileInView="show"
				viewport={{ once: false, margin: '-100px' }}
				className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
			>
				{projects.map((p) => (
					<motion.li key={p.name} variants={item}>
						<a href={p.link} className="group block overflow-hidden rounded-xl border border-white/10 bg-card shadow-soft">
							<div className="relative aspect-[4/3] overflow-hidden">
								<img src={p.image} alt="Placeholder project" className="h-full w-full object-cover transition duration-500 group-hover:scale-105 group-hover:blur-[1px]" />
								<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
							</div>
							<div className="p-4">
								<div className="font-semibold">{p.name}</div>
								<p className="mt-1 text-sm text-black/70 dark:text-white/70">{p.desc}</p>
							</div>
						</a>
					</motion.li>
				))}
			</motion.ul>
		</Section>
	)
}