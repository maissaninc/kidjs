import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import { uglify } from 'rollup-plugin-uglify';

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
        uglify()
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
