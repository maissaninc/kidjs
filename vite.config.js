import { cpSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => {
  const isProd = mode === 'production';

  return {
    build: {
      lib: {
        entry: 'src/index.js',
        name: 'kidjs',
        fileName: () => isProd ? 'kid.min.js' : 'kid.js',
      },
      minify: isProd,
      sourcemap: !isProd
    },
    plugins: [
      {
        name: 'copy-assets',
        closeBundle() {
          cpSync(resolve('src/assets'), resolve('dist/assets'), { recursive: true })
        }
      }
    ]
  };
})