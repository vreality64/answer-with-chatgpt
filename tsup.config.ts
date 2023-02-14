import { defineConfig } from 'tsup'

export default defineConfig([
  {
    outDir: 'bin',
    target: 'node18',
    platform: 'node',
    format: ['esm', 'cjs'],
    shims: true,
    clean: true,
    minify: true,
    bundle: true,
  },
])
