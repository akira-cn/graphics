const webpack = require('webpack');
const EsmWebpackPlugin = require('@purtuga/esm-webpack-plugin');
const path = require('path');

module.exports = function (env = {}) {
  let filename;
  if(env.module) filename = 'sprite-geo-earth.esm.js';
  else filename = env.mode === 'production' ? 'sprite-geo-earth.min.js' : 'sprite-geo-earth.js';

  const output = {
    path: path.resolve(__dirname, env.outputPath || 'dist'),
    filename,
    publicPath: '/js/',
    library: env.module ? 'globe' : {
      commonjs: 'globe',
      amd: 'globe',
      root: ['spritejs', 'globe'],
    },
    libraryTarget: env.module ? 'var' : 'umd',
    globalObject: 'this',
  };

  const plugins = [];

  if(env.mode === 'development') {
    plugins.push(new webpack.HotModuleReplacementPlugin({
      multiStep: true,
    }));
  }

  if(env.module) {
    plugins.push(new EsmWebpackPlugin());
  }

  return {
    mode: env.mode || 'none',
    entry: './src/index',
    output,
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules\//,
          use: {
            loader: 'babel-loader',
            options: {
              babelrc: true,
            },
          },
        },
        {
          test: /\.(frag|vert|glsl)$/,
          use: {
            loader: 'raw-loader',
            options: {},
          },
        },
      ],

      /* Advanced module configuration (click to show) */
    },

    externals: {
      spritejs: env.module ? 'require(\'spritejs\')' : 'spritejs',
      'sprite-extend-3d': env.module ? 'require(\'sprite-extend-3d\')' : {
        commonjs: 'sprite-extend-3d',
        commonjs2: 'sprite-extend-3d',
        root: ['spritejs', 'ext3d'],
      },
    },
    // Don't follow/bundle these modules, but request them at runtime from the environment

    stats: 'errors-only',
    // lets you precisely control what bundle information gets displayed

    devServer: {
      contentBase: path.join(__dirname, env.server || '.'),
      compress: true,
      port: 3000,
      hot: true,
      // ...
    },

    plugins,
    // list of additional plugins

    /* Advanced configuration (click to show) */
  };
};
