import { defineConfig } from 'vite'

/** GitHub Pages project site: https://jshiu0915.github.io/KnowVeil/ */
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/KnowVeil/' : '/',
}))
