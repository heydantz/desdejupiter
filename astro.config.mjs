// @ts-check
import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import { remarkReadingTime } from './src/lib/remark-reading-time.mjs'

import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
  site: 'https://desdejupiter.me',
  integrations: [mdx(), sitemap(), icon()],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
})
