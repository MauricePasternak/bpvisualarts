import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			gridTemplateColumns: {
				// Add custom column spans
				24: 'repeat(24, minmax(0, 1fr))'
			},
			gridTemplateRows: {
				// Add custom row spans
				24: 'repeat(24, minmax(0, 1fr))'
			},
			gridColumn: {
				// Add custom column spans
				'span-13': 'span 13 / span 13',
				'span-14': 'span 14 / span 14',
				'span-15': 'span 15 / span 15',
				'span-16': 'span 16 / span 16',
				'span-17': 'span 17 / span 17',
				'span-18': 'span 18 / span 18',
				'span-19': 'span 19 / span 19',
				'span-20': 'span 20 / span 20',
				'span-21': 'span 21 / span 21',
				'span-22': 'span 22 / span 22',
				'span-23': 'span 23 / span 23',
				'span-24': 'span 24 / span 24'
			},
			gridRow: {
				// Add custom row spans
				'span-13': 'span 13 / span 13',
				'span-14': 'span 14 / span 14',
				'span-15': 'span 15 / span 15',
				'span-16': 'span 16 / span 16',
				'span-17': 'span 17 / span 17',
				'span-18': 'span 18 / span 18',
				'span-19': 'span 19 / span 19',
				'span-20': 'span 20 / span 20',
				'span-21': 'span 21 / span 21',
				'span-22': 'span 22 / span 22',
				'span-23': 'span 23 / span 23',
				'span-24': 'span 24 / span 24'
			}
		}
	},
	plugins: [typography]
}
