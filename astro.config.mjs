import tailwind from '@astrojs/tailwind'
import icon from 'astro-icon'
import { defineConfig } from 'astro/config'

import alpinejs from '@astrojs/alpinejs'

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), icon(), alpinejs()],
	site: 'https://github.com/MauricePasternak/bpvisualarts.github.io',
	base: '/bpvisualarts',
})
