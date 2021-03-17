import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from "rollup-plugin-terser";

export default {
  input: 'src/index.js',
  output: [
    {
      format: 'umd',
      name: 'KID',
      file: 'dist/index.js'
    },
    {
      format: 'umd',
      name: 'KID',
      file: 'dist/index.min.js',
      plugins: [
        terser({
          format: {
            ascii_only: true
          }
        })
      ]
    }
  ],
  plugins: [
    babel({
      babelHelpers: 'bundled'
    }),
    resolve()
  ]
};
