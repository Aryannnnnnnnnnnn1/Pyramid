import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

const links = [
	{ id: 'hero', label: 'Home' },
	{ id: 'about', label: 'About' },
	{ id: 'skills', label: 'Skills' },
	{ id: 'projects', label: 'Projects' },
	{ id: 'testimonials', label: 'Testimonials' },
	{ id: 'contact', label: 'Contact' },
]

export function Nav({ active }) {
	const [open, setOpen] = useState(false)

	useEffect(() => {
		const close = () => setOpen(false)
		window.addEventListener('scroll', close, { passive: true })
		return () => window.removeEventListener('scroll', close)
	}, [])

	const handleClick = (id) => {
		const el = document.querySelector(`section[data-id="${id}"]`)
		if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
	}

	return (
		<header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-base-50/70 border-b border-black/5 dark:border-white/5">
			<div className="container mx-auto px-6 flex h-16 items-center justify-between">
				<div className="font-display text-lg tracking-tight">Your Name</div>
				<nav className="hidden md:flex gap-6 text-sm">
					{links.map((l) => (
						<button
							key={l.id}
							onClick={() => handleClick(l.id)}
							className={`relative px-1 py-2 transition-colors ${active === l.id ? 'text-accent' : 'text-black/60 hover:text-black dark:text-white/70 dark:hover:text-white'}`}
						>
							{l.label}
							{active === l.id && (
								<motion.span
									layoutId="underline"
									className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
								/>
							)}
						</button>
					))}
				</nav>
				<button className="md:hidden p-2 text-black/70 dark:text-white/80" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
					{open ? <FiX size={20} /> : <FiMenu size={20} />}
				</button>
			</div>
			{open && (
				<div className="md:hidden border-t border-black/5 dark:border-white/5 bg-white/90 dark:bg-base-50/90 backdrop-blur">
					<div className="container mx-auto px-6 py-4 flex flex-col gap-2">
						{links.map((l) => (
							<button
								key={l.id}
								onClick={() => handleClick(l.id)}
								className={`text-left py-2 ${active === l.id ? 'text-accent' : 'text-black/70 hover:text-black dark:text-white/80 dark:hover:text-white'}`}
							>
								{l.label}
							</button>
						))}
					</div>
				</div>
			)}
		</header>
	)
}