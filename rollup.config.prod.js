import resolve from 'rollup-plugin-node-resolve';
import { eslint } from 'rollup-plugin-eslint';
import uglify from 'rollup-plugin-uglify-es';
import replace from '@rollup/plugin-replace';
import babel from 'rollup-plugin-babel';
import scss from 'rollup-plugin-scss';
import { config } from 'dotenv';

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
    scss({
      include: ["/**/*.css", "/**/*.scss", "/**/*.sass"],
      output: "./dist/main.css",
      failOnError: true,
      watch: './src/assets/styles',
      runtime: require("sass"),
      outputStyle: "compressed",
      sourceMapEmbed: false,
      sourceMap: true,
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
