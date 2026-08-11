import { cpSync, readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'

function escapeNonAscii(code) {
  return code.replace(/[^\x00-\x7F]/gu, (ch) => {
    const codePoint = ch.codePointAt(0)
    if (codePoint > 0xFFFF) {
      const high = Math.floor((codePoint - 0x10000) / 0x400) + 0xD800
      const low = ((codePoint - 0x10000) % 0x400) + 0xDC00
      return `\\u${high.toString(16).toUpperCase().padStart(4, '0')}\\u${low.toString(16).toUpperCase().padStart(4, '0')}`
    }
    return `\\u${codePoint.toString(16).toUpperCase().padStart(4, '0')}`
  })
}

const escapeNonAsciiPlugin = {
  name: 'escape-non-ascii',
  writeBundle(options, bundle) {
    const outDir = options.dir ?? resolve('dist')
    for (const [fileName, chunk] of Object.entries(bundle)) {
      if (chunk.type !== 'chunk') continue
      const filePath = resolve(outDir, fileName)
      const code = readFileSync(filePath, 'utf8')
      writeFileSync(filePath, escapeNonAscii(code))
    }
  }
}

const copyAssetsPlugin = {
  name: 'copy-assets',
  closeBundle() {
    cpSync(resolve('src/assets'), resolve('dist/assets'), { recursive: true })
  }
}

const libraries = {
  'hand-tracker': {
    entry: 'src/libraries/hand-tracker/index.js',
    name: 'HandTracker',
  },
  'neural-network': {
    entry: 'src/libraries/neural-network/index.js',
    name: 'NeuralNetwork',
  },
}

export default defineConfig(({ mode }) => {
  const isProd = mode === 'production'
  const libraryName = process.env.KIDJS_LIBRARY
  const library = libraryName ? libraries[libraryName] : null

  if (libraryName && !library) {
    throw new Error(`Unknown KIDJS_LIBRARY "${libraryName}". Expected one of: ${Object.keys(libraries).join(', ')}`)
  }

  if (library) {
    return {
      build: {
        emptyOutDir: false,
        lib: {
          entry: library.entry,
          name: library.name,
          formats: ['iife'],
          fileName: () => `${libraryName}.js`,
        },
        minify: true,
        sourcemap: true
      },
      plugins: [escapeNonAsciiPlugin]
    }
  }

  return {
    build: {
      emptyOutDir: !isProd,
      lib: {
        entry: 'src/index.js',
        name: 'kidjs',
        fileName: () => isProd ? 'kid.min.js' : 'kid.js',
      },
      minify: isProd,
      sourcemap: !isProd
    },
    plugins: [escapeNonAsciiPlugin, copyAssetsPlugin]
  }
})
