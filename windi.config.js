import { defineConfig } from 'vite-plugin-windicss'

export default defineConfig({
  darkMode: 'media',
  extract: {
    include: ['index.html', 'src/**/*.{vue,html,jsx,tsx}'],
    exclude: ['node_modules', '.git']
  }
})
