export function attachCardPointerEffect() {
	function handleMove(event) {
		const target = event.currentTarget
		const rect = target.getBoundingClientRect()
		const x = event.clientX - rect.left
		const y = event.clientY - rect.top
		target.style.setProperty('--x', `${x}px`)
		target.style.setProperty('--y', `${y}px`)
	}

	document.querySelectorAll('[data-tilt-card]')?.forEach((el) => {
		el.addEventListener('mousemove', handleMove)
	})
}