import path from 'path';

export default {
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/
    },
    {
      test: /(\.scss|\.css)$/,
      include: /(node_modules)\/react-toolbox/,
      loaders: [
        require.resolve('style-loader'),
        require.resolve('css-loader') + '?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
        require.resolve('sass-loader') + '?sourceMap', 'toolbox'
      ]
    },
    {
      test: /\.json$/,
      loader: 'json-loader'
    },
    {
      test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
      loader: require.resolve('url-loader') + '?limit=10000&mimetype=application/font-woff'
    }, {
      test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
      loader: require.resolve('url-loader') + '?limit=10000&mimetype=application/font-woff'
    }, {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: require.resolve('url-loader') + '?limit=10000&mimetype=application/octet-stream'
    }, {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: require.resolve('file-loader')
    }, {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: require.resolve('url-loader') + '?limit=10000&mimetype=image/svg+xml'
    }]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', 'scss'],
    packageMains: ['webpack', 'browser', 'web', 'browserify', ['jam', 'main'], 'main'],
    modulesDirectories: ['node_modules']
  },
  toolbox: {
    theme: path.join(__dirname, 'app/styles.scss')
  },
  plugins: [

  ],
  externals: [
    // put your node 3rd party libraries which can't be built with webpack here
    // (mysql, mongodb, and so on..)
  ]
};
