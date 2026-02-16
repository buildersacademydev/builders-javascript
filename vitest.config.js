import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    include: ['js-*/**/tests/**/*.test.js'],
    passWithNoTests: true
  }
})
