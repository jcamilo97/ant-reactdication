//dev
import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { ChunksPlugin } from 'webpack-split-chunks';

//enveiroment
const isDevolopment = process.env.NODE_ENV !== 'production';

//paths
const PATHS = {
  index: path.join(__dirname, 'src/index'),
  build: path.join(__dirname, '/build'),
  base: path.join(__dirname, 'src')
};

//funtions config
const getDevtool = () => 'cheap-module-eval-source-map';

const getEntry = () => {
  const entry = [PATHS.index];

  if (isDevolopment) {
    entry.push('webpack-hot-middleware/client?reload=true');
  }
  return entry;
};

const getOutput = () => ({
  path: PATHS.build,
  publicPath: '/',
  chunkFilename: '[name].chunk.js',
  filename: '[name].bundle.js'
})

const getExtension = () => ({
  extensions: ['.js', '.jsx']
});
// init HTML Webpack Plugin
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/server/views/frontend/index.hbs', // archivo de nuestra vista
  inject: 'body' // donde insertaremos nuestro script
});

/*const ChunksPluginConfig = new ChunksPlugin({
  to: 'vendor',
  test: /node_modules/
});*/

const getPlugins = () => {
  const plugins = [
  ];

  if (isDevolopment) {
    plugins.push(
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
    );
  } else {
    plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          screw_ie8: true,
          warnings: false
        }
      })
    );
  }

  return plugins;
};

const getLoaders = () => ({
  loaders: [{
    test: /\.(js|jsx)$/,
    include: PATHS.base,
    exclude: /node_modules/,
    loaders: ['babel-loader']
  },
  {
    test: /(\.css)$/,
    loaders: ['style-loader', 'css-loader']
  },
  {
    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
  }]
});
//webpack config
export default {
  devtool: getDevtool(),
  entry: getEntry(),
  output: getOutput(),
  resolve: getExtension(),
  plugins: getPlugins(),
  module: getLoaders()
};
