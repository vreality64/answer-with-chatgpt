import { defineConfig } from 'tsup';

export default defineConfig([
  {
    outDir: 'bin',
    target: 'node16',
    platform: 'node',
    format: ['cjs'],
    shims: true,
    clean: true,
    minify: true,
    bundle: true,
    noExternal: ['chatgpt', 'dotenv', 'ora', 'clipboardy', 'inquirer', 'node-html-parser'],
  }
]);