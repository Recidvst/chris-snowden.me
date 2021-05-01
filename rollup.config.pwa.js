import resolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify-es';
import replace from '@rollup/plugin-replace';
import babel from 'rollup-plugin-babel';
import { config } from 'dotenv';

export default {
  input: 'src/assets/js/service-worker/service-worker.js',
  output: [
    {
      name: 'ServiceWorker',
      file: `src/static/service-worker.js`,
      format: 'iife',
      sourcemap: true,
    }
  ],
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
      process: JSON.stringify({
        env: {
          ...config().parsed,
        },
      }),
      __buildDate__: () => JSON.stringify(new Date()),
      preventAssignment: true,
    }),
    resolve(),
    babel({
      exclude: 'node_modules/**',
    }),
    uglify({
      sourcemap: true,
    })
  ],
}
