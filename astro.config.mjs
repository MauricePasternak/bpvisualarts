import tailwind from '@astrojs/tailwind'
import icon from 'astro-icon'
import { defineConfig } from 'astro/config'

import alpinejs from '@astrojs/alpinejs'

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), icon(), alpinejs({ entrypoint: '/src/entrypoint' })],
	site: 'https://github.com/MauricePasternak/bpvisualarts.github.io',
	vite: {
		resolve: {
			alias: {
				'@gallery': '/src/assets/gallery'
			}
		}
	}
})
