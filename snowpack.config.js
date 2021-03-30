module.exports = {

  mount: {
    'dist': { url: '/', static: true, resolve: true },
    'src/assets/js': { url: '/', resolve: true },
    'src/assets/styles': { url: '/', resolve: true },
  },

  devOptions: {
    "port": 3000,
    "open": "none",
  },

  buildOptions: {
    clean: true,
    out: 'dist/bundle',
  },

  optimize: {
    bundle: true,
    minify: true,
    target: 'es2020',
  },
}
