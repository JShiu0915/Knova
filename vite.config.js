import { defineConfig } from 'vite'

/** GitHub Pages project site; keep the repository base path unchanged. */
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/Knova/' : '/',
}))
