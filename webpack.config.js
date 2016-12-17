module.exports = {
  context: `${__dirname}/src`,
  entry: {
    bundle: './index',
  },
  devtool: 'source-map',
  output: {
    path: `${__dirname}/build`,
    filename: '[name].js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015'],
        },
      },
    ],
  },
};
