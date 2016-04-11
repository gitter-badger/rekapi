module.exports = {
  entry: './src/rekapi.core.js',
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
