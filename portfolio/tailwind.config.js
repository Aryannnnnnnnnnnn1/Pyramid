/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,jsx,ts,tsx}',
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				accent: {
					DEFAULT: '#7c8aff',
					muted: '#5865f2',
				},
				base: {
					50: '#0b0d12',
					100: '#10131a',
					200: '#151926',
					900: '#f7f8fb',
				},
				card: '#121621',
				soft: '#1a2030',
			},
			fontFamily: {
				display: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
			},
			boxShadow: {
				soft: '0 8px 30px rgba(0,0,0,0.15)',
			},
			backgroundImage: {
				'grid-soft': 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)',
			},
		},
	},
	plugins: [],
};