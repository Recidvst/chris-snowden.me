import resolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify-es';
import babel from 'rollup-plugin-babel';

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
    resolve(),
    babel({
      exclude: 'node_modules/**',
    }),
    uglify({
      sourcemap: true,
    })
  ],
}
