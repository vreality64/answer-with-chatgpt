import { defineConfig } from 'tsup';

export default defineConfig([
  {
    outDir: 'build',
    target: 'node16',
    platform: 'node',
    format: ['esm'],
    shims: true,
    clean: true,
    minify: false,
    bundle: true,
    noExternal: ['chatgpt', 'dotenv', 'ora', 'clipboardy', 'inquirer', 'node-html-parser'],
  }
]);