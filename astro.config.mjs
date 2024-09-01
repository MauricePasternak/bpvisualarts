import tailwind from '@astrojs/tailwind'
import icon from 'astro-icon'
import { defineConfig } from 'astro/config'

import alpinejs from '@astrojs/alpinejs'

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), icon(), alpinejs(), sitemap()],
    // site: 'https://github.com/MauricePasternak/bpvisualarts.github.io',
    // base: '/bpvisualarts',
    site: 'https://bpvisualarts.ca',
})