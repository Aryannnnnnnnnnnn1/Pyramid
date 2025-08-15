import { useEffect, useState } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'

export function ThemeToggle() {
	const [isDark, setIsDark] = useState(true)

	useEffect(() => {
		const stored = localStorage.getItem('theme') || 'dark'
		setIsDark(stored === 'dark')
	}, [])

	useEffect(() => {
		document.documentElement.classList.toggle('dark', isDark)
		localStorage.setItem('theme', isDark ? 'dark' : 'light')
	}, [isDark])

	return (
		<button
			onClick={() => setIsDark((v) => !v)}
			className="fixed bottom-6 right-6 z-50 rounded-full border border-black/10 dark:border-white/10 bg-white/80 dark:bg-base-50/80 backdrop-blur p-3 text-black/70 hover:text-black dark:text-white/80 dark:hover:text-white shadow-soft"
			aria-label="Toggle theme"
		>
			{isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
		</button>
	)
}