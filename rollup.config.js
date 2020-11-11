import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from "rollup-plugin-terser";

export default {
  input: 'src/kid.js',
  output: [
    {
      format: 'umd',
      name: 'KID',
      file: 'dist/kid.js'
    },
    {
      format: 'umd',
      name: 'KID',
      file: 'dist/kid.min.js',
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
