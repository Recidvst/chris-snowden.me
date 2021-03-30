import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { eslint } from 'rollup-plugin-eslint';
import uglify from 'rollup-plugin-uglify-es';
import scss from 'rollup-plugin-scss';

export default {
  input: 'src/assets/js/main.js',
  output: [
    {
      name: 'Scrambler',
      file: `dist/main.js`,
      format: 'iife'
    }
  ],
  plugins: [
    resolve(),
    scss({
      include: ["/**/*.css", "/**/*.scss", "/**/*.sass"],
      output: "./dist/main.css",
      failOnError: true,
      watch: 'src/styles',
      runtime: require("sass"),
    }),
    eslint(),
    babel({
      exclude: 'node_modules/**'
    }),
    uglify(),
  ]
}
