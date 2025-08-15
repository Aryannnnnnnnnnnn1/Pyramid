import { useEffect, useState } from 'react'
import { ThemeToggle } from './components/ThemeToggle'
import { Nav } from './components/Nav'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Skills } from './sections/Skills'
import { Projects } from './sections/Projects'
import { Testimonials } from './sections/Testimonials'
import { Contact } from './sections/Contact'
import { ParallaxDivider } from './components/ParallaxDivider'

function App() {
	const [active, setActive] = useState('hero')

	useEffect(() => {
		const handler = () => {
			const sections = Array.from(document.querySelectorAll('section[data-id]'))
			let current = 'hero'
			for (const section of sections) {
				const rect = section.getBoundingClientRect()
				if (rect.top <= window.innerHeight * 0.33 && rect.bottom >= window.innerHeight * 0.33) {
					current = section.dataset.id || 'hero'
					break
				}
			}
			setActive(current)
		}
		handler()
		window.addEventListener('scroll', handler, { passive: true })
		return () => window.removeEventListener('scroll', handler)
	}, [])

	return (
		<div className="min-h-screen bg-base-50 text-[var(--fg)]">
			<Nav active={active} />
			<main className="relative">
				<Hero />
				<ParallaxDivider />
				<About />
				<ParallaxDivider />
				<Skills />
				<ParallaxDivider />
				<Projects />
				<ParallaxDivider />
				<Testimonials />
				<ParallaxDivider />
				<Contact />
			</main>
			<footer className="border-t border-white/5 py-8 text-center text-sm text-white/60">
				<div className="container mx-auto px-6">© {new Date().getFullYear()} Your Name. Built with React, Tailwind, Framer Motion.</div>
			</footer>
			<ThemeToggle />
		</div>
	)
}

export default App
