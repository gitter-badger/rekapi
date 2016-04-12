module.exports = {
  entry: [
    './src/rekapi.core.js',
    './renderers/canvas/rekapi.renderer.canvas.js',
    './renderers/dom/rekapi.renderer.dom.js'
  ],
  output: {
    filename: './dist/rekapi.js',
    libraryTarget: 'umd',
    library: 'rekapi'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};
