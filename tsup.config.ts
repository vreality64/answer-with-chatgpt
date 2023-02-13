import { defineConfig } from 'tsup';

export default defineConfig([
  {
    outDir: 'build',
    target: 'node16',
    platform: 'node',
    format: ['esm'],
    splitting: false,
    sourcemap: false,
    minify: true,
    shims: true,
    dts: false
  }
]);