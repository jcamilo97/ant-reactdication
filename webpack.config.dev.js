//dev
import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin  from 'html-webpack-plugin';
//paths
const PATHS = {
  index: path.join(__dirname, 'src/index'),
  build: path.join(__dirname, '/dist'),
  base: path.join(__dirname, 'src')
};

// init HTML Webpack Plugin
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './public/index.html', // archivo de nuestra vista
  inject: 'body' // donde insertaremos nuestro script
 })

//webpack config
export default {
  devtool: 'cheap-module-eval-source-map',
  entry:[
    'webpack-hot-middleware/client?reload=true',
    PATHS.index
  ],
  output: {
    path: PATHS.build,
    publicPath: '/',
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['.js', '.jsx'],  //
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    HtmlWebpackPluginConfig
  ],
  module:{
    loaders:[
    {
      test: /\.(js|jsx)$/,
      include: PATHS.base,
      exclude: /node_modules/,
      loaders: ['babel-loader']
    },
    {
      test:/(\.css)$/,
      loaders: ['style-loader', 'css-loader']
    },
    {
      test:  /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
    }]
  }
};
