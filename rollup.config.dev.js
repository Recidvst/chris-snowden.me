import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { eslint } from 'rollup-plugin-eslint';
import scss from 'rollup-plugin-scss';
import serve from 'rollup-plugin-serve';

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
    serve({
      contentBase: 'dist',
      open: false,
      port: 8080,
      // execute function after server has begun listening
      onListening: function (server) {
        const address = server.address()
        const host = address.address === '::' ? 'localhost' : address.address
        // by using a bound function, we can access options as `this`
        const protocol = this.https ? 'https' : 'http'
        console.log(`Server listening at ${protocol}://${host}:${address.port}/`)
      }
    })
  ]
}
