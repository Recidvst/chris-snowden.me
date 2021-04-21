import resolve from 'rollup-plugin-node-resolve';
import { eslint } from 'rollup-plugin-eslint';
import { uglify } from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';
import scss from 'rollup-plugin-scss';

export default {
  input: 'src/assets/js/main.js',
  output: [
    {
      name: 'Main',
      file: `dist/main.js`,
      format: 'iife',
      sourcemap: true,
    }
  ],
  plugins: [
    resolve(),
    scss({
      include: ["/**/*.css", "/**/*.scss", "/**/*.sass"],
      output: "./dist/main.css",
      failOnError: true,
      watch: './src/assets/styles',
      runtime: require("sass"),
      outputStyle: "compressed",
      sourceMapEmbed: true,
    }),
    eslint(),
    babel({
      exclude: 'node_modules/**',
    }),
    uglify({
      sourcemap: true,
    })
  ],
}